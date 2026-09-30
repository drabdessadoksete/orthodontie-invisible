import { PRE_APPOINTMENT_URL } from '../../content/links';
import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Check, Clock, HeartHandshake } from 'lucide-react';

export const SuitabilitySection: React.FC = () => {
  const criteria = [
    {
      label: 'État des dents et des gencives',
      description: 'Ces éléments font partie de l’évaluation bucco-dentaire.',
    },
    {
      label: 'Consignes de port',
      description: 'Les modalités d’utilisation sont expliquées si un traitement est proposé.',
    },
    {
      label: 'Objectifs d’alignement',
      description: 'Les objectifs et les options sont discutés en fonction de l’examen.',
    },
    {
      label: 'Occlusion et situation clinique',
      description: 'Certaines situations nécessitent une évaluation ou une prise en charge différente.',
    },
    {
      label: 'Antécédents et soins en cours',
      description: 'Les soins déjà réalisés et les besoins actuels sont abordés lors de l’examen.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Évaluation et faisabilité"
          title="Les aligneurs sont-ils adaptés à votre situation ?"
          subtitle="La pertinence d’un traitement par aligneurs dépend de la situation bucco-dentaire et des objectifs de chaque personne."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main criteria checklist */}
          <div className="lg:col-span-8 bg-clinic-surface rounded-2xl border border-clinic-ink/12 p-6 sm:p-8 shadow-[0_4px_20px_rgba(16,52,75,0.03)]">
            <h3 className="text-base font-serif font-bold text-clinic-ink pb-4 border-b border-clinic-ink/10 flex items-center justify-between">
              <span>Facteurs déterminants lors du bilan initial</span>
              <span className="text-xs font-mono font-normal text-clinic-muted">Examen au cabinet</span>
            </h3>

            <div className="divide-y divide-[#10243b]/10 mt-2">
              {criteria.map((item, idx) => (
                <div key={idx} className="py-4.5 flex items-start gap-4">
                  <div
                    className="mt-0.5 p-1 rounded-full shrink-0 bg-clinic-blue/10 text-clinic-blue border border-[#235c76]/20"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-clinic-ink flex items-center gap-2">
                      {item.label}
                      <span className="text-[11px] font-normal text-clinic-muted">
                        · À examiner
                      </span>
                    </h4>
                    <p className="mt-1 text-xs text-clinic-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear medical reassurance */}
            <div className="mt-6 p-4 rounded-xl bg-clinic-bg border border-clinic-ink/10 text-xs text-clinic-muted leading-relaxed">
              <strong className="text-clinic-ink font-semibold block mb-1">
                La transparence médicale avant tout :
              </strong>
                Un échange général ne permet pas de déterminer si un traitement convient. Cette appréciation demande un examen par un professionnel de santé.
            </div>
          </div>

          {/* Side card: Discipline & Commitment */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-clinic-surface rounded-2xl border border-clinic-ink/12 p-6 shadow-[0_4px_20px_rgba(16,52,75,0.03)]">
              <div className="w-10 h-10 rounded-xl bg-clinic-bg text-clinic-gold border border-clinic-ink/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-serif font-bold text-clinic-ink">
                Les consignes de port
              </h3>
              <p className="mt-2 text-xs text-clinic-muted leading-relaxed">
                Le rythme de port et les consignes d’utilisation doivent être expliqués par le praticien selon le plan de soins proposé.
              </p>
              <div className="mt-4 pt-4 border-t border-clinic-ink/10 flex items-center justify-between text-xs text-clinic-muted">
                <span>Information individualisée</span>
                <span className="font-mono text-clinic-navy font-bold">Selon le plan</span>
              </div>
            </div>

            <div className="bg-clinic-navy text-white rounded-2xl p-6 shadow-md border border-clinic-gold-light/30">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-clinic-gold-light border border-white/15 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-serif font-bold text-white">
                Demander les modalités de rendez-vous
              </h3>
              <p className="mt-2 text-xs text-white/80 leading-relaxed font-light">
                Un échange téléphonique peut préciser votre demande et les modalités de prise de rendez-vous. Il ne remplace pas un examen.
              </p>
              <a
                href={PRE_APPOINTMENT_URL}
                className="mt-5 w-full btn-accent text-xs"
              >
                <span>Demander un échange d’orientation</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
