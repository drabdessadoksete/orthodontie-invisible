import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ComparisonRow } from '../../types';
import { Scale } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const rows: ComparisonRow[] = [
    {
      dimension: 'Visibilité esthétique',
      aligners: 'Gouttières en matériau transparent ; leur visibilité varie selon les personnes et les situations.',
      braces: 'Les appareils fixes comportent des éléments attachés aux dents.',
      clinicalContext: 'L’apparence seule ne permet pas de déterminer l’option adaptée.',
    },
    {
      dimension: 'Amovibilité',
      aligners: 'Amovibles et manipulés selon les consignes du praticien.',
      braces: 'Restent en place jusqu’à leur retrait par un professionnel.',
      clinicalContext: 'Le mode d’utilisation diffère selon le dispositif.',
    },
    {
      dimension: 'Discipline requise',
      aligners: 'Le port et les manipulations suivent les consignes remises au patient.',
      braces: 'Les consignes sont expliquées selon l’appareil et le plan de soins.',
      clinicalContext: 'Le praticien précise les modalités de suivi.',
    },
    {
      dimension: 'Hygiène bucco-dentaire',
      aligners: 'Les consignes de nettoyage sont précisées pour les dents et les gouttières.',
      braces: 'Les consignes d’hygiène tiennent compte des éléments fixes.',
      clinicalContext: 'Les recommandations d’entretien varient selon le dispositif.',
    },
    {
      dimension: 'Indications cliniques',
      aligners: 'La pertinence dépend de l’examen et des objectifs envisagés.',
      braces: 'La pertinence dépend de l’examen et des objectifs envisagés.',
      clinicalContext: 'Un examen individuel est nécessaire pour comparer les options.',
    },
    {
      dimension: 'Urgences au cabinet',
      aligners: 'En cas de problème, demandez conseil au cabinet.',
      braces: 'En cas de problème, demandez conseil au cabinet.',
      clinicalContext: 'Le cabinet précise la conduite à tenir selon la situation.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Comparatif clinique objectif"
          title="Aligneurs transparents ou appareils fixes"
          subtitle="Ces dispositifs fonctionnent différemment. Un examen permet de discuter des options selon la situation et les objectifs de chacun."
        />

        {/* Clean Responsive Comparison Table */}
        <div className="rounded-2xl border border-clinic-ink/12 shadow-[0_2px_16px_rgba(16,52,75,0.03)] bg-clinic-surface">
          <table className="comparison-table w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-clinic-ink/10 text-xs font-bold">
                <th className="py-4.5 px-6 w-1/4 text-clinic-ink bg-clinic-bg/70">Critère d’analyse</th>
                <th className="py-4.5 px-6 w-3/8 text-clinic-navy bg-clinic-gold-light/20 border-x border-clinic-gold-light/40">
                  <span className="font-serif font-bold text-sm block">Aligneurs transparents</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-clinic-gold">Gouttières amovibles</span>
                </th>
                <th className="py-4.5 px-6 w-3/8 text-clinic-muted bg-clinic-bg/70">Appareil fixe (Bagues)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#10243b]/10 text-xs">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-clinic-bg/40 transition-colors">
                  <td className="py-4 px-6 font-semibold text-clinic-ink bg-clinic-surface">
                    {row.dimension}
                    <span className="block mt-0.5 text-[11px] font-normal text-clinic-muted">
                      {row.clinicalContext}
                    </span>
                  </td>
                  <td data-label="Aligneurs transparents" className="py-4 px-6 text-clinic-ink bg-clinic-gold-light/10 leading-relaxed font-medium border-x border-clinic-gold-light/25">
                    {row.aligners}
                  </td>
                  <td data-label="Appareil fixe" className="py-4 px-6 text-clinic-muted bg-clinic-surface leading-relaxed">
                    {row.braces}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Closing balanced note */}
        <div className="mt-6 p-4 rounded-xl bg-clinic-surface border border-clinic-ink/12 flex items-start gap-3 text-xs text-clinic-muted shadow-2xs">
          <Scale className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-clinic-ink">À retenir :</strong> L’examen permet de discuter de la pertinence des aligneurs dans votre situation, des limites de cette option et des autres prises en charge à envisager.
          </p>
        </div>

      </div>
    </section>
  );
};
