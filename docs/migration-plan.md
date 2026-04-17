# Arquitectura destino y plan de migración

## Estado actual resumido

- Hoy el repo es un output compilado.
- El nuevo HTML tiene mejor dirección visual, pero es monolítico.
- El trabajo correcto no es “copiar el HTML”, sino convertirlo en una base editables y versionable.

## Dos rutas posibles

### Ruta mínima conservadora

Descripción:

- limpiar el HTML nuevo
- separar CSS y JS
- mantener una sola página HTML estática escrita a mano

Esfuerzo:

- bajo

Beneficios:

- rápida
- barata
- sin build step

Costos futuros:

- cada cambio de contenido sigue tocando markup
- crece mal si agregas casos, blog o más secciones

Riesgos:

- volver a caer en otro monolito
- más fricción para mantenimiento futuro

### Ruta recomendada

Descripción:

- generador estático pequeño sin dependencias externas
- contenido en JSON
- secciones modulares en templates JS
- CSS y JS externos
- output final en `dist/`

Esfuerzo:

- medio

Beneficios:

- mantiene la simplicidad real
- no introduce framework innecesario
- funciona hoy con Node 20
- deja el contenido desacoplado del layout
- permite deploy estático barato sin fricción

Costos futuros:

- si el sitio crece hacia blog o muchas páginas, un framework como Astro puede dar mejor ergonomía

Riesgos:

- el build es propio, así que hay que mantenerlo simple
- requiere disciplina para no meter lógica editorial compleja en templates

## Ruta elegida

Ruta recomendada: generador estático de dependencia cero.

Justificación:

- resuelve el problema real del repo hoy
- evita depender de una upgrade inmediata de Node para usar Astro actual
- no sobreingenieriza
- deja una salida muy clara a Astro más adelante si el sitio deja de ser un one-page portfolio

## Stack final recomendado

- Node.js 20+
- JSON estructurado para contenido
- templates ES modules para layout y secciones
- CSS custom properties
- JS liviano para interacción no crítica
- hosting estático con `dist/`

## Estructura final del repo

```text
docs/
public/
  favicon.ico
  scripts/site.js
  styles/global.css
scripts/
  build.mjs
  dev.mjs
src/
  data/site.json
  lib/html.js
  templates/
    layout.js
    page.js
    404.js
    sections/
dist/
```

## Separación aplicada

- layout: `src/templates/layout.js`
- secciones: `src/templates/sections/*.js`
- estilos: `public/styles/global.css`
- scripts: `public/scripts/site.js`
- contenido: `src/data/site.json`
- assets: `public/`

## Plan por fases

### Fase 1

- auditar repo actual
- auditar HTML nuevo
- definir claims a corregir

### Fase 2

- crear generador estático
- modularizar layout y secciones
- mover contenido a JSON

### Fase 3

- revisar copy y links
- validar datos sensibles o no verificables
- generar `dist/`

### Fase 4

- archivar artefactos legacy
- configurar deploy
- publicar

## Qué debe hacerse manualmente

- validar handle final de GitHub
- validar si el teléfono debe quedar público
- validar si los proyectos IBM/Banco de Chile pueden describirse así públicamente
- validar las métricas `-40%`, `+35%`, `0 errores`
- validar certificados y nombres exactos
- decidir dominio final si cambia `site.url`

## Qué puede hacer Codex

- mantener la base modular
- mover o archivar artefactos legacy
- ajustar diseño y layout
- refinar copy técnico
- agregar nuevas secciones al generador
- preparar deploy y documentación adicional

## Contenido que debe revisarse antes de publicar

- todos los porcentajes o métricas
- promesas operativas
- títulos inflados
- nombres exactos de cargos
- enlaces externos no verificados
- cualquier claim sobre banca, enterprise o seguridad que no puedas sostener en entrevista

## Next actions exactos

1. Validar GitHub correcto: `l1k4skr` vs `L1k4Root`.
2. Validar si mantendrás teléfono público.
3. Revisar y aprobar los claims de IBM y Banco de Chile.
4. Ejecutar `npm run build`.
5. Revisar visualmente `dist/index.html`.
6. Archivar o eliminar artefactos legacy del export Reflex.
7. Configurar deploy de `dist/`.
8. Publicar sólo después de cerrar los puntos del archivo `docs/content-audit.md`.
