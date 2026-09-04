# 09-editorial

A print magazine feature, built as a landing page. The reference is a
long-form newspaper or magazine spread (the Bodoni-and-rules school: NYT
Sunday feature, *Harper's Bazaar*, the editorial Framer showcase pages that
copy them), not a product brochure.

## What construction it copies

Every element on the page is a real print device, used the way print uses it.

| Device | Where |
|---|---|
| Masthead: metadata rail, centred wordmark, **Oxford rule** (2px over 1px), section nav rail below | top of page |
| Asymmetric 12-column grid with generous outer margins (`clamp(20px, 5vw, 76px)`) | everywhere |
| **Optical margin alignment**: the display "E" hangs `-0.045em` left of the text edge | H1 |
| Deliberate grid break: the navy field bleeds off the right page edge, the device overlaps its top and bottom edges | opening spread |
| Figure numbers and captions set to a narrow measure under a hairline | Figs. 1 to 3 |
| **Real column rules**: `column-count: 3` + `column-rule`, justified, hyphenated | section I |
| **Drop cap** cut into three lines, and `text-indent` continuation paragraphs | section I |
| Ruled sidebar table ("By the numbers") in the outer columns, with the source note in agate | section I |
| Oversized italic pull quote with **hanging punctuation** (`text-indent: -0.42em`) | after section I |
| **Technical plate**: an SVG line drawing with leader lines and labels hanging in the outer margin, plus a dimension line | section II |
| Directory strip: the real channel marks, hairline-separated, at 17px | section II |
| **Keyed plate annotation**: A/B/C markers on the figure, a legend keyed to them | section III |
| Dark centre spread, reversed type | section IV |
| **Hanging-indent reference list** (`padding-left` + negative `text-indent`) | section IV |
| Boxed editor's note with the label breaking the rule it sits on | section V |
| Bound-in reply card: dashed rule, end mark, square-cornered ink button | CTA |
| Colophon with a hanging indent and a folio number | footer |

Sections carry roman numerals and small-caps titles under a 2px rule, so the
page reads as an article with a running structure rather than a stack of
marketing bands.

## What is deliberately different for this product

- **A feature title, not a headline claim.** "Eight seconds with a suspicious
  message" is a magazine title. What the app does is in the deck, where a
  standfirst belongs, so the hero still says one thing.
- **The figures are the product.** The two big plates are the actual result
  screen and the actual press. An editorial page would put photography there;
  we cannot, so the product does the work of the image.
- **Three CTAs, placed like print.** A masthead line, an underlined display
  link in the opening spread, and a bound-in reply card at the end. No sticky
  bar, because magazines do not have one.
- **Section II is a line drawing, not a render.** Ink strokes on paper with a
  coral fill on the Action Button. It matches the plate language and avoids a
  glossy device shot, which would look like every other landing page.

## Brand rules bent

- **Display face.** Fredoka cannot do this construction: the whole page rests
  on hairline-to-stem contrast at 90px and a real italic. Display type is
  **Bodoni Moda** (`next/font/google`, variable, normal + italic), scoped to
  this variant in `fonts.ts` so nothing else on the site changes. The small
  precise sans is Inter Tight, which the site already loads.
- **Colour is unchanged**, but reassigned: cream `#F5F0E1` becomes the paper
  stock and navy `#0A1F45` becomes the ink, inverting the site's usual navy
  field. Coral `#FF6B5E` is used only as a printer's second colour (figure
  numbers, rules, roman numerals, the Action Button, the end mark). Action
  blue `#1C5CF7` appears only where the page asks you to act.

## Notes

- Responsive at 1440 / 834 / 390. Columns go 3 to 2 to 1, justification is
  dropped at phone width where it would produce rivers, the masthead stacks,
  and the keyed legend goes from an outer column to a row to a list.
- No console errors, no horizontal overflow at any of the three widths.
- Verdict language is the app's own hedged set. The IC3 figures are cited and
  linked. No badges, no testimonials, no invented numbers.
