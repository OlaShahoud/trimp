import React, { useState } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleSettings = () => {
    // Handle settings navigation
    console.log('Navigate to cookie settings');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Cookie text */}
        <p className="text-gray-700 text-sm mb-3 pr-6">
          By using our site, you agree to eat our cookies.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded transition-colors duration-200"
          >
            Accept cookies
          </button>
          
          <button
            onClick={handleSettings}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
          >
            Go to settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
