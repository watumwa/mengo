from django.contrib import admin
from django import forms
from django.utils import timezone
from .models import CommercialCentre,Business,MembershipApplication,Opportunity,Event,Enquiry,Article
@admin.register(CommercialCentre)
class CentreAdmin(admin.ModelAdmin):
 list_display=("name","district","published")
 list_filter=("published","district")
 search_fields=("name","district")
 prepopulated_fields={"slug":("name",)}
@admin.register(Business)
class BusinessAdmin(admin.ModelAdmin):
 list_display=("name","sector","district","published","verified")
 list_filter=("published","verified","sector")
 search_fields=("name","district")
@admin.register(MembershipApplication)
class MembershipAdmin(admin.ModelAdmin):
 list_display=("organisation","contact_name","status","created_at")
 list_filter=("status","created_at")
 search_fields=("organisation","email","contact_name")
 readonly_fields=("reference","created_at","updated_at")
@admin.register(Opportunity)
class OpportunityAdmin(admin.ModelAdmin):
 list_display=("title","category","published","closes_at")
 list_filter=("published","category")
class EventForm(forms.ModelForm):
 class Meta:
  model=Event
  fields="__all__"
 def clean(self):
  data=super().clean()
  starts,ends=data.get("starts_at"),data.get("ends_at")
  if starts and ends and ends <= starts:
   self.add_error("ends_at","The end time must be later than the start time.")
  return data

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
 form=EventForm
 list_display=("title","venue","starts_at","ends_at","published")
 list_filter=("published","starts_at")
 search_fields=("title","venue","description")
 date_hierarchy="starts_at"
 ordering=("-starts_at",)
 list_editable=("published",)
@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
 list_display=("subject","name","resolved","created_at")
 list_filter=("resolved",)
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
 list_display=("title","slug","published","published_at","updated_at")
 list_filter=("published","published_at")
 search_fields=("title","summary","body")
 prepopulated_fields={"slug":("title",)}
 ordering=("-created_at",)
 fieldsets=(
  ("Editorial content",{"fields":("title","slug","summary","body")}),
  ("Publishing",{"fields":("published","published_at"),"description":"Leave Published unchecked to save a draft. Published articles become visible at the publication date; leave the date blank to publish immediately. For short Chamber announcements, use a slug beginning announcement-."}),
 )
 def save_model(self,request,obj,form,change):
  if obj.published and obj.published_at is None:
   obj.published_at=timezone.now()
  super().save_model(request,obj,form,change)
