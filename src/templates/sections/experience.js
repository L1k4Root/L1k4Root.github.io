import { classList, escapeHtml } from '../../lib/html.js';
import { renderSectionHeader } from './section-header.js';

export function renderExperience(experience) {
  const items = experience.items
    .map(
      (item, index) => `<article class="${classList('exp-item', 'rev', index === 1 && 'd1', index === 2 && 'd2')}">
        <div class="exp-left">
          <p class="exp-company">${escapeHtml(item.company)}</p>
          <p class="exp-period">${escapeHtml(item.period)}</p>
          <p class="exp-location">${escapeHtml(item.location)}</p>
          <span class="exp-badge">${escapeHtml(item.badge)}</span>
        </div>
        <div>
          <h3 class="exp-role">${escapeHtml(item.role)}</h3>
          <p class="exp-desc">${escapeHtml(item.description)}</p>
          <ul class="exp-bullets">
            ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
          </ul>
          <div class="exp-metrics">
            ${item.tags.map((tag) => `<span class="em-pill">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      </article>`
    )
    .join('');

  return `<section id="experience">
    <div class="sec-wrap">
      ${renderSectionHeader(experience.number, experience.title)}
      <div class="exp-list">${items}</div>
    </div>
  </section>`;
}
