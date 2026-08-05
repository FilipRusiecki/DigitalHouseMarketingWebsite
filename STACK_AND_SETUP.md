# Digital House — Stack & Setup

Reference for local development and deploy.

## Commands

```bash
yarn install
yarn rw dev          # http://localhost:8910
yarn rw build        # production build (also used by Vercel)
```

## Vercel

- Import `FilipRusiecki/DigitalHouseMarketingWebsite` as its own project
- Build uses `vercel.json` (`ENABLE_EXPERIMENTAL_COREPACK` + `yarn rw build`)
- Keep env vars and domains specific to this project

## What’s here now

- Homepage: hero, craft, process, contact CTA
- Tailwind theme tokens: `dh-ink`, `dh-surface`, `dh-mist`, `dh-accent`, `dh-warm`
- Framer Motion section / hero animations

## What’s deferred

- dbAuth / admin
- PostgreSQL models
- Extra marketing pages

Add those later with `yarn rw setup auth dbAuth` and Prisma migrations when needed.
