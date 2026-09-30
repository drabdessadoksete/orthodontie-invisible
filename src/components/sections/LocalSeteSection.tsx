import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SiteImage } from '../common/SiteImage';
import { Phone, ArrowRight } from 'lucide-react';

export const LocalSeteSection: React.FC = () => {
  return (
    <section id="cabinet" className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Cabinet à Sète"
          title="Le cabinet dentaire à Sète"
          subtitle="Cabinet Dentaire Sète · 10 Bd Danièle Casanova · 34200 Sète."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Signature Location Card matching cabinetdentairesete.fr */}
          <div className="lg:col-span-5 bg-clinic-navy text-white rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xl border border-clinic-gold-light/30">
            <div>
              <span className="section-kicker section-kicker--light mb-3">
                Cabinet à Sète
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-2 leading-tight">
                Cabinet Dentaire Dr Abdessadok
              </h3>

              <address className="not-italic text-sm text-white/80 mt-5 leading-relaxed">
                10 Bd Danièle Casanova<br />
                34200 Sète, France
              </address>

              <div className="mt-6 pt-5 border-t border-white/15 space-y-3">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-clinic-gold-light" />
                  <a
                    href="tel:0422910594"
                    className="text-base font-bold font-mono text-white hover:text-clinic-gold-light transition-colors"
                  >
                    04 22 91 05 94
                  </a>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <a
                href="https://maps.app.goo.gl/UALfaQYvaAV5otoq9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full text-center text-xs"
              >
                <span>Itinéraire vers le cabinet à Sète</span>
                <ArrowRight className="w-3.5 h-3.5 text-clinic-navy-deep" />
              </a>
            </div>
          </div>

          {/* Column 2: Context Bassin de Thau & Placeholders ASSET_07 & ASSET_08 */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="bg-clinic-surface rounded-2xl border border-clinic-ink/12 p-6 sm:p-7 shadow-sm">
              <h3 className="text-base font-serif font-bold text-clinic-ink">
                Coordonnées du cabinet
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-clinic-muted leading-relaxed">
                Le cabinet est situé à Sète, au 10 Bd Danièle Casanova.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-2 rounded-2xl bg-clinic-surface border border-clinic-ink/12 shadow-sm">
                <SiteImage
                  slug="cabinet-dentaire-illustration"
                  alt="Illustration d’un espace de soins dentaire contemporain ; elle ne représente pas les locaux du cabinet."
                  width={1672}
                  height={941}
                  aspect="16/9"
                  widths={[480, 768, 1200]}
                  fallbackWidth={1200}
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                  caption="Image d’illustration ; les locaux du cabinet peuvent différer."
                />
                <div className="p-2 text-[11px] text-clinic-muted text-center">
                  Cabinet médical à Sète
                </div>
              </div>

              <div className="p-2 rounded-2xl bg-clinic-surface border border-clinic-ink/12 shadow-sm">
                <SiteImage
                  slug="port-sete-illustration"
                  alt="Vue illustrative du port de Sète et de ses quais à la lumière du soir."
                  width={1672}
                  height={941}
                  aspect="16/9"
                  widths={[480, 768, 1200]}
                  fallbackWidth={1200}
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                  caption="Vue illustrative de Sète."
                />
                <div className="p-2 text-[11px] text-clinic-muted text-center">
                  Bassin de Thau · Sète
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
