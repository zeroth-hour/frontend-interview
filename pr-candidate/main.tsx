import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import InspirationGalleryPage from './apps/web/src/pages/InspirationGalleryPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InspirationGalleryPage />
  </StrictMode>,
);
