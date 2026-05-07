import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import FlightCard from './FlightCard';

export interface Stay {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface StaysSectionProps {
  stays: Stay[];
  title?: string;
  actionText?: string;
  onExploreMore?: () => void;
  onCardClick?: (stayId: number) => void;
  gridCols?: 1 | 2 | 3 | 4;
}

const StaysSection: React.FC<StaysSectionProps> = ({ 
  stays,
  title = "Explore unique places to stay",
  actionText = "Explore more stays",
  onExploreMore,
  onCardClick,
  gridCols = 4
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedStays = isExpanded ? stays : stays.slice(0, 3);

  const handleExploreMore = () => {
    setIsExpanded(!isExpanded);
    if (onExploreMore) {
      onExploreMore();
    }
  };

  const handleCardClick = (stayId: number) => {
    if (onCardClick) {
      onCardClick(stayId);
    } else {
      console.log('Stay card clicked:', stayId);
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
      <SectionHeader title={title} actionText="All →" onActionClick={handleExploreMore} />

      {/* Grid of Cards */}
      <div className="overflow-hidden">
        <div className={`grid ${getGridCols()} gap-6 transition-all duration-500 ease-in-out`}>
          {displayedStays.map((stay, index) => (
            <div
              key={stay.id}
              className="animate-in fade-in slide-in-from-bottom-2 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FlightCard
                image={stay.image}
                title={stay.title}
                subtitle={stay.subtitle}
                onClick={() => handleCardClick(stay.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaysSection;
