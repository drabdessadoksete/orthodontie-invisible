import React from 'react';

interface AlignerHeroVisualProps {
  className?: string;
}

export const AlignerHeroVisual: React.FC<AlignerHeroVisualProps> = ({ className = '' }) => (
  <figure className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-clinic-bg ${className}`}>
    <picture>
      <source
        type="image/avif"
        srcSet="/images/optimized/aligner-macro-480.avif 480w, /images/optimized/aligner-macro-768.avif 768w, /images/optimized/aligner-macro-896.avif 896w"
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 90vw"
      />
      <source
        type="image/webp"
        srcSet="/images/optimized/aligner-macro-480.webp 480w, /images/optimized/aligner-macro-768.webp 768w, /images/optimized/aligner-macro-896.webp 896w"
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 90vw"
      />
      <img
        src="/images/aligner-macro.jpg"
        width={896}
        height={1200}
        alt="Gouttière d’alignement transparente présentée en gros plan"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 60vw, 90vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </picture>
    <figcaption className="absolute bottom-3 left-3.5 right-3.5 z-10 text-[11px] font-medium text-clinic-ink/85 pointer-events-none">
      <span className="inline-block px-2.5 py-1 rounded-lg bg-white/90 border border-white/40 shadow-xs">
        Exemple d’aligneur transparent
      </span>
    </figcaption>
  </figure>
);

export default AlignerHeroVisual;
