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

Este proyecto se distribuye bajo la licencia [GPL-3.0](LICENSE).
