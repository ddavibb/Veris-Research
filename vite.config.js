import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative asset paths so the build works at a root custom domain AND at the
  // GitHub Pages project subpath (https://<user>.github.io/Veris-Research/).
  base: './',
  plugins: [react()],
});
