import React from 'react';

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-[var(--color-orange)] font-bold tracking-wider text-sm uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-poppins font-bold text-[var(--color-navy)] mb-4">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-[var(--color-tech-blue)] ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
