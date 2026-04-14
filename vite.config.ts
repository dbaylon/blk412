import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menuDrinks: resolve(__dirname, 'menu-drinks.html'),
        menuFood: resolve(__dirname, 'menu-food.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
