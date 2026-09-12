# jvs.sh

Personal site, live at https://jvs.sh. Astro, fully static, served from Cloudflare Workers
as static assets.

Pages are stubs under `src/pages/`. The nav is the `NAV` array in `src/consts.ts`; header and
footer are components under `src/components/` and wrap every page through `BaseLayout`.

## Development

```
npm install
npm run dev       # local dev server
npm run check     # astro check
npm run format    # prettier --write
npm run verify    # format check, astro check, build
npm run build     # writes dist/
npm run preview   # build, then serve dist/ through wrangler dev
```

Pushing to `main` deploys through Cloudflare Workers Builds, which runs `npm run verify`
and then `npx wrangler deploy`. To deploy by hand:

```
npm run deploy
```

## License

MIT, see [LICENSE](LICENSE).
