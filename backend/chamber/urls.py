from django.urls import path
from . import views
urlpatterns=[
 path("health/",views.Health.as_view()),
 path("centres/",views.Centres.as_view()),
 path("businesses/",views.Businesses.as_view()),
 path("opportunities/",views.Opportunities.as_view()),
 path("events/",views.Events.as_view()),
 path("articles/",views.Articles.as_view()),
 path("membership/apply/",views.Apply.as_view()),
 path("enquiries/",views.Enquire.as_view()),
]
