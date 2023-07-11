import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), tailwind(), sitemap()]
});