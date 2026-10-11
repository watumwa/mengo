import os
from pathlib import Path
import dj_database_url
BASE_DIR=Path(__file__).resolve().parent.parent
SECRET_KEY=os.environ.get("DJANGO_SECRET_KEY","")
DEBUG=os.environ.get("DJANGO_DEBUG","false").lower()=="true"
if not SECRET_KEY:
 if DEBUG: SECRET_KEY="dev-only-insecure-key-do-not-deploy"
 else: raise RuntimeError("DJANGO_SECRET_KEY must be configured in production")
ALLOWED_HOSTS=[h.strip() for h in os.environ.get("DJANGO_ALLOWED_HOSTS","localhost,127.0.0.1").split(",") if h.strip()]
INSTALLED_APPS=["django.contrib.admin","django.contrib.auth","django.contrib.contenttypes","django.contrib.sessions","django.contrib.messages","django.contrib.staticfiles","rest_framework","corsheaders","chamber"]
MIDDLEWARE=["django.middleware.security.SecurityMiddleware","corsheaders.middleware.CorsMiddleware","django.contrib.sessions.middleware.SessionMiddleware","django.middleware.common.CommonMiddleware","django.middleware.csrf.CsrfViewMiddleware","django.contrib.auth.middleware.AuthenticationMiddleware","django.contrib.messages.middleware.MessageMiddleware","django.middleware.clickjacking.XFrameOptionsMiddleware"]
ROOT_URLCONF="config.urls"
TEMPLATES=[{"BACKEND":"django.template.backends.django.DjangoTemplates","DIRS":[],"APP_DIRS":True,"OPTIONS":{"context_processors":["django.template.context_processors.debug","django.template.context_processors.request","django.contrib.auth.context_processors.auth","django.contrib.messages.context_processors.messages"]}}]
WSGI_APPLICATION="config.wsgi.application"
DATABASES={"default":dj_database_url.config(default="sqlite:///"+str(BASE_DIR/"db.sqlite3") if DEBUG else None,conn_max_age=600,conn_health_checks=True)}
if not DATABASES["default"]: raise RuntimeError("DATABASE_URL required in production")
AUTH_PASSWORD_VALIDATORS=[{"NAME":"django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},{"NAME":"django.contrib.auth.password_validation.MinimumLengthValidator"},{"NAME":"django.contrib.auth.password_validation.CommonPasswordValidator"},{"NAME":"django.contrib.auth.password_validation.NumericPasswordValidator"}]
LANGUAGE_CODE="en-ug"
TIME_ZONE="Africa/Kampala"
USE_I18N=True
USE_TZ=True
STATIC_URL="static/"
STATIC_ROOT=BASE_DIR/"staticfiles"
DEFAULT_AUTO_FIELD="django.db.models.BigAutoField"
CORS_ALLOWED_ORIGINS=[x.strip() for x in os.environ.get("CORS_ALLOWED_ORIGINS","http://localhost:3000").split(",") if x.strip()]
CSRF_TRUSTED_ORIGINS=[x.strip() for x in os.environ.get("CSRF_TRUSTED_ORIGINS","http://localhost:3000").split(",") if x.strip()]
REST_FRAMEWORK={"DEFAULT_PERMISSION_CLASSES":["rest_framework.permissions.IsAuthenticated"],"DEFAULT_AUTHENTICATION_CLASSES":["rest_framework.authentication.SessionAuthentication"],"DEFAULT_THROTTLE_CLASSES":["rest_framework.throttling.AnonRateThrottle","rest_framework.throttling.UserRateThrottle"],"DEFAULT_THROTTLE_RATES":{"anon":"30/hour","user":"300/hour","applications":"5/hour"},"DEFAULT_PAGINATION_CLASS":"rest_framework.pagination.PageNumberPagination","PAGE_SIZE":20}
SECURE_CONTENT_TYPE_NOSNIFF=True
SESSION_COOKIE_SECURE=not DEBUG
CSRF_COOKIE_SECURE=not DEBUG
SECURE_SSL_REDIRECT=os.environ.get("SECURE_SSL_REDIRECT","false").lower()=="true" and not DEBUG
SECURE_HSTS_SECONDS=31536000 if not DEBUG else 0
SECURE_HSTS_INCLUDE_SUBDOMAINS=not DEBUG
X_FRAME_OPTIONS="DENY"
