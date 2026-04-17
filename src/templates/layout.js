import { escapeHtml } from '../lib/html.js';

export function renderLayout({ site, body, pageTitle, pageDescription, canonicalPath = '/' }) {
  const title = pageTitle ?? site.title;
  const description = pageDescription ?? site.description;
  const canonical = `${site.url.replace(/\/$/, '')}${canonicalPath}`;

  return `<!DOCTYPE html>
<html lang="${escapeHtml(site.lang)}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="author" content="${escapeHtml(site.author)}">
  <meta name="theme-color" content="#0B0F14">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="stylesheet" href="/styles/global.css">
</head>
<body>
  ${body}
  <script src="/scripts/site.js" defer></script>
</body>
</html>`;
}
