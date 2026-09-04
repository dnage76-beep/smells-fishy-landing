# Variant 07 — Raycast

**Construction copied:** [Raycast](https://raycast.com). A dark spotlight
canvas built around one product artefact, with keyboard furniture doing the
work that illustration would normally do.

## What it borrows

- **Spotlight canvas.** Near-black ground with a wide coloured bloom pushed
  down from above the fold, a 64px grid masked to fade out under it, and a
  second bloom bleeding out from behind the hero artefact. Every band below
  the fold carries its own off-screen aura so the page never goes flat black.
- **The command surface as the hero.** Raycast puts its actual palette
  window in the middle of the page, huge, lit from behind, with a reflection
  under it. Ours is the one-press check: a query row on top, the suspicious
  message quoted in mono, a selected result row, the reasoning, the next
  step, and a footer action bar. It is the argument on the page.
- **Keycaps as furniture.** `⌘` `↵` `esc` chips in the nav button, in the
  artefact's action bar, on the loop rows, and inline in the Deep Dive copy.
  Inset shadow, hairline border, mono glyph, exactly Raycast's key shape.
- **Hairline panels.** 14–16px radius, `1px rgba(255,255,255,0.08)` borders,
  and the signature 1px light streak across the top edge of the hero panel.
- **Small crisp type at speed.** 13px body, 11px mono eyebrows tracked out to
  0.16em, 14.5px card titles. Headline is white at the cap falling to
  translucent at the baseline, which is Raycast's "lit from above" text fill.
- **Coloured glyph grid.** Six dark feature cards, each with a tinted rounded
  glyph tile in its own hue, plus the channel grid where every real logo file
  wears its own brand colour, the way Raycast's extension store does.

## What is deliberately different

- **The palette is the brand's, re-keyed dark.** Coral `#FF6B5E` takes the
  role Raycast gives its red, action blue `#1C5CF7` and luminous `#48A7F8`
  light the blooms, cream `#F5F0E1` is the text. Nothing invented.
- **Zero client JavaScript.** No `"use client"` anywhere in this variant.
  Raycast's whole claim is speed, so the honest version of that page ships
  no hydration. All motion is CSS.
- **The artefact answers hedged.** Raycast's palette result is a command it
  will run. Ours is a verdict it will not overclaim: "Showed warning signs /
  Worth a second look before you tap anything." Never a declarative call.
- **The Deep Dive panel is labelled an example** and the sources are real
  public ones (usps.com, ic3.gov, reportfraud.ftc.gov), so it shows the shape
  of the feature without fabricating a saved result.

## Brand rules bent

- **Display face.** The brief's display face is Fredoka. Fredoka is a rounded
  friendly face and Raycast's construction is tight, tracked-in grotesk. So
  Fredoka is kept for the wordmark only, where it carries the brand, and
  headlines use Inter Tight with negative tracking. Mono furniture uses the
  system mono stack.
- **Canvas.** The navy `#081433` field is pushed to `#07080D` for the ground
  so the coloured light has somewhere to bleed from. The navy survives in
  every bloom, so the page still reads as the same product.

## Files

- `index.tsx` — every section, server components only.
- `raycast.css` — tokens, the panel and keycap primitives, responsive rules.
