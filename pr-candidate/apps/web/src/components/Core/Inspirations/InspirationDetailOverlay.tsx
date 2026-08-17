import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { InspirationItinerary } from '../../../data/mockInspirations';

interface InspirationDetailOverlayProps {
  inspiration: InspirationItinerary | null;
  onClose: () => void;
  onImport: () => void;
}

/**
 * Detail overlay for a selected inspiration. Shows the cover image, trip meta, and
 * highlights, with a primary action to import the itinerary into the planner.
 */
const InspirationDetailOverlay: React.FC<InspirationDetailOverlayProps> = ({
  inspiration,
  onClose,
  onImport,
}) => {
  if (!inspiration) return null;

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-modal"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative bg-white dark:bg-black rounded-xl max-w-lg w-full overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 text-tripBirdyBlack hover:bg-white"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <img
          src={inspiration.image}
          alt={`${inspiration.destinationCity}, ${inspiration.destinationCountry}`}
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h2 className="text-xl font-bold text-tripBirdyBlack dark:text-white mb-1">
            {inspiration.title}
          </h2>
          <p className="text-sm text-tripBirdyGray mb-4">
            {inspiration.destinationCity}, {inspiration.destinationCountry} · {inspiration.duration}{' '}
            days · {inspiration.price}
          </p>

          <h3 className="text-sm font-bold text-tripBirdyBlack dark:text-white mb-2">Highlights</h3>
          <ul className="list-disc list-inside text-sm text-tripBirdyBlack dark:text-white mb-6 space-y-1">
            {inspiration.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onImport}
            className="w-full py-2 px-4 rounded-lg bg-proBlue text-white font-bold hover:bg-maxBlue transition-colors"
          >
            Use this itinerary
          </button>
        </div>
      </div>
    </div>
  );
};

export default InspirationDetailOverlay;
