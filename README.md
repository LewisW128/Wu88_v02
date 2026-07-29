# WU88 武財神 ONE — lifehigh-web

Next.js (App Router) + TypeScript + Tailwind CSS v4 implementation of the WU88 PC homepage, statically exported and deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

## Production build (static export)

```bash
npm run build
```

Outputs to `out/`. The base path (`/Wu88_v02`) is only applied in production builds — see `next.config.ts` and `src/lib/asset.ts`.
