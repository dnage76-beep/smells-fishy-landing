# Variant 06 — Apple

**Branch:** `landing/06-apple` · **Route:** `/` (`src/app/page.tsx` renders
`variants/06-apple/apple.tsx`)

## The construction it copies

An Apple product page (the iPhone / Watch marketing pages). Apple's craft is
restraint at scale: three words own a screen, nothing is decorated, and the
only rules on the page are hairlines.

Devices borrowed, one for one:

- **Full-bleed sections that each own the viewport.** The hero is exactly
  `100svh` with the device cropped by the fold; Deep Dive and the closing CTA
  are `min-height: 100svh` with their content vertically centred.
- **Strict dark / light alternation.** black → white → `#F5F5F7` → black →
  white → `#F5F5F7` → black → `#F5F5F7`. No section shares a ground with the
  one before it.
- **Enormous centred display type with tight leading.** The hero word runs to
  146px at `line-height: 0.98` and `letter-spacing: -0.04em`; section heads to
  104px at 1.04. One word, "Suspicious?", is the entire hero headline.
- **Very short lines of copy set large.** Every lede is one sentence at
  18–24px in a 520–620px measure, centred, in Apple's secondary grey.
- **A single device composition as the hero,** centred over a soft blue
  radial, cropped by the bottom of the section so it reads as continuing past
  the fold.
- **Hairline dividers doing all the separating.** The Deep Dive source list,
  the privacy rows and the numbers band are all built from 1px rules at 13–16%
  alpha. There is not a single card, shadow-box or rounded panel on the page
  outside the device screens.
- **The tech-specs row.** The privacy section is Apple's spec table: a
  semibold label column at 250px, a grey description column, a hairline
  between every row.
- **A thin fixed global nav** at 50px with 13px links, `backdrop-filter:
  saturate(180%) blur(20px)`, and a chevron on the trailing action.
- **The pinned scrollytelling section** (see below).

## The scroll-driven section

`variants/06-apple/stage.tsx`. `#how` is a `340svh` section holding a
`position: sticky; top: 0; height: 100svh` stage. A rAF-throttled scroll
listener reads the section's `getBoundingClientRect()` and turns it into a
0-to-1 progress figure, which drives three things at once:

1. the step index (which copy block is shown, cross-fading and rising 18px),
2. the device screen (message → checking → verdict), and
3. a continuous transform: the progress ring on the "checking" screen fills
   with sub-progress inside step two, and each analysis row flips from "…" to
   "read" as the ring passes it.

A second scroll-linked transform runs on the hero: the device rises 46px and
scales to 1.07 over the first viewport of scroll.

**Degrading:** `prefers-reduced-motion`, automated capture
(`navigator.webdriver` / headless user agents) and viewports under 760px all
fall back to the same static layout: the identical two columns, unpinned,
with the section at its natural height and all three steps shown at once
under hairlines. Nothing is hidden and no information is only reachable by
scrolling. The full-page screenshots on the Desktop show this fallback; the
pinned behaviour was verified separately at 1440×900 at three scroll
positions.

## What is deliberately different for this product

- **The device screens are the product, not a photograph.** There are no
  approved captures of a private beta, so the three screens are built from CSS
  and type and match what the app actually shows: the suspicious message, a
  check in progress, then a hedged verdict with what stood out and what to do
  next.
- **The Deep Dive source rows name categories, not sites.** Inventing
  plausible citations would be a fabricated claim.
- **No store badges, no press row, no testimonials,** which is where an Apple
  page would normally put a "Buy" band. The closing section asks for a beta
  invite instead.
- **The spec table has a row Apple would not need: "If you sign in".** The app
  gained optional Apple and Google sign-in, so the page says "No account
  required" rather than "no account", and spends a row saying what a provider
  hands over when someone does sign in. Every figure on the page and its
  wording come from `VERIFIED_CLAIMS.md`.

## Brand rules bent

- **Inter Tight, not Fredoka, is the display face here.** Apple's construction
  is carried by a tight neutral grotesque at 100px+ with negative tracking;
  Fredoka's rounded terminals fight it and the page stops reading as Apple.
  Inter Tight is already loaded by the root layout as `--font-body`. Fredoka
  survives where the brand's voice belongs: the wordmark in the nav and the
  footer.
- **The page ground is Apple's black / white / `#F5F5F7`, not the brand
  navy.** Apple's dark-light alternation only works at those values. The brand
  colour lives where the product does: navy and luminous blue inside every
  device screen, action blue `#1C5CF7` on every button, link and numeral, and
  coral on the verdict badge and the wordmark.

## Notes

- Verified at 1440, 834 and 390 px. `document.scrollWidth` equals
  `clientWidth` at 834 and 390: no horizontal overflow.
- Channel marks come from the real `public/logos/` SVGs, drawn through a CSS
  mask so they sit in the hairline strip as one ink rather than eight brand
  colours.
