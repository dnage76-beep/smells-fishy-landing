# Variant 05 — Arc

**Branch:** `landing/05-arc` · **Route:** `/` (`src/app/page.tsx` renders
`variants/05-arc/arc.tsx`)

## The construction it copies

Arc Browser's marketing pages (arc.net). Arc's craft is playful-premium:
hand-made and slightly irreverent, but beautifully typeset. Nothing about it
is cartoon.

Devices borrowed, one for one:

- **A single warm gradient wash behind the whole document.** One absolutely
  positioned layer, `inset: 0`, carrying ten radial gradients placed by
  percentage of total page height. Because it is one element spanning the
  entire page rather than a per-section background, colour genuinely bleeds
  through every section seam the way it does on Arc. Sections are transparent
  and float on it.
- **Floating pill navigation.** Sticky, fully rounded, translucent with
  `backdrop-filter`, sitting inside the page margin rather than spanning the
  viewport edge to edge.
- **A chip set inline in the headline.** Arc regularly wraps one word of a
  display line in a coloured rounded slab, slightly rotated. Here
  "Press once." sits in a coral slab at −1.4°. That single rotation is the
  only "hand-made" gesture on the page.
- **Oversized rounded display type.** Fredoka at up to 122px, line-height
  0.90, letter-spacing −0.03em. Section heads at up to 68px with 0.98 leading.
- **Enormous curvature everywhere.** Nothing on the page has a corner tighter
  than 18px: cards at 34px, islands at up to 54px, everything interactive at
  999px.
- **Saturated full-colour islands.** Two navy/blue islands and one coral
  island, each a rounded slab floating on the wash, each with its own internal
  radial lighting. Arc uses colour confidently, in whole panels, not as
  accents on white.
- **A lot of vertical space per idea.** Section padding tops out at 150px;
  one idea owns one screenful.
- **Soft springy arrival motion.** `IntersectionObserver` reveals with
  `cubic-bezier(.2,.95,.24,1.02)` over 820ms and a per-item stagger; cards
  lift 6px on hover on the same curve; the channel tiles sit at alternating
  ±2° and straighten as they lift.
- **Overlapping product UI.** The hero panel holds a phone showing the
  suspicious text with the verdict card floating over its right edge and an
  "about 8 seconds" chip hanging off the bottom, rotated −3°.

## What is deliberately different for this product

- **Fredoka is the display face, not a borrowed one.** Arc's own type is a
  neutral grotesque with a serif italic mixed in. Fredoka is already the brand
  face and it is rounded and warm, which does Arc's playfulness without
  needing the serif trick. The mixed-face device is replaced by the coral
  slab chip.
- **The wash runs warm-to-cool-to-warm rather than Arc's pink-lavender.** It
  is built from the brand's own coral and luminous blue, plus a peach tint
  (`rgba(255,183,124,·)`) that is a lightened coral, so the page can be warm
  without introducing a colour the brand does not have.
- **No product screenshots.** The app is in private beta and there are no
  approved captures, so the phone and the verdict card are built from CSS and
  type, matching the app's real result screen: hedged verdict, what stood out,
  what to do next.
- **The source list in the Deep Dive names categories, not sites.** Inventing
  plausible-looking citations would be a fabricated claim, so the rows read
  "Public news reporting", "Consumer protection notice", "The company's own
  page".

## Brand rules bent

- **Coral is used as a whole panel, not a small accent.** The closing CTA is a
  full coral-to-peach island with navy type. Arc's construction depends on at
  least one section where colour is the entire idea, and coral is the only
  brand colour warm enough to carry it. Coral stays a small accent everywhere
  else on the page.
- **Peach `#FFB77C` appears in the wash only.** It is a lightened coral, used
  at low alpha as gradient light, never as a UI colour.

## Notes

- Entrance animations are skipped for `prefers-reduced-motion`, for automated
  capture (`navigator.webdriver` / headless user agents) and where
  `IntersectionObserver` is missing, so a full-page screenshot or a crawler
  sees the finished page rather than a column of invisible boxes.
- Channel marks come from the real `public/logos/` SVGs, drawn through a CSS
  mask so they render in brand ink instead of nineteen competing brand colours.
- Verified at 1440, 834 and 390 px. `document.scrollWidth` equals
  `clientWidth` at 834 and 390: no horizontal overflow.
