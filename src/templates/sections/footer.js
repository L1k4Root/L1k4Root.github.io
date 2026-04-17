import { escapeHtml } from '../../lib/html.js';

export function renderFooter(footer) {
  return `<footer>
    <span class="f-copy">${escapeHtml(footer.copy)}</span>
    <a href="#hero" class="f-back">${escapeHtml(footer.backToTopLabel)}</a>
  </footer>`;
}
