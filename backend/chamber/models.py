import uuid
from django.conf import settings
from django.db import models

class Timestamped(models.Model):
 created_at=models.DateTimeField(auto_now_add=True)
 updated_at=models.DateTimeField(auto_now=True)
 class Meta: abstract=True

class CommercialCentre(Timestamped):
 name=models.CharField(max_length=180)
 slug=models.SlugField(unique=True)
 district=models.CharField(max_length=100)
 address=models.CharField(max_length=255,blank=True)
 description=models.TextField(blank=True)
 published=models.BooleanField(default=False)
 def __str__(self): return self.name

class Business(Timestamped):
 name=models.CharField(max_length=200)
 centre=models.ForeignKey(CommercialCentre,null=True,blank=True,on_delete=models.SET_NULL,related_name="businesses")
 owner=models.ForeignKey(settings.AUTH_USER_MODEL,null=True,blank=True,on_delete=models.SET_NULL,related_name="businesses")
 sector=models.CharField(max_length=120)
 district=models.CharField(max_length=100)
 description=models.TextField(blank=True)
 contact_email=models.EmailField(blank=True)
 published=models.BooleanField(default=False)
 verified=models.BooleanField(default=False)
 def __str__(self): return self.name

class MembershipApplication(Timestamped):
 class Status(models.TextChoices):
  PENDING="pending","Pending"
  REVIEW="review","Under review"
  APPROVED="approved","Approved"
  REJECTED="rejected","Rejected"
 reference=models.UUIDField(default=uuid.uuid4,unique=True,editable=False)
 organisation=models.CharField(max_length=200)
 organisation_type=models.CharField(max_length=80)
 district=models.CharField(max_length=100)
 sector=models.CharField(max_length=120)
 contact_name=models.CharField(max_length=150)
 email=models.EmailField()
 phone=models.CharField(max_length=40)
 message=models.TextField(blank=True)
 status=models.CharField(max_length=20,choices=Status.choices,default=Status.PENDING)
 reviewed_by=models.ForeignKey(settings.AUTH_USER_MODEL,null=True,blank=True,on_delete=models.SET_NULL,related_name="reviewed_applications")
 reviewed_at=models.DateTimeField(null=True,blank=True)
 internal_notes=models.TextField(blank=True)
 def __str__(self): return f"{self.organisation} ({self.status})"

class Opportunity(Timestamped):
 title=models.CharField(max_length=220)
 category=models.CharField(max_length=100)
 sector=models.CharField(max_length=120)
 district=models.CharField(max_length=100,blank=True)
 description=models.TextField()
 closes_at=models.DateTimeField(null=True,blank=True)
 published=models.BooleanField(default=False)
 def __str__(self): return self.title

class Event(Timestamped):
 title=models.CharField(max_length=220)
 description=models.TextField()
 venue=models.CharField(max_length=220)
 starts_at=models.DateTimeField()
 ends_at=models.DateTimeField()
 published=models.BooleanField(default=False)
 def __str__(self): return self.title

class Enquiry(Timestamped):
 name=models.CharField(max_length=150)
 email=models.EmailField()
 subject=models.CharField(max_length=180)
 message=models.TextField()
 resolved=models.BooleanField(default=False)
 def __str__(self): return self.subject

class Article(Timestamped):
 title=models.CharField(max_length=220)
 slug=models.SlugField(unique=True)
 summary=models.TextField()
 body=models.TextField()
 published=models.BooleanField(default=False)
 published_at=models.DateTimeField(null=True,blank=True)
 def __str__(self): return self.title
