# Variant 08 — Superhuman

**Construction copied:** [Superhuman](https://superhuman.com). Dark luxury.
One continuous field, a cinematic device floating in it, very few words at
an elegant scale, and a page that moves slowly on purpose.

## What it borrows

- **One field, no section edges.** A single absolutely-positioned gradient
  runs the whole document height: near-black at the top, indigo through the
  middle, near-black at the close. Sections are separated by hairlines and
  air, never by a colour block. Superhuman never shows a hard seam.
- **The cinematic device composition.** An iPhone silhouette built entirely
  from CSS: the frame is a nine-stop metal gradient acting as a machined
  rail, the screen carries a diagonal specular sheen, and the whole thing is
  tilted in a 2200px perspective and floats on a 13s cycle. Underneath it, a
  clipped and masked mirror copy for the reflection, and a blurred accent
  ellipse for the light it throws on the floor.
- **Very few words at an elegant scale.** The hero is five words. The
  statement section is one sentence with nothing else on the screen. Display
  type is weight 400 at up to 82px with -0.032em tracking; small type is
  10.5px tracked out to 0.34em. Body copy sits at 50% opacity, because
  low-contrast secondary text is the whole luxury register.
- **Long slow rhythm.** Sections run 80 to 132px of padding, moments 58 to
  96px, and the close opens up to 158px. Elements arrive on a 1500ms
  `cubic-bezier(0.16, 1, 0.3, 1)` as they enter the viewport, staggered
  140ms apart within a block.
- **Thin refined dividers.** Every rule is `1px rgba(245,240,225,0.055)`.
  The two reference tables are hairline `<dl>` grids, not cards.
- **A single restrained accent.** One indigo-blue bloom, reused behind the
  device, behind each small artefact, and behind the close. Nothing else
  glows except the coral verdict card on the phone.

## What is deliberately different

- **Superhuman sells speed; this sells the pause.** The hero line is "Take
  eight seconds first." The construction is theirs, the argument is
  inverted, and the page's slowness is the argument rather than a contrast
  to it.
- **Three moments, not a feature list.** One press, about eight seconds,
  anything you can screenshot. Each gets one artefact built from geometry:
  a pulsing press disc with the four trigger surfaces, an 80% SVG arc dial,
  and a quiet monochrome grid of the real channel logos.
- **The verdict on the phone stays hedged.** "Showed warning signs / Worth a
  second look before you reply or tap anything." The screen shows the
  message that went in, so the composition is a result view rather than a
  claim.
- **The Deep Dive table is labelled an illustration** and lists only real
  public sources, so it shows the feature's shape without inventing a saved
  result.

## Brand rules bent

- **Display face.** Fredoka is kept for the wordmark, where it carries the
  brand. Headlines use Inter Tight at weight 400, because a rounded friendly
  display face cannot hold the dark-luxury register this construction needs.
- **Palette.** The navy field is deepened to `#04050A` and pushed through
  indigo `#100E2C` in the middle so the composition has somewhere to float.
  Action blue is warmed slightly to `#3D6BFF` for the bloom, cream `#F5F0E1`
  is the type at three opacities, and coral `#FF6B5E` is spent in exactly
  one place: the verdict card.

## One implementation note

`reveal.tsx` skips the arrival animation entirely, by putting `.sh-ready` on
the root, in two cases: reduced motion, and `navigator.webdriver`. A
full-page screenshot never scrolls, so without the second case nothing below
the fold would ever intersect the observer and every capture would come back
blank below the hero. A `<noscript>` block does the same if JS never runs.

## Files

- `index.tsx` — every section, plus the device composition.
- `reveal.tsx` — the single scroll observer (the only client component).
- `superhuman.css` — tokens, the device, the artefacts, responsive rules.
