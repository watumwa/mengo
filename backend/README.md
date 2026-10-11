# Mengo Chamber API (Django REST Framework)

## Local development

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
export DJANGO_DEBUG=true
export DJANGO_SECRET_KEY=local-development-secret
export DATABASE_URL=sqlite:///db.sqlite3
python manage.py makemigrations chamber
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

The development SQLite database is for local use only. Configure PostgreSQL with `DATABASE_URL` in production.

## Next.js frontend
Set `CHAMBER_API_URL=http://127.0.0.1:8000` in the frontend's `.env.local`.

## API
Public GET: `/api/v1/centres/`, `businesses/`, `opportunities/`, `events/`, `articles/`.
Public POST: `/api/v1/membership/apply/`, `enquiries/`.
Staff administration: `/admin/` (Django authentication).

## Security and deployment checklist
- Set long random `DJANGO_SECRET_KEY`, `DATABASE_URL`, `DJANGO_ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`, `CSRF_TRUSTED_ORIGINS`.
- Enable HTTPS at reverse proxy and set `SECURE_SSL_REDIRECT=true` only after TLS is configured.
- Run `python manage.py makemigrations chamber && python manage.py migrate` and commit the generated migration.
- Run `python manage.py check --deploy`, `python manage.py test`, and `npm run build`.
- Configure email notifications, spam controls, privacy policy, retention rules, audit logging and backups before public launch.
- Staff roles, member login, approvals, messaging, and real-time dashboards are not yet implemented.
- Do not publish sample frontend records as verified Chamber data.
