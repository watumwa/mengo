from django.contrib import admin
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
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
 list_display=("title","starts_at","published")
 list_filter=("published",)
@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
 list_display=("subject","name","resolved","created_at")
 list_filter=("resolved",)
@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
 list_display=("title","published","published_at")
 list_filter=("published",)
 prepopulated_fields={"slug":("title",)}
