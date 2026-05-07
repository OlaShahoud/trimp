import React, { useState } from 'react';
import TopBanner from './TopBanner';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SignUpModal from './SignUpModal';
import FlightDealsSection from './FlightDealsSection';
import StaysSection from './StaysSection';
import ReviewsSection from './ReviewsSection';
import Footer from './Footer';
import { sampleStays, sampleReviews, sampleFlightDeals, featuredFlightDeal, footerSections } from '../data/sampleData';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBannerClose = () => {
    setBannerVisible(false);
  };

  const handleExploreMoreStays = () => {
    console.log('Explore more stays clicked');
  };

  const handleStayCardClick = (stayId: number) => {
    console.log('Stay card clicked:', stayId);
  };

  const handleFlightDealCardClick = (dealId: number) => {
    console.log('Flight deal card clicked:', dealId);
  };

  const handleViewAllDeals = () => {
    console.log('View all flight deals clicked');
  };

  const handleFooterLinkClick = (link: string) => {
    console.log('Footer link clicked:', link);
  };

  const handleAppStoreClick = () => {
    console.log('App Store button clicked');
  };

  const handleGooglePlayClick = () => {
    console.log('Google Play button clicked');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* TopBanner */}
      {bannerVisible && (
        <TopBanner onClose={handleBannerClose} />
      )}

      {/* Navbar */}
      <Navbar onSignUpClick={handleSignUpClick} />

      {/* HeroSection */}
      <HeroSection />

      {/* SignUpModal */}
      <SignUpModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* FlightDealsSection */}
      <FlightDealsSection
        flightDeals={sampleFlightDeals}
        featuredDeal={featuredFlightDeal}
        onCardClick={handleFlightDealCardClick}
        onActionClick={handleViewAllDeals}
      />

      {/* StaysSection */}
      <StaysSection
        stays={sampleStays}
        onExploreMore={handleExploreMoreStays}
        onCardClick={handleStayCardClick}
      />

      {/* ReviewsSection */}
      <ReviewsSection
        reviews={sampleReviews}
      />

      {/* Footer */}
      <Footer
        sections={footerSections}
        onLinkClick={handleFooterLinkClick}
        onAppStoreClick={handleAppStoreClick}
        onGooglePlayClick={handleGooglePlayClick}
      />
    </div>
  );
};

export default Home;
