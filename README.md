# Cabinet Dentaire Sète — Orthodontie invisible

React 19, Vite 8 and Tailwind CSS 4. Every production route is rendered to HTML during the build; its main content and links are available without JavaScript. Brand fonts, palette, homepage composition, header and footer are retained.

## Commands

- `npm install` installs dependencies (use `npm ci` for a reproducible deployment).
- `npm run dev` starts development on port 3000. Discovery files are served from the shared registry.
- `npm run lint` checks TypeScript.
- `npm run build` generates the deployable `dist/` directory, including 19 HTML pages and discovery files.
- `npm run preview` serves the production build locally, with canonical route redirects and custom 404 responses. It is not a production server.

## Source architecture

```text
src/content/
  routes.ts                 Paths, titles, descriptions, parents, editorial dates
  pages.ts                  French content sections, sources, related links, images
src/components/pages/
  ContentPage.tsx            Shared editorial layout, contents list and related topics
src/components/common/
  Breadcrumb.tsx            Breadcrumbs shared with the structured-data hierarchy
  SiteImage.tsx             Responsive AVIF/JPEG images with dimensions
src/HomePage.tsx             Existing homepage sections
src/App.tsx                  Information pages and not-found content
src/entry-server.tsx         Static React rendering
scripts/
  seo.ts                    Schema graph, social images, sitemap, robots, llms, redirects
  prerender.ts              Route HTML and metadata generation
vite.config.ts              Development discovery endpoints and preview HTTP handling
```

## Generated routes

```text
/
/aligneurs-transparents/
/orthodontie-adulte/
/prix-remboursement/
/bilan-aligneurs-sete/
/remboursement-orthodontie-adulte/
/dents-chevauchees/
/diasteme-dents-ecartees/
/dents-qui-rebougent-apres-appareil/
/duree-traitement/
/contention/
/aligneurs-vs-bagues/
/faq/
/guides/
  premiere-consultation/
  entretien-aligneurs/
  aligneurs-repas-boissons/
  aligneur-perdu-casse/
/praticien/
```

## Discovery and metadata

All pre-appointment links point to `https://cabinetdentairesete.fr/pre-rendez-vous/`. The request and consent form are hosted on the main practice website. Phone links remain available for direct contact.

`dist/sitemap.xml`, `dist/robots.txt`, `dist/llms.txt` and `dist/_redirects` are generated from the route registry. Do not add manually maintained copies to `public/`.

Each page has a self-referencing canonical on `https://orthodontie.cabinetdentairesete.fr/`, unique title/description, Open Graph and Twitter metadata, one H1, and a JSON-LD graph connecting WebSite, Dentist, Person, WebPage and BreadcrumbList. No invented ratings, reviews, credentials, medical reviewer or treatment outcomes are added. The guide hub also exposes its visible resource collection as an ItemList.

The sitemap includes all 19 pages and the editorial images actually used on them. `lastmod` is an explicit editorial date, not the build time. When a page changes substantially, update that page's date in `routes.ts`; do not refresh all dates just to appear recent. Never add placeholders or redirects to the sitemap.

The custom `404.html` has `noindex`, no canonical to the homepage and no homepage image preload. Normal pages permit indexing and large image previews. This makes them eligible for crawling; it does not guarantee indexing or rankings.

`llms.txt` is a supplementary Markdown directory containing factual practice details and links to the same public pages. It does not control crawler access or guarantee inclusion in AI answers. Google does not require it for AI Overviews or AI Mode: https://developers.google.com/search/docs/appearance/ai-features

## Production deployment: required host behavior

Deploy the **contents of `dist/`**, including generated route folders. Do not deploy only the source `index.html` and do not configure an SPA fallback to `/index.html` for every request.

On platforms supporting Netlify-style `_redirects`, the generated file redirects slashless and `index.html` variants to the canonical path and sends unmatched requests to `404.html` with HTTP 404. Verify that the host honors file shadowing and these rules.

On other hosts configure equivalent behavior:

- Existing directory paths serve their own `index.html` with HTTP 200.
- Slashless route URLs and explicit `index.html` variants redirect permanently to the trailing-slash canonical.
- Unknown URLs serve `404.html` with HTTP 404, including paths ending in `.html`.
- Enforce HTTPS and the canonical hostname at the host/CDN layer, preserving paths.
- Serve `.xml` as XML, `.txt` as UTF-8 text and AVIF/JPEG/font files with correct content types.
- Cache hashed `/assets/` files immutably. Revalidate HTML and discovery documents after publishing.
- Check for host-wide `X-Robots-Tag: noindex`, authentication, crawler blocking or staging rules before release.

The hosting platform has not been identified or configured remotely. Local preview behavior does not establish production HTTP behavior.

## Editorial and indexing follow-up

For the broader English query “dentist sete”, the main practice site already has an English introduction at `https://cabinetdentairesete.fr/en/`. The practitioner page and footer here link to it. Keep general dental information on the main site and aligner information on this subdomain; do not create a second near-duplicate English landing page here. The English page explicitly says that consultation in English has not been confirmed.

The screenshot of this query shows a Google local results panel. Website changes alone cannot secure a place in that panel. With access to the practice's Google Business Profile, verify the listing, its accurate name, primary category, address, phone, website URL, opening hours and photos against the practice's real details. Keep the main practice URL as the general website destination, and link from its relevant aligner content to this subdomain. Review the profile and Search Console performance after publication; do not invent reviews or keyword-stuff the business name. Google's local ranking guidance: https://support.google.com/business/answer/7091

1. Have the clinician check the new educational content before public release. The pages carry an editorial update date and public references; they do **not** claim clinical review by Dr Abdessadok.
2. Confirm practice-specific processes and add useful first-hand detail after validation. The supplied practitioner portrait is used on the homepage and practitioner page; other illustrative images remain labelled.
3. Complete the practice's legal/publisher and privacy information using verified details; do not invent registration numbers, opening hours or credentials.
4. Publish the generated build and verify representative 200, 301 and 404 responses, robots and sitemap on the real domain.
5. Verify a Search Console property covering the subdomain. Submit `https://orthodontie.cabinetdentairesete.fr/sitemap.xml`; inspect the homepage and a few priority topic/guide URLs. No submission has been performed here.
6. Add a relevant link from the main practice website to this subdomain when editing that website is authorized. Keep each subdomain page's own canonical.
7. Monitor Page Indexing, chosen canonicals, queries, clicks and Core Web Vitals using real production data. Expand content in response to patient questions and evidence, with distinct intent for each new page.

Medical sources used in the pages include Assurance Maladie (French reimbursement rules), NHS and British Orthodontic Society patient information. UK sources are not used to describe French reimbursement.

The supplied SEO research informed the focused clinical assessment and adult reimbursement pages. It also identifies a possible overlap with orthodontic articles on the main practice domain. Review those existing URLs and any proposed migrations one by one with access to that site's content and analytics. The research's suggested Invisalign page, city variants, practitioner qualifications and equipment details require separate verification before publication; the earlier 3D suggestion is obsolete. The current site keeps the established static imagery and describes the practitioner only as a chirurgien-dentiste.

Scroll reveals are optional client enhancements: the content is already in the generated HTML and stays visible without JavaScript or with reduced motion enabled. Article sections, cards and buttons use the existing brand palette. Narrow screens use compact vertical spacing and a stacked comparison layout. A live visual check at 375, 390, 430 and 768 px remains necessary when a browser is available.
