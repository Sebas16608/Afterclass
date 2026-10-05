# Versiones

Versiones de las dependencias usadas en el proyecto:

| Paquete | Versión |
|---------|---------|
| Python | 3.13 |
| Django | 6.1.1 |
| djangorestframework | 3.18.1 |
| psycopg + psycopg-binary | 3.3.6 |
| asgiref | 3.12.1 |
| sqlparse | 0.6.0 |
| django-cors-headers | 4.9.0 |
| dj-database-url | 3.1.2 |
| django-cleanup | 9.0.0 |
| django-stubs | 6.1.1 |
| gunicorn | 26.2.0 |
| pillow | 12.3.0 |
| python-dotenv | 1.2.4 |
| whitenoise | 6.12.0 |

Frontend: Node.js 20+, React 19, Vite 8, Tailwind CSS 4.

Estas versiones también están fijadas en `requirements.txt` y `frontend/package.json`.

---

## Historial de versiones del proyecto

### Versión 0.1 (actual)

**Qué hace:**

- Foro anónimo para estudiantes: categorías, hilos (threads) y posts.
- Respuestas anidadas: un post puede responder a otro post (árbol de comentarios).
- Autor opcional en hilos y respuestas (vacío = anónimo).
- Hilos fijados (📌) y bloqueados (🔒).
- Frontend con portada `/`, reglas `/rules` y tablón `/board`.

**Cómo funciona:**

- El frontend (React + Vite) llama a la API de Django REST (`/category/`, `/post/`).
- Django usa `DATABASE_URL` para Postgres/Neon en producción y SQLite en local.
- WhiteNoise sirve los estáticos, CORS permite al frontend de Vercel llamar a la API.
- Docker disponible solo para el backend.

**Ideas para futuras versiones:**

- Borrado de hilos/posts por moderadores (soft delete o botón de borrar).
- Paginación en hilos y respuestas.
- Búsqueda de hilos por título/contenido.
- Reacciones o votos (upvotes) en posts.
- Subida de imágenes en hilos/posts.
- Modo oscuro.
- Recuperar hilos eliminados / auditoría de moderación.

