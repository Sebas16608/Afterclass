# Cómo contribuir

Gracias por querer contribuir a Afterclass. Es un proyecto OSS para estudiantes, así que cualquier ayuda es bienvenida.

## Requisitos

- Python 3.13+
- Node.js 20+
- Git

## Flujo básico

1. Haz un fork del repositorio.
2. Crea una rama desde `main`:
   ```bash
   git checkout -b feature/mi-cambio
   ```
3. Realiza tus cambios.
4. Verifica que no haya errores:
   ```bash
   cd backend && python manage.py check
   cd frontend && npm run build
   ```
5. Haz commit con un mensaje claro:
   ```bash
   git commit -m "descripción corta de lo que hiciste"
   ```
6. Sube tu rama y abre un Pull Request hacia `main`.

## Estilo

- No agregues dependencias nuevas sin necesidad.
- No incluyas contenido explícito en `/` ni en `/rules`.
- Mantén el estilo visual existente (tablón tipo foro, colores `#eef2ff`, `#d6daf0`, borde `#b7c5d9`).

## Reportar bugs

Abre un issue describiendo qué pasó, qué esperabas y cómo reproducirlo.
