import React, { useEffect, useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { PRE_APPOINTMENT_URL } from '../../content/links';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Le traitement', href: '/aligneurs-transparents/' },
    { label: 'Pour qui ?', href: '/orthodontie-adulte/' },
    { label: 'Prix & remboursement', href: '/prix-remboursement/' },
    { label: 'Questions', href: '/faq/' },
    { label: 'Le praticien', href: '/praticien/' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-clinic-navy-deep text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.75rem]">
          
          {/* Zone 1: Brand lockup matching cabinetdentairesete.fr */}
          <a
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3 text-white group cursor-pointer"
            aria-label="Cabinet Dentaire Dr Abdessadok – Orthodontie invisible à Sète, accueil"
          >
            {/* Circular clinic brand crest */}
            <img
              src="/logo-cabinet-dentaire-sete.png"
              width={40}
              height={40}
              alt=""
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white object-cover shrink-0"
            />
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="text-[13px] sm:text-[15px] font-bold tracking-tight text-white group-hover:text-clinic-gold-light transition-colors">
                Dr. Abdessadok
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-wider text-clinic-gold-light opacity-90">
                Orthodontie Invisible · Sète
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] font-bold text-white/80" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-white/85 hover:text-white transition-colors duration-150 group"
              >
                <span>{link.label}</span>
                <span className="absolute left-3 right-3 bottom-1 h-[2px] bg-clinic-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0422910594"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white/90 hover:text-white transition-colors font-mono"
              aria-label="Appeler le cabinet au 04 22 91 05 94"
            >
              <Phone className="w-3.5 h-3.5 text-clinic-gold-light" />
              <span>04 22 91 05 94</span>
            </a>

            <a
              href={PRE_APPOINTMENT_URL}
              className="btn-accent !py-2 !px-4.5 !text-xs"
            >
              <span>Pré-rendez-vous</span>
              <ArrowRight className="w-3.5 h-3.5 text-clinic-navy-deep" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2 lg:hidden">
            <a
              href={PRE_APPOINTMENT_URL}
              className="btn-accent !py-1.5 !px-2.5 sm:!px-3 !text-xs"
            >
              <span>Pré-RDV</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-white rounded-lg focus-visible:outline-[#d6bd88]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-site-navigation"
              aria-label={mobileMenuOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div id="mobile-site-navigation" className="lg:hidden max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-b border-clinic-gold-light/30 bg-clinic-navy-deep text-white px-5 pt-4 pb-7 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-white/90 hover:text-clinic-gold-light hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:0422910594"
              className="btn-light w-full"
            >
              <Phone className="w-4 h-4 text-clinic-gold" />
              <span className="font-mono">04 22 91 05 94</span>
            </a>
            <a
              href={PRE_APPOINTMENT_URL}
              className="w-full btn-accent"
            >
              <span>Demander un pré-rendez-vous</span>
              <ArrowRight className="w-4 h-4 text-clinic-navy-deep" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
