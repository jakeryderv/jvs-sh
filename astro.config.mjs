import { defineConfig } from 'astro/config';

// Fully static. There is no adapter: `astro build` writes plain HTML to dist/, and
// Wrangler serves that directory as Worker static assets. To server-render a route
// later, add @astrojs/cloudflare and mark that route `prerender = false`.
export default defineConfig({
  site: 'https://jvs.sh',
  trailingSlash: 'always',
});
