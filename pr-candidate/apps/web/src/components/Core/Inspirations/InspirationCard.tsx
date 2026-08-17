import React from 'react';
import { InspirationItinerary } from '../../../data/mockInspirations';

interface InspirationCardProps {
  item: InspirationItinerary;
  onSelect: () => void;
}

/**
 * Compact preview card for a single inspiration. Renders the cover image, title,
 * and a short meta line; the whole card is clickable to open the detail overlay.
 */
const InspirationCardBase: React.FC<InspirationCardProps> = ({ item, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="cursor-pointer rounded-xl overflow-hidden bg-white dark:bg-black border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={item.image}
        alt={`${item.destinationCity}, ${item.destinationCountry}`}
        className="w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-tripBirdyBlack dark:text-white mb-1">{item.title}</h3>
        <p style={{ color: '#AEB4BE' }} className="text-sm mb-2">
          {item.duration} days · {item.travelers}
        </p>
        <div className="flex items-center justify-between">
          <span style={{ color: '#2E75B6' }} className="text-sm font-bold">
            {item.price}
          </span>
          <span className="text-xs text-tripBirdyGray">{item.destinationCountry}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InspirationCardBase);
