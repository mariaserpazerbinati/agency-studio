// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: sostituisci con il dominio definitivo prima del deploy (serve per sitemap, OG, canonical)
  site: 'https://www.example.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  image: {
    responsiveStyles: true
  },

  compressHTML: true
});