import { escapeHtml } from '../../lib/html.js';

export function renderHero(hero) {
  const titleLines = hero.titleLines
    .map((line, index) => {
      if (index === 1) {
        return `<span class="accent">${escapeHtml(line)}</span>`;
      }

      if (index === 2) {
        return `<span class="muted">${escapeHtml(line)}</span>`;
      }

      return escapeHtml(line);
    })
    .join('<br>');

  const sideNotes = hero.sideNotes.map((item) => `<p>${escapeHtml(item)}</p>`).join('');

  return `<section id="hero">
    <div class="hero-orb" aria-hidden="true"></div>
    <div class="hero-line" aria-hidden="true"></div>
    <div class="avail-badge">
      <span class="avail-dot"></span>
      ${escapeHtml(hero.availability)}
    </div>
    <h1 class="hero-name">${titleLines}</h1>
    <div class="hero-foot">
      <p class="hero-desc">${escapeHtml(hero.description)}</p>
      <div class="hero-side">
        ${sideNotes}
        <a href="mailto:${escapeHtml(hero.email)}">${escapeHtml(hero.email)}</a>
      </div>
    </div>
  </section>`;
}
