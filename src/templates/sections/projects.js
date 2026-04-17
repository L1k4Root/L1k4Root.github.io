import { classList, escapeHtml, externalAnchorAttributes } from '../../lib/html.js';
import { renderSectionHeader } from './section-header.js';

export function renderProjects(projects) {
  const items = projects.items
    .map(
      (project, index) => `<article class="${classList('proj-card', 'rev', index === 1 && 'd1', index === 2 && 'd2', index === 3 && 'd3')}">
        <p class="proj-num">${escapeHtml(project.number)}</p>
        <h3 class="proj-name">${escapeHtml(project.name)}</h3>
        <p class="proj-desc">${escapeHtml(project.description)}</p>
        <div class="proj-tags">
          ${project.tags.map((tag) => `<span class="ptag">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <p class="proj-metric">${escapeHtml(project.metric)}</p>
        ${project.links ? `<div class="proj-links">${project.links.map((link) => `<a href="${escapeHtml(link.href)}"${externalAnchorAttributes(link.external)}>${escapeHtml(link.label)}</a>`).join('')}</div>` : ''}
      </article>`
    )
    .join('');

  return `<section id="projects">
    <div class="sec-wrap">
      ${renderSectionHeader(projects.number, projects.title)}
      <div class="proj-grid">${items}</div>
    </div>
  </section>`;
}
