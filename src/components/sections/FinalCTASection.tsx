import { PRE_APPOINTMENT_URL } from '../../content/links';
import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-clinic-bg border-t border-clinic-ink/12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          className="relative rounded-xl p-7 sm:p-10 lg:p-12 text-white overflow-hidden bg-clinic-navy-deep shadow-[var(--shadow-card)]"
        >
          <div className="relative z-10 max-w-2xl">
            <span className="section-kicker section-kicker--light mb-4">
              Contact du cabinet
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-[1.1] text-balance">
              Prendre contact avec le cabinet.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-white/85 leading-relaxed font-light">
              Présentez votre demande sur le site du Cabinet Dentaire Sète. Le cabinet pourra ensuite vous recontacter pour organiser la suite.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
              <div className="pt-3.5 border-t border-white/20">
                <span className="text-[11px] font-bold text-clinic-gold-light block mb-1">01. Contact</span>
                <p className="text-xs text-white/80">Indiquez votre besoin sur le site du cabinet.</p>
              </div>
              <div className="pt-3.5 border-t border-white/20">
                <span className="text-[11px] font-bold text-clinic-gold-light block mb-1">02. Échange</span>
                <p className="text-xs text-white/80">Présentez les questions que vous souhaitez aborder.</p>
              </div>
              <div className="pt-3.5 border-t border-white/20">
                <span className="text-[11px] font-bold text-clinic-gold-light block mb-1">03. Consultation</span>
                <p className="text-xs text-white/80">L’évaluation se fait au cabinet.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={PRE_APPOINTMENT_URL}
                className="btn-accent"
              >
                <span>Demander un pré-rendez-vous</span>
                <ArrowRight className="w-4 h-4 text-clinic-navy-deep" />
              </a>

              <a
                href="tel:0422910594"
                className="btn-light"
              >
                <Phone className="w-4 h-4 text-clinic-gold" />
                <span className="font-mono font-bold">04 22 91 05 94</span>
              </a>
            </div>

            {/* Legal / Deontological disclaimer */}
            <div className="mt-6 flex items-start gap-2.5 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-clinic-gold-light shrink-0 mt-0.5" />
              <span>
                Les informations générales de ce site ne remplacent pas une évaluation au cabinet.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
