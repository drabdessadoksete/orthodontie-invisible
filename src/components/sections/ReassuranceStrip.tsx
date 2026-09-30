import React from 'react';
import { MapPin, ClipboardCheck, BookOpen, UserCheck } from 'lucide-react';

export const ReassuranceStrip: React.FC = () => {
  const points = [
    {
      icon: MapPin,
      title: 'Cabinet situé à Sète',
      detail: 'Consultations, bilans et contrôles réalisés exclusivement au cabinet de Sète.',
    },
    {
      icon: ClipboardCheck,
      title: 'Évaluation individualisée',
      detail: 'La situation et les attentes sont abordées en consultation.',
    },
    {
      icon: BookOpen,
      title: 'Information claire',
      detail: 'Les options et les étapes sont discutées avec le praticien.',
    },
    {
      icon: UserCheck,
      title: 'Suivi direct par le praticien',
      detail: 'Accompagnement continu par le Dr Abdessadok tout au long du déplacement dentaire.',
    },
  ];

  return (
    <section className="border-y border-clinic-ink/12 bg-clinic-surface py-8 sm:py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Repères sur les aligneurs transparents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-[#10243b]/12">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5 sm:px-5 first:sm:pl-0 last:sm:pr-0">
                <div className="p-2 rounded-lg bg-clinic-bg text-clinic-blue border border-clinic-ink/10 shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-clinic-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-clinic-ink leading-snug">
                    {pt.title}
                  </h3>
                  <p className="mt-1 text-xs text-clinic-muted leading-relaxed">
                    {pt.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
