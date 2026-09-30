import React from 'react';
import { ArrowRight } from 'lucide-react';
import { findRoute, type RouteContent } from '../../content/routes';
import { editorialImages, pages, sources } from '../../content/pages';
import { SiteImage } from '../common/SiteImage';
import { PRE_APPOINTMENT_URL } from '../../content/links';
import { Reveal } from '../common/Reveal';

interface ContentPageProps { page: RouteContent; notFound?: boolean; }

export function ContentPage({ page, notFound = false }: ContentPageProps) {
  const content = notFound ? undefined : pages[page.path];
  const image = content?.image ? editorialImages[content.image] : undefined;
  const articleImage = image && (
    <SiteImage
      {...image}
      widths={image.aspect === '3/4' ? [360, 540, 768, 1086] : [480, 768, 1200]}
      fallbackWidth={768}
      sizes={image.aspect === '3/4' ? '(min-width: 1024px) 384px, (min-width: 640px) 50vw, calc(100vw - 32px)' : '(min-width: 1024px) 768px, calc(100vw - 32px)'}
      caption={content?.image === 'practitioner' ? 'Dr Abdessamed Abdessadok, chirurgien-dentiste à Sète.' : 'Visuel d’illustration, ne représentant ni le praticien ni un résultat de traitement.'}
      className={content?.image === 'practitioner' ? 'my-10 max-w-sm mx-auto lg:mx-0' : 'my-12'}
    />
  );
  return (
    <>
      <section className="authority-hero content-page-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="section-kicker section-kicker--light mb-4">{notFound ? 'Page introuvable' : page.category}</span>
            <h1 className="content-page-title text-white text-balance">{notFound ? 'Cette page est introuvable' : page.heading}</h1>
            <p className="authority-hero__lead">{notFound ? 'La page demandée n’existe pas ou a été déplacée.' : page.summary}</p>
            <a href={notFound ? '/' : '#lire'} className="btn-accent mt-8">
              <span>{notFound ? 'Retour à l’accueil' : 'Lire les informations'}</span><ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      {content && (
        <article id="lire" className="editorial-page max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs text-clinic-muted mb-8">Informations générales · Mise à jour éditoriale : <time dateTime={page.updated}>{page.updated?.split('-').reverse().join('/')}</time></p>
              <nav aria-label="Sommaire de la page" className="editorial-toc mb-12 border-y border-clinic-ink/15 py-6">
                <h2 className="text-xl font-serif font-bold">Dans cette page</h2>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                  {content.sections.map(section => <li key={section.id}><a className="editorial-toc__link" href={`#${section.id}`}>{section.heading}<ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" /></a></li>)}
                </ul>
              </nav>
              {content.image === 'practitioner' && articleImage}
              {content.sections.map((section, index) => (
                <section key={section.id} id={section.id} className="editorial-section mb-12">
                  <Reveal delayMs={index % 3 * 60}>
                    <div className="editorial-section__heading"><span aria-hidden="true" className="editorial-section__number">{String(index + 1).padStart(2, "0")}</span><h2 className="editorial-heading">{section.heading}</h2></div>
                  {section.paragraphs?.map(paragraph => <p key={paragraph} className="editorial-section__paragraph mt-4 text-clinic-muted leading-relaxed">{paragraph}</p>)}
                  {section.points && <ul className="editorial-points mt-5 space-y-2 text-clinic-muted">{section.points.map(point => <li key={point}>{point}</li>)}</ul>}
                  {section.links && <ul className="editorial-next mt-6 space-y-2">{section.links.map(link => <li key={link.path}><a className="editorial-link" href={link.path}>{link.label}<span aria-hidden="true"> →</span></a></li>)}</ul>}
                  </Reveal>
                </section>
              ))}
              {content.image !== 'practitioner' && articleImage}
              {content.sources && (
                <section aria-labelledby="sources-title" className="border-t border-clinic-ink/15 pt-8">
                  <h2 id="sources-title" className="text-2xl font-serif font-bold">Sources et repères</h2>
                  <ul className="mt-4 space-y-3 text-sm">{content.sources.map(key => <li key={key}><a className="editorial-link" href={sources[key].url}>{sources[key].name}</a></li>)}</ul>
                  <p className="text-xs text-clinic-muted mt-4">Sources consultées le 30 septembre 2026. Les modalités de prise en charge en France sont à vérifier auprès de l’Assurance Maladie et de votre complémentaire.</p>
                </section>
              )}
              <p className="mt-8 text-sm text-clinic-muted">Ces informations ne remplacent pas un examen clinique ni les consignes du professionnel qui assure votre suivi.</p>
            </div>
            <aside className="min-w-0 space-y-10 lg:sticky lg:top-28 lg:self-start" aria-label="Pour poursuivre votre lecture">
              <nav aria-label="Sujets complémentaires">
                <h2 className="text-2xl font-serif font-bold">À lire également</h2>
                <ul className="mt-5 space-y-4">{content.related.map(path => { const related = findRoute(path)!; return <li key={path}><a className="editorial-link" href={path}>{related.heading}</a></li>; })}</ul>
                <a href="/guides/" className="editorial-link inline-block mt-6">Tous les guides →</a>
              </nav>
              <section className="editorial-contact rounded-xl p-5 sm:p-6">
                <h2 className="text-2xl font-serif font-bold">Votre consultation à Sète</h2>
                <p className="mt-4 text-sm text-clinic-muted">Dr Abdessamed Abdessadok<br />Chirurgien-dentiste</p>
                <address className="mt-4 not-italic text-sm text-clinic-muted">10 Bd Danièle Casanova<br />34200 Sète, France</address>
                <a href={PRE_APPOINTMENT_URL} className="btn-accent mt-6">Demander un pré-rendez-vous <ArrowRight className="w-4 h-4" aria-hidden="true" /></a>
                <a href="tel:+33422910594" className="editorial-link block mt-4 text-sm">Appeler le 04 22 91 05 94</a>
                <a href="/praticien/" className="editorial-link block mt-4 text-sm">Le praticien et le cabinet</a>
              </section>
            </aside>
          </div>
        </article>
      )}
    </>
  );
}
