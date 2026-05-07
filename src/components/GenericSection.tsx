import React from 'react';
import SectionHeader from './SectionHeader';

interface GenericSectionProps {
  title?: string;
  centeredTitle?: boolean;
  children: React.ReactNode;
  className?: string;
}

const GenericSection: React.FC<GenericSectionProps> = ({ 
  title, 
  centeredTitle = false, 
  children, 
  className = '' 
}) => {
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        centeredTitle ? (
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            {title}
          </h2>
        ) : (
          <SectionHeader title={title} />
        )
      )}
      {children}
    </section>
  );
};

export default GenericSection;
