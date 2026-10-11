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
