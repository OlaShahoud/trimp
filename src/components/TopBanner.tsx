import React from 'react';
import { X } from 'lucide-react';

interface TopBannerProps {
  message?: string;
  onClose?: () => void;
}

const TopBanner: React.FC<TopBannerProps> = ({ 
  message = "Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.", 
  onClose 
}) => {
  return (
    <div className="w-full relative" style={{ backgroundColor: '#605DEC', height: '64px' }}>
      <div className="h-full flex items-center justify-center px-4 relative">
          <p 
            className="text-center"
            style={{ 
              fontFamily: 'Nunito Sans', 
              fontWeight: 600, 
              fontSize: '18px',
              color: '#F6F6FE'
            }}
          >
            {message}
          </p>
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:text-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-1"
            aria-label="Close banner"
            style={{ color: '#F6F6FE' }}
          >
            <X className="w-4 h-4 sm:w-3 sm:h-3" />
          </button>
      </div>
    </div>
  );
};

export default TopBanner;
