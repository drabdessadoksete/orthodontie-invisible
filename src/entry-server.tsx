import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import HomePage from './HomePage';

export function renderRoute(pathname: string, notFound = false): string {
  if (pathname === '/' && !notFound) return renderToString(<HomePage />);
  return renderToString(<App pathname={pathname} notFound={notFound} />);
}
