# jvs.sh

Personal site, live at https://jvs.sh. Astro, fully static, served from Cloudflare Workers
as static assets.

Pages are stubs under `src/pages/`. The nav is the `NAV` array in `src/consts.ts`; header and
footer are components under `src/components/` and wrap every page through `BaseLayout`.

## Development

```
npm install
npm run hooks:install # enable the pre-push hook once per clone
npm run dev       # local dev server
npm run check     # astro check
npm run format    # prettier --write
npm run verify    # format check, astro check, build
npm run build     # writes dist/
npm run preview   # build, then serve dist/ through wrangler dev
```

The pre-push hook runs `npm run verify` and stops the push if a check fails. It
checks the current working tree, including uncommitted changes. Cloudflare also
runs verification before deploying.

Pushing to `main` deploys through Cloudflare Workers Builds, which runs `npm run verify`
and then `npx wrangler deploy`. To deploy by hand:

```
npm run deploy
```

## License

MIT, see [LICENSE](LICENSE).

## Notes

The background uses `public/media/iss-background.mp4`, a 720p H.264 web copy of
`ISS_20251112_071350-20251112_073549_1080p30.mp4`. The original stays local and is
ignored by Git. Playback is muted and looping, with a pause control in the footer.
Reduced motion shows `public/media/iss-poster.jpg` without downloading the video;
the poster also works when JavaScript or autoplay is unavailable.

Do not add a long-lived `Cache-Control` rule for `/_astro/*` in `public/_headers`. The rule
also applies to 404 responses under that path, so an asset URL requested during a deploy
rollout can get its 404 cached at the edge for the full max-age. The default asset headers
(ETag plus revalidation) are safe.
