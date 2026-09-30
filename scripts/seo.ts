import { breadcrumbsFor, routes, SITE_ORIGIN, type RouteContent } from '../src/content/routes.ts';
import { editorialImages, pages } from '../src/content/pages.ts';

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}

export function socialImage(route: RouteContent) {
  const imageKey = pages[route.path]?.image;
  const image = imageKey ? editorialImages[imageKey] : editorialImages.aligner;
  const width = image.aspect === '3/4' ? 1086 : 1200;
  return { url: `${SITE_ORIGIN}/images/optimized/${image.slug}-${width}.jpg`, alt: image.alt, width, height: image.aspect === '3/4' ? 1448 : image.aspect === '16/9' ? 675 : 900 };
}

export function structuredData(route: RouteContent) {
  const canonical = `${SITE_ORIGIN}${route.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${SITE_ORIGIN}/#website`, url: `${SITE_ORIGIN}/`, name: 'Cabinet Dentaire Sète — Orthodontie invisible', inLanguage: 'fr-FR', publisher: { '@id': `${SITE_ORIGIN}/#cabinet` } },
      {
        '@type': 'Dentist', '@id': `${SITE_ORIGIN}/#cabinet`, name: 'Cabinet Dentaire Sète', url: `${SITE_ORIGIN}/`, telephone: '+33422910594',
        logo: `${SITE_ORIGIN}/logo-cabinet-dentaire-sete.png`,
        address: { '@type': 'PostalAddress', streetAddress: '10 Bd Danièle Casanova', postalCode: '34200', addressLocality: 'Sète', addressCountry: 'FR' },
        employee: { '@id': `${SITE_ORIGIN}/#praticien` }, sameAs: ['https://cabinetdentairesete.fr/'],
      },
      { '@type': 'Person', '@id': `${SITE_ORIGIN}/#praticien`, name: 'Dr Abdessamed Abdessadok', jobTitle: 'Chirurgien-dentiste', url: `${SITE_ORIGIN}/praticien/`, image: `${SITE_ORIGIN}/images/optimized/portrait-dr-abdessamed-abdessadok-1086.jpg`, worksFor: { '@id': `${SITE_ORIGIN}/#cabinet` } },
      {
        '@type': route.path === '/guides/' ? 'CollectionPage' : route.path === '/praticien/' ? 'AboutPage' : 'WebPage',
        '@id': `${canonical}#webpage`, url: canonical, name: route.title, description: route.description, inLanguage: 'fr-FR',
        ...(route.updated ? { dateModified: route.updated } : {}),
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` }, about: { '@id': `${SITE_ORIGIN}/#cabinet` },
        breadcrumb: { '@id': `${canonical}#breadcrumb` },
        ...(route.path === '/guides/' ? { mainEntity: { '@type': 'ItemList', itemListElement: routes.filter(item => !['/', '/guides/', '/praticien/'].includes(item.path)).map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.heading, url: `${SITE_ORIGIN}${item.path}` })) } } : {}),
      },
      { '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement: breadcrumbsFor(route).map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, name: crumb.name, item: `${SITE_ORIGIN}${crumb.path}` })) },
    ],
  };
}

const homeImages = [
  '/images/aligner-macro.jpg',
  '/images/optimized/portrait-dr-abdessamed-abdessadok-1086.jpg',
  ...['aligneur-transparent-macro-1200', 'adulte-environnement-quotidien-1086', 'etui-aligneur-transparent-1200', 'contention-fil-et-gouttiere-1200', 'planification-aligneurs-sans-visage-1200', 'cabinet-dentaire-illustration-1200', 'port-sete-illustration-1200'].map(slug => `/images/optimized/${slug}.jpg`),
];

// One registry drives production and development discovery documents.
export function discoveryFiles(): Record<string, string> {
  const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...routes.map(route => {
      const key = pages[route.path]?.image;
      const images = route.path === '/' ? homeImages : key ? [`/images/optimized/${editorialImages[key].slug}-${editorialImages[key].aspect === '3/4' ? 1086 : 1200}.jpg`] : [];
      return `  <url><loc>${escapeHtml(SITE_ORIGIN + route.path)}</loc>${route.updated ? `<lastmod>${route.updated}</lastmod>` : ''}${images.map(image => `<image:image><image:loc>${escapeHtml(SITE_ORIGIN + image)}</image:loc></image:image>`).join('')}</url>`;
    }), '</urlset>', ''].join('\n');
  const llms = ['# Cabinet Dentaire Sète — Aligneurs transparents', '', '> Informations générales en français sur les aligneurs transparents à Sète. Les pages ne remplacent pas un examen clinique.', '',
    'Praticien : Dr Abdessamed Abdessadok, chirurgien-dentiste.', 'Adresse : 10 Bd Danièle Casanova, 34200 Sète, France.', 'Téléphone : 04 22 91 05 94.', `Site canonique : ${SITE_ORIGIN}/`, 'Site principal du cabinet : https://cabinetdentairesete.fr/', 'Pré-rendez-vous : https://cabinetdentairesete.fr/pre-rendez-vous/', '',
    'Les visuels d’illustration ne représentent pas des résultats de traitement. Les informations ne garantissent ni indication, ni durée, ni prix. Les sources publiques sont indiquées dans les pages concernées.', '',
    ...[...new Set(routes.map(route => route.category))].flatMap(category => [`## ${category}`, '', ...routes.filter(route => route.category === category).map(route => `- [${route.heading}](${SITE_ORIGIN}${route.path}): ${route.description}`), '']),
  ].join('\n');
  const redirects = ['/index.html / 301!', ...routes.filter(route => route.path !== '/').flatMap(route => [`${route.path.slice(0, -1)} ${route.path} 301!`, `${route.path}index.html ${route.path} 301!`]), '/* /404.html 404', ''].join('\n');
  return { 'sitemap.xml': sitemap, 'robots.txt': `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, 'llms.txt': llms, '_redirects': redirects };
}
