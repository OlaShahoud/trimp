import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  reviewText: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ 
  image, 
  name, 
  location, 
  rating, 
  reviewText 
}) => {
  // Generate star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating 
              ? 'fill-yellow-400 text-yellow-400' 
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex gap-3">
      {/* Left: User Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="flex-1 min-w-0">
        {/* Name */}
        <h4 className="font-semibold text-gray-900 text-base">
          {name}
        </h4>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-1">
          {location}
        </p>

        {/* Stars */}
        <div className="flex gap-0.5 mb-2">
          {renderStars(rating)}
        </div>

        {/* Review Text */}
        <p className="text-gray-700 text-sm leading-relaxed">
          {reviewText}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
