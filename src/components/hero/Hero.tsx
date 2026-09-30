import { PRE_APPOINTMENT_URL } from '../../content/links';
import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { AlignerHeroVisual } from './AlignerHeroVisual';

export const Hero: React.FC = () => {
  return (
    <section className="authority-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="authority-hero__grid">
          
          {/* Column 1: Editorial Headline & Value Proposition */}
          <div className="authority-hero__content flex flex-col items-start">
            {/* Authentic Brand Kicker */}
            <span className="section-kicker section-kicker--light mb-3 sm:mb-4">
              Orthodontie invisible · Sète
            </span>

            {/* Main H1 in Playfair Display */}
            <h1 className="text-white text-balance">
              Orthodontie invisible <span className="font-normal text-clinic-gold-light block sm:inline">à Sète</span>
            </h1>

            {/* Supporting Lead Description */}
            <p className="authority-hero__lead">
              Aligner votre sourire avec des aligneurs transparents. Une correction discrète, progressive et amovible conçue pour s’intégrer à votre quotidien. Le premier bilan au cabinet détermine si le traitement par gouttières transparentes est adapté à votre situation bucco-dentaire.
            </p>

            {/* Dual CTAs matching cabinetdentairesete.fr button styles */}
            <div className="authority-hero__actions w-full sm:w-auto">
              <a
                href={PRE_APPOINTMENT_URL}
                className="btn-accent"
              >
                <span>Demander un pré-rendez-vous</span>
                <ArrowRight className="w-4 h-4 text-clinic-navy-deep" />
              </a>

              <a
                href="#traitement"
                className="btn-light"
              >
                Comprendre le traitement
              </a>
            </div>

            {/* Reassurance note */}
            <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-clinic-gold-light shrink-0" />
              <span>Échange téléphonique d’orientation · Consultation au cabinet à Sète</span>
            </div>

            {/* Practice, digital planning and local information */}
            <dl className="authority-hero__facts w-full">
              <div>
                <dt>Chirurgien-dentiste</dt>
                <dd>Dr Abdessamed Abdessadok</dd>
              </div>
              <div>
                <dt>Planification numérique</dt>
                <dd>Selon les besoins cliniques</dd>
              </div>
              <div>
                <dt>Suivi local</dt>
                <dd>10 Bd Casanova · Bassin de Thau</dd>
              </div>
            </dl>
          </div>

          {/* Column 2: Responsive aligner product image */}
          <div className="authority-hero__visual">
            <div className="w-full flex flex-col items-center relative">
              <div className="authority-hero__arch-wrap">
                <div className="authority-arch-frame">
                  <AlignerHeroVisual />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
