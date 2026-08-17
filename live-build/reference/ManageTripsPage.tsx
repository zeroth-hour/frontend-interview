import { useMemo, useState } from 'react';
import TripBirdyToolbarSearch from '../src/components/ui/TripBirdyToolbarSearch';
import TripBirdyCard from '../src/components/ui/TripBirdyCard';

/**
 * Reference: "Manage Trips" — a representative instance of our Manage-list surface.
 * Study how the toolbar search, the filter, and the card grid fit together, and how
 * the visible list is derived (not stored) from the source data + the active filters.
 *
 * NOTE: study material only — not wired into the starter build.
 */

interface Trip {
  id: string;
  destination: string;
  country: string;
  status: TripStatus;
  startDate: string;
  travelers: number;
}

type TripStatus = 'draft' | 'booked' | 'completed';

const STATUS_FILTERS: { key: TripStatus | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'draft', label: 'Draft' },
  { key: 'booked', label: 'Booked' },
  { key: 'completed', label: 'Completed' },
];

const TRIPS: Trip[] = [
  { id: 't1', destination: 'Paris', country: 'France', status: 'booked', startDate: 'May 3', travelers: 2 },
  { id: 't2', destination: 'Tokyo', country: 'Japan', status: 'draft', startDate: 'Jun 18', travelers: 2 },
  { id: 't3', destination: 'Rome', country: 'Italy', status: 'completed', startDate: 'Feb 9', travelers: 4 },
  { id: 't4', destination: 'Nairobi', country: 'Kenya', status: 'draft', startDate: 'Sep 1', travelers: 2 },
  { id: 't5', destination: 'Reykjavik', country: 'Iceland', status: 'booked', startDate: 'Nov 22', travelers: 2 },
];

function StatusBadge({ status }: { status: TripStatus }) {
  const tone =
    status === 'booked'
      ? 'bg-secondaryBlue text-maxBlue'
      : status === 'completed'
        ? 'bg-tripBirdyGreen text-white'
        : 'bg-gray-200 text-tripBirdyGray';
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium capitalize ${tone}`}>
      {status}
    </span>
  );
}

export default function ManageTripsPage() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<TripStatus | 'all'>('all');

  // The visible list is derived from source + active filters — never stored separately.
  const visibleTrips = useMemo(() => {
    const query = search.trim().toLowerCase();
    return TRIPS.filter((trip) => {
      const matchesStatus = status === 'all' || trip.status === status;
      const matchesSearch =
        !query ||
        trip.destination.toLowerCase().includes(query) ||
        trip.country.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [search, status]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-tripBirdyBlack mb-4">Manage Trips</h1>

      <div className="mb-4">
        <TripBirdyToolbarSearch
          label="Search trips"
          inputId="manage-trips-search"
          value={search}
          onChange={setSearch}
          placeholder="Search by destination or country"
          onClear={() => setSearch('')}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {STATUS_FILTERS.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setStatus(option.key)}
            className={
              status === option.key
                ? 'px-3 py-1.5 rounded-full text-sm border border-proBlue bg-proBlue text-white'
                : 'px-3 py-1.5 rounded-full text-sm border border-gray-300 bg-white text-tripBirdyBlack hover:border-proBlue'
            }
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleTrips.map((trip) => (
          <TripBirdyCard key={trip.id}>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-bold text-tripBirdyBlack">{trip.destination}</h3>
              <StatusBadge status={trip.status} />
            </div>
            <p className="text-sm text-tripBirdyGray">
              {trip.country} · {trip.startDate} · {trip.travelers} travelers
            </p>
          </TripBirdyCard>
        ))}
      </div>
    </div>
  );
}
