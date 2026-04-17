# Auditoría crítica del nuevo HTML final

Archivo auditado:

- `/Users/cfs-andres/Downloads/portfolio_andres_final.html`

## Fortalezas

- Tiene una dirección visual más madura y coherente que la versión publicada.
- El layout comunica mejor foco backend/cloud/enterprise.
- La jerarquía tipográfica y el uso del espacio son superiores a la versión anterior.
- La narrativa profesional es mucho más clara y mejor posicionada.
- La estructura de secciones ya sugiere una buena futura modularización:
  - hero
  - perfil
  - experiencia
  - proyectos
  - stack
  - contacto

## Debilidades de mantenibilidad

- CSS inline en un único bloque grande.
- JS inline en un único bloque.
- Todo el contenido está hardcodeado en el HTML.
- Cambiar una certificación, experiencia o link obliga a tocar layout y contenido a la vez.
- Hay strings temporales que envejecerán rápido:
  - `Abril 2026`
  - `© 2026`

## Problemas de accesibilidad

- No existe `main`.
- No existe skip link.
- `body { cursor: none; }` afecta usabilidad en desktop.
- No hay manejo específico de `prefers-reduced-motion`.
- Links externos con `target="_blank"` no incluyen `rel="noreferrer"` ni `rel="noopener"`.
- El cursor custom es decorativo y no aporta información funcional.
- La semántica general es aceptable, pero estaba demasiado apoyada en `div`.

## Claims discutibles o inflados

Estos puntos deben revisarse antes de publicar:

- `Systems Architect`: suena inflado respecto de la experiencia visible.
- `entornos donde la tolerancia al error es cero`: tono fuerte, difícil de sostener sin contexto.
- `El software crítico no falla en producción`: claim absoluto y frágil.
- `0 errores en producción`: demasiado fuerte si no existe evidencia explícita.
- porcentajes de skill (`92%`, `88%`, etc.): subjetivos y poco creíbles.
- `< 24 horas` en respuesta: promesa operativa innecesaria.
- `BCI` como métrica y `Banco de Chile` como label: inconsistencia factual.

## Inconsistencias detectadas

- GitHub en el HTML nuevo: `https://github.com/L1k4Root`
- GitHub verificado en el repo actual: `https://github.com/l1k4skr`

Eso debe resolverse antes de publicar.

También hay mezcla de posicionamiento:

- versión antigua: Python web developer / Django / Flask
- versión nueva: backend enterprise / NestJS / Terraform / banca

Eso no es necesariamente un problema, pero exige una narrativa explícita de transición profesional.

## Datos duros faltantes

Faltan o deben validarse:

- links públicos de proyectos IBM o corporativos, si pueden mostrarse
- evidencia o contexto de las métricas `-40%`, `+35%`, `0 errores`
- evidencia del proyecto `Sistema de Control de Acceso Vehicular`
- confirmación del handle correcto de GitHub
- confirmación de disponibilidad pública del teléfono
- validación de certificaciones y denominaciones exactas

## Decisión editorial aplicada en la nueva base

Para no publicar claims frágiles:

- se bajó `Systems Architect` a `Cloud Systems`
- se reemplazó `0 errores en producción` por `0 errores de configuración reportados`
- se eliminaron porcentajes de skill y se reemplazaron por niveles de uso
- se mantuvo la estética general pero con copy más defendible
