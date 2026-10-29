from django.db.models import Q
from django.contrib.auth import authenticate
from django.utils.timezone import now
from rest_framework.authtoken.models import Token
from rest_framework import serializers, status
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
 def get_queryset(self):
  qs=super().get_queryset()
  sector=self.request.query_params.get("sector","").strip()[:120]
  district=self.request.query_params.get("district","").strip()[:100]
  if sector: qs=qs.filter(sector__iexact=sector)
  if district: qs=qs.filter(district__iexact=district)
  return qs

class BusinessDetail(generics.RetrieveAPIView):
 permission_classes=[permissions.AllowAny]
 serializer_class=BusinessSerializer
 queryset=Business.objects.filter(published=True,verified=True)

class DirectoryFilters(APIView):
 permission_classes=[permissions.AllowAny]
 def get(self,request):
  qs=Business.objects.filter(published=True,verified=True)
  return Response({"sectors":list(qs.order_by("sector").values_list("sector",flat=True).distinct()),"districts":list(qs.order_by("district").values_list("district",flat=True).distinct())})
class Opportunities(SearchableList):
 serializer_class=OpportunitySerializer
 search_fields=("title","sector","category","description")
 def get_queryset(self):
  return Opportunity.objects.filter(published=True).filter(Q(closes_at__isnull=True)|Q(closes_at__gt=timezone.now())).order_by("-created_at")
class Events(SearchableList):
 serializer_class=EventSerializer
 search_fields=("title","venue","description")
 def get_queryset(self):
  qs=Event.objects.filter(published=True,starts_at__gte=timezone.now()).order_by("starts_at")
  term=self.request.query_params.get("q","").strip()[:100]
  if term: qs=qs.filter(Q(title__icontains=term)|Q(venue__icontains=term)|Q(description__icontains=term))
  return qs

class EventDetail(generics.RetrieveAPIView):
 permission_classes=[permissions.AllowAny]
 serializer_class=EventSerializer
 queryset=Event.objects.filter(published=True,starts_at__gte=timezone.now())

class Articles(SearchableList):
 serializer_class=ArticleSerializer
 search_fields=("title","summary","body")
 def get_queryset(self):
  qs=Article.objects.filter(published=True,published_at__lte=timezone.now()).order_by("-published_at","-id")
  term=self.request.query_params.get("q","").strip()[:100]
  if term: qs=qs.filter(Q(title__icontains=term)|Q(summary__icontains=term)|Q(body__icontains=term))
  return qs

class ArticleDetail(generics.RetrieveAPIView):
 permission_classes=[permissions.AllowAny]
 serializer_class=ArticleSerializer
 lookup_field="slug"
 queryset=Article.objects.filter(published=True,published_at__lte=timezone.now())
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

class Login(APIView):
 permission_classes=[permissions.AllowAny]
 throttle_classes=[ApplicationThrottle]
 def post(self,request):
  username=request.data.get("username","")
  password=request.data.get("password","")
  if not isinstance(username,str) or not isinstance(password,str):
   return Response({"detail":"Invalid credentials."},status=400)
  user=authenticate(request,username=username,password=password)
  if not user or not user.is_active:
   return Response({"detail":"Invalid credentials."},status=400)
  token,_=Token.objects.get_or_create(user=user)
  return Response({"token":token.key,"user":{"id":user.pk,"username":user.username,"is_staff":user.is_staff,"groups":list(user.groups.values_list("name",flat=True))}})

class Logout(APIView):
 def post(self,request):
  Token.objects.filter(user=request.user).delete()
  return Response(status=204)

class Me(APIView):
 def get(self,request):
  user=request.user
  return Response({"id":user.pk,"username":user.username,"first_name":user.first_name,"last_name":user.last_name,"email":user.email,"is_staff":user.is_staff,"groups":list(user.groups.values_list("name",flat=True))})

class StaffApplications(generics.ListAPIView):
 serializer_class=ApplicationSerializer
 permission_classes=[permissions.IsAdminUser]
 queryset=MembershipApplication.objects.all().order_by("-created_at")
 def get_serializer_class(self):
  return StaffApplicationSerializer

class StaffApplicationSerializer(serializers.ModelSerializer):
 class Meta:
  model=MembershipApplication
  fields=("id","reference","organisation","organisation_type","district","sector","contact_name","email","phone","message","status","created_at","reviewed_at","internal_notes")
  read_only_fields=fields

class ReviewApplication(APIView):
 permission_classes=[permissions.IsAdminUser]
 def patch(self,request,pk):
  from django.shortcuts import get_object_or_404
  application=get_object_or_404(MembershipApplication,pk=pk)
  target=request.data.get("status")
  if target not in ("review","approved","rejected"):
   return Response({"status":"Invalid review status."},status=400)
  if application.status in ("approved","rejected"):
   return Response({"detail":"A final decision cannot be changed here."},status=409)
  application.status=target
  application.reviewed_by=request.user
  application.reviewed_at=now()
  application.internal_notes=str(request.data.get("internal_notes",""))[:3000]
  application.save(update_fields=["status","reviewed_by","reviewed_at","internal_notes","updated_at"])
  return Response({"reference":str(application.reference),"status":application.status})

class MyBusinessSerializer(serializers.ModelSerializer):
 class Meta:
  model=Business
  fields=("id","name","centre","sector","district","description","contact_email","published","verified")
  read_only_fields=("id","published","verified")

class MyBusinesses(generics.ListCreateAPIView):
 permission_classes=[permissions.IsAuthenticated]
 serializer_class=MyBusinessSerializer
 def get_queryset(self):return Business.objects.filter(owner=self.request.user).order_by("-created_at")
 def perform_create(self,serializer):serializer.save(owner=self.request.user,published=False,verified=False)


class MyBusinessDetail(generics.RetrieveUpdateAPIView):
 permission_classes=[permissions.IsAuthenticated]
 serializer_class=MyBusinessSerializer
 def get_queryset(self):return Business.objects.filter(owner=self.request.user)
 def perform_update(self,serializer):serializer.save(published=False,verified=False)

class ApplicationStatus(APIView):
 permission_classes=[permissions.AllowAny]
 throttle_classes=[ApplicationThrottle]
 def post(self,request):
  from uuid import UUID
  reference=request.data.get("reference","")
  email=request.data.get("email","")
  if not isinstance(reference,str) or not isinstance(email,str) or len(email)>254:
   return Response({"detail":"Invalid reference or email."},status=400)
  try: identifier=UUID(reference)
  except (ValueError,TypeError,AttributeError): return Response({"detail":"Invalid reference or email."},status=400)
  application=MembershipApplication.objects.filter(reference=identifier,email__iexact=email.strip()).first()
  if application is None: return Response({"detail":"No matching application was found."},status=404)
  return Response({"reference":str(application.reference),"status":application.status,"submitted_at":application.created_at})
