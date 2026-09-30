import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SiteImage } from '../common/SiteImage';
import { Info, Layers, EyeOff, RotateCcw } from 'lucide-react';

export const WhatAreAlignersSection: React.FC = () => {
  return (
    <section id="traitement" className="py-20 md:py-28 bg-clinic-surface border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Column 1: Editorial Explanation */}
          <div className="lg:col-span-6">
            <SectionHeading
              kicker="Fondamentaux du traitement"
              title="Qu’est-ce qu’un aligneur transparent ?"
              subtitle="Des gouttières transparentes et amovibles, utilisées selon les consignes du praticien."
            />

            <div className="space-y-4 text-sm text-clinic-muted leading-relaxed">
              <p>
                Les <strong className="text-clinic-ink">aligneurs transparents</strong> (ou gouttières d’alignement) sont des dispositifs amovibles. Leur utilisation et leur indication sont discutées avec le praticien.
              </p>
              <p>
                Le rythme de port et de renouvellement des gouttières, s’il y a lieu, dépend du plan de soins communiqué par le praticien.
              </p>
            </div>

            {/* Crucial distinction box: Aligneurs vs Invisalign */}
            <div className="mt-6 p-4 sm:p-5 rounded-xl bg-clinic-bg border border-clinic-ink/12">
              <div className="flex items-start gap-3">
                <Info className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-clinic-ink uppercase tracking-wider font-mono">
                    Précision sur les appellations : Aligneurs vs Invisalign®
                  </h3>
                  <p className="mt-1.5 text-xs text-clinic-muted leading-relaxed">
                    <strong className="text-clinic-ink">Invisalign®</strong> est une marque d’aligneurs transparents. L’<strong className="text-clinic-ink">aligneur transparent</strong> désigne une catégorie de dispositifs pouvant être proposés après un bilan. Le diagnostic, le plan de traitement et le suivi comptent davantage que le nom commercial pour discuter d’une option adaptée.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-clinic-ink/10">
              <div className="p-4 rounded-xl bg-clinic-bg/70 border border-clinic-ink/10">
                <Layers className="w-4 h-4 text-clinic-gold mb-2" />
                <h3 className="text-xs font-semibold text-clinic-ink">Matériau transparent</h3>
                <p className="mt-1 text-[11px] text-clinic-muted leading-normal">
                  Série de gouttières conçue pour accompagner les déplacements prévus par le plan de traitement.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-clinic-bg/70 border border-clinic-ink/10">
                <EyeOff className="w-4 h-4 text-clinic-gold mb-2" />
                <h3 className="text-xs font-semibold text-clinic-ink">Apparence transparente</h3>
                <p className="mt-1 text-[11px] text-clinic-muted leading-normal">
                  Leur apparence et leur visibilité peuvent varier selon la personne et le dispositif.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-clinic-bg/70 border border-clinic-ink/10">
                <RotateCcw className="w-4 h-4 text-clinic-gold mb-2" />
                <h3 className="text-xs font-semibold text-clinic-ink">Dispositif amovible</h3>
                <p className="mt-1 text-[11px] text-clinic-muted leading-normal">
                  Amovible pour les repas et l’hygiène, selon les consignes de port.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Visual Macro Placeholder (ASSET_02) */}
          <div className="lg:col-span-6">
            <div className="p-2 rounded-2xl bg-clinic-bg border border-clinic-ink/12 shadow-[0_4px_24px_rgba(16,52,75,0.03)]">
              <SiteImage
                slug="aligneur-transparent-macro"
                alt="Gouttière d’alignement transparente photographiée en gros plan sur un fond clair."
                width={1448}
                height={1086}
                aspect="4/3"
                widths={[480, 768, 1200]}
                fallbackWidth={1200}
                sizes="(min-width: 1024px) 576px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-4 bg-clinic-surface rounded-xl mt-2 border border-clinic-ink/10 flex items-center justify-between text-xs text-clinic-muted">
                <div>
                  <span className="font-semibold text-clinic-ink block">Dispositif amovible</span>
                  <span className="text-clinic-muted text-[11px]">Modalités d’utilisation expliquées au cabinet</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-clinic-navy bg-clinic-gold-light/25 px-2.5 py-1 rounded">Information générale</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
