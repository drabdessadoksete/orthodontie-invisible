import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SiteImage } from '../common/SiteImage';
import { Utensils, Sparkles, MessageSquare, Plane, CheckCircle2 } from 'lucide-react';

export const DailyLifeSection: React.FC = () => {
  const dailyAspects = [
    {
      icon: Utensils,
      title: 'Repas et boissons',
      text: 'Les consignes concernant le port des aligneurs pendant les repas et avec les boissons sont à confirmer avec le praticien.',
    },
    {
      icon: Sparkles,
      title: 'Hygiène bucco-dentaire',
      text: 'Les modalités de nettoyage des dents et des aligneurs sont précisées par le praticien selon le dispositif utilisé.',
    },
    {
      icon: MessageSquare,
      title: 'Élocution et vie sociale',
      text: 'L’expérience peut varier d’une personne à l’autre. Toute gêne ou question peut être abordée lors du suivi.',
    },
    {
      icon: Plane,
      title: 'Déplacements et voyages',
      text: 'En déplacement, demandez au praticien comment transporter et conserver vos aligneurs et quels éléments emporter.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Pratique & Ergonomie"
          title="Le quotidien avec vos aligneurs"
          subtitle="Le port d’un appareil amovible demande une organisation quotidienne. Voici les points à préparer et à discuter pendant le suivi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Practical Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {dailyAspects.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-clinic-surface border border-clinic-ink/12 hover:border-clinic-gold/40 transition-colors shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-clinic-bg text-clinic-gold border border-clinic-ink/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-serif font-bold text-clinic-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-clinic-muted leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Checklist summary */}
            <div className="mt-6 p-4 rounded-xl bg-clinic-surface border border-clinic-ink/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-clinic-ink">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>Port : <strong>selon les consignes reçues</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>Changement : <strong>selon le plan de soins</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-clinic-gold shrink-0" />
                <span>Suivi : <strong>calendrier défini au cabinet</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: ASSET_05 Visual Placeholder */}
          <div className="lg:col-span-5">
            <div className="p-2.5 rounded-2xl bg-clinic-surface border border-clinic-ink/12 shadow-sm">
              <SiteImage
                slug="etui-aligneur-transparent"
                alt="Étui de transport ouvert à côté d’un aligneur transparent, sur un plan de travail clair."
                width={1448}
                height={1086}
                aspect="4/3"
                widths={[480, 768, 1200]}
                fallbackWidth={1200}
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
              />
              <div className="p-3 bg-clinic-bg rounded-xl mt-2 text-center text-xs text-clinic-muted">
                Prévoir un étui aide à ranger les aligneurs pendant les repas à l’extérieur.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
