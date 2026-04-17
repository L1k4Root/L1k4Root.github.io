import { classList, escapeHtml } from '../../lib/html.js';
import { renderSectionHeader } from './section-header.js';

export function renderAbout(about, skills) {
  const paragraphs = about.paragraphs
    .map((paragraph, index) => `<p class="${classList('about-p', 'rev', index === 0 && 'd1', index === 1 && 'd2', index === 2 && 'd3')}">${escapeHtml(paragraph)}</p>`)
    .join('');

  const quote = about.quote.map((line) => `${escapeHtml(line)}<br>`).join('');

  const skillRows = skills
    .map(
      (skill) => `<div class="sk-row">
        <div class="sk-top">
          <span class="sk-name">${escapeHtml(skill.name)}</span>
          <span class="sk-pct">${escapeHtml(skill.label)}</span>
        </div>
        <div class="sk-track">
          <div class="sk-fill" style="width:${escapeHtml(skill.width)}%"></div>
        </div>
      </div>`
    )
    .join('');

  return `<section id="about">
    <div class="sec-wrap">
      ${renderSectionHeader(about.number, about.title)}
      <div class="about-grid">
        <div>
          <h2 class="about-heading rev">
            ${escapeHtml(about.headingLines[0])}<br>
            ${escapeHtml(about.headingLines[1])}<br>
            <span class="gold">${escapeHtml(about.headingLines[2])}</span>
          </h2>
          ${paragraphs}
          <blockquote class="quote-block rev d4">
            <p class="quote-text">${quote}</p>
          </blockquote>
        </div>
        <div class="skills-col rev d1" aria-label="Fortalezas técnicas">
          ${skillRows}
        </div>
      </div>
    </div>
  </section>`;
}
