import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import FlightCard from './FlightCard';

export interface FlightDeal {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
}

interface FlightDealsSectionProps {
  flightDeals: FlightDeal[];
  featuredDeal?: FlightDeal;
  title?: string;
  actionText?: string;
  onActionClick?: () => void;
  onCardClick?: (dealId: number) => void;
  gridCols?: 1 | 2 | 3 | 4;
}

const FlightDealsSection: React.FC<FlightDealsSectionProps> = ({ 
  flightDeals,
  featuredDeal,
  title = "Flight Deals",
  actionText = "View All Deals",
  onActionClick,
  onCardClick,
  gridCols = 4
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedDeals = isExpanded ? flightDeals : flightDeals.slice(0, 3);

  const handleActionClick = () => {
    setIsExpanded(!isExpanded);
    if (onActionClick) {
      onActionClick();
    }
  };

  const handleCardClick = (dealId: number) => {
    if (onCardClick) {
      onCardClick(dealId);
    } else {
      console.log('Flight deal card clicked:', dealId);
    }
  };

  const getGridCols = () => {
    // Always use 3-column grid for desktop, 2 for tablet, 1 for mobile
    // This ensures 3 cards fill the entire row width initially
    return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeader title={title} actionText="All →" onActionClick={handleActionClick} />

      {/* Small Cards Grid */}
      <div className="overflow-hidden mb-8">
        <div className={`grid ${getGridCols()} gap-6 transition-all duration-500 ease-in-out`}>
          {displayedDeals.map((deal, index) => (
            <div
              key={deal.id}
              className="animate-in fade-in slide-in-from-bottom-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FlightCard
                image={deal.image}
                title={deal.title}
                subtitle={deal.subtitle}
                price={deal.price}
                onClick={() => handleCardClick(deal.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Featured Full-Width Card */}
      {featuredDeal && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          <FlightCard
            image={featuredDeal.image}
            title={featuredDeal.title}
            subtitle={featuredDeal.subtitle}
            price={featuredDeal.price}
            onClick={() => handleCardClick(featuredDeal.id)}
            featured={true}
          />
        </div>
      )}
    </section>
  );
};

export default FlightDealsSection;
