import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderNotFoundPage } from '../src/templates/404.js';
import { renderPage } from '../src/templates/page.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');
const dataFile = path.join(rootDir, 'src', 'data', 'site.json');

export async function buildSite() {
  const raw = await readFile(dataFile, 'utf8');
  const content = JSON.parse(raw);

  await rm(distDir, { recursive: true, force: true });
  await mkdir(distDir, { recursive: true });
  await cp(publicDir, distDir, { recursive: true });

  await writeFile(path.join(distDir, 'index.html'), renderPage(content), 'utf8');
  await writeFile(path.join(distDir, '404.html'), renderNotFoundPage(content), 'utf8');
  await writeFile(path.join(distDir, 'robots.txt'), renderRobots(content), 'utf8');
  await writeFile(path.join(distDir, 'sitemap.xml'), renderSitemap(content), 'utf8');
  await writeFile(path.join(distDir, '.nojekyll'), '', 'utf8');
}

function renderRobots(content) {
  const siteUrl = content.site.url.replace(/\/$/, '');
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Host: ${siteUrl}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    ''
  ].join('\n');
}

function renderSitemap(content) {
  const siteUrl = content.site.url.replace(/\/$/, '');
  const lastModified = content.site.lastModified;

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <url>',
    `    <loc>${siteUrl}/</loc>`,
    `    <lastmod>${lastModified}</lastmod>`,
    '    <changefreq>monthly</changefreq>',
    '    <priority>1.0</priority>',
    '  </url>',
    '</urlset>',
    ''
  ].join('\n');
}

buildSite().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
