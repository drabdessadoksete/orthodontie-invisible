import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';
import { discoveryFiles } from './scripts/seo.ts';
import { findRoute } from './src/content/routes.ts';
import { readFile } from 'node:fs/promises';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    appType: 'mpa',
    plugins: [react(), tailwindcss(), {
      name: 'discovery-documents',
      configureServer(server) {
        server.middlewares.use((request, response, next) => {
          const filename = request.url?.split('?')[0].slice(1);
          if (!filename || !['robots.txt', 'sitemap.xml', 'llms.txt'].includes(filename)) {
            if (findRoute(new URL(request.url ?? '/', 'http://localhost').pathname)) request.url = '/index.html';
            return next();
          }
          const content = discoveryFiles()[filename];
          response.setHeader('Content-Type', filename.endsWith('.xml') ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8');
          response.end(content);
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use(async (request, response, next) => {
          const url = new URL(request.url ?? '/', 'http://localhost');
          const routePath = url.pathname.replace(/index\.html$/, '');
          const route = findRoute(routePath);
          if (route && url.pathname !== route.path) {
            response.writeHead(301, { Location: route.path + url.search });
            return response.end();
          }
          if (route || (path.extname(url.pathname) && !url.pathname.endsWith('.html'))) return next();
          try {
            const html = await readFile(path.join(projectDir, 'dist/404.html'));
            response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end(request.method === 'HEAD' ? undefined : html);
          } catch (error) { next(error); }
        });
      },
    }],
    resolve: {
      alias: {
        '@': path.resolve(projectDir, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
