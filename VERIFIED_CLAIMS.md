# Claims the site is allowed to make, and where they come from

Anything numeric on the landing page must appear here with a source that
was actually read. Nothing goes on the site because it sounds right.

## FBI Internet Crime Complaint Center, 2025 Annual Report

Published April 2026. Verified 2026-09-04 against the FBI's own report
and corroborating coverage.

| Figure | Exact value | Wording that is accurate |
| --- | --- | --- |
| Total reported losses, 2025 | $20.877 billion | "$20.9B reported lost to internet crime in 2025" |
| Complaints filed, 2025 | 1,008,597 | "1,008,597 complaints filed with the FBI in one year" |
| Losses reported by people aged 60+ | $7.749 billion | "$7.75B of it reported by people over 60" |
| Complaints from people aged 60+ | 201,266 | |

Sources: <https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf>,
<https://www.fbi.gov/file-repository/2025_ic3report.pdf>,
<https://www.aarp.org/money/scams-fraud/fbi-ftc-report-2025-losses/>

Required caveat wherever these appear: they are REPORTED figures, so the
real totals are higher and most scams are never reported. Say "reported",
never "lost" as a bare fact, and never imply the app would have prevented
any of it.

## Claims about the app itself

- One press from the Action Button, Back Tap, the share sheet, or Siri.
- About eight seconds from press to verdict. Measured on the backend
  evaluation harness, which averages about 1.5 s of model time per check;
  eight seconds is the honest end-to-end figure including upload. Do not
  sharpen it to a smaller number.
- Ten free checks a day. Confirm against the backend's current quota
  before publishing; it has changed before.
- History stays on the iPhone. True: results are stored locally and the
  server does not retain submitted content after a check.
- No account required. True, and sign-in is optional. Since the app gained
  optional Apple and Google sign-in, do not write that the app "has no
  accounts" or "cannot have your email".

## Wording rules an independent review had to catch

Checked by Codex on 2026-09-04 across all ten variants. Every one of these
was violated at least once, so they are written down rather than assumed.

- **Never sharpen the timing.** "About eight seconds" is the claim. A
  product mock showing "8.2s", "7.6s", "0.3s" or any other exact figure
  invents a measurement we do not have. Use qualitative stages and one
  approximate total.
- **"Reported" belongs inside the claim, not in a heading above it.**
  "$20.9B lost to internet crime" is wrong even under a heading that says
  reported figures. Write "reported lost".
- **No numeric absolutes for privacy.** "0 ads, 0 data sold", "100% of
  history on your phone" and "0 accounts required" are numbers that are
  not in this file. The underlying facts are true; write them as prose.
- **No universal claims.** "It cannot know that, and neither can anything
  else" is indefensible.
- **The Action Button is not on every iPhone.** It exists on supported
  models only; Back Tap is the broader fallback. Do not write that the app
  runs off a button the reader's phone already has.
- **Do not say content never leaves the phone.** It travels to our server
  and to Google's Gemini for the check itself. Saved history stays local.
  Those are different statements.

"Looks like a scam" is APPROVED and is not an exception to any of this: it
is the app's own high-risk headline in the backend's VERDICT_LANGUAGE.md
tone ladder, which reads "looks like" as identification rather than a
verdict on truth. Codex flagged it; the style guide overrules.

## Never

Accuracy rates, detection percentages, user counts, testimonials, press
or award logos, App Store or Google Play badges, or any claim that the app
prevents, blocks, or catches anything.
