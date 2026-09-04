# 02-linear

**Construction copied: Linear.app.**

Linear's pages are recognisable before you read a word, and almost none of
that comes from decoration. It is a canvas colour, a very small set of type
sizes, and the decision to let 1px borders carry every piece of structure
that a lesser page would carry with a shadow. This variant copies that
system rather than any particular Linear screen.

## What it borrows, specifically

**The canvas.** `#08090a`, not black, with a faint cool cast. Elevated
surfaces move to `#0c0d0f`. Nothing on the page is pure white or pure black.

**A very tight type scale.** Six sizes carry the whole page: 11 (mono
labels), 13.5 (nav, footer, meta), 14.5 (body in panels), 17 (lede and card
titles), 27 to 40 (section headlines), 40 to 74 (hero). Tracking goes
negative as the size goes up, from `-0.006em` on body to `-0.036em` on the
hero. Headline weight is 600, never heavier, which is what stops a big
Linear headline reading as a shout.

**The gradient-filled headline.** Every h1 and h2 is `background-clip: text`
over a vertical ramp from near-white down to about 74%, so the bottom of a
two-line headline sits back from the top. This is the single most copied and
most misunderstood Linear detail; the ramp has to be shallow or the second
line looks broken.

**Hairlines doing the structural work.** `rgba(255,255,255,0.075)` for
everything: panel borders, the dividers between cells, the row rules in a
definition list, the footer. There is one box-shadow on the whole page and
it is on the device frame. Panels are a border, a 3% white wash at the top,
and a 1px specular line across the top edge inside the radius.

**Small radii.** 9px on buttons, 14px on panels, 7px on icon chips. Pills
appear once, on the announcement badge.

**The announcement pill.** Bordered capsule, a filled tag on the left, a
chevron on the right, sitting directly above the headline.

**Monospace eyebrow labels.** `ONE PRESS`, `THE RESULT`, `DEEP DIVE`, at
11.5px with 0.14em tracking and a hairline trailing off to the right. Linear
uses mono for exactly this and for inline metadata, and it is most of why
their marketing pages read as engineering.

**A gradient mesh behind the hero and behind the closing call to action, and
nowhere else.** Four blooms in `mix-blend-mode: screen` breathing on 26 to
47 second cycles, a fine grain over the top, a hairline horizon where the
mesh meets the flat canvas, and both edges faded back into the canvas so the
section boundary is never a hard line. The middle of the page stays flat.

**The page grid.** Two faint vertical rules run just outside the content
column through the flat middle of the page, so the grid is legible without
being drawn.

**Claim, one proof, move on.** Every section is an eyebrow, a headline, one
line of support, and exactly one product surface. Nothing is proved twice.

**Motion that does not bounce.** 160ms transitions on colour and border
only, with `cubic-bezier(0.25, 0.46, 0.45, 0.94)`. Nothing translates on
hover, nothing scales, and there are no scroll reveals.

## What is deliberately different

- **Inter Tight instead of Fredoka for headlines.** This is the one real
  departure. Linear's whole feel depends on a tightly tracked neutral
  grotesque; Fredoka's rounded geometry cannot do negative tracking at 74px
  without turning into a toy. Inter Tight was already loaded as the body
  face and is very close to Linear's Inter. Fredoka survives where the brand
  actually lives: the wordmark in the nav and the footer.
- **The brand's action blue, not Linear's indigo.** `#1c5cf7` for filled
  buttons and the mesh's dominant bloom, `#6e8bff` for links. Linear's
  `#5e6ad2` is more violet and would have read as somebody else's product.
- **A warm white.** Primary text is `#f2eee3`, the brand cream desaturated
  rather than Linear's cool `#f7f8f8`. It is the only warmth on the page and
  it is what keeps this from being a generic dark SaaS site.
- **The hero product surface shows input beside output.** Linear shows one
  pane of their own app. This product has nothing to show until something
  arrives, so the frame holds the message that came in on the left, a
  hairline, and the result on the right, with the device bleeding off the
  bottom edge the way Linear crops a screenshot.
- **Coral is the alarm colour and appears five times.** Linear has no alarm
  state to communicate.

## Brand rules bent

Two, both documented above: Fredoka is demoted to the wordmark, and cream
becomes a text colour rather than a surface colour. The navy field is gone
entirely, because Linear's construction is a near-black canvas and a navy
gradient page would have been a different variant. Action blue, luminous
blue and coral are all used as specified.

## Numbers

The three IC3 figures use the exact wording from `VERIFIED_CLAIMS.md`, with
the required "reported figures" caveat below the row.

## Copy notes

The example message in the hero is illustrative: a 555 number, which is
reserved for fiction, and no invented company, brand or URL. The verdict
language stays hedged throughout, and the page states plainly that the app
never returns a flat "this is a scam". Sign-in is described as optional,
matching the current privacy policy.

## Known limitation

`/privacy` still renders with the original site chrome from
`src/app/components/site.tsx`. The policy copy is legally load-bearing and
out of scope for a design variant.

## One change outside the variant directory

`scripts/shoot.mjs` now sizes the viewport to the document and picks the
largest device scale factor that keeps the raster under 16 megapixels,
instead of using Puppeteer's default full-page capture. Two reasons, both
found while photographing these variants:

1. `captureBeyondViewport` (Puppeteer's default for `fullPage`) rasterises
   past the viewport without compositing `backdrop-filter`, so translucent
   panels below the fold come out as empty boxes.
2. A 2x raster of a several-thousand-pixel page overruns the compositor's
   tile budget on this machine and drops whole vertical bands of content,
   and the full-page mobile shot at 390px is tall enough to pass Chrome's
   16384px texture limit outright.
