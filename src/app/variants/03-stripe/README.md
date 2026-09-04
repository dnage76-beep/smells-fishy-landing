# Variant 03 — Stripe

**Construction copied:** [stripe.com](https://stripe.com). Not their words, not
their marks, not their product claims. Their build: how the page is measured,
cut, coloured and paced.

## What is borrowed, specifically

**The angled gradient ribbon.** A saturated multi-colour field anchors the top
of an otherwise white page and ends in one hard diagonal that rises to the
right. Two details make it read as Stripe rather than as a generic hero:

- The cut is a `clip-path` polygon driven by `--sp-cut: 15vw`, so the angle of
  the diagonal is identical at 1440, 834 and 390 px. It is a constant angle, not
  a constant pixel offset. Stripe skews their block; a skew inside an
  `overflow: clip` parent would have cut off the sticky nav, so the polygon does
  the same job without the clipping side effect.
- A bright hairline runs along the cut (`.sp-ribbon-edge`, a second polygon two
  pixels lower, showing only the sliver), and a quieter ink hairline runs
  parallel to it thirty pixels down (`.sp-ribbon-echo`). Stripe layers panels at
  the same angle; that stack of parallel edges is most of the effect.
- The closing CTA block mirrors the opening one: same gradient, same angle, cut
  at the top instead of the bottom.

**A strict twelve column grid that everything lands on.** One container
(1152 max, 32 px gutters, 32 px column gap) and one grid. Claim columns are
`1 / span 5` or `8 / span 5`; artefacts are `7 / span 6` or `1 / span 6`;
feature cells are `span 4`; footer columns are `span 3` and add up to exactly
twelve. Nothing is placed by eye. The section eyebrow, headline, body and
button row all begin on the same column line, which is the thing you notice on
Stripe without being able to name it.

**A claim beside a concrete artefact, alternating side each section.** Stripe
puts a dark code panel next to every claim. This page puts the app's own output
there instead:

| Section | Artefact |
| --- | --- |
| Hero | the message that was checked, with the verdict card overlapping it and straddling the diagonal |
| The answer | the three-answer scale, as a real card with the hedge printed at the bottom |
| One press | the Action Button, the four stages, and a rail marked 0s / 4s / about 8s |
| Deep Dive | the evidence trail: numbered rows, source domain, one line each |

The dark panels reuse Stripe's code-panel construction exactly — a tab bar with
one active tab underlined in the accent, mono body type, a hairline footer
strip with metadata on both ends.

**The type scale.** Eyebrow 14 px semibold in the accent, sentence case, never
uppercase. Headline 66 px at `-0.03em` tracking and 1.03 line-height. Section
headline 40 px at `-0.024em`. Lede 19/1.6. Body 16.5/1.66 in a muted slate,
capped at 34em. Small print 12.5 px. Mono is 10.5 px, uppercase, `0.1em`
tracked, and appears only inside artefacts and as metadata labels — Stripe's
discipline, where mono means "this is a real value", not decoration.

**Colour discipline and the rest.** Stripe's exact card shadow recipe
(`0 15px 35px` plus `0 5px 15px`, both very low alpha, no border). Pill buttons
at 46 px. Arrow links that translate the arrow 3 px on hover. Hairline section
rules in a single light grey. A greyed logo row directly under the hero at 30 %
opacity. Fine 1.5 px stroke icons on a 24 grid above one-line labels.

**Motion.** Minimal, and all of it tied to scroll: the nav swaps from
transparent-on-gradient to white with a hairline past 96 px; the ribbon's
gradient shifts a few pixels as the page moves under it; blocks fade up 14 px
once when they first enter. Everything sits at its designed position at scroll
0, and a one second failsafe reveals anything an observer missed.

## What is deliberately different

- **The gradient is our palette, not theirs.** Stripe runs cyan to violet to
  salmon. This runs deep navy `#06102A` through `#0D266B` and action blue
  `#1C5CF7` to luminous `#48A7F8`, with a coral `#FF6B5E` bloom at the right
  edge. Same construction and same luminance arc, entirely brand colour.
- **Type.** Body and headline are Inter Tight, a precise grotesque, because
  Stripe's craft is a single neutral sans at every size. Fredoka survives on the
  wordmark only. That is what Stripe itself does: a distinct logotype, one
  neutral face for the page.
- **Stripe shows code. This shows evidence.** Their artefact proves the product
  is programmable. Ours proves the product is checkable: quoted signals, a
  source list, a timing rail. Every artefact is labelled `EXAMPLE` in mono so no
  one reads a sample verdict as a claim.
- **No customer logo wall.** The row under the hero is the channel logos from
  `public/logos/`, framed as "anything you can screenshot". The footer states
  plainly that those marks belong to their owners and imply no affiliation.
- The verdict scale card prints "It points at warning signs. It never claims
  certainty." as its footer, so the hedge is part of the design rather than
  small print.

## Brand rules bent

None from the palette. The one bend is typographic: **Fredoka is used for the
wordmark only, not for headlines.** Stripe's construction depends on a single
crisp grotesque carrying the whole type scale, and a rounded display face at
66 px would have been a different page. Navy, action blue, luminous, cream and
coral are all used as specified.

## Content

Hero says one thing. Every verdict is hedged (`showed warning signs`,
`worth a second look`, `looks okay so far`). No store badges, no press logos, no
invented numbers, no testimonials, no em dashes. The CTA is the beta mail link;
the footer and two body links point at `/privacy`.
