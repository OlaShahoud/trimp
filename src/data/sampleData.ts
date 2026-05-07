import { Stay } from '../components/StaysSection';
import { Review } from '../components/ReviewsSection';
import { FooterSection } from '../components/Footer';
import { FlightDeal } from '../components/FlightDealsSection';

export const sampleStays: Stay[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    title: 'Luxury Villa',
    subtitle: 'Private pool & ocean view'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
    title: 'Mountain Cabin',
    subtitle: 'Cozy retreat in nature'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
    title: 'Beach House',
    subtitle: 'Steps from the sand'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    title: 'City Apartment',
    subtitle: 'Modern downtown living'
  }
];

export const sampleReviews: Review[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b6bc?w=100&h=100&fit=crop&crop=face',
    name: 'Emily Rodriguez',
    location: 'Los Angeles, CA',
    rating: 5,
    reviewText: 'Tripma made my vacation planning so easy! The booking process was smooth and I found amazing deals on hotels. Definitely using it again for my next trip.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    name: 'Michael Chen',
    location: 'New York, NY',
    rating: 4,
    reviewText: 'Great platform for finding unique accommodations. The interface is intuitive and the customer support team was very helpful when I had questions about my booking.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    name: 'Sarah Thompson',
    location: 'Chicago, IL',
    rating: 5,
    reviewText: 'I love the variety of options available on Tripma! From budget-friendly stays to luxury resorts, there\'s something for every type of traveler. Highly recommend!'
  }
];

export const sampleFlightDeals: FlightDeal[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61da209696?w=400&h=300&fit=crop',
    title: 'New York to London',
    subtitle: 'Round trip • Economy',
    price: '$459'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1488689344304-f0dbf1d28ac9?w=400&h=300&fit=crop',
    title: 'Los Angeles to Tokyo',
    subtitle: 'Round trip • Premium Economy',
    price: '$899'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1530789253388-0ea3c7b0f828?w=400&h=300&fit=crop',
    title: 'Chicago to Paris',
    subtitle: 'Round trip • Business',
    price: '$1,299'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
    title: 'Miami to Barcelona',
    subtitle: 'Round trip • Economy',
    price: '$679'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1542361347-9a1c9cdb3f95?w=400&h=300&fit=crop',
    title: 'San Francisco to Rome',
    subtitle: 'Round trip • Economy',
    price: '$799'
  }
];

export const featuredFlightDeal: FlightDeal = {
  id: 999,
  image: 'https://images.unsplash.com/photo-1521817744049-aca5e5a0bb2b?w=800&h=400&fit=crop',
  title: 'Dubai to Singapore',
  subtitle: 'Round trip • First Class • Limited Time Offer',
  price: '$2,499'
};

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog', 'Contact']
  },
  {
    title: 'Explore',
    links: ['Flights', 'Hotels', 'Car Rentals', 'Packages', 'Deals']
  },
  {
    title: 'Support',
    links: ['Help Center', 'Safety', 'Terms', 'Privacy', 'Cookie Policy']
  },
  {
    title: 'Destinations',
    links: ['Europe', 'Asia', 'Americas', 'Africa', 'Middle East', 'Oceania']
  }
];
