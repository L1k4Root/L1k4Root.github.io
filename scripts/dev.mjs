import { watch } from 'node:fs';
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { buildSite } from './build.mjs';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(dirname, '..');
const distDir = path.join(rootDir, 'dist');
const port = Number(process.env.PORT ?? 4321);

await buildSite();

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const server = http.createServer(async (request, response) => {
  try {
    const requestPath = new URL(request.url, `http://localhost:${port}`).pathname;
    const normalizedPath = requestPath === '/' ? '/index.html' : requestPath;
    const filePath = path.join(distDir, normalizedPath);
    const file = await readFile(filePath);
    const extension = path.extname(filePath);
    response.writeHead(200, { 'Content-Type': contentTypes[extension] ?? 'application/octet-stream' });
    response.end(file);
  } catch {
    try {
      const notFound = await readFile(path.join(distDir, '404.html'));
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(notFound);
    } catch {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Build output not available.');
    }
  }
});

server.listen(port, () => {
  console.log(`Portfolio dev server running at http://localhost:${port}`);
});

let timer;
const rebuild = () => {
  clearTimeout(timer);
  timer = setTimeout(async () => {
    try {
      await buildSite();
      console.log('Rebuilt dist/');
    } catch (error) {
      console.error('Rebuild failed');
      console.error(error);
    }
  }, 150);
};

watch(path.join(rootDir, 'src'), { recursive: true }, rebuild);
watch(path.join(rootDir, 'public'), { recursive: true }, rebuild);
