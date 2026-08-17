import attractionsData from '../../data/attractions.json';
import type { Attraction } from '../../types';

const attractions = attractionsData as Attraction[];

/**
 * Explore Attractions — the screen you'll build.
 *
 * The fixture is already loaded below. See README.md for the requirements and
 * open mock.html in a browser for the visual target. The shared components in
 * src/components/ui are available to reuse.
 */
export default function ExploreAttractions() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-tripBirdyBlack mb-1">Explore Attractions</h1>
      <p className="text-sm text-tripBirdyGray mb-6">
        {attractions.length} attractions loaded from the fixture. Build the browse UI here — see
        README.md and mock.html.
      </p>

      {/* TODO(candidate): render the search box, the category filter, and the grid of attraction cards. */}
    </div>
  );
}
