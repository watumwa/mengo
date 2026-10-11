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
