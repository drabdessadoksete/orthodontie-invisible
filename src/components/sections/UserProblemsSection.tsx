import { PRE_APPOINTMENT_URL } from '../../content/links';
import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Reveal } from '../common/Reveal';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { UserProblem } from '../../types';

export const UserProblemsSection: React.FC = () => {
  const problems: UserProblem[] = [
    {
      id: 'chevauchement',
      title: 'Dents chevauchées',
      subtitle: 'Encombrement dentaire antérieur ou généralisé',
      description:
        'Des dents peuvent se chevaucher ou tourner. Si cela vous gêne pour le brossage ou pour une autre raison, décrivez-le lors du bilan.',
      clinicalNote:
        'L’examen permet de comprendre l’espace disponible et de discuter des options envisageables, avec leurs limites.',
      futureUrl: '/dents-chevauchees/',
    },
    {
      id: 'diasteme',
      title: 'Espaces entre les dents',
      subtitle: 'Diastèmes antérieurs ou écartements localisés',
      description:
        'Des espacements prononcés entre certaines dents, qu’ils soient d’origine génétique, liés à un frein labial ou à une perte dentaire non compensée.',
      clinicalNote:
        'Un rapprochement des dents peut être discuté après examen. Les modalités de contention doivent être abordées dès le projet de traitement.',
      futureUrl: '/diasteme-dents-ecartees/',
    },
    {
      id: 'recidive',
      title: 'Dents qui ont rebougé après un appareil',
      subtitle: 'Récidive orthodontique chez l’adulte',
      description:
        'Un alignement peut changer après un ancien appareil. La contention portée, les contrôles et la date du changement sont utiles à préciser.',
      clinicalNote:
        'Un nouvel examen permet de discuter des options. Un ancien traitement ne permet pas de présumer de la durée ou de la simplicité d’une éventuelle reprise.',
      futureUrl: '/dents-qui-rebougent-apres-appareil/',
    },
    {
      id: 'discretion',
      title: 'Envie d’une solution discrète',
      subtitle: 'Exigences professionnelles et relationnelles',
      description:
        'Une préférence pour un appareil discret peut faire partie de la discussion, notamment si votre activité comporte des prises de parole ou des repas professionnels.',
      clinicalNote:
        'Les aligneurs transparents sont discrets et amovibles, mais ils peuvent rester visibles de près ou nécessiter des éléments complémentaires.',
      futureUrl: '/orthodontie-adulte/',
    },
    {
      id: 'occlusion',
      title: 'Question sur l’alignement et l’occlusion',
      subtitle: 'Engrenage des mâchoires et confort masticatoire',
      description:
        'Une gêne lors de la mastication, une usure anormale de certaines pointes dentaires ou une sensation d’engrenage asymétrique entre le haut et le bas.',
      clinicalNote:
        'Une gêne fonctionnelle mérite une évaluation. Le praticien pourra expliquer si des aligneurs ou une autre prise en charge sont à envisager.',
      futureUrl: '/aligneurs-transparents/',
    },
  ];

  const [activeId, setActiveId] = useState<string>(problems[0].id);
  const activeProblem = problems.find((p) => p.id === activeId) || problems[0];

  return (
    <section id="pour-qui" className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="Motifs de consultation"
            title="Qu’est-ce qui vous amène à envisager des aligneurs ?"
            subtitle="Chaque situation est différente. Ces exemples aident à formuler une question avant un bilan, sans préjuger du traitement adapté."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pathway Selector List (buttons) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5" aria-label="Motifs de consultation">
            {problems.map((item, idx) => {
              const isActive = item.id === activeId;
              return (
                <Reveal key={item.id} delayMs={idx * 40}>
                  <button
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={isActive}
                    aria-controls="problem-details"
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start justify-between cursor-pointer ${
                      isActive
                        ? 'bg-clinic-surface border-clinic-gold/60 shadow-[0_4px_18px_rgba(154,124,67,0.12)] ring-1 ring-[#9a7c43]/30'
                        : 'bg-clinic-surface/60 hover:bg-clinic-surface border-clinic-ink/10 hover:border-[#10243b]/25'
                    }`}
                  >
                    <div>
                      <h3
                        className={`text-sm font-semibold transition-colors ${
                          isActive ? 'text-clinic-ink' : 'text-clinic-ink/80'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-clinic-muted">
                        {item.subtitle}
                      </p>
                    </div>
                    <div
                      className={`shrink-0 ml-3 p-1 rounded-full transition-colors ${
                        isActive ? 'text-clinic-navy bg-clinic-gold-light/30' : 'text-clinic-ink/30'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </Reveal>
              );
            })}
            <nav aria-label="Guides par situation" className="mt-4">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs">{problems.map(item => <li key={item.id}><a className="editorial-link" href={item.futureUrl}>{item.title}</a></li>)}</ul>
            </nav>
          </div>

          {/* Active Detail Display Panel */}
          <div className="lg:col-span-7">
            <Reveal delayMs={100}>
              <div
                id="problem-details"
                aria-live="polite"
                className="bg-clinic-surface rounded-2xl border border-clinic-ink/12 p-6 sm:p-8 shadow-[0_8px_30px_rgba(16,52,75,0.04)]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-clinic-ink/10">
                  <span className="text-xs font-mono text-clinic-gold uppercase tracking-wider font-bold">
                    Analyse de situation
                  </span>
                  <a href={activeProblem.futureUrl} className="text-xs text-clinic-muted underline underline-offset-4">Lire le guide</a>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-clinic-ink tracking-tight">
                    {activeProblem.title}
                  </h3>
                  <p className="text-xs font-medium text-clinic-blue mt-1">
                    {activeProblem.subtitle}
                  </p>

                  <div className="mt-5 text-sm text-clinic-muted leading-relaxed">
                    {activeProblem.description}
                  </div>

                  {/* Medical transparency notice */}
                  <div className="mt-6 p-4 rounded-xl bg-clinic-bg border border-clinic-ink/10 flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
                    <div className="text-xs text-clinic-ink leading-relaxed">
                      <strong className="font-semibold text-clinic-ink block mb-0.5">
                        Point à discuter en consultation :
                      </strong>
                      {activeProblem.clinicalNote}
                    </div>
                  </div>

                  {/* Key considerations */}
                  <div className="mt-6 pt-5 border-t border-clinic-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-clinic-muted">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinic-gold shrink-0" />
                      <span>Approche sur mesure selon l’arcade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinic-gold shrink-0" />
                      <span>Validation de la santé des gencives</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinic-gold shrink-0" />
                      <span>Discrétion lors des interactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinic-gold shrink-0" />
                      <span>Contention de stabilisation indispensable</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 border-t border-clinic-ink/10">
                    <a
                      href={PRE_APPOINTMENT_URL}
                      className="btn-accent"
                    >
                      <span>Échanger sur ce cas en pré-rendez-vous</span>
                      <ArrowRight className="w-4 h-4 text-clinic-navy-deep" />
                    </a>
                    <span className="text-[11px] text-clinic-muted text-center sm:text-right font-medium">
                      Contact téléphonique du cabinet
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
