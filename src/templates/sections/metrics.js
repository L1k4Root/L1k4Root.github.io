import { classList, escapeHtml } from '../../lib/html.js';

export function renderMetrics(metrics) {
  const cells = metrics
    .map(
      (metric, index) => `<div class="${classList('metric-cell', 'rev', index === 1 && 'd1', index === 2 && 'd2', index === 3 && 'd3')}">
        <span class="mc-num">${escapeHtml(metric.value)}</span>
        <span class="mc-label">${escapeHtml(metric.label)}</span>
      </div>`
    )
    .join('');

  return `<section class="metrics-strip" aria-label="Resumen profesional">
    ${cells}
  </section>`;
}
