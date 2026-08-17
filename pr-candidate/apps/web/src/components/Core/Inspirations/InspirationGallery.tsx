import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { mockItineraries, InspirationItinerary } from '../../../data/mockInspirations';
import InspirationCard from './InspirationCard';
import InspirationDetailOverlay from './InspirationDetailOverlay';

type PriceTier = 'all' | 'budget' | 'mid' | 'premium';

const TIERS: { key: PriceTier; label: string }[] = [
  { key: 'all', label: 'All trips' },
  { key: 'budget', label: 'Under $1,500' },
  { key: 'mid', label: '$1,500–$2,000' },
  { key: 'premium', label: '$2,000+' },
];

// Join truthy class fragments into a single className string.
const cx = (...parts: (string | false | null | undefined)[]): string =>
  parts.filter(Boolean).join(' ');

const parsePrice = (price: string): number => Number(price.replace(/[^0-9.]/g, '')) || 0;

const matchesTier = (item: InspirationItinerary, tier: PriceTier): boolean => {
  if (tier === 'all') return true;
  const value = parsePrice(item.price);
  if (tier === 'budget') return value < 1500;
  if (tier === 'mid') return value >= 1500 && value <= 2000;
  return value > 2000;
};

const matchesQuery = (item: InspirationItinerary, query: string): boolean => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    item.title.toLowerCase().includes(q) ||
    item.destinationCity.toLowerCase().includes(q) ||
    item.destinationCountry.toLowerCase().includes(q) ||
    item.highlights.some((highlight) => highlight.toLowerCase().includes(q))
  );
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Stands in for the future BFF `/inspirations` list endpoint. Latency scales with
// payload size, matching the real list route's pagination cost.
const loadInspirations = async (
  tier: PriceTier,
  query: string,
): Promise<InspirationItinerary[]> => {
  const results = mockItineraries.filter(
    (item) => matchesTier(item, tier) && matchesQuery(item, query),
  );
  await delay(140 + results.length * 90);
  return results;
};

const InspirationGallery: React.FC = () => {
  const [tier, setTier] = useState<PriceTier>('all');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<InspirationItinerary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    loadInspirations(tier, query).then((data) => {
      setResults(data);
      setLoading(false);
    });
  }, [tier, query]);

  const selected = results.find((item) => item.id === selectedId) ?? null;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-tripBirdyBlack dark:text-white mb-1">
        Trip Inspirations
      </h1>
      <p className="text-sm text-tripBirdyGray mb-4">
        Browse curated getaways and import one to start planning.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {TIERS.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setTier(option.key)}
            className={cx(
              'px-3 py-1.5 rounded-full text-sm border transition-colors',
              tier === option.key
                ? 'bg-proBlue text-white border-proBlue'
                : 'bg-white dark:bg-black text-tripBirdyBlack dark:text-white border-gray-300',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="relative mb-6">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-tripBirdyGray"
        />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search destinations"
          className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-proBlue focus:border-transparent"
        />
      </div>

      {loading ? (
        <p className="text-sm text-tripBirdyGray">Loading inspirations…</p>
      ) : results.length === 0 ? (
        <p className="text-sm text-tripBirdyGray">No trips match your filters yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((item) => (
            <InspirationCard
              key={item.id}
              item={item}
              onSelect={() => setSelectedId(item.id)}
            />
          ))}
        </div>
      )}

      <InspirationDetailOverlay
        inspiration={selected}
        onClose={() => setSelectedId(null)}
        onImport={() => setSelectedId(null)}
      />
    </div>
  );
};

export default InspirationGallery;
