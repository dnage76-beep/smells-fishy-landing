# Landing page: ten design variants (2026-09-04)

Derek's directive, verbatim intent: build ten different versions of the
landing page, fully out. Try different ideas for how it looks. Not
cartoony. Fully built designs. Copy different apps 100%. Not wordy, but
unique. One should be very glassy and integrate with the background. New
ideas. Every branch documented on GitHub, screenshots on the Desktop.

## What "fully built" means

A variant is finished when it is a complete landing page a visitor could
use: navigation, hero, what the product does, how one press works, the
Deep Dive, privacy, a real call to action, and a footer with the privacy
link. It is responsive at 1440, 834 and 390 px wide, it has no console
errors, `npm run build` succeeds, and its screenshots are on Derek's
Desktop. A page that only looks right at one width is not finished.

## What "copy an app 100%" means

Copy the CONSTRUCTION, not the content: that app's grid, type scale and
pairing, colour discipline, spacing rhythm, component shapes, motion
character, and the order it introduces ideas. A visitor who knows the app
you copied should recognise the craft. You are not copying their words,
their logos, or their product claims, and you never imply an affiliation.

## Content rules (they are not negotiable)

- **Not wordy.** Short lines. A hero says one thing. Cut every sentence
  that repeats another.
- **True claims only.** No fabricated awards, no press logos, no App Store
  or Google Play badges (the app is not in a store yet), no invented user
  counts, no testimonials.
- **Hedged verdict language**, matching the app: "flagged", "showed
  warning signs", "worth a second look". Never "caught", "avoided",
  "guaranteed", "100% accurate", and never a declarative "this is a scam".
- The product: an iPhone app that checks a suspicious text, email, link or
  screenshot in about eight seconds, one press from an Action Button or
  Back Tap, and answers with a hedged verdict, what stood out, and what to
  do next. History stays on the phone. An optional Deep Dive digs further
  with linked sources. No account required.
- Call to action: the beta invite mail link already used on the site
  (`mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite`).
- Privacy: link to the existing `/privacy` route. Its copy is legally
  load-bearing and mirrors the app's policy. Do not rewrite it.
- **No cartoon art, no hand-drawn illustration, no emoji as decoration.**
  Reuse the real brand assets in `public/` (`assets/fishy-logo.png`, the
  channel logos under `logos/`). Anything else you need must be built from
  CSS, SVG geometry, real screenshots, or type.
- No em dashes in copy.

## Brand

Navy `#081433` to `#0D266B` deep field, action blue `#1C5CF7`, luminous
`#48A7F8`, cream `#F5F0E1`, coral `#FF6B5E` as a small second accent, ink
`#0A1F45`, secondary ink `#5C6979`. Display face is Fredoka (already wired
as `var(--font-display)`); body is the system stack. A variant may bend
this palette if its copied construction demands it, but it must still read
as the same product, and it must say in its README what it bent and why.

## Mechanics

- Your worktree, your branch, your port. One variant per branch, built as
  the site's home page (`src/app/page.tsx`) with its components under
  `src/app/variants/<nn-name>/`. Branch from `main`, never from another
  variant.
- Dev server: `npm run dev -- -p <your port>`. Kill it when you are done.
- Screenshots: `NODE_PATH=$(npm root -g) node scripts/shoot.mjs http://localhost:<port> ~/Desktop/"Smells Phishy Review"/landing <nn-name>`
  then LOOK at the PNGs yourself and iterate until the design is right.
- Prove it builds: `npm run build`.
- Each branch carries `src/app/variants/<nn-name>/README.md`: what app's
  construction it copies, the specific things it borrows, what is
  deliberately different, and any brand rule it bent.
- Push the branch to `origin`. Never merge to `main`; the manager does.
