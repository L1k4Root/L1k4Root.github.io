import { escapeHtml } from '../../lib/html.js';

export function renderSectionHeader(number, title) {
  return `<div class="sec-header">
    <span class="sec-num">${escapeHtml(number)}</span>
    <span class="sec-title">${escapeHtml(title)}</span>
    <div class="sec-line"></div>
  </div>`;
}
