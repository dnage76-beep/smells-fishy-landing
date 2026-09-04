# 10-notion

Notion's construction, copied at the level of its actual numbers. The page
is a Notion document about the product, in a Notion workspace shell.

## What construction it copies

Measured from Notion itself, not approximated:

| Thing | Notion's value, used here |
|---|---|
| Sidebar rail | 240px, `#FBFBFA`, 1px right rule, a page tree that sticks at `100vh` inside a rail that runs the full page |
| Topbar | 45px, sticky, breadcrumb on the left, ghost buttons on the right, `0 1px 0` hairline under |
| Content column | **708px**, centred in the content area (`756px` box with 24px page padding) |
| Ink | `rgb(55, 53, 47)`, secondary `rgba(55,53,47,0.65)`, tertiary `0.5` |
| Rules and borders | `rgba(55,53,47,0.09)` for dividers, `0.16` for table cells |
| Hover | `rgba(55,53,47,0.06)` on every interactive block |
| Block padding | `3px 2px`, the padding on every Notion text block |
| Page title | 40px / 700, H1 30px / 600 with a `2em` top margin, H2 20px, body 16px / 1.5 |
| Cover | 30vh, full bleed, with the **page icon at 78px overlapping it by 44px** |
| Callout | 4px radius, `16px 16px 16px 12px`, a 24px icon slot, tinted fill, no border |
| Quote | 3px left rule in `currentColor`, 14px of padding, no fill |
| Simple table | header row `rgb(247,246,243)` at weight 500, `7px 9px` cells, 1px `0.16` borders |
| Select pill | 20px tall, 3px radius, 12px text on a tint |
| Page properties | 184px label column with a type glyph, value column beside it |
| Inline code | `rgba(135,131,120,0.15)` fill, 85% size, 4px radius |
| Buttons | 28px tall, 4px radius, 14px / 500 |

Blocks used as real layout devices, not decoration: page properties, a table
of contents, headings, bulleted lists, a numbered list, **to-do checkboxes**,
callouts in four tints, a quote, a **toggle** (a real `<details>`), two simple
tables, a **gallery view** of three cards, a **column list** (twice: the
evidence pair and the numbers), and dividers between every section.

The document is ordered so the page teaches: what it is, one press, what
comes back, going deeper, where it works, what leaves your phone, why it
matters, how to get it.

## What is deliberately different for this product

- **The app's own structures are the blocks.** The evidence trail is a
  callout (verdict), a bulleted list (what stood out) and a to-do list (what
  to do next) sitting in a two-column list. That is how the app is built and
  how a Notion page would be written, at the same time.
- **The sidebar navigates for real.** Every row is a working link: the page
  itself, its sections, the privacy policy, contact, and the invite button
  pinned at the bottom where Notion pins "New page". Nothing is inert chrome.
- **No illustration, per the brief.** A real Notion page would use emoji and
  a photo cover. Here the warmth comes from the tinted callouts, the warm
  ink, the cream and coral fills, and the cover, which is a colour field in
  the app icon's own navy with fine hairlines across it. The only image on
  the page is the real app icon, used the way Notion uses a page icon.
- **Checked to-dos are not struck through.** Notion strikes completed items;
  the three checked lines under "Get the beta" are affordances, not finished
  tasks, so the strike is dropped. Everything else keeps Notion's behaviour.

## Brand rules bent

- **No Fredoka.** Notion has no display face, and putting one in would break
  the copy at the most visible point. Type is the system UI stack
  (`-apple-system, BlinkMacSystemFont, ...`), which is what Notion uses and
  what the brief names as the site's body face. The brand is carried by the
  icon, the navy cover, the action blue and the coral.
- **Brand colours mapped onto Notion's colour slots.** Notion blue
  `#2383E2` is replaced by action blue `#1C5CF7`; Notion red `#E03E3E` by
  coral `#FF6B5E`; Notion yellow by the brand cream. Notion's own orange
  `#D9730D` and green `#0F7B6C` are kept for the "be careful" and "looks okay
  so far" readings, because the app has three verdicts and two colours cannot
  carry three states.

## Notes

- Responsive at 1440 / 834 / 390. The sidebar hides below 1080, the column
  list and gallery stack below 660, property rows stack below 660, and the
  channel table hides its "Kind" column below 560, the way a Notion view
  hides a property.
- No console errors, no horizontal overflow at any of the three widths.
- Claims follow `VERIFIED_CLAIMS.md`: the IC3 figures use the exact approved
  wording with the "reported" caveat, and the privacy table states that
  sign-in is optional and that Apple or Google give us a first name and an
  email address.
