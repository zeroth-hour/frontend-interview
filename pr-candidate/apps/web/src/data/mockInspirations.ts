// Standalone stand-in for the app's real `data/mockInspirations` module so this PR
// can run on its own. Exposes the same `mockItineraries` array and
// `InspirationItinerary` type the feature imports. (Image URLs point at a public
// placeholder service so the gallery renders real images when run locally.)

export interface InspirationItinerary {
  id: string;
  title: string;
  destinationCity: string;
  destinationCountry: string;
  duration: number;
  highlights: string[];
  image: string;
  price: string;
  travelers: string;
}

export const mockItineraries: InspirationItinerary[] = [
  {
    id: 'paris-trip-1',
    title: 'Memorable Paris Getaway',
    destinationCity: 'Paris',
    destinationCountry: 'France',
    duration: 5,
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre'],
    image: 'https://picsum.photos/seed/paris-trip-1/1200/800',
    price: '$1,200',
    travelers: '2 adults',
  },
  {
    id: 'tokyo-trip-2',
    title: 'Exciting Tokyo Adventure',
    destinationCity: 'Tokyo',
    destinationCountry: 'Japan',
    duration: 7,
    highlights: ['Senso-ji Temple', 'Shibuya Crossing', 'Tsukiji Fish Market', 'Tokyo Skytree'],
    image: 'https://picsum.photos/seed/tokyo-trip-2/1200/800',
    price: '$1,800',
    travelers: '2 adults',
  },
  {
    id: 'kenya-trip-3',
    title: 'Safari in Kenya',
    destinationCity: 'Nairobi',
    destinationCountry: 'Kenya',
    duration: 6,
    highlights: ['Maasai Mara', 'Big Five Safari', 'Hot Air Balloon', 'Cultural Village'],
    image: 'https://picsum.photos/seed/kenya-trip-3/1200/800',
    price: '$2,500',
    travelers: '2 adults',
  },
  {
    id: 'iceland-trip-4',
    title: 'Iceland Northern Lights',
    destinationCity: 'Reykjavik',
    destinationCountry: 'Iceland',
    duration: 4,
    highlights: ['Northern Lights', 'Blue Lagoon', 'Golden Circle', 'Glacier Hiking'],
    image: 'https://picsum.photos/seed/iceland-trip-4/1200/800',
    price: '$1,500',
    travelers: '2 adults',
  },
];
