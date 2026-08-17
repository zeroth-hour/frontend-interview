import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Tailwind v4 is wired through its Vite plugin; design tokens live in src/index.css.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
