# The ten landing-page variants

Built 2026-09-04 for Derek to choose from. Each lives on its own branch off
`main`, each is a complete page, and each was verified to build from a
clean checkout. Screenshots for every one are on the Desktop under
`Smells Phishy Review/landing/`, at 1440, 834 and 390 px wide, full page.

To look at one:

```sh
git checkout landing/01-glass
npm install && npm run build
scripts/shoot-variant.sh 01-glass      # or: npx next start -p 3000
```

Nothing is merged. `main` still carries the current live site.

| Branch | Construction it copies | The idea in one line |
| --- | --- | --- |
| `landing/01-glass` | Apple visionOS and iOS 26 Liquid Glass | Real glass over a living gradient field that shifts behind and through the panels. The one Derek asked for by name. |
| `landing/02-linear` | Linear | Near-black canvas, hairline structure, a gradient mesh behind the hero, motion that is short and functional. |
| `landing/03-stripe` | Stripe | Angled gradient ribbon cut by one diagonal, a strict 12-column grid, each claim paired with a real product artefact. |
| `landing/04-geist` | Vercel Geist | Near-monochrome specimen sheet. Two vertical rails, bordered cells sharing hairlines, colour used exactly once on the verdict. |
| `landing/05-arc` | Arc Browser | Warm saturated wash bleeding through every section seam, oversized Fredoka, big soft shapes, a coral slab set into the headline. |
| `landing/06-apple` | An Apple product page | Full-bleed sections owning the viewport, a 146 px hero word, and a genuinely scroll-driven pinned section. |
| `landing/07-raycast` | Raycast | Dark spotlight canvas built around one command-surface artefact, with keycap chips as furniture. Ships zero client JavaScript. |
| `landing/08-superhuman` | Superhuman | Dark luxury. One continuous field, a CSS iPhone floating with real reflected light, very few words, long slow arrivals. |
| `landing/09-editorial` | A print magazine feature | Asymmetric grid, drop cap, column rules, hanging punctuation, technical plates with leader lines. |
| `landing/10-notion` | Notion | Sidebar rail, 708 px content column, and the app's own structures expressed as Notion blocks. |

## What every variant had to satisfy

`BRIEF.md` holds the full standard. In short: a complete page, responsive
at three widths, no console errors, `npm run build` green, not cartoony,
not wordy, and only claims that are true. Numbers must appear in
`VERIFIED_CLAIMS.md` first, which is why the FBI crime figures on several
variants carry the word "reported" and a source link.

Two claims were corrected across the set on 2026-09-04: nothing may say
the app has no accounts (optional Apple and Google sign-in shipped, so the
line is "No account required"), and the crime figures use the exact
wording in `VERIFIED_CLAIMS.md`.

## Known cleanup for whichever variant is chosen

`src/app/globals.css` carries legacy `!important` rules from the current
site, including some on bare `section`, `nav` and `footer` inside a media
query. Every variant neutralises them locally rather than editing the
shared file, because ten branches all editing one stylesheet would
conflict on merge. Delete those rules once a direction is picked.

Some variants deliberately bend the brand palette or type; each says so in
its own `src/app/variants/<name>/README.md`, with the reason.
