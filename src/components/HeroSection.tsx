import React from 'react';
import bgHero from './../assets/bghero.png';
import gradient from './../assets/gradient.png';
import SearchBar from './SearchBar';
import CookieConsent from './CookieConsent';
import ModernSearchBar from './ModernSearchBar';
const HeroSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgHero})` }}
      />
      <div className="relative z-10 flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[756px]">
          <h1 className="text-center font-sans font-extrabold bg-cover bg-center bg-clip-text text-transparent"
              style={{ 
                backgroundImage: `url(${gradient})`,
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.2'
              }}>
            <span className="block">It's more than</span>
            <span className="block">just a trip</span>
          </h1>
        </div>
      </div>
      <ModernSearchBar/>
      <CookieConsent />
    </section>
  );
};

export default HeroSection;
 