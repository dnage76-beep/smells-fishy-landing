import Image from "next/image";
import Link from "next/link";
import { Phone } from "./phone";

const BETA = "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";
const display = "var(--font-display), ui-rounded, system-ui, sans-serif";
const CREAM = "#f5f0e1";
const CORAL = "#ff6b5e";
const INK = "#0a1f45";
const INK2 = "#5c6979";

/* ── shared bits ────────────────────────────────────────────────────────── */

function Eyebrow({ children, tone = "glass" }: { children: React.ReactNode; tone?: "glass" | "ink" }) {
  if (tone === "ink") {
    return (
      <div
        className="g-eyebrow"
        style={{ padding: 0, color: INK2, letterSpacing: "0.13em" }}
      >
        <span className="g-eyebrow-dot" />
        {children}
      </div>
    );
  }
  return (
    <div className="g-chip g-eyebrow">
      <span className="g-eyebrow-dot" />
      {children}
    </div>
  );
}

function Wordmark({ size = 19 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Image
        src="/assets/fishy-logo.png"
        alt=""
        width={30}
        height={30}
        unoptimized
        style={{
          width: size * 1.58,
          height: size * 1.58,
          borderRadius: size * 0.46,
          objectFit: "cover",
          boxShadow: "0 4px 12px -3px rgba(2,6,20,0.6), inset 0 0 0 1px rgba(255,255,255,0.22)",
        }}
      />
      <span style={{ fontFamily: display, fontWeight: 600, fontSize: size, letterSpacing: "-0.005em" }}>
        <span style={{ color: CREAM }}>Smells</span> <span style={{ color: CORAL }}>Phishy</span>
      </span>
    </span>
  );
}

/* ── nav ────────────────────────────────────────────────────────────────── */

export function Nav() {
  return (
    <nav className="g-nav">
      <div className="g-nav-shell g-glass" style={{ borderRadius: 999 }}>
        <span className="g-sheen" />
        <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
          <Wordmark size={17} />
        </Link>
        <div className="g-nav-links">
          <a href="#one-press">One press</a>
          <a href="#answer">The answer</a>
          <a href="#deep-dive">Deep Dive</a>
          <a href="#privacy">Privacy</a>
        </div>
        <a href={BETA} className="g-btn g-btn--primary g-btn--sm">
          Request an invite
        </a>
      </div>
    </nav>
  );
}

/* ── hero ───────────────────────────────────────────────────────────────── */

function RingGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <circle cx="13" cy="13" r="10" stroke="rgba(255,255,255,0.22)" strokeWidth="2.4" />
      <path
        d="M13 3a10 10 0 0 1 8.9 5.4"
        stroke={CORAL}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="13" cy="13" r="1.7" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

function LockGlyph() {
  return (
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" aria-hidden>
      <rect x="4" y="11" width="16" height="12" rx="4" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
      <path d="M8 11V8.5a4 4 0 0 1 8 0V11" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.8" fill={CORAL} />
    </svg>
  );
}

export function Hero() {
  return (
    <header className="g-sec" style={{ paddingTop: "clamp(72px, 11vw, 132px)", paddingBottom: "clamp(84px, 10vw, 126px)" }}>
      <div className="g-shell" style={{ textAlign: "center" }}>
        <Eyebrow>iPhone · private beta</Eyebrow>

        <h1 className="g-h1" style={{ margin: "26px auto 0", maxWidth: 15 * 60 }}>
          One press.
          <br />A straight answer.
        </h1>

        <p className="g-lede" style={{ margin: "24px auto 0", maxWidth: 640 }}>
          Smells Phishy reads a suspicious text, email, link or screenshot and tells you
          what stood out. About eight seconds, and no account required.
        </p>

        <div
          className="g-cta-row"
          style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 34, flexWrap: "wrap" }}
        >
          <a href={BETA} className="g-btn g-btn--primary">
            Request a beta invite
          </a>
          <a href="#one-press" className="g-btn g-btn--glass g-glass" style={{ borderRadius: 999 }}>
            <span className="g-sheen" />
            See how one press works
          </a>
        </div>

        {/* device cluster: the glass ornaments float in front of the device at a
            different depth, which is the visionOS way of hanging controls off a
            window. They also sit half over the bright screen and half over the
            dark field, which is the legibility test in miniature. */}
        <div
          style={{
            position: "relative",
            marginTop: "clamp(56px, 7vw, 86px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <Phone />

            <div
              className="g-ornament g-chip"
              style={{
                position: "absolute",
                left: -254,
                top: 108,
                borderRadius: 22,
                padding: "15px 20px 16px",
                display: "flex",
                gap: 13,
                alignItems: "center",
                textAlign: "left",
                width: 232,
              }}
            >
              <RingGlyph />
              <span>
                <span style={{ display: "block", fontFamily: display, fontWeight: 600, fontSize: 16 }}>
                  About 8 seconds
                </span>
                <span style={{ display: "block", fontSize: 12.5, color: "rgba(214,228,255,0.72)", marginTop: 2 }}>
                  from press to verdict
                </span>
              </span>
            </div>

            <div
              className="g-ornament g-chip"
              style={{
                position: "absolute",
                right: -266,
                top: 296,
                borderRadius: 22,
                padding: "15px 20px 16px",
                display: "flex",
                gap: 13,
                alignItems: "center",
                textAlign: "left",
                width: 244,
              }}
            >
              <LockGlyph />
              <span>
                <span style={{ display: "block", fontFamily: display, fontWeight: 600, fontSize: 16 }}>
                  Stays on the phone
                </span>
                <span style={{ display: "block", fontSize: 12.5, color: "rgba(214,228,255,0.72)", marginTop: 2 }}>
                  every saved check
                </span>
              </span>
            </div>

            <div
              className="g-ornament g-chip"
              style={{
                position: "absolute",
                left: -206,
                top: 446,
                padding: "10px 18px",
                fontSize: 13.5,
                fontWeight: 600,
                fontFamily: display,
                whiteSpace: "nowrap",
              }}
            >
              No account required
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── the cited stat rail ────────────────────────────────────────────────── */

export function StatRail() {
  const stats: [string, string][] = [
    ["$20.9B", "reported lost to internet crime in 2025"],
    ["1,008,597", "complaints filed with the FBI in one year"],
    ["$7.75B", "of it reported by people over 60"],
  ];
  return (
    <section className="g-sec" style={{ paddingBottom: "clamp(56px, 7vw, 92px)" }}>
      <div className="g-shell">
        <div className="g-glass g-stat-rail" style={{ borderRadius: 30, display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", overflow: "hidden" }}>
          <span className="g-sheen" />
          {stats.map(([n, label], i) => (
            <div
              key={label}
              className="g-stat-cell"
              style={{
                padding: "28px 30px 30px",
                boxShadow: i === 0 ? undefined : "inset 1px 0 0 0 rgba(255,255,255,0.12)",
              }}
            >
              <div className="g-num" style={{ fontSize: "clamp(30px, 3.3vw, 42px)", color: CREAM }}>
                {n}
              </div>
              <div style={{ marginTop: 9, fontSize: 14.5, lineHeight: 1.45, color: "rgba(214,228,255,0.76)" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
        <p className="g-src" style={{ margin: "14px 4px 0" }}>
          Source:{" "}
          <a href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" target="_blank" rel="noopener noreferrer">
            FBI IC3 2025 Internet Crime Report
          </a>
          . Reported figures, so the real totals are higher: most scams are never reported.
        </p>
      </div>
    </section>
  );
}

/* ── one press ──────────────────────────────────────────────────────────── */

function ActionButtonGlyph() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden>
      <rect x="13.5" y="6.5" width="22" height="33" rx="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
      <rect x="10.6" y="13" width="3.4" height="9" rx="1.7" fill={CORAL} />
      <path d="M7 15.5a7 7 0 0 0 0 4" stroke={CORAL} strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
      <path d="M3.6 13a12 12 0 0 0 0 9.5" stroke={CORAL} strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
      <rect x="18" y="12" width="13" height="2" rx="1" fill="rgba(255,255,255,0.28)" />
      <rect x="18" y="17" width="9" height="2" rx="1" fill="rgba(255,255,255,0.18)" />
    </svg>
  );
}

function BackTapGlyph() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden>
      <rect x="11.5" y="6.5" width="23" height="33" rx="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
      <rect x="15.5" y="10.5" width="8" height="8" rx="2.4" stroke="rgba(255,255,255,0.28)" strokeWidth="1.6" />
      <circle cx="26" cy="27" r="3.2" fill={CORAL} />
      <circle cx="26" cy="27" r="6.6" stroke={CORAL} strokeWidth="1.5" opacity="0.6" />
      <circle cx="26" cy="27" r="10" stroke={CORAL} strokeWidth="1.4" opacity="0.28" />
    </svg>
  );
}

function VerdictGlyph() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden>
      <rect x="6.5" y="10.5" width="33" height="25" rx="7" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" />
      <circle cx="14.5" cy="18.5" r="3.2" fill={CORAL} />
      <rect x="21" y="16.6" width="14" height="2.4" rx="1.2" fill="rgba(255,255,255,0.42)" />
      <rect x="11" y="25" width="24" height="2.4" rx="1.2" fill="rgba(255,255,255,0.24)" />
      <rect x="11" y="30" width="16" height="2.4" rx="1.2" fill="rgba(255,255,255,0.16)" />
    </svg>
  );
}

export function OnePress() {
  const cells = [
    {
      glyph: <ActionButtonGlyph />,
      kicker: "Action Button",
      title: "Hold the button",
      body: "On iPhones that have one, set it once and the press is the only step.",
    },
    {
      glyph: <BackTapGlyph />,
      kicker: "Back Tap",
      title: "Or tap the back",
      body: "Two taps on the back of the phone does the same thing, without looking.",
    },
    {
      glyph: <VerdictGlyph />,
      kicker: "About 8 seconds",
      title: "Read the verdict",
      body: "What it looks like, what stood out, and one concrete thing to do next.",
    },
  ];

  return (
    <section id="one-press" className="g-sec" style={{ paddingBottom: "clamp(62px, 8vw, 104px)", scrollMarginTop: 100 }}>
      <div className="g-shell">
        <div className="g-onfield" style={{ maxWidth: 720 }}>
          <Eyebrow>One press</Eyebrow>
          <h2 className="g-h2" style={{ margin: "20px 0 0", color: CREAM }}>
            It runs off the Action Button, or a tap on the back.
          </h2>
          <p className="g-lede" style={{ margin: "16px 0 0", maxWidth: 520 }}>
            Nothing to open, nothing to paste. Screenshot the thing, then press.
          </p>
        </div>

        <div className="g-glass g-strip" style={{ marginTop: 36 }}>
          <span className="g-sheen" />
          {cells.map((c) => (
            <div key={c.kicker} className="g-strip-cell">
              {c.glyph}
              <div
                style={{
                  marginTop: 18,
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,168,158,0.9)",
                }}
              >
                {c.kicker}
              </div>
              <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: 22, margin: "8px 0 0", color: CREAM, letterSpacing: "-0.01em" }}>
                {c.title}
              </h3>
              <p style={{ margin: "9px 0 0", fontSize: 15, lineHeight: 1.55, color: "rgba(214,228,255,0.74)" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── the answer (solid reading surface) ─────────────────────────────────── */

export function TheAnswer() {
  const rows: [string, string, string][] = [
    [
      "01",
      "A hedged verdict",
      "“Showed warning signs.” “Worth a second look.” “Nothing obviously off.” It reports what it can see and stops there.",
    ],
    [
      "02",
      "What stood out",
      "The specific lines that raised a flag, quoted back to you, so you can judge them yourself.",
    ],
    [
      "03",
      "What to do next",
      "One concrete step. Usually the boring, safe one: go to the official app and check there.",
    ],
  ];

  return (
    <section id="answer" className="g-sec" style={{ paddingBottom: "clamp(62px, 8vw, 104px)", scrollMarginTop: 100 }}>
      <div className="g-shell" style={{ position: "relative" }}>
        {/* the one place glass sits directly on a content surface: a floating
            control straddling the sheet's edge, half over the field, half over
            the paper. Light-tinted so it reads on either. */}
        <div
          className="g-chip g-chip--light g-sheet-tab"
          style={{
            position: "absolute",
            zIndex: 4,
            top: -21,
            left: "clamp(24px, 4vw, 56px)",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 20px",
            fontSize: 13.5,
            fontWeight: 600,
            fontFamily: display,
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#1f9d67" }} />
          10 free checks a day
        </div>
        <div className="g-sheet" style={{ padding: "clamp(46px, 5vw, 64px) clamp(32px, 4.4vw, 58px) clamp(32px, 4.4vw, 58px)" }}>
          <div
            className="g-split"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.08fr)",
              gap: "clamp(32px, 4.6vw, 66px)",
              alignItems: "start",
            }}
          >
            <div>
              <Eyebrow tone="ink">The answer</Eyebrow>
              <h2 className="g-h2" style={{ margin: "16px 0 0", color: INK, fontSize: "clamp(30px, 3.9vw, 44px)" }}>
                Hedged on purpose.
              </h2>
              <p style={{ margin: "18px 0 0", fontSize: 17, lineHeight: 1.6, color: INK2, maxWidth: 380 }}>
                Nothing here promises you a scam was caught. The app points at warning
                signs and hands the judgement back to you, which is the only honest thing
                a checker can do.
              </p>
            </div>

            <div>
              {rows.map(([n, title, body], i) => (
                <div key={n}>
                  {i > 0 && <div className="g-rule" style={{ margin: "26px 0" }} />}
                  <div style={{ display: "flex", gap: 20, alignItems: "baseline" }}>
                    <span
                      className="g-num"
                      style={{ fontSize: 15, color: CORAL, letterSpacing: "0.04em", flexShrink: 0, width: 26 }}
                    >
                      {n}
                    </span>
                    <span>
                      <span
                        style={{
                          display: "block",
                          fontFamily: display,
                          fontWeight: 600,
                          fontSize: "clamp(20px, 2.1vw, 25px)",
                          color: INK,
                          letterSpacing: "-0.012em",
                        }}
                      >
                        {title}
                      </span>
                      <span style={{ display: "block", marginTop: 8, fontSize: 16, lineHeight: 1.62, color: INK2 }}>
                        {body}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── deep dive (glass parked over the pale part of the field) ───────────── */

export function DeepDive() {
  const sources = [
    ["Consumer protection notice", "government"],
    ["The carrier's own support page", "official"],
    ["Recent reporting on the same pattern", "news"],
  ];

  return (
    <section id="deep-dive" className="g-sec" style={{ paddingBottom: "clamp(62px, 8vw, 104px)", scrollMarginTop: 100 }}>
      <div className="g-shell">
        <div
          className="g-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
            gap: "clamp(32px, 5vw, 76px)",
            alignItems: "center",
          }}
        >
          <div className="g-onfield">
            <Eyebrow>Deep Dive</Eyebrow>
            <h2 className="g-h2" style={{ margin: "20px 0 0", color: CREAM, maxWidth: 460 }}>
              When you want the receipts.
            </h2>
            <p className="g-lede" style={{ margin: "18px 0 0", maxWidth: 440 }}>
              Optional, and one tap. It checks the claim against current public reporting,
              then lists every source it read so you can go look yourself.
            </p>
          </div>

          <div className="g-glass g-flip-media" style={{ borderRadius: 32, padding: "30px 30px 26px" }}>
            <span className="g-sheen" />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <span style={{ fontFamily: display, fontWeight: 600, fontSize: 18, color: CREAM }}>Sources read</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(214,228,255,0.62)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999,
                  padding: "5px 11px",
                  whiteSpace: "nowrap",
                }}
              >
                Example layout
              </span>
            </div>

            <div
              style={{
                marginTop: 18,
                borderRadius: 18,
                padding: "13px 16px 14px",
                background: "rgba(255,255,255,0.06)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(214,228,255,0.55)",
                }}
              >
                Checking
              </div>
              <div style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.45, color: CREAM }}>
                “Your parcel is held pending a small customs fee.”
              </div>
            </div>

            <div style={{ marginTop: 6 }}>
              {sources.map(([label, kind], i) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    padding: "15px 0",
                    boxShadow: i === 0 ? undefined : "inset 0 1px 0 0 rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 11,
                      flexShrink: 0,
                      background:
                        i === 0
                          ? "linear-gradient(150deg, #48a7f8, #1c5cf7)"
                          : i === 1
                            ? "linear-gradient(150deg, #ff8b7f, #ff6b5e)"
                            : "linear-gradient(150deg, #cfe0ff, #7fa4e8)",
                      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.5)",
                    }}
                  />
                  <span style={{ minWidth: 0 }}>
                    <span style={{ display: "block", fontSize: 15, color: CREAM, lineHeight: 1.3 }}>{label}</span>
                    <span
                      style={{
                        display: "block",
                        fontSize: 12,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(214,228,255,0.55)",
                        marginTop: 4,
                      }}
                    >
                      {kind}
                    </span>
                  </span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginLeft: "auto", flexShrink: 0 }} aria-hidden>
                    <path d="M4.6 10.4 10.4 4.6M10.4 4.6H6M10.4 4.6V9" stroke="rgba(214,228,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── privacy (solid dark reading surface) ───────────────────────────────── */

export function Privacy() {
  const promises: [string, string][] = [
    [
      "You approve before anything is sent",
      "Checks run on our server and Google's Gemini. Your content is used for that check and is not kept afterwards.",
    ],
    [
      "History stays on your iPhone",
      "Saved results live on the device, protected by iOS. Delete one check, or all of them, whenever you like.",
    ],
    [
      "No account required",
      "Everything works signed out. Sign in with Apple or Google if you want your checks tied to you, and the provider passes us a first name and an email address. No ads, and nothing about you is sold.",
    ],
  ];
  const counts: [string, string][] = [
    ["10", "free checks a day"],
    ["No ads", "and nothing about you is sold"],
    ["No tracking", "across other apps or websites"],
  ];

  return (
    <section id="privacy" className="g-sec" style={{ paddingBottom: "clamp(62px, 8vw, 104px)", scrollMarginTop: 100 }}>
      <div className="g-shell">
        <div className="g-sheet-dark" style={{ padding: "clamp(32px, 4.4vw, 58px)" }}>
          <Eyebrow>Privacy</Eyebrow>
          <h2 className="g-h2" style={{ margin: "18px 0 0", color: CREAM, maxWidth: 600 }}>
            Suspicious of us too? Good instinct.
          </h2>

          <div
            className="g-promise-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: "clamp(24px, 3vw, 44px)",
              marginTop: 40,
            }}
          >
            {promises.map(([t, b]) => (
              <div key={t}>
                <div className="g-rule--dark" style={{ marginBottom: 16, background: "rgba(255,107,94,0.5)" }} />
                <h3 style={{ fontFamily: display, fontWeight: 600, fontSize: 19.5, margin: 0, color: CREAM, letterSpacing: "-0.008em" }}>
                  {t}
                </h3>
                <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "rgba(200,216,244,0.72)" }}>{b}</p>
              </div>
            ))}
          </div>

          <div
            className="g-count-strip"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px 46px",
              marginTop: 44,
              paddingTop: 30,
              boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.12)",
            }}
          >
            {counts.map(([n, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span className="g-num" style={{ fontSize: 30, color: "#7fb6ff" }}>
                  {n}
                </span>
                <span style={{ fontSize: 14.5, color: "rgba(200,216,244,0.72)" }}>{label}</span>
              </div>
            ))}
          </div>

          <Link href="/privacy" className="g-link" style={{ display: "inline-block", marginTop: 30, fontSize: 15.5, fontWeight: 600 }}>
            Read the full privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── final call to action ───────────────────────────────────────────────── */

export function FinalCTA() {
  return (
    <section className="g-sec" style={{ paddingBottom: "clamp(70px, 9vw, 116px)" }}>
      <div className="g-shell">
        <div
          className="g-glass"
          style={{
            borderRadius: 40,
            padding: "clamp(44px, 6vw, 82px) clamp(28px, 5vw, 64px)",
            textAlign: "center",
          }}
        >
          <span className="g-sheen" />
          <h2 className="g-h2" style={{ color: CREAM, maxWidth: 640, margin: "0 auto" }}>
            The beta is small on purpose.
          </h2>
          <p className="g-lede" style={{ margin: "20px auto 0", maxWidth: 460 }}>
            Ask for an invite and we will save you a spot on the next round.
          </p>
          <div style={{ marginTop: 32 }}>
            <a href={BETA} className="g-btn g-btn--primary" style={{ padding: "17px 34px", fontSize: 17.5 }}>
              Request a beta invite
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── footer ─────────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="g-sec" style={{ paddingBottom: 0 }}>
      <div className="g-shell">
        <div className="g-glass" style={{ borderRadius: 30, padding: "26px clamp(22px, 3vw, 34px) 24px" }}>
          <span className="g-sheen" />
          <div
            className="g-footer-row"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 22, flexWrap: "wrap" }}
          >
            <Wordmark size={16} />
            <div style={{ display: "flex", gap: 26, fontSize: 14.5 }}>
              <Link href="/privacy" style={{ color: "rgba(214,228,255,0.78)", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <a href={BETA} style={{ color: "rgba(214,228,255,0.78)", textDecoration: "none" }}>
                Contact
              </a>
            </div>
          </div>
          <div className="g-rule--dark" style={{ margin: "22px 0 18px" }} />
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.62, color: "rgba(190,210,240,0.6)", maxWidth: 640 }}>
            Smells Phishy points out warning signs. It cannot guarantee that something is
            safe or fraudulent, so verify anything important through an official source.
          </p>
        </div>

        <div className="g-colophon">
          <span className="g-colophon-rule" />
          <span>© 2026 Smells Phishy · iPhone · private beta</span>
          <span className="g-colophon-rule" />
        </div>
      </div>
    </footer>
  );
}
