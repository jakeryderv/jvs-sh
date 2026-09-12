# jvs.sh

Placeholder for a personal site. A single static page in `public/`, served as Cloudflare
Worker static assets. No framework, no build step, no client JavaScript.

## Commands

```
npm run dev       # wrangler dev, serves public/ locally
npm run deploy    # wrangler deploy (Workers Builds does this on push to main)
```

## Invariants

- **Static only.** Everything lives in `public/`. There is no Worker script and no `main`
  in `wrangler.jsonc`; adding one means re-introducing a server surface, so do it
  deliberately.
- **Zero client JS.** The CSP in `public/_headers` sets `script-src` to none. Keep it.
- **Dark only.** Colors are carbonfox tokens declared inline in `index.html`.

## Deployment

Cloudflare Workers Builds, connected to this GitHub repo. A push to `main` runs
`npx wrangler deploy`. There is no build command. The custom domain `jvs.sh` is declared
in `wrangler.jsonc` and attaches on deploy.

## Commit conventions

No `Co-Authored-By` lines, no agent attribution in commit messages.
