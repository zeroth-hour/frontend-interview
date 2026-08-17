/** A single attraction record, matching the shape of src/data/attractions.json. */
export interface Attraction {
  id: string;
  name: string;
  city: string;
  country: string;
  category: string;
  imageUrl: string;
  /** Entry price in USD. `0` means free admission. */
  priceFrom: number;
  rating: number;
  blurb: string;
}
