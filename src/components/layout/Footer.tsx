import React from 'react';
import { PRE_APPOINTMENT_URL } from '../../content/links';
import { MapPin, Phone, ArrowUpRight, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-clinic-navy-deep text-white pt-16 pb-12 border-t border-clinic-gold-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid matching cabinetdentairesete.fr */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-3">
              <a href="/" className="brand-logo" aria-label="Cabinet Dentaire Sète, accueil">
                <img
                  src="/images/logo-cabinet-dentaire-sete.jpg"
                  width={640}
                  height={188}
                  alt="Cabinet Dentaire Dr Abdessamed Abdessadok, chirurgien-dentiste à Sète"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div>
                <span className="text-[11px] text-clinic-gold-light uppercase tracking-wider font-semibold block">
                  Orthodontie invisible · Sète
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Des soins dentaires et traitements par aligneurs transparents expliqués avec précision, du premier échange d'orientation au suivi clinique au cabinet à Sète.
            </p>

            <a
              href={PRE_APPOINTMENT_URL}
              className="inline-flex text-xs font-bold text-clinic-gold-light hover:text-clinic-gold-light underline underline-offset-4 transition-colors"
            >
              Demander un pré-rendez-vous →
            </a>
          </div>

          {/* Navigation / Explorer */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-serif font-bold tracking-wider text-clinic-gold-light uppercase">
              Explorer
            </h3>
            <ul className="space-y-2 text-xs text-white/70 font-medium">
              <li><a href="/aligneurs-transparents/" className="hover:text-white transition-colors">Aligneurs transparents</a></li>
              <li><a href="/orthodontie-adulte/" className="hover:text-white transition-colors">Orthodontie adulte</a></li>
              <li><a href="/prix-remboursement/" className="hover:text-white transition-colors">Prix & remboursement</a></li>
              <li><a href="/aligneurs-vs-bagues/" className="hover:text-white transition-colors">Aligneurs ou bagues</a></li>
              <li><a href="/faq/" className="hover:text-white transition-colors">Questions fréquentes</a></li>
              <li><a href="/guides/" className="hover:text-white transition-colors">Guides pratiques</a></li>
              <li><a href="/praticien/" className="hover:text-white transition-colors">Dr Abdessamed Abdessadok</a></li>
              <li><a href="https://cabinetdentairesete.fr/en/" lang="en" className="hover:text-white transition-colors">Dental practice in Sète (English)</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-serif font-bold tracking-wider text-clinic-gold-light uppercase">
              Contact & Accès
            </h3>
            <address className="not-italic text-xs text-white/70 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-clinic-gold-light shrink-0 mt-0.5" />
                <span>
                  10 Bd Danièle Casanova<br />
                  34200 Sète, France
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-clinic-gold-light shrink-0" />
                <a href="tel:0422910594" className="hover:text-white transition-colors font-mono font-bold text-white">
                  04 22 91 05 94
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/UALfaQYvaAV5otoq9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-clinic-gold-light hover:underline"
                >
                  <span>Itinéraire vers le cabinet à Sète</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>
            © Cabinet Dentaire Dr Abdessadok · Chirurgien-dentiste à Sète
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <Shield className="w-3.5 h-3.5 text-clinic-gold-light" />
            <span>Informations médicales générales : aucun contenu ne remplace un examen clinique.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
