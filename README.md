# Andrés Pérez Araya — Portfolio

Portfolio estático con contenido desacoplado, generado desde `src/data/site.json` hacia `dist/`.

## Stack final

- Render estático con Node.js 20 y utilidades nativas.
- Contenido editable en JSON.
- Templates modulares en `src/templates/`.
- Estilos y comportamiento separados en `public/styles/` y `public/scripts/`.
- Output listo para GitHub Pages, Cloudflare Pages o cualquier hosting de archivos estáticos.

## Estructura

```text
.
├── docs/
│   ├── content-audit.md
│   ├── migration-plan.md
│   └── repo-audit.md
├── public/
│   ├── favicon.ico
│   ├── scripts/site.js
│   └── styles/global.css
├── scripts/
│   ├── build.mjs
│   └── dev.mjs
├── src/
│   ├── data/site.json
│   ├── lib/html.js
│   └── templates/
│       ├── 404.js
│       ├── layout.js
│       ├── page.js
│       └── sections/
├── dist/                  # generado, no editar a mano
└── package.json
```

## Desarrollo local

Requisitos:

- Node.js 20 o superior.

Comandos:

```bash
npm run dev
```

Esto:

- genera `dist/`
- levanta un servidor local en `http://localhost:4321`
- recompila cuando cambias archivos en `src/` o `public/`

## Edición de contenido

Edita `src/data/site.json`.

Las secciones que puedes mantener sin tocar layout:

- `hero`
- `metrics`
- `about`
- `skills`
- `experience`
- `projects`
- `stack`
- `contact`
- `footer`

Convención recomendada:

- No inventar métricas.
- No usar claims absolutos sin evidencia.
- Para proyectos internos, no agregar links públicos si no existen.
- Cambiar `site.url` antes de publicar si el dominio final no es `https://l1k4root.github.io`.

## Build

```bash
npm run build
```

El build:

- limpia `dist/`
- copia `public/`
- genera `dist/index.html`
- genera `dist/404.html`
- genera `dist/robots.txt`
- genera `dist/sitemap.xml`

## Deploy

### GitHub Pages

Sube el contenido de `dist/` con el método que prefieras:

- GitHub Actions
- despliegue manual de la carpeta `dist/`
- rama dedicada de publicación

### Cloudflare Pages

Usa:

- Build command: `npm run build`
- Output directory: `dist`

## Documentación del proyecto

- Auditoría técnica actual: [docs/repo-audit.md](/Users/cfs-andres/Workspace/Proyectos/Portfolio/docs/repo-audit.md)
- Auditoría crítica del HTML final: [docs/content-audit.md](/Users/cfs-andres/Workspace/Proyectos/Portfolio/docs/content-audit.md)
- Arquitectura, rutas y plan de migración: [docs/migration-plan.md](/Users/cfs-andres/Workspace/Proyectos/Portfolio/docs/migration-plan.md)
