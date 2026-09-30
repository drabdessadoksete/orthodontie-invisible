import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { breadcrumbsFor, findRoute } from '../../content/routes';

interface BreadcrumbProps { currentPath?: string; className?: string; showHomeIcon?: boolean; }

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPath = '/', className = '', showHomeIcon = true }) => {
  const page = findRoute(currentPath);
  const crumbs = page ? breadcrumbsFor(page) : [{ name: 'Accueil', path: '/' }, { name: 'Page introuvable', path: '/404/' }];
  return (
    <nav aria-label="Fil d’Ariane" className={`w-full py-2.5 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-clinic-muted font-normal">
        {crumbs.map((crumb, index) => <li key={crumb.path} className="inline-flex items-center gap-1.5">
          {index === 0 && showHomeIcon && <Home className="w-3.5 h-3.5 text-clinic-gold shrink-0" aria-hidden="true" />}
          {index > 0 && <ChevronRight className="w-3 h-3 text-clinic-ink/40 shrink-0" aria-hidden="true" />}
          {index === crumbs.length - 1 ? <span aria-current="page" className="font-semibold text-clinic-ink">{crumb.name}</span> : <a href={crumb.path} className="hover:text-clinic-gold hover:underline underline-offset-2">{crumb.name}</a>}
        </li>)}
      </ol>
    </nav>
  );
};
