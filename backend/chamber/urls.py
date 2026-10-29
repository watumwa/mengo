from django.urls import path
from . import views
urlpatterns=[
 path("health/",views.Health.as_view()),
 path("auth/login/",views.Login.as_view()),
 path("auth/logout/",views.Logout.as_view()),
 path("auth/me/",views.Me.as_view()),
 path("me/businesses/",views.MyBusinesses.as_view()),
 path("me/businesses/<int:pk>/",views.MyBusinessDetail.as_view()),
 path("staff/applications/",views.StaffApplications.as_view()),
 path("staff/applications/<int:pk>/review/",views.ReviewApplication.as_view()),
 path("centres/",views.Centres.as_view()),
 path("businesses/",views.Businesses.as_view()),
 path("businesses/filters/",views.DirectoryFilters.as_view()),
 path("businesses/<int:pk>/",views.BusinessDetail.as_view()),
 path("opportunities/",views.Opportunities.as_view()),
 path("events/",views.Events.as_view()),
 path("events/<int:pk>/",views.EventDetail.as_view()),
 path("articles/",views.Articles.as_view()),
 path("articles/<slug:slug>/",views.ArticleDetail.as_view()),
 path("membership/apply/",views.Apply.as_view()),
 path("membership/status/",views.ApplicationStatus.as_view()),
 path("enquiries/",views.Enquire.as_view()),
]
