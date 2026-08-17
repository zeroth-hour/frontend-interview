import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Minimal harness so the PR can run standalone. The reviewed feature lives under
// apps/web/src; design tokens are in index.css.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
