import { renderLayout } from './layout.js';

export function renderNotFoundPage(content) {
  const body = `
    <main class="not-found">
      <p class="nf-code">404</p>
      <h1>Página no encontrada</h1>
      <p>El contenido que buscas no existe o cambió de ubicación.</p>
      <a href="/">Volver al portfolio</a>
    </main>
  `;

  return renderLayout({
    site: content.site,
    body,
    pageTitle: `404 | ${content.site.title}`,
    pageDescription: 'La página solicitada no fue encontrada.',
    canonicalPath: '/404.html'
  });
}
