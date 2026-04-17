import { classList, escapeHtml } from '../../lib/html.js';
import { renderSectionHeader } from './section-header.js';

export function renderStack(stack) {
  const groups = stack.groups
    .map(
      (group) => `<div class="stack-col">
        <p class="sc-cat">${escapeHtml(group.category)}</p>
        ${group.items
          .map((item) => `<div class="${classList('sc-item', item.primary && 'primary')}">${escapeHtml(item.label)}</div>`)
          .join('')}
      </div>`
    )
    .join('');

  const certifications = stack.certifications
    .map(
      (item, index) => `<article class="${classList('cert-card', 'rev', index % 4 === 1 && 'd1', index % 4 === 2 && 'd2', index % 4 === 3 && 'd3')}">
        <span class="cert-icon">${escapeHtml(item.icon)}</span>
        <div>
          <p class="cert-name">${escapeHtml(item.name)}</p>
          <p class="cert-issuer">${escapeHtml(item.issuer)}</p>
        </div>
      </article>`
    )
    .join('');

  return `<section id="stack">
    <div class="sec-wrap">
      ${renderSectionHeader(stack.number, stack.title)}
      <div class="stack-grid rev">${groups}</div>
      <div class="cert-grid">${certifications}</div>
    </div>
  </section>`;
}
