from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from .models import CommercialCentre,MembershipApplication,Business

class PublicAPITests(TestCase):
 def setUp(self): self.client=APIClient()
 def test_unpublished_centre_hidden(self):
  CommercialCentre.objects.create(name="Hidden",slug="hidden",district="Kampala",published=False)
  response=self.client.get("/api/v1/centres/")
  self.assertEqual(response.status_code,200)
  self.assertEqual(response.data["count"],0)
 def test_unverified_business_hidden(self):
  Business.objects.create(name="Demo",sector="Retail",district="Kampala",published=True,verified=False)
  response=self.client.get("/api/v1/businesses/")
  self.assertEqual(response.data["count"],0)
 def test_membership_application(self):
  payload={"organisation":"Example Ltd","organisation_type":"Business","district":"Kampala","sector":"Retail","contact_name":"Example Contact","email":"contact@example.org","phone":"+256700000000"}
  response=self.client.post("/api/v1/membership/apply/",payload,format="json")
  self.assertEqual(response.status_code,201)
  self.assertEqual(MembershipApplication.objects.count(),1)
  self.assertEqual(MembershipApplication.objects.first().status,"pending")
 def test_membership_validation(self):
  response=self.client.post("/api/v1/membership/apply/",{"organisation":"X"},format="json")
  self.assertEqual(response.status_code,400)

from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token

class AccessControlTests(TestCase):
 def setUp(self):
  self.client=APIClient()
  self.member=get_user_model().objects.create_user(username="member1",password="test-secure-pass-123")
  self.staff=get_user_model().objects.create_superuser(username="staff1",email="staff@example.org",password="test-secure-pass-123")
  self.application=MembershipApplication.objects.create(organisation="Example",organisation_type="Business",district="Kampala",sector="Retail",contact_name="Test",email="test@example.org",phone="0700000000")
 def test_anonymous_cannot_list_applications(self):
  self.assertIn(self.client.get("/api/v1/staff/applications/").status_code,(401,403))
 def test_member_cannot_review_applications(self):
  self.client.force_authenticate(user=self.member)
  self.assertEqual(self.client.patch(f"/api/v1/staff/applications/{self.application.pk}/review/",{"status":"approved"},format="json").status_code,403)
 def test_staff_can_review(self):
  self.client.force_authenticate(user=self.staff)
  response=self.client.patch(f"/api/v1/staff/applications/{self.application.pk}/review/",{"status":"approved"},format="json")
  self.assertEqual(response.status_code,200)
  self.application.refresh_from_db()
  self.assertEqual(self.application.status,"approved")
 def test_member_business_is_private_and_pending(self):
  self.client.force_authenticate(user=self.member)
  response=self.client.post("/api/v1/me/businesses/",{"name":"New Business","sector":"Retail","district":"Kampala"},format="json")
  self.assertEqual(response.status_code,201)
  self.assertFalse(response.data["published"])
  self.assertFalse(response.data["verified"])
  self.client.force_authenticate(user=None)
  self.assertEqual(self.client.get("/api/v1/businesses/").data["count"],0)
 def test_login_and_profile(self):
  response=self.client.post("/api/v1/auth/login/",{"username":"member1","password":"test-secure-pass-123"},format="json")
  self.assertEqual(response.status_code,200)
  self.assertIn("token",response.data)
  self.client.credentials(HTTP_AUTHORIZATION="Token "+response.data["token"])
  self.assertEqual(self.client.get("/api/v1/auth/me/").status_code,200)

 def test_member_cannot_edit_another_business(self):
  other=get_user_model().objects.create_user(username="othermember",password="test-secure-pass-456")
  business=Business.objects.create(name="Other",sector="Retail",district="Wakiso",owner=other)
  self.client.force_authenticate(user=self.member)
  response=self.client.patch(f"/api/v1/me/businesses/{business.pk}/",{"name":"Changed"},format="json")
  self.assertEqual(response.status_code,404)

 def test_member_edit_requires_reverification(self):
  business=Business.objects.create(name="My Shop",sector="Retail",district="Wakiso",owner=self.member,published=True,verified=True)
  self.client.force_authenticate(user=self.member)
  response=self.client.patch(f"/api/v1/me/businesses/{business.pk}/",{"name":"Updated Shop"},format="json")
  self.assertEqual(response.status_code,200)
  business.refresh_from_db()
  self.assertEqual(business.name,"Updated Shop")
  self.assertFalse(business.published)
  self.assertFalse(business.verified)

class ApplicationTrackingTests(TestCase):
 def setUp(self):
  self.client=APIClient()
  self.application=MembershipApplication.objects.create(organisation="Example",organisation_type="Business",district="Kampala",sector="Trade",contact_name="A Person",email="applicant@example.org",phone="0700000000")
 def test_correct_email_and_reference(self):
  response=self.client.post("/api/v1/membership/status/",{"reference":str(self.application.reference),"email":"applicant@example.org"},format="json")
  self.assertEqual(response.status_code,200)
  self.assertEqual(response.data["status"],"pending")
  self.assertNotIn("internal_notes",response.data)
 def test_wrong_email_is_private(self):
  response=self.client.post("/api/v1/membership/status/",{"reference":str(self.application.reference),"email":"other@example.org"},format="json")
  self.assertEqual(response.status_code,404)
 def test_invalid_reference(self):
  response=self.client.post("/api/v1/membership/status/",{"reference":"not-a-uuid","email":"applicant@example.org"},format="json")
  self.assertEqual(response.status_code,400)

class DirectoryVisibilityTests(TestCase):
 def setUp(self):
  self.client=APIClient()
  self.public=Business.objects.create(name="Approved Enterprise",sector="Agriculture",district="Wakiso",published=True,verified=True,description="Trading and services")
  self.hidden=Business.objects.create(name="Private Enterprise",sector="Trade",district="Kampala",published=False,verified=False)
 def test_only_public_verified_are_listed(self):
  response=self.client.get("/api/v1/businesses/")
  self.assertEqual(response.status_code,200)
  self.assertEqual(response.data["count"],1)
 def test_details_of_hidden_business_are_not_public(self):
  self.assertEqual(self.client.get(f"/api/v1/businesses/{self.hidden.pk}/").status_code,404)
  self.assertEqual(self.client.get(f"/api/v1/businesses/{self.public.pk}/").status_code,200)
 def test_directory_filter_excludes_hidden_values(self):
  response=self.client.get("/api/v1/businesses/filters/")
  self.assertEqual(response.status_code,200)
  self.assertIn("Agriculture",response.data["sectors"])
  self.assertNotIn("Trade",response.data["sectors"])
 def test_exact_sector_filter(self):
  response=self.client.get("/api/v1/businesses/?sector=Trade")
  self.assertEqual(response.data["count"],0)
