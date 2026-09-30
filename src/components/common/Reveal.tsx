import React, { useEffect, useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'none';
}

/** Content stays visible in server HTML and when scripting or reduced motion is unavailable. */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delayMs = 0, direction = 'up' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (element.getBoundingClientRect().top <= window.innerHeight * 0.88) return;
    element.dataset.reveal = 'pending';
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.dataset.reveal = 'visible';
      observer.unobserve(element);
    }, { threshold: 0.08, rootMargin: '0px 0px 32px 0px' });
    observer.observe(element);
    return () => { observer.disconnect(); delete element.dataset.reveal; };
  }, []);

  return <div ref={ref} className={`reveal ${direction === 'none' ? 'reveal--fade' : ''} ${className}`} style={{ '--reveal-delay': `${Math.min(delayMs, 240)}ms` } as React.CSSProperties}>{children}</div>;
};
