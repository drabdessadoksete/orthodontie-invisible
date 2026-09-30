import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SiteImage } from '../common/SiteImage';
import { Briefcase, RefreshCw, Smile, Stethoscope } from 'lucide-react';

export const AdultOrthodonticsSection: React.FC = () => {
  const adultSituations = [
    {
      icon: Briefcase,
      title: 'Compatibilité avec votre vie professionnelle',
      text: 'Réunions, prises de parole et déjeuners : discutez de la visibilité de l’appareil, des consignes de port et d’une éventuelle période d’adaptation.',
    },
    {
      icon: RefreshCw,
      title: 'Correction d’une récidive d’adolescence',
      text: 'Si vos dents ont changé de position après un ancien appareil, apportez les informations sur le traitement et la contention précédents.',
    },
    {
      icon: Smile,
      title: 'Un projet longtemps reporté',
      text: 'Une demande reportée peut être abordée à l’âge adulte. Le bilan permet de discuter des options actuelles et de leurs contraintes.',
    },
    {
      icon: Stethoscope,
      title: 'Étape préparatoire à une réhabilitation globale',
      text: 'Si d’autres soins sont envisagés, signalez-les pour que le praticien examine les liens éventuels avec un projet d’alignement.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Asset Slot ASSET_04 */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="p-2.5 rounded-2xl bg-clinic-surface border border-clinic-ink/12 shadow-sm">
              <SiteImage
                slug="adulte-environnement-quotidien"
                alt="Portrait illustratif d’une adulte souriante dans un intérieur lumineux."
                width={1086}
                height={1448}
                aspect="3/4"
                widths={[360, 540, 768, 1086]}
                fallbackWidth={1086}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
              />
              <div className="p-3 bg-clinic-bg rounded-xl mt-2 text-center text-xs text-clinic-muted">
                L’âge adulte n’exclut pas à lui seul un avis sur l’alignement dentaire.
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              kicker="Orthodontie de l'adulte"
              title="Alignement dentaire à l’âge adulte : les points à examiner"
              subtitle="L’âge ne suffit pas à déterminer la faisabilité d’un traitement. L’état des dents et des gencives, les antécédents et les objectifs sont examinés individuellement."
            />

            <div className="space-y-4 text-sm text-clinic-muted leading-relaxed">
              <p>
                Une personne adulte peut demander un avis au sujet d’un chevauchement, d’un espace ou d’un changement après un ancien traitement. Le motif de consultation peut être esthétique ou fonctionnel.
              </p>
              <p>
                L’évaluation tient compte des restaurations déjà réalisées, de la santé bucco-dentaire, de la façon dont les dents se rencontrent et des contraintes du quotidien.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {adultSituations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-clinic-surface border border-clinic-ink/12 shadow-sm">
                    <div className="p-2.5 rounded-xl bg-clinic-bg text-clinic-gold border border-clinic-ink/10 w-fit mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-serif font-bold text-clinic-ink leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-clinic-muted leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
