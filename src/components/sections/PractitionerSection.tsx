import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { SiteImage } from '../common/SiteImage';
import { Reveal } from '../common/Reveal';

export const PractitionerSection: React.FC = () => (
  <section id="praticien" className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <Reveal direction="up">
            <div className="p-2.5 rounded-2xl bg-clinic-surface border border-clinic-ink/12 shadow-sm max-w-md mx-auto">
              <SiteImage
                slug="portrait-dr-abdessamed-abdessadok"
                alt="Portrait du Dr Abdessamed Abdessadok au cabinet dentaire à Sète."
                width={1086}
                height={1448}
                aspect="3/4"
                widths={[360, 540, 768, 1086]}
                fallbackWidth={768}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, calc(100vw - 52px)"
              />
              <div className="mt-3 p-3 bg-clinic-bg rounded-xl border border-clinic-ink/10 text-center">
                <span className="block text-sm font-serif font-bold text-clinic-ink">Dr Abdessamed Abdessadok</span>
                <span className="text-xs text-clinic-muted font-medium">Chirurgien-dentiste à Sète</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <SectionHeading
              kicker="Le praticien"
              title="Dr Abdessamed Abdessadok"
              subtitle="Chirurgien-dentiste au Cabinet Dentaire Sète."
              className="mb-6 md:mb-8"
            />
          </Reveal>
          <Reveal delayMs={100}>
            <div className="space-y-4 text-sm text-clinic-muted leading-relaxed">
              <p>Le cabinet se trouve au 10 Bd Danièle Casanova, 34200 Sète.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
