import { PRE_APPOINTMENT_URL } from '../../content/links';
import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SiteImage } from '../common/SiteImage';
import { Reveal } from '../common/Reveal';
import { TreatmentStep } from '../../types';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';

export const TreatmentJourneySection: React.FC = () => {
  const steps: TreatmentStep[] = [
    {
      number: '01',
      title: 'Échanger sur votre demande',
      description: 'Présenter votre demande et les questions que vous souhaitez aborder.',
      clinicalDetail: 'Un premier échange ne permet pas de poser un diagnostic.',
    },
    {
      number: '02',
      title: 'Examiner votre situation',
      description: 'Faire le point sur la situation bucco-dentaire au cabinet.',
      clinicalDetail: 'L’examen et les éléments à prendre en compte dépendent de la situation de chacun.',
    },
    {
      number: '03',
      title: 'Réaliser les éléments nécessaires au bilan',
      description: 'Déterminer si des examens ou documents complémentaires sont utiles.',
      clinicalDetail: 'Les examens éventuels sont choisis en fonction de l’évaluation du praticien.',
    },
    {
      number: '04',
      title: 'Étudier et expliquer le projet',
      description: 'Discuter des options envisagées, des modalités et des questions pratiques.',
      clinicalDetail: 'Les bénéfices, limites et contraintes d’une option sont à discuter avec le praticien.',
    },
    {
      number: '05',
      title: 'Commencer le traitement lorsqu’il est indiqué',
      description: 'Si un traitement est proposé et accepté, le praticien en explique les consignes.',
      clinicalDetail: 'Les modalités du traitement dépendent du plan convenu.',
    },
    {
      number: '06',
      title: 'Effectuer les contrôles réguliers',
      description: 'Organiser le suivi selon les modalités définies avec le praticien.',
      clinicalDetail: 'Le calendrier et les ajustements éventuels sont propres à chaque prise en charge.',
    },
    {
      number: '07',
      title: 'Aborder la contention',
      description: 'La contention et le suivi après traitement font partie des sujets à aborder avec le praticien.',
      clinicalDetail: 'Le dispositif et les consignes éventuels dépendent de la situation clinique.',
    },
  ];

  const [expandedStep, setExpandedStep] = useState<string | null>('01');

  return (
    <section id="parcours" className="py-20 md:py-28 bg-clinic-surface border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-8">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                kicker="Méthodologie clinique"
                title="Les étapes d’une prise en charge"
                subtitle="Le parcours est défini selon la situation examinée et peut varier d’une personne à l’autre."
                className="mb-0 md:mb-0"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <SiteImage
              slug="planification-aligneurs-sans-visage"
              alt="Illustration d’un échange autour d’un projet d’alignement : seules les mains, un écran et un aligneur sont visibles."
              width={1672}
              height={941}
              aspect="16/9"
              widths={[480, 768, 1200]}
              fallbackWidth={1200}
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 80vw, 100vw"
              caption="Visuel d’illustration, ne représentant pas le Dr Abdessadok."
            />
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-8 max-w-4xl mx-auto">
          {/* Subtle vertical connector line */}
          <div className="absolute left-[20px] sm:left-[28px] top-6 bottom-6 w-[2px] bg-[#10243b]/15" aria-hidden="true" />

          <div className="space-y-6">
            {steps.map((step, idx) => {
              const isExpanded = expandedStep === step.number;
              return (
                <Reveal key={step.number} delayMs={idx * 50}>
                  <div
                    className={`relative pl-12 sm:pl-16 transition-all ${
                      isExpanded ? 'opacity-100' : 'opacity-90 hover:opacity-100'
                    }`}
                  >
                    {/* Step Number Dot Node */}
                    <div
                      aria-hidden="true"
                      className={`absolute left-0 top-1 w-10 sm:w-14 h-10 sm:h-14 rounded-xl border flex items-center justify-center font-serif font-bold text-xs sm:text-sm cursor-pointer transition-all duration-150 ${
                        isExpanded
                          ? 'bg-clinic-navy text-white border-clinic-gold-light shadow-md ring-4 ring-[#d6bd88]/25'
                          : 'bg-clinic-bg text-clinic-muted border-clinic-ink/15 hover:border-clinic-gold/50 hover:text-clinic-ink'
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Card Container */}
                    <div className="p-5 sm:p-6 rounded-2xl border border-clinic-ink/12 bg-clinic-surface hover:border-clinic-gold/40 transition-colors shadow-[0_2px_12px_rgba(16,52,75,0.02)]">
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`timeline-note-${step.number}`}
                        className="flex w-full items-center justify-between gap-3 text-left cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clinic-gold"
                        onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                      >
                        <h3 className="text-base sm:text-lg font-serif font-bold text-clinic-ink tracking-tight">
                          {step.title}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="p-1 rounded-lg text-clinic-muted"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-clinic-gold' : ''
                            }`}
                          />
                        </span>
                      </button>

                      <p className="mt-2 text-sm text-clinic-muted leading-relaxed">
                        {step.description}
                      </p>

                      <div id={`timeline-note-${step.number}`} className={`mt-4 pt-4 border-t border-clinic-ink/10 text-xs text-clinic-muted items-start gap-2 bg-clinic-bg p-3.5 rounded-xl border border-clinic-ink/10 ${isExpanded ? 'flex' : 'hidden'}`}>
                        <Check className="w-3.5 h-3.5 text-clinic-gold shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-clinic-ink">Perspective médicale : </span>
                          {step.clinicalDetail}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom CTA */}
        <div className="mt-14 max-w-xl mx-auto text-center p-7 rounded-2xl bg-clinic-bg border border-clinic-ink/12 shadow-sm">
          <p className="text-xs text-clinic-muted font-semibold uppercase tracking-wider">
            Une question sur votre demande ?
          </p>
          <h3 className="text-base sm:text-lg font-serif font-bold text-clinic-ink mt-1.5">
            Contactez le cabinet pour connaître les modalités de rendez-vous
          </h3>
          <a href="/bilan-aligneurs-sete/" className="editorial-link mt-3 inline-block text-sm">Ce que le premier bilan peut explorer</a>
          <a
            href={PRE_APPOINTMENT_URL}
            className="mt-5 btn-accent"
          >
            <span>Demander un échange d’orientation</span>
            <ArrowRight className="w-4 h-4 text-clinic-navy-deep" />
          </a>
        </div>

      </div>
    </section>
  );
};
