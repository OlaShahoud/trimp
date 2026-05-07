import React from 'react';
import ReviewCard from './ReviewCard';

export interface Review {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviewText: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  title?: string;
  gridCols?: 1 | 2 | 3;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ 
  reviews,
  title = "What Tripma users are saying",
  gridCols = 3
}) => {
  const getGridCols = () => {
    switch (gridCols) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-3';
      default: return 'grid-cols-1 md:grid-cols-3';
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Centered Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
        {title}
      </h2>

      {/* Grid of Review Cards */}
      <div className={`grid ${getGridCols()} gap-6`}>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            image={review.image}
            name={review.name}
            location={review.location}
            rating={review.rating}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
