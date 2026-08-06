# Digital House Marketing

Marketing site for **Digital House Marketing** — websites, ads, content, SEO, and AI-powered growth for ambitious businesses. Based in Wexford Town.

## Stack

| Layer | Technology |
|--------|------------|
| Framework | RedwoodJS 8.9 |
| UI | React 18 + Vite |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| Package manager | Yarn 4 (workspaces: `web`, `api`) |
| Node | 20.x |
| Hosting | Vercel |

## Local development

```bash
yarn install
yarn rw dev
```

Open [http://localhost:8910](http://localhost:8910).

## Build

```bash
yarn rw build
```

## Deploy (Vercel)

1. Push this repo to GitHub
2. In Vercel → **Add New Project** → import this repository
3. `vercel.json` already enables Corepack and `yarn rw build`
4. Add env vars on that Vercel project when you add a database / auth later

## Project layout

```
DigitalHouseMarketingWebsite/
├── api/           # GraphQL API + Prisma (ready for later features)
├── web/           # React frontend
│   └── src/
│       ├── components/
│       └── pages/HomePage/
├── redwood.toml
├── vercel.json
└── package.json
```
