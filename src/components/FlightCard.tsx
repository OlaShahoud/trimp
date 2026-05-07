import React from 'react';

interface FlightCardProps {
  image: string;
  title: string;
  subtitle: string;
  price?: string;
  onClick?: () => void;
}

const FlightCard: React.FC<FlightCardProps> = ({ 
  image, 
  title, 
  subtitle, 
  price, 
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          {/* Left: Title + Subtitle */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base mb-1 truncate">
              {title}
            </h3>
            <p className="text-gray-600 text-sm truncate">
              {subtitle}
            </p>
          </div>

          {/* Right: Price */}
          {price && (
            <div className="ml-3 flex-shrink-0">
              <span className="font-bold text-blue-600 text-lg">
                {price}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
