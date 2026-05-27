import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // For GitHub Pages deployment, set base to your repo name
  base: '/joyal-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project: resolve(__dirname, 'project.html'),
        experience: resolve(__dirname, 'experience.html'),
      }
    }
  },
  server: {
    open: true,
  },
});
