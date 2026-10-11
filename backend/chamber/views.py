from django.db.models import Q
from django.utils import timezone
from rest_framework import generics,permissions,throttling
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import CommercialCentre,Business,MembershipApplication,Opportunity,Event,Article,Enquiry
from .serializers import CentreSerializer,BusinessSerializer,OpportunitySerializer,EventSerializer,ArticleSerializer,ApplicationSerializer,EnquirySerializer

class SearchableList(generics.ListAPIView):
 permission_classes=[permissions.AllowAny]
 search_fields=("name",)
 def get_queryset(self):
  qs=super().get_queryset()
  term=self.request.query_params.get("q","").strip()[:100]
  if term:
   query=Q()
   for field in self.search_fields: query|=Q(**{field+"__icontains":term})
   qs=qs.filter(query)
  return qs

class Centres(SearchableList):
 queryset=CommercialCentre.objects.filter(published=True).order_by("name")
 serializer_class=CentreSerializer
 search_fields=("name","district","description")
class Businesses(SearchableList):
 queryset=Business.objects.filter(published=True,verified=True).order_by("name")
 serializer_class=BusinessSerializer
 search_fields=("name","sector","district")
class Opportunities(SearchableList):
 serializer_class=OpportunitySerializer
 search_fields=("title","sector","category","description")
 def get_queryset(self):
  return Opportunity.objects.filter(published=True).filter(Q(closes_at__isnull=True)|Q(closes_at__gt=timezone.now())).order_by("-created_at")
class Events(SearchableList):
 serializer_class=EventSerializer
 search_fields=("title","venue")
 def get_queryset(self):return Event.objects.filter(published=True,starts_at__gte=timezone.now()).order_by("starts_at")
class Articles(SearchableList):
 queryset=Article.objects.filter(published=True).order_by("-published_at")
 serializer_class=ArticleSerializer
 search_fields=("title","summary")
class ApplicationThrottle(throttling.AnonRateThrottle):
 scope="applications"
class Apply(generics.CreateAPIView):
 serializer_class=ApplicationSerializer
 permission_classes=[permissions.AllowAny]
 throttle_classes=[ApplicationThrottle]
 queryset=MembershipApplication.objects.all()
class Enquire(generics.CreateAPIView):
 serializer_class=EnquirySerializer
 permission_classes=[permissions.AllowAny]
 throttle_classes=[ApplicationThrottle]
 queryset=Enquiry.objects.all()
class Health(APIView):
 permission_classes=[permissions.AllowAny]
 def get(self,request):return Response({"status":"ok"})
