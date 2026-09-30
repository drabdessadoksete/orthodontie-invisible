import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { FAQItem } from '../../types';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'general',
      question: 'Qu’est-ce qu’un aligneur transparent ?',
      shortAnswer: 'Une gouttière transparente amovible utilisée dans certaines prises en charge d’alignement dentaire.',
      detail: 'Son indication et ses modalités d’utilisation dépendent de l’examen et du plan de soins.',
      futureUrl: '/aligneurs-transparents/',
    },
    {
      id: 'faq-2',
      category: 'clinical',
      question: 'Les aligneurs conviennent-ils à toutes les situations ?',
      shortAnswer: 'Leur pertinence doit être évaluée au cas par cas.',
      detail: 'Un échange général ne suffit pas à déterminer si ce type de traitement convient. Cette appréciation nécessite un examen par un professionnel de santé.',
    },
    {
      id: 'faq-3',
      category: 'general',
      question: 'Une évaluation est-elle possible à l’âge adulte ?',
      shortAnswer: 'Une évaluation individuelle peut être discutée avec le chirurgien-dentiste.',
      detail: 'L’âge seul ne permet pas de conclure sur l’indication. L’état bucco-dentaire, la demande et les objectifs doivent être pris en compte.',
      futureUrl: '/orthodontie-adulte/',
    },
    {
      id: 'faq-4',
      category: 'practical',
      question: 'Combien de temps dure un traitement ?',
      shortAnswer: 'La durée varie selon la situation et le plan de soins.',
      detail: 'Une estimation personnalisée ne peut être donnée qu’après évaluation. Aucun délai général ne prédit la durée d’un cas particulier.',
      futureUrl: '/duree-traitement/',
    },
    {
      id: 'faq-5',
      category: 'practical',
      question: 'Est-ce douloureux ?',
      shortAnswer: 'Les sensations peuvent différer selon les personnes et les étapes du traitement.',
      detail: 'Demandez conseil au cabinet si vous ressentez une gêne ou avez une question sur votre situation.',
    },
    {
      id: 'faq-6',
      category: 'clinical',
      question: 'Pourquoi faut-il une contention ?',
      shortAnswer: 'La contention et le suivi après traitement sont des sujets à aborder avec le praticien.',
      detail: 'Les options possibles et leurs consignes dépendent de la situation clinique.',
      futureUrl: '/contention/',
    },
    {
      id: 'faq-7',
      category: 'cost',
      question: 'Combien coûte un traitement ?',
      shortAnswer: 'Les honoraires dépendent de la situation examinée et de la proposition de soins.',
      detail: 'Demandez au cabinet les informations détaillées sur les honoraires avant de prendre une décision.',
      futureUrl: '/prix-remboursement/',
    },
    {
      id: 'faq-8',
      category: 'cost',
      question: 'Comment vérifier une éventuelle prise en charge ?',
      shortAnswer: 'Contactez votre caisse d’assurance maladie et votre complémentaire santé.',
      detail: 'Les modalités dépendent de votre situation et de votre contrat. Demandez au cabinet les éléments nécessaires à votre démarche.',
      futureUrl: '/prix-remboursement/',
    },
    {
      id: 'faq-9',
      category: 'clinical',
      question: 'Peut-on savoir à distance si les aligneurs sont adaptés ?',
      shortAnswer: 'Un échange à distance ne remplace pas une évaluation au cabinet.',
      detail: 'La pertinence d’un traitement ne peut être déterminée qu’après l’examen approprié.',
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-20 md:py-28 bg-clinic-surface border-t border-clinic-ink/12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Réponses médicales & pratiques"
          title="Foire aux questions sur les aligneurs"
          subtitle="Des réponses factuelles, mesurées et déontologiques pour lever vos interrogations avant votre premier contact."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-clinic-bg rounded-xl border border-clinic-ink/10 w-fit">
          {[
            { id: 'all', label: `Toutes les questions (${faqData.length})` },
            { id: 'general', label: 'Principes généraux' },
            { id: 'practical', label: 'Vie quotidienne' },
            { id: 'clinical', label: 'Clinique & Contention' },
            { id: 'cost', label: 'Tarifs & Mutuelles' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              aria-pressed={activeCategory === tab.id}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-clinic-navy text-white shadow-sm font-semibold'
                  : 'text-clinic-muted hover:text-clinic-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion Container */}
        <div className="divide-y divide-[#10243b]/10 border-y border-clinic-ink/10">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <details key={faq.id} open={isOpen} onToggle={(event) => {
                const expanded = event.currentTarget.open;
                setOpenIds(previous => expanded === previous.includes(faq.id) ? previous : expanded ? [...previous, faq.id] : previous.filter(id => id !== faq.id));
              }} className="py-5 group">
                <summary
                  className="list-none [&::-webkit-details-marker]:hidden w-full flex items-start justify-between text-left gap-4 cursor-pointer focus-visible:outline-[#9a7c43] py-1"
                >
                  <span className="text-base font-serif font-bold text-clinic-ink group-hover:text-clinic-gold transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full text-clinic-muted group-hover:text-clinic-ink transition-transform duration-200 shrink-0 mt-0.5 ${
                      isOpen ? 'rotate-180 text-clinic-gold' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>

                  <div className="mt-3 pr-8 space-y-2 text-sm text-clinic-muted leading-relaxed">
                    <p className="font-semibold text-clinic-ink">
                      {faq.shortAnswer}
                    </p>
                    <p className="text-xs sm:text-sm text-clinic-muted">
                      {faq.detail}
                    </p>
                    {faq.futureUrl && (
                      <a href={faq.futureUrl} className="pt-2 inline-flex items-center gap-1.5 text-[11px] text-clinic-gold underline underline-offset-4">
                        Lire le guide détaillé
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
              </details>
            );
          })}
        </div>

        {/* Bottom medical reassurance note */}
        <div className="mt-10 p-4 rounded-xl bg-clinic-bg border border-clinic-ink/10 flex items-start gap-3 text-xs text-clinic-muted">
          <HelpCircle className="w-4 h-4 text-clinic-gold shrink-0 mt-0.5" />
          <p>
            Vous avez une question spécifique sur votre dentition ? Les informations ci-dessus sont générales et ne se substituent jamais à un examen clinique avec votre chirurgien-dentiste.
          </p>
        </div>

      </div>
    </section>
  );
};
