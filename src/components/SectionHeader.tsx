import React from 'react';

interface SectionHeaderProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  actionText = "All →", 
  onActionClick 
}) => {
  // Split title to style "flight deals" differently
  const renderTitle = () => {
    if (title.includes("flight deals")) {
      const parts = title.split("flight deals");
      return (
        <h2 className="font-sans font-bold" style={{ fontSize: '24px', fontWeight: '700' }}>
          {parts[0]}
          <span style={{ color: '#605DEC' }}>flight deals</span>
          {parts[1]}
        </h2>
      );
    }
    return (
      <h2 className="font-sans font-bold" style={{ fontSize: '24px', fontWeight: '700', color: '#6E7491' }}>
        {title}
      </h2>
    );
  };

  return (
    <div className="flex justify-between items-center mb-6">
      {renderTitle()}
      <button
        onClick={onActionClick}
        className="font-sans font-normal transition-colors duration-200"
        style={{ fontSize: '24px', fontWeight: '400', color: '#A1B0CC' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#8FA0C9'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#A1B0CC'}
      >
        {actionText}
      </button>
    </div>
  );
};

export default SectionHeader;
