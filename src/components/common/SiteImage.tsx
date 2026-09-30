import React from 'react';

interface SiteImageProps {
  slug: string;
  alt: string;
  width: number;
  height: number;
  widths: number[];
  fallbackWidth: number;
  aspect: '4/3' | '3/4' | '16/9';
  sizes?: string;
  caption?: string;
  className?: string;
}

export function SiteImage({
  slug,
  alt,
  width,
  height,
  widths,
  fallbackWidth,
  aspect,
  sizes = '(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw',
  caption,
  className = '',
}: SiteImageProps) {
  const aspectClass = {
    '4/3': 'aspect-[4/3]',
    '3/4': 'aspect-[3/4]',
    '16/9': 'aspect-[16/9]',
  }[aspect];
  const srcSet = (extension: 'avif' | 'jpg') => widths
    .map((size) => `/images/optimized/${slug}-${size}.${extension} ${size}w`)
    .join(', ');

  return (
    <figure className={`m-0 ${className}`}>
      <div className={`relative ${aspectClass} overflow-hidden rounded-xl bg-clinic-bg`}>
        <picture className="absolute inset-0 block">
          <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
          <img
            src={`/images/optimized/${slug}-${fallbackWidth}.jpg`}
            srcSet={srcSet('jpg')}
            sizes={sizes}
            width={width}
            height={height}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
      </div>
      {caption && <figcaption className="mt-2 text-center text-xs leading-relaxed text-clinic-muted">{caption}</figcaption>}
    </figure>
  );
}
