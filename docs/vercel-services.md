# Vercel Services deployment

This repository is configured as a single Vercel project with two services: `app` (Next.js, repository root) and `backend` (Django, `backend/`). The `app` service is public on `/(.*)`; `backend` is internal only. Next.js API handlers call Django via the `CHAMBER_BACKEND_URL` service binding, which Vercel injects at runtime. Do not set that binding variable manually.

## Before deploying

- Confirm the service names, public routing, and binding with the project owner.
- Configure backend environment variables: `DJANGO_SECRET_KEY`, `DATABASE_URL`, `DJANGO_ALLOWED_HOSTS`, and appropriate production security settings. Use managed PostgreSQL. Never commit secrets.
- Generate and commit the initial Django migrations and apply them against the production database through an approved migration workflow.
- Check that Django is detected and starts correctly in the service build; the WSGI application is `config.wsgi:application` within the backend directory.
- Run `vercel dev` locally to test both services and the injected binding; test the public homepage, `/api/public/centres`, `/api/membership`, and authentication endpoints.
- Validate build logs, Django migrations, frontend build, and authentication before production traffic.

## Public paths

All public requests, including `/api/*`, reach Next.js. Django `/api/v1/*` is accessible only through the app service binding. Django Admin is not publicly routed; arrange an approved protected administration access pattern before using it in production.

Vercel Services is in beta; review the service build and pricing behaviour before enabling production deployment.
