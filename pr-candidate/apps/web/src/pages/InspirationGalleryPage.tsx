import React, { useEffect } from 'react';
import { mockItineraries } from '../data/mockInspirations';
import InspirationGallery from '../components/Core/Inspirations/InspirationGallery';

/**
 * Route entry point for the Trip Inspirations browse view. Thin wrapper around
 * InspirationGallery; owns the page-level analytics view event and shell layout.
 */
const InspirationGalleryPage: React.FC = () => {
  useEffect(() => {
    // Record a single "inspirations viewed" event when the page first mounts,
    // tagged with how many inspirations were available at entry.
    console.info('[analytics] inspirations_gallery_viewed', {
      available: mockItineraries.length,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-primaryBlue/20 dark:bg-black">
      <InspirationGallery />
    </div>
  );
};

export default InspirationGalleryPage;
