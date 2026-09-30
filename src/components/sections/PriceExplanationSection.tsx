import { PRE_APPOINTMENT_URL } from '../../content/links';
import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Calculator, FileText, HelpCircle, ArrowRight, Shield } from 'lucide-react';

export const PriceExplanationSection: React.FC = () => {
  const costFactors = [
    {
      title: 'La situation examinée',
      desc: 'Les éléments utiles à l’évaluation et les objectifs exprimés sont propres à chaque personne.',
    },
    {
      title: 'Les modalités proposées',
      desc: 'Le praticien explique les étapes et les modalités envisagées si un traitement est indiqué.',
    },
    {
      title: 'Le suivi',
      desc: 'Les modalités de suivi et les éventuels éléments associés sont précisés dans la proposition de soins.',
    },
    {
      title: 'Les questions à poser',
      desc: 'Vous pouvez demander ce qui est inclus dans les honoraires et les éventuels frais complémentaires.',
    },
  ];

  return (
    <section id="prix" className="py-20 md:py-28 bg-clinic-surface border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Honoraires & Transparence"
          title="Combien coûte un traitement par aligneurs ?"
          subtitle="Les honoraires dépendent de la situation examinée et de la proposition de soins. Demandez les informations détaillées avant toute décision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Explanatory Column */}
          <div className="lg:col-span-8 bg-clinic-surface rounded-2xl border border-clinic-ink/12 p-6 sm:p-8 shadow-[0_4px_20px_rgba(16,52,75,0.03)]">
            <h3 className="text-base font-serif font-bold text-clinic-ink pb-4 border-b border-clinic-ink/10 flex items-center justify-between">
              <span>Les facteurs qui définissent votre devis</span>
              <span className="text-xs font-mono font-normal text-clinic-muted">Informations à demander</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              {costFactors.map((factor, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-clinic-bg border border-clinic-ink/10">
                  <span className="text-xs font-serif font-bold text-clinic-gold mb-1 block">
                    0{idx + 1}.
                  </span>
                  <h4 className="text-sm font-semibold text-clinic-ink">
                    {factor.title}
                  </h4>
                  <p className="mt-1 text-xs text-clinic-muted leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Security & Mutuelle information */}
            <div className="mt-8 pt-6 border-t border-clinic-ink/10">
              <h4 className="text-sm font-serif font-bold text-clinic-ink flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-clinic-gold" />
                <span>Prise en charge et remboursements complémentaires</span>
              </h4>
              <p className="mt-2 text-xs text-clinic-muted leading-relaxed">
                Les règles de prise en charge peuvent dépendre de votre situation et évoluer. Pour une réponse adaptée, rapprochez-vous de votre caisse d’assurance maladie et de votre complémentaire santé.
              </p>
              <a href="/remboursement-orthodontie-adulte/" className="editorial-link inline-block mt-3 text-sm">Comprendre les règles après 16 ans</a>
              <div className="mt-4 p-3.5 rounded-xl bg-clinic-bg border border-clinic-ink/10 text-xs text-clinic-ink flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>
                  Demandez au cabinet un document détaillant les honoraires proposés, puis vérifiez les modalités de prise en charge auprès de votre complémentaire santé.
                </span>
              </div>
            </div>
          </div>

          {/* Side Card: Devis & Pre-Rdv */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-clinic-surface rounded-2xl border border-clinic-ink/12 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-clinic-bg text-clinic-gold border border-clinic-ink/10 flex items-center justify-center mb-4">
                <Calculator className="w-5 h-5" />
              </div>
                  <h3 className="text-sm font-serif font-bold text-clinic-ink">
                Obtenir un devis personnalisé
                  </h3>
              <p className="mt-2 text-xs text-clinic-muted leading-relaxed">
                Un échange à distance ne permet pas de déterminer un tarif ni de confirmer si un traitement est adapté. Ces points sont abordés au cabinet.
              </p>

              <a
                href={PRE_APPOINTMENT_URL}
                className="mt-5 w-full btn-accent text-xs"
              >
                <span>Demander un pré-rendez-vous</span>
                <ArrowRight className="w-4 h-4 text-clinic-navy-deep" />
              </a>
            </div>

            <div className="p-4 rounded-xl border border-clinic-ink/10 bg-clinic-bg flex items-start gap-3 text-xs text-clinic-muted">
              <Shield className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
              <div>
                Les informations tarifaires doivent être clarifiées avec le cabinet avant toute décision.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
