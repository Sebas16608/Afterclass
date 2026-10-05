# Deploy

## Backend (Render)

- Build Command: `pip install -r requirements.txt && python backend/manage.py collectstatic --noinput`
- Start Command: `gunicorn backend.wsgi:application --chdir backend --bind 0.0.0.0:$PORT`
- Variables de entorno: `SECRET_KEY`, `DEBUG=False`, `ALLOWED_HOSTS=<dominio-render>`, `DATABASE_URL` (Neon/Postgres), `CORS_ALLOWED_ORIGINS=https://afterclass-forum.vercel.app`
- Health check: `/health/`

También se puede desplegar con Docker (ver `Dockerfile` en la raíz):

```bash
docker build -t afterclass-backend .
docker run -p 8000:8000 --env-file backend/.env afterclass-backend
```

## Frontend (Vercel)

- Root Directory: `frontend`
- Variable de entorno: `VITE_API_URL=https://afterclass-ptvl.onrender.com`
- Las rutas del cliente (`/board`, `/rules`) funcionan gracias a `frontend/vercel.json`.
