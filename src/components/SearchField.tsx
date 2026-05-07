import React from 'react';

interface SearchFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onClick: () => void;
  placeholder?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ 
  icon, 
  label, 
  value, 
  onClick, 
  placeholder = "Select" 
}) => {
  return (
    <div 
      className="flex-1 flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200 rounded-lg"
      onClick={onClick}
    >
      <div className="flex-shrink-0 text-gray-400">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-500 mb-1">{label}</div>
        <div className={`text-sm font-medium ${value ? 'text-gray-900' : 'text-gray-400'} truncate`}>
          {value || placeholder}
        </div>
      </div>
    </div>
  );
};

export default SearchField;
