import { classList, escapeHtml } from '../../lib/html.js';

export function renderNav(site, navigation) {
  const items = navigation
    .map(
      (item) => `<li><a href="${escapeHtml(item.href)}" class="${classList(item.isCta && 'nav-cta')}">${escapeHtml(item.label)}</a></li>`
    )
    .join('');

  return `<a class="skip-link" href="#main-content">Saltar al contenido</a>
  <div id="cur-dot" aria-hidden="true"><div class="dot-el"></div></div>
  <div id="cur-ring" aria-hidden="true"><div class="ring-el" id="ring-el"></div></div>
  <nav id="nav" aria-label="Navegación principal">
    <a href="#hero" class="nav-logo">${escapeHtml(site.author.replace(' Araya', ''))}<span>.</span></a>
    <ul class="nav-links">${items}</ul>
  </nav>`;
}
