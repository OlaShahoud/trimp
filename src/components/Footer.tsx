import React from 'react';

export interface FooterSection {
  title: string;
  links: string[];
}

interface FooterProps {
  sections: FooterSection[];
  logo?: string;
  logoDescription?: string;
  appStoreText?: string;
  googlePlayText?: string;
  copyrightText?: string;
  onLinkClick?: (link: string) => void;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
  sections,
  logo = "Tripma",
  logoDescription = "Your trusted travel companion for amazing experiences worldwide.",
  appStoreText = "App Store",
  googlePlayText = "Google Play",
  copyrightText = "© 2024 Tripma. All rights reserved.",
  onLinkClick,
  onAppStoreClick,
  onGooglePlayClick
}) => {
  const handleLinkClick = (link: string) => {
    if (onLinkClick) {
      onLinkClick(link);
    } else {
      console.log('Footer link clicked:', link);
    }
  };

  const handleAppStoreClick = () => {
    if (onAppStoreClick) {
      onAppStoreClick();
    } else {
      console.log('App Store button clicked');
    }
  };

  const handleGooglePlayClick = () => {
    if (onGooglePlayClick) {
      onGooglePlayClick();
    } else {
      console.log('Google Play button clicked');
    }
  };

  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{logo}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {logoDescription}
          </p>
        </div>

        {/* Other Columns */}
        {sections.slice(0, -1).map((section: FooterSection, index: number) => (
          <div key={index} className="md:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link: string, linkIndex: number) => (
                <li key={linkIndex}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Last Column: Links and App Buttons */}
        <div className="md:col-span-1">
          <h4 className="text-sm font-semibold text-gray-900 mb-4">
            {sections[sections.length - 1]?.title || 'Connect'}
          </h4>
          <ul className="space-y-2 mb-6">
            {sections[sections.length - 1]?.links.slice(0, 3).map((link: string, linkIndex: number) => (
              <li key={linkIndex}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          
          {/* App Store Button */}
          <button
            onClick={handleAppStoreClick}
            className="flex items-center justify-center w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 mb-3"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>

          {/* Google Play Button */}
          <button
            onClick={handleGooglePlayClick}
            className="flex items-center justify-center w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm7.5-7.5L6 8.5l4.5 4.5L18 6l-7.5 7z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500">
          {copyrightText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
