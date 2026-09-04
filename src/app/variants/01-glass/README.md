# 01-glass

**Construction copied: Apple's visionOS and iOS 26 Liquid Glass marketing
surfaces.**

Derek asked for one variant that is "very glassy and integrates with the
background". The hard part of that brief is not the blur. It is that most
"glass" on the web is a white box at 60% opacity floating on a flat colour,
which has nothing to refract and therefore reads as a plastic overlay. This
page builds the environment first and the glass second.

## What it borrows, specifically

**An environment, not a background.** One field spans the entire document:
a vertical navy gradient with eight large radial colour bodies drifting on
long, deliberately unsynchronised cycles (33s to 61s, all `alternate`, none
of them a multiple of another). It parallaxes against the content at 0.09x
on scroll, so panes slide across it rather than sitting on it. Fine grain is
laid over the whole thing at 5.5% in `overlay`, because a 4,700px navy
gradient bands badly without a dither and Apple's environments carry one for
the same reason.

**Four optical parts per pane**, which is Apple's actual order of operations:

1. A graded tint (`rgba(5,13,36,0.68)` at the upper left falling to `0.52`
   through the middle), not a flat fill.
2. `backdrop-filter: blur(24px) saturate(190%) brightness(1.08)`. The
   saturation is the part people leave out. Real glass concentrates colour;
   without it the field goes grey behind every panel.
3. A 1px hairline drawn as a gradient ring (`mask-composite: exclude` over a
   1px padding box) that is bright at the upper left where the light lands,
   nearly gone through the middle, and returns as a faint rim light at the
   lower right, the way light that entered the top surface exits the far
   edge. Plus a discrete specular streak along the top curve.
4. A grounding shadow in two stops, so the pane floats rather than being
   painted on.

There is also an edge refraction band: a 10px inset ring, masked the same
way, carrying a light gradient so content appears to bend as it passes under
the rim.

**Floating capsules instead of bars.** The nav is a glass pill inset from
the top edge, not a full-bleed header. The primary control is a capsule.

**Ornaments hung off a window.** The three glass chips around the device in
the hero are the visionOS habit of parking small controls beside a window at
a different depth, half over the bright screen and half over the dark field.

**Glass over content, never as content.** This is the rule the whole page is
built on and it is also what keeps it legible. Everything you actually read
at length sits on a solid surface: the cream sheet for the verdict anatomy,
the solid navy sheet for privacy. Glass carries navigation, controls, short
labels, ornaments, and the two product surfaces.

## Proving legibility over light and dark

The field is composed so the same pane recipe has to survive both extremes,
and the panes are parked on purpose:

- At ~35% of the page a near-white body (`rgba(228,241,255,0.9)`) sits
  directly under the "one press" control strip. Through the tint that
  resolves to about `#4c6184`; cream `#F5F0E1` on it measures ~5.5:1.
- At ~53% a near-black body (`rgba(1,3,12,0.97)`) sits under the Deep Dive
  panel. Same recipe, ~14:1.
- The final call to action sits over the brightest part of the lower field.

One extra rule fell out of this. Text that floats directly on the
environment rather than on a pane (the section headers) gets a soft radial
scrim behind it, which is what Apple does with copy over a photographic
background. Without it the pale band eats the headline.

The light-tinted glass (`.g-chip--light`) appears exactly once, on the chip
straddling the top edge of the cream sheet, because it is the one place a
pane sits over a known light surface.

## Fallback

`@supports not (backdrop-filter)` turns every pane opaque: navy for the dark
panes, near-white for the light chip. Without a blur there is no glass, so
there is no reason to keep the translucency; the page keeps its structure and
all contrast improves.

## What is deliberately different

- **Rounded display type.** Apple's marketing is SF Pro. Fredoka is the
  brand's display face and is closer to SF Rounded, which Apple uses for
  controls. It reads warmer than Apple would, which suits an app for people
  who are worried rather than shopping.
- **Coral as the only warm accent.** visionOS marketing is almost colourless.
  This product needs one alarm colour, so coral carries every call to action,
  every warning dot, and nothing else.
- **The claim sequence is not Apple's.** Apple leads with desire. This leads
  with a hedge: the hero promises a straight answer, and the first content
  section after the product demo is the one that says the verdict is hedged
  on purpose.
- **No "0 accounts" claim.** The app now has optional Apple and Google
  sign-in, so the page says "no account required" and the privacy section
  states that signing in is optional and that the provider passes on a first
  name and an email address.

## Brand rules bent

None on colour: navy, action blue, luminous, cream and coral are all used as
specified. The palette is pushed harder in the environment than the brand
sheet implies (the field reaches a near-white at 35% and a near-black at 53%),
because glass with nothing behind it is not glass.

## Numbers

The three IC3 figures and their wording come from `VERIFIED_CLAIMS.md`, with
the required "reported figures" caveat under the rail.

## Known limitation

`/privacy` still renders with the original site chrome from
`src/app/components/site.tsx`. The policy copy is legally load-bearing and
out of scope for a design variant, so that route was left alone.

## One change outside the variant directory

`scripts/shoot.mjs` had to be fixed to screenshot this page at all. Two
separate faults, both in the tool rather than the page:

1. Puppeteer's default full-page capture (`captureBeyondViewport`) rasterises
   past the viewport without compositing `backdrop-filter`, so every glass
   panel below the fold came out as an empty box. Verified by diffing the
   same page captured with the flag on and off.
2. At `deviceScaleFactor: 2` a 4,700px page is a 27-megapixel raster, which
   overruns the compositor's tile budget on this machine and drops whole
   vertical bands of content. Reproduced at 2x, clean at 1.5x.

The fix grows the viewport to the document, picks the largest scale factor
that keeps the raster under 16 megapixels, and waits for a settle frame. Any
variant using `backdrop-filter`, `filter` or a very long page will hit the
same thing.
