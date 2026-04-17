# Métricas estándar recomendadas

En vez de publicar porcentajes personales no verificables, este portfolio usa métricas y marcos que sí tienen peso profesional.

## 1. DORA para delivery y operación

Framework recomendado para hablar de performance de entrega de software:

- deployment frequency
- lead time for changes
- change failure rate
- time to restore service

Por qué importa:

- conecta velocidad con estabilidad
- es entendible por equipos técnicos y por negocio
- evita claims sueltos como `-40%` sin contexto

Fuente oficial:

- [Google Cloud: Four Keys / DORA metrics](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance)

## 2. SLI / SLO / Error Budget para confiabilidad

Para backend, cloud y automatización crítica, lo más defendible no es decir “cero errores”, sino trabajar con:

- disponibilidad
- latencia de requests
- tasa de requests correctos
- error budget
- burn rate del error budget

Por qué importa:

- traduce confiabilidad a objetivos operables
- permite hablar de riesgo y no de promesas absolutas
- es el lenguaje correcto para servicios serios

Fuentes oficiales:

- [Google Cloud: Concepts in service monitoring](https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring)
- [Google Cloud: SLI metrics overview](https://docs.cloud.google.com/stackdriver/docs/solutions/slo-monitoring/sli-metrics/overview)
- [Google SRE: Availability table](https://sre.google/sre-book/availability-table/)
- [Google Cloud: Burn rate](https://docs.cloud.google.com/stackdriver/docs/solutions/slo-monitoring/alerting-on-budget-burn-rate)

## 3. Métricas que importan en ML clásico

Cuando hablas de ML serio, Google recomienda no quedarse sólo con accuracy si el problema está desbalanceado. Las métricas relevantes suelen ser:

- precision
- recall
- false positive rate
- F1

Por qué importa:

- demuestra criterio al evaluar modelos
- evita vender “accuracy alta” donde no significa nada
- te posiciona mejor para IA aplicada y automatización inteligente

Fuentes oficiales:

- [Google ML Crash Course: accuracy, precision, recall](https://developers.google.com/machine-learning/crash-course/classification/accuracy-precision-recall)
- [Google ML Glossary: metrics](https://developers.google.com/machine-learning/glossary/metrics)

## 4. Métricas que importan en IA generativa y automatización con LLMs

Para sistemas asistidos por LLM, la conversación cambia. OpenAI recomienda medir con evals y optimizar principalmente:

- quality / task success mediante evals
- latency
- cost
- número de requests
- tokens de entrada y salida

Por qué importa:

- es la forma realista de operar IA en producción
- la calidad no se sostiene con demos, se sostiene con evaluación continua
- latencia y costo son parte del diseño, no un detalle posterior

Fuentes oficiales:

- [OpenAI: Evaluation best practices](https://platform.openai.com/docs/guides/evaluation-best-practices)
- [OpenAI: Working with evals](https://platform.openai.com/docs/guides/evals?lang=javascript)
- [OpenAI: Latency optimization](https://platform.openai.com/docs/guides/latency-optimization)
- [OpenAI: Cost optimization](https://platform.openai.com/docs/guides/cost-optimization)
- [OpenAI: Model selection principles](https://platform.openai.com/docs/guides/model-selection/principles)

## Traducción práctica para este portfolio

La franja superior quedó orientada a estándares, no a autobombo:

- `DORA`: excelencia en delivery
- `SLOs`: confiabilidad operable
- `Evals`: calidad medible en IA/ML
- `AI Ops`: latencia, costo y calidad como criterios de diseño

## Cómo hablar de esto en entrevistas o con clientes

Forma profesional:

- “No publico métricas históricas que no puedo respaldar; prefiero mostrar con qué estándares técnicos opero.”
- “En backend y cloud me importa delivery estable, confiabilidad y trazabilidad.”
- “En IA aplicada me interesa evaluar calidad, latencia y costo, no sólo integrar un modelo.”

Eso posiciona mejor que un número agresivo sin contexto.
