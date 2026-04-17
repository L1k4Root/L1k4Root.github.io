import { classList, escapeHtml, externalAnchorAttributes } from '../../lib/html.js';
import { renderSectionHeader } from './section-header.js';

export function renderContact(contact) {
  const heading = contact.headingLines
    .map((line, index) => (index === 2 ? `<span>${escapeHtml(line)}</span>` : escapeHtml(line)))
    .join('<br>');

  const methods = contact.methods
    .map(
      (item) => `<a href="${escapeHtml(item.href)}" class="cl-item"${externalAnchorAttributes(item.external)}>
        <span class="cl-type">${escapeHtml(item.type)}</span>
        <span class="cl-val">${escapeHtml(item.value)}</span>
        <span class="cl-arrow" aria-hidden="true">↗</span>
      </a>`
    )
    .join('');

  const rows = contact.availabilityCard
    .map(
      (row, index) => `<div class="${classList('cc-row', index === contact.availabilityCard.length - 1 && 'last')}">
        <span class="cc-key">${escapeHtml(row.key)}</span>
        <span class="${classList('cc-val', row.tone)}">${escapeHtml(row.value)}</span>
      </div>`
    )
    .join('');

  return `<section id="contact">
    <div class="sec-wrap">
      ${renderSectionHeader(contact.number, contact.title)}
      <div class="contact-inner">
        <div>
          <h2 class="contact-heading rev">${heading}</h2>
          <p class="contact-sub rev d1">${escapeHtml(contact.description)}</p>
          <div class="contact-links rev d2">${methods}</div>
        </div>
        <aside class="contact-card rev d2" aria-label="Disponibilidad">
          <p class="cc-title">Disponibilidad actual</p>
          ${rows}
        </aside>
      </div>
    </div>
  </section>`;
}
