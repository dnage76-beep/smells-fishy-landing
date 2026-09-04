# Variant 04 — Geist

**Construction copied:** Vercel's [Geist](https://vercel.com/geist) design
system and the pages built on it. Not their words, not their marks, not their
product claims. Their build: how the page is ruled, spaced, typeset and
restrained.

## What is borrowed, specifically

**Two vertical rails, and full bleed horizontal rules crossing them.** Every
section's content sits inside a 1264 px `.gs-frame` whose left and right edges
are 1 px `#242424`. Those two rails run unbroken from the nav to the footer.
The section rules are on the `<section>` itself, so they bleed edge to edge and
cut across the rails. That crossing is what makes the page read as a technical
drawing rather than a stack of blocks. On phones the rails come off and the
rules stay.

**Bordered cells that share their hairlines.** The cell grids are
`display: grid; gap: 1px; background: var(--line)` with black cells sitting in
the gaps, so no border is ever drawn twice and every join is exactly one pixel.
Hover lifts a cell from `#000` to `#0a0a0a` in 140 ms. Nothing else moves.

**Mono for labels and metadata, sans for language.** Geist Mono, 10 to 11 px,
uppercase, `0.09em` tracked, `#7d7d7d`: section numbers (`02 / THE RESULT`), the
right hand meta on every section head, the plate's row keys, quoted fragments,
timings. Geist Sans carries everything a person actually reads. The rule is
Vercel's: mono means "this is a value", never decoration.

**A large, tight tracked headline with almost no colour.** 108 px at
`-0.048em` and 0.97 line-height, weight 500, `#ededed`. Section headlines
44 px at `-0.038em`. Nothing is bold; the size does the work.

**The specimen sheet.** The two artefacts are plates: bordered, corner marked
with `+` glyphs at all four corners, and laid out as a key/value table with a
108 px label column. The result plate lists the verdict, the input, three
numbered signals with the quoted fragment above the reason, the next step, and
a footer strip with the elapsed time on one end and `EXAMPLE RESULT` on the
other. The Deep Dive plate is the same table holding sources. This is Vercel's
spec-table pattern doing the job Stripe's code panel does elsewhere.

**Geist's control shapes.** Buttons 42 px tall, 6 px radius, 14 px / weight
500; primary is `#ededed` on black, secondary is a `#3a3a3a` hairline. Text
links are underlined by a hairline that brightens on hover, with an arrow that
moves 3 px. Focus rings are a 1 px outline at 3 px offset.

**Generous negative space.** Whole regions are left empty on purpose: the
right two thirds of the hero, the lower half of the claim column beside each
plate, the air around the closing headline. Nothing is added to fill them.

**Motion.** Almost none. Cells rise 8 px and fade in once at 380 ms the first
time they enter, with a 1 second failsafe so a capture never records an empty
cell. No parallax, no loops, no gradients moving.

## One accent, used once

The entire page is black, four greys and off white. Coral `#FF6B5E` appears
exactly one time, on the word `SHOWED WARNING SIGNS` in the result plate. It is
the only colour a reader's eye can land on, and it lands on the verdict. That
is the whole point of the discipline: the single coloured thing on the page is
the thing the product exists to say.

The app icon in the nav and the footer is the real brand asset and keeps its
own navy and coral. It is 22 px, it is the product's mark rather than page
decoration, and it is the only other colour on the page.

## Brand rules bent, and why

**This variant deliberately bends the brand palette to near monochrome.** The
brief allows a variant to bend the palette if its copied construction demands
it, and Geist's construction is exactly that demand: it carries structure with
1 px rules and spacing, and it depends on there being nothing coloured to
compete with them. Navy `#081433` to `#0D266B` as a field, action blue as a
link colour, cream as body text, luminous as a highlight — any of those would
have made this a dark blue page with hairlines, which is a different and much
more ordinary thing. So:

- The deep navy field, action blue and luminous are **not used at all**.
- Cream `#F5F0E1` is replaced by Geist's off white `#ededed` for body text,
  because cream on black reads as a warm vintage page and Geist is neutral.
- Coral `#FF6B5E` is kept, and is the only brand colour on the page, used once.
- The brand mark is unchanged.

It still reads as the same product because the voice, the verdict language, the
artefacts and the mark are the same. What changed is the room the product is
standing in.

**Typography is also bent.** Fredoka is not used anywhere. Geist Sans and Geist
Mono are loaded through `next/font/google` in `fonts.ts` and scoped to this page
by putting their two CSS variables on the page's root element, so the shared
`layout.tsx` is untouched and no other variant is affected.

## Content

Hero says one thing. Verdicts are hedged, and the three answers are printed as
a scale so the hedge is visible. No numbers appear that are not in
`VERIFIED_CLAIMS.md`: about eight seconds, one press, history on the device, no
account required. The privacy cell states that signing in is optional and that
if you do sign in the provider gives us a first name and an email address. No
store badges, no press logos, no testimonials, no em dashes. The CTA is the
beta mail link; the nav, the privacy section, the closing block and the footer
all point at `/privacy`.
