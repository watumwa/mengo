from rest_framework import serializers
from .models import CommercialCentre,Business,MembershipApplication,Opportunity,Event,Article,Enquiry
class CentreSerializer(serializers.ModelSerializer):
 class Meta:
  model=CommercialCentre
  fields=("id","name","slug","district","address","description")
class BusinessSerializer(serializers.ModelSerializer):
 class Meta:
  model=Business
  fields=("id","name","centre","sector","district","description","verified")
class OpportunitySerializer(serializers.ModelSerializer):
 class Meta:
  model=Opportunity
  fields=("id","title","category","sector","district","description","closes_at")
class EventSerializer(serializers.ModelSerializer):
 class Meta:
  model=Event
  fields=("id","title","description","venue","starts_at","ends_at")
class ArticleSerializer(serializers.ModelSerializer):
 class Meta:
  model=Article
  fields=("id","title","slug","summary","body","published_at")
class ApplicationSerializer(serializers.ModelSerializer):
 class Meta:
  model=MembershipApplication
  fields=("reference","organisation","organisation_type","district","sector","contact_name","email","phone","message")
  read_only_fields=("reference",)
 def validate(self,data):
  for key in ("organisation","organisation_type","district","sector","contact_name"):
   if not data.get(key,"").strip(): raise serializers.ValidationError({key:"This field is required."})
  return data
class EnquirySerializer(serializers.ModelSerializer):
 class Meta:
  model=Enquiry
  fields=("name","email","subject","message")
