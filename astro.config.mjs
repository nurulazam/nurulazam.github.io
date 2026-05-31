import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Root user site: https://nurulazam.github.io  ->  base is '/', no sub-path.
export default defineConfig({
  site: 'https://nurulazam.github.io',
  output: 'static',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, wrap: true },
  },
});
