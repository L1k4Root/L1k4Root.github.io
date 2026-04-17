# Auditoría técnica del repo actual

## Resumen técnico

Estado auditado en `/Users/cfs-andres/Workspace/Proyectos/Portfolio` el 17 de abril de 2026.

Hallazgos verificables:

- El repo publicado hoy está construido como export estático de Reflex hacia una app Next.js/React.
- La raíz contiene artefactos generados (`index.html`, `404.html`, `_next/`, `.web/`) en vez de una fuente mantenible.
- No hay código fuente Python/Reflex del proyecto original dentro del repo actual.
- El contenido original dependía de `data/data.json`, pero en el working tree local esos archivos están borrados sin commit.
- El `README` histórico describía una estructura que ya no representa fielmente el estado real del repo.

## Cómo está construido hoy

Archivos y señales:

- `index.html`: HTML exportado por Next.js con carga de chunks en `/_next/static/...`
- `.web/package.json`: app frontend generada por Reflex con `next`, `react` y `postcss`
- `.web/reflex.json`: Reflex `0.6.7`
- `.web/next.config.js`: `trailingSlash: true`
- `_next/static/...`: chunks, CSS y manifest del export

Conclusión:

- la versión actual no está mantenida como aplicación fuente
- está mantenida como artefacto compilado comprometido al repo

## Cómo se está desplegando hoy

Hechos:

- existe `.nojekyll`
- existe `index.html` en raíz
- existe `404.html` en raíz
- no existe workflow de deploy en `.github/`
- el `README` histórico apunta a GitHub Pages
- el repo remoto configurado es `https://github.com/l1k4skr/Portfolio.git`

Inferencia razonable:

- el sitio probablemente se publica desde GitHub Pages sirviendo la raíz del repo o una copia equivalente de esos artefactos

Esto es una inferencia porque la configuración exacta de GitHub Pages no está almacenada en el repo.

## Qué sobra

- `.web/`: artefacto generado, no fuente de negocio
- `_next/`: output compilado
- `index.html` y `404.html` antiguos: producto final generado, no mantenible
- `robots.txt` y `sitemap*.xml` históricos: inválidos para producción

Problemas concretos:

- `robots.txt` y `sitemap.xml` apuntaban a `http://localhost:3000`
- CSS compilado de `_next/static/css/0af92b8749b7dfd2.css` pesa aproximadamente `703 KB`
- la página depende de JS y CSS exportados, lo que complica cambios pequeños y revisión humana

## Qué se puede reutilizar

- activos base como `favicon.ico`
- el contenido histórico de `data/data.json` como referencia editorial
- el inventario de experiencia/proyectos anterior para contrastar claims

## Qué conviene eliminar o archivar

- toda la cadena `.web` + `_next` + HTML exportado anterior, una vez validado el nuevo build estático
- `robots.txt` y `sitemap*.xml` históricos
- documentación histórica que describe una estructura ya inexistente

## Problema real a resolver

No es “cambiar el diseño”.

El problema real es:

1. reemplazar un repo de artefactos por un repo de fuente mantenible
2. separar contenido, presentación y comportamiento
3. preservar la nueva dirección visual sin volver a caer en otro HTML monolítico
4. bajar el riesgo editorial de claims inflados, fechas rígidas y enlaces dudosos
