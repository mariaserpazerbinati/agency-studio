// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Indirizzo pubblico: serve per sitemap, URL canonico e anteprime social.
  // Quando arriverà un dominio proprio, va aggiornato qui e in public/robots.txt.
  site: 'https://mariaserpa.netlify.app',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  image: {
    responsiveStyles: true
  },

  compressHTML: true
});