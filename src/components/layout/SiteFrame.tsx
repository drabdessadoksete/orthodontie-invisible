import React from 'react';
import { Header } from './Header';
import { Breadcrumb } from '../common/Breadcrumb';
import { Footer } from './Footer';

interface SiteFrameProps {
  children: React.ReactNode;
  pathname: string;
  notFound?: boolean;
}

export function SiteFrame({ children, pathname, notFound = false }: SiteFrameProps) {
  const displayPath = notFound ? '/404/' : pathname;

  return (
    <div className="min-h-screen bg-clinic-bg text-clinic-ink flex flex-col font-sans selection:bg-clinic-gold-light/35 selection:text-clinic-navy">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-clinic-navy text-white rounded-lg shadow-lg text-xs font-semibold">
        Aller au contenu principal
      </a>
      <Header />
      <div className="pt-20 pb-2 border-b border-clinic-ink/10 bg-clinic-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb currentPath={displayPath} />
        </div>
      </div>
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
