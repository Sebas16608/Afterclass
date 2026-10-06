# Afterclass

Prototipo de chat relacional desarrollado como proyecto para la universidad.
Backend construido con Django y Django REST Framework, con SQLite como base de datos.

## Requisitos

- Python 3.13+
- pip

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Sebas16608/Afterclass.git
cd Afterclass
```

2. Crear y activar el entorno virtual:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

3. Instalar dependencias:

```bash
pip install -r requirements.txt
```

4. Aplicar migraciones:

```bash
cd backend
python manage.py migrate
```

5. Ejecutar el servidor:

```bash
python manage.py runserver
```

La API quedará disponible en `http://127.0.0.1:8000/`.

## Despliegue

### Backend (Render)

El backend está desplegado en Render: **https://afterclass-ptvl.onrender.com**

- **Build Command**: `pip install -r requirements.txt && python backend/manage.py collectstatic --noinput`
- **Start Command**: `gunicorn backend.wsgi:application --chdir backend --bind 0.0.0.0:$PORT`
- **Health Check Path**: `/health/`

Variables de entorno necesarias en Render:

| Variable | ¿Pública o secreta? | Ejemplo |
|----------|---------------------|---------|
| `SECRET_KEY` | **Secreta** | valor aleatorio largo |
| `DEBUG` | Pública (config) | `False` |
| `ALLOWED_HOSTS` | Pública | `afterclass-ptvl.onrender.com` |
| `DATABASE_URL` | **Secreta** (contiene usuario/contraseña de Postgres) | `postgresql://...` |
| `CORS_ALLOWED_ORIGINS` | Pública | `https://afterclass-forum.vercel.app` |

> Nunca commitees valores reales de secretos. Usa un `.env` local (ignorado por git) y configura los secretos en el panel de Render.

#### Alternativa: Docker

El `Dockerfile` de la raíz construye solo el backend (sin base de datos ni frontend):

```bash
docker build -t afterclass-backend .
docker run -p 8000:8000 --env-file backend/.env afterclass-backend
```

### Frontend (Vercel)

El frontend está desplegado en Vercel: **https://afterclass-forum.vercel.app**

- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Variable de entorno**: `VITE_API_URL=https://afterclass-ptvl.onrender.com`
- Las rutas del cliente (`/board`, `/rules`) funcionan gracias a `frontend/vercel.json`.

Ver más detalles en [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Estructura del proyecto

```
Afterclass/
├── backend/          # Proyecto Django (settings, urls, apps category y post)
├── frontend/         # React + Vite + Tailwind
├── docs/             # Documentación
├── Dockerfile        # Imagen Docker del backend
├── requirements.txt
└── README.md
```

## Documentación

En `docs/` hay más información:

- `docs/versiones.md` — versiones de Python y dependencias usadas.
- `docs/CONTRIBUTING.md` — cómo contribuir al proyecto.
- `docs/DEPLOY.md` — cómo desplegar el backend (Render/Docker) y el frontend (Vercel).

## Licencia

Este proyecto se distribuye bajo la licencia [AGPL-3.0](LICENSE).
