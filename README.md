# Smells Fishy landing page

Marketing site for Smells Fishy, an iPhone app that flags likely scams in screenshots of messages, listings, and profiles.

This repository is the public landing page only. The app itself lives separately.

## Stack

Next.js (App Router) with React and TypeScript, styled with Tailwind, deployed on Vercel.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Layout

```
src/            pages, components, styles
public/         static assets
next.config.ts  Next.js configuration
```

## Design variants (2026-09-04)

Ten complete alternative designs live on `landing/*` branches, one per
branch, none merged. `VARIANTS.md` indexes them: what each copies, the
idea, and how to run one. `BRIEF.md` is the standard they were built to
and `VERIFIED_CLAIMS.md` is the source list for every number the site is
allowed to print.
