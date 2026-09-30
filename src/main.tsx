import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import type { ReactNode } from 'react';
import {findRoute} from './content/routes';
import './index.css';

const pathname = window.location.pathname;
const notFound = !findRoute(pathname);
const root = document.getElementById('root')!;
const render = (element: ReactNode) => root.hasChildNodes()
  ? hydrateRoot(root, element)
  : createRoot(root).render(element);

if (pathname === '/' && !notFound) {
  import('./HomePage.tsx').then(({default: HomePage}) => {
    render(<StrictMode><HomePage /></StrictMode>);
  });
} else {
  import('./App.tsx').then(({default: App}) => {
    render(<StrictMode><App pathname={pathname} notFound={notFound} /></StrictMode>);
  });
}
