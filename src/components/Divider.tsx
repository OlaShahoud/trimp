import React from 'react';

interface DividerProps {
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ 
  direction = 'vertical', 
  className = '' 
}) => {
  const baseClasses = direction === 'vertical' 
    ? 'w-px h-8 mx-2' 
    : 'h-px w-full my-2';
  
  return (
    <div className={`${baseClasses} bg-gray-200 ${className}`}></div>
  );
};

export default Divider;
