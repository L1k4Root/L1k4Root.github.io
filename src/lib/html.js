const ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

export function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ESCAPES[character]);
}

export function classList(...values) {
  return values.filter(Boolean).join(' ');
}

export function externalAnchorAttributes(external) {
  return external ? ' target="_blank" rel="noreferrer"' : '';
}
