// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// GitHub Pages serves this repo (junex161.github.io) at https://junex161.github.io/
// If you later use your own domain, set `site` to it.
export default defineConfig({
  site: 'https://junex161.github.io',
  integrations: [vue()],
});
