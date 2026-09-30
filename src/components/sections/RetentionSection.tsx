import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SiteImage } from '../common/SiteImage';
import { Anchor, ShieldCheck, AlertTriangle } from 'lucide-react';

export const RetentionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-clinic-surface border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Editorial Narrative on Retention */}
          <div className="lg:col-span-7">
            <SectionHeading
              kicker="Après le traitement"
              title="Contention et suivi après traitement"
              subtitle="La contention et le suivi éventuels sont des sujets à discuter avec le praticien à la fin d’un traitement d’alignement."
            />

            <div className="space-y-4 text-sm text-clinic-muted leading-relaxed">
              <p>
                Les dents peuvent évoluer au fil du temps. La contention fait partie des éléments à évoquer avec le praticien lors de la discussion sur le traitement.
              </p>
              <p>
                Le type de dispositif et les consignes de suivi dépendent de l’évaluation et du plan proposé.
              </p>
            </div>

            {/* Two modes of retention */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-clinic-bg border border-clinic-ink/10 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-clinic-surface text-clinic-gold border border-clinic-ink/10 w-fit mb-3">
                  <Anchor className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-serif font-bold text-clinic-ink">
                  Dispositif fixe
                </h3>
                <p className="mt-1 text-[12px] text-clinic-muted leading-relaxed">
                  Un dispositif fixe peut faire partie des options abordées avec le praticien. Les modalités de pose et d’entretien dépendent de la situation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-clinic-bg border border-clinic-ink/10 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-clinic-surface text-clinic-gold border border-clinic-ink/10 w-fit mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-serif font-bold text-clinic-ink">
                  Dispositif amovible
                </h3>
                <p className="mt-1 text-[12px] text-clinic-muted leading-relaxed">
                  Un dispositif amovible peut aussi être discuté. Le praticien précise les consignes de port et d’entretien adaptées.
                </p>
              </div>
            </div>

            {/* Clinical warning */}
            <div className="mt-6 p-4 rounded-xl bg-clinic-bg border border-clinic-gold/40 flex items-start gap-3 text-xs text-clinic-ink leading-relaxed">
              <AlertTriangle className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
              <span>
                La contention ne permet pas de garantir l’absence de tout changement. Demandez au praticien quelles options et quel suivi sont proposés dans votre situation.
              </span>
            </div>
          </div>

          {/* Column 2: ASSET_09 Placeholder */}
          <div className="lg:col-span-5">
            <div className="p-2.5 rounded-2xl bg-clinic-bg border border-clinic-ink/12 shadow-sm">
              <SiteImage
                slug="contention-fil-et-gouttiere"
                alt="Exemples illustratifs de dispositifs de contention fixe et amovible."
                width={1448}
                height={1086}
                aspect="4/3"
                widths={[480, 768, 1200]}
                fallbackWidth={1200}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-3 bg-clinic-surface rounded-xl mt-2 text-center text-xs text-clinic-muted font-mono">
                Stabilisation passive post-traitement · Suivi au cabinet
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
