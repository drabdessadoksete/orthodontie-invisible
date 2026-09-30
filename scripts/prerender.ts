import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { routes, SITE_ORIGIN } from '../src/content/routes';
import { discoveryFiles, escapeHtml, socialImage, structuredData } from './seo';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const { renderRoute } = await import(pathToFileURL(path.join(distDir, 'server/entry-server.js')).href);

function buildHead(route: (typeof routes)[number], isNotFound = false): string {
  const title = isNotFound ? 'Page introuvable | Cabinet Dentaire Sète' : route.title;
  const description = isNotFound ? 'La page demandée est introuvable.' : route.description;
  const canonical = `${SITE_ORIGIN}${route.path}`;
  const image = socialImage(route);
  const metas = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:site_name" content="Cabinet Dentaire Sète" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    ...(!isNotFound ? [`<meta property="og:url" content="${escapeHtml(canonical)}" />`] : []),
    `<meta property="og:image" content="${escapeHtml(image.url)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(image.alt)}" />`,
    `<meta property="og:image:width" content="${image.width}" />`,
    `<meta property="og:image:height" content="${image.height}" />`,
    '<meta property="og:image:type" content="image/jpeg" />',
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:image" content="${escapeHtml(image.url)}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(image.alt)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  ];

  if (isNotFound) {
    metas.push('<meta name="robots" content="noindex" />');
  } else {
    metas.push('<meta name="robots" content="index, follow, max-image-preview:large" />');
    metas.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  }
  if (route.path === '/' && !isNotFound) {
    metas.push('<link rel="preload" as="image" href="/images/optimized/aligner-macro-768.avif" imagesrcset="/images/optimized/aligner-macro-480.avif 480w, /images/optimized/aligner-macro-768.avif 768w, /images/optimized/aligner-macro-896.avif 896w" imagesizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 90vw" type="image/avif" fetchpriority="high" />');
  }

  const schema = isNotFound ? [] : [structuredData(route)];
  for (const item of schema) metas.push(`<script type="application/ld+json">${JSON.stringify(item).replace(/</g, '\\u003c')}</script>`);
  return metas.join('\n    ');
}

function makeDocument(route: (typeof routes)[number], pathname: string, isNotFound = false): string {
  const markup = renderRoute(pathname, isNotFound);
  const headPattern = /\s*<title>[\s\S]*?<\/title>|\s*<meta name="description"[^>]*>|\s*<link rel="canonical"[^>]*>|\s*<meta (?:property="og:[^"]+"|name="twitter:[^"]+")[^>]*>|\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  const cleanTemplate = template.replace(headPattern, '');
  return cleanTemplate
    .replace('</head>', `    ${buildHead(route, isNotFound)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
}

for (const route of routes) {
  const relativePath = route.path === '/' ? 'index.html' : path.join(route.path.slice(1), 'index.html');
  const filePath = path.join(distDir, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, makeDocument(route, route.path), 'utf8');
}

const home = routes[0];
await writeFile(path.join(distDir, '404.html'), makeDocument(home, '/404/', true), 'utf8');

for (const [filename, contents] of Object.entries(discoveryFiles())) {
  await writeFile(path.join(distDir, filename), contents, 'utf8');
}
await rm(path.join(distDir, 'server'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} indexable pages, 404, sitemap, robots and llms.txt.`);
