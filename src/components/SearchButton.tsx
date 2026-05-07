import React from 'react';

interface SearchButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ 
  onClick, 
  children = "Search",
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default SearchButton;
