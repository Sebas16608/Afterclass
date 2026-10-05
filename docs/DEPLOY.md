# Deploy

## Backend (Render)

URL pública de la API: **https://afterclass-ptvl.onrender.com**

- **Build Command**: `pip install -r requirements.txt && python backend/manage.py collectstatic --noinput`
- **Start Command**: `gunicorn backend.wsgi:application --chdir backend --bind 0.0.0.0:$PORT`
- **Health Check Path**: `/health/`

Variables de entorno en Render:

| Variable | ¿Pública o secreta? | Descripción |
|----------|---------------------|-------------|
| `SECRET_KEY` | **Secreta** | Clave secreta de Django |
| `DEBUG` | Pública (config) | `False` en producción |
| `ALLOWED_HOSTS` | Pública | Dominio de Render (`afterclass-ptvl.onrender.com`) |
| `DATABASE_URL` | **Secreta** | URL de Postgres (Neon u otro), trátala como credencial |
| `CORS_ALLOWED_ORIGINS` | Pública | Origen del frontend (`https://afterclass-forum.vercel.app`) |

### Alternativa: Docker

El `Dockerfile` de la raíz construye solo el backend (sin base de datos ni frontend):

```bash
docker build -t afterclass-backend .
docker run -p 8000:8000 --env-file backend/.env afterclass-backend
```

## Frontend (Vercel)

URL pública: **https://afterclass-forum.vercel.app**

- **Root Directory**: `frontend`
- **Variable de entorno** (pública, se incrusta en el build): `VITE_API_URL=https://afterclass-ptvl.onrender.com`
- Las rutas del cliente (`/board`, `/rules`) funcionan gracias a `frontend/vercel.json`.
