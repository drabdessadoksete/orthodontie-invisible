import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = 'left',
  className = '',
  light = false,
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-10 md:mb-12 ${className}`}>
      {kicker && (
        <span className={`section-kicker ${light ? 'section-kicker--light' : ''} mb-3.5`}>
          {kicker}
        </span>
      )}
      <h2
        className={`editorial-heading text-balance ${light ? 'editorial-heading--light' : ''}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`editorial-intro mt-3.5 ${light ? 'editorial-intro--light' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
