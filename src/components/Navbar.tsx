import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSignUpClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignUpClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Flights', href: '#flights' },
    { name: 'Hotels', href: '#hotels' },
    { name: 'Packages', href: '#packages' }
  ];

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <div className="flex justify-between items-center" style={{ height: '96px' }}>
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: '#605DEC' }}>Tripma</h1>
          </div>

          {/* Navigation Links and Sign In/Sign Up - Right (Desktop) */}
          <div className="hidden md:flex items-center" style={{ gap: '16px' }}>
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans font-normal transition-colors duration-200"
                style={{ 
                  fontSize: '16px',
                  color: link.name === 'Flights' ? '#605DEC' : '#7C8DB0'
                }}
              >
                {link.name}
              </a>
            ))}
            {/* Sign In/Sign Up */}
            <button className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
             style={{ 
                 
                  color: '#7C8DB0',
                }}>
              Sign in
            </button>
            <button 
              onClick={onSignUpClick}
              className="font-sans font-normal text-white transition-colors duration-200 flex items-center justify-center"
              style={{
                backgroundColor: '#605DEC',
                width: '95px',
                height: '48px',
                borderRadius: '4px'
              }}
            >
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Sign In/Sign Up */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="px-3 space-y-2">
                  <button className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left">
                    Sign in
                  </button>
                  <button 
                    onClick={onSignUpClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 w-full"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
