import React from 'react';
import { ContentPage } from './components/pages/ContentPage';
import { SiteFrame } from './components/layout/SiteFrame';
import { findRoute } from './content/routes';

interface AppProps {
  pathname: string;
  notFound?: boolean;
}

export default function App({ pathname, notFound = false }: AppProps) {
  const matched = findRoute(pathname);
  notFound = notFound || !matched;
  const page = matched ?? findRoute('/')!;
  return (
    <SiteFrame pathname={pathname} notFound={notFound}>
      <ContentPage page={page} notFound={notFound} />
    </SiteFrame>
  );
}
