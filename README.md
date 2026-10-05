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
├── backend/          # Configuración del proyecto Django
├── category/         # App de categorías
├── post/             # App de publicaciones
├── manage.py
└── db.sqlite3
```
