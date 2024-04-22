import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://oxca.be',
  integrations: [mdx(), sitemap(), svelte(), tailwind()]
});
