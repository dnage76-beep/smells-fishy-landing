import Image from "next/image";
import Link from "next/link";
import { Phone } from "./phone";

const BETA = "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";
const displayFace = "var(--font-display), ui-rounded, system-ui, sans-serif";
const TEXT = "#f2eee3";
const TEXT2 = "#8a8f98";
const CORAL = "#ff6b5e";

/* ── shared ─────────────────────────────────────────────────────────────── */

function Mesh({ fade = "bottom" }: { fade?: "bottom" | "both" }) {
  return (
    <div className="l-mesh" aria-hidden>
      <div className="l-mesh-blob l-m1" />
      <div className="l-mesh-blob l-m2" />
      <div className="l-mesh-blob l-m3" />
      <div className="l-mesh-blob l-m4" />
      <div className="l-grain" />
      {fade === "both" ? <div className="l-fade-top" /> : null}
      <div className="l-fade-bottom" />
      <div className="l-mesh-horizon" />
    </div>
  );
}

function Wordmark({ size = 15 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <Image
        src="/assets/fishy-logo.png"
        alt=""
        width={26}
        height={26}
        unoptimized
        style={{
          width: size * 1.5,
          height: size * 1.5,
          borderRadius: 6,
          objectFit: "cover",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.1)",
        }}
      />
      <span style={{ fontFamily: displayFace, fontWeight: 600, fontSize: size + 2, letterSpacing: "-0.012em" }}>
        <span style={{ color: TEXT }}>Smells</span> <span style={{ color: CORAL }}>Phishy</span>
      </span>
    </span>
  );
}

function Header({
  eyebrow,
  title,
  lede,
  width = 620,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  width?: number;
}) {
  return (
    <div style={{ maxWidth: width }}>
      <p className="l-eyebrow">{eyebrow}</p>
      <h2 className="l-h2">{title}</h2>
      {lede ? <p className="l-lede" style={{ marginTop: 16, maxWidth: 520 }}>{lede}</p> : null}
    </div>
  );
}

/* ── nav ────────────────────────────────────────────────────────────────── */

export function Nav() {
  return (
    <nav className="l-nav">
      <div className="l-nav-inner">
        <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
          <Wordmark size={15} />
        </Link>
        <div className="l-nav-links">
          <a href="#one-press">One press</a>
          <a href="#result">The result</a>
          <a href="#deep-dive">Deep Dive</a>
          <a href="#privacy">Privacy</a>
        </div>
        <a href={BETA} className="l-btn l-btn--primary l-btn--sm">
          Request an invite
        </a>
      </div>
    </nav>
  );
}

/* ── hero ───────────────────────────────────────────────────────────────── */

export function Hero() {
  const rail: [string, string][] = [
    ["Channel", "Messages"],
    ["Elapsed", "About 8s"],
    ["Verdict", "Showed warning signs"],
    ["Signals", "3"],
    ["History", "This iPhone only"],
    ["Account", "Not required"],
  ];

  return (
    <header className="l-sec" style={{ position: "relative", paddingTop: 0, paddingBottom: "clamp(72px, 8vw, 108px)" }}>
      <div style={{ position: "absolute", inset: "0 0 34% 0", zIndex: 0 }}>
        <Mesh />
      </div>

      <div className="l-shell" style={{ zIndex: 1, paddingTop: "clamp(64px, 8vw, 104px)" }}>
        <div style={{ textAlign: "center" }}>
          <a href={BETA} className="l-pill">
            <span className="l-pill-tag">Beta</span>
            Private iPhone beta, by invite
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M4.2 2.4 7.8 6l-3.6 3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <h1 className="l-h1" style={{ margin: "26px auto 0", maxWidth: 880 }}>
            A second opinion on
            <br />
            anything that feels off.
          </h1>

          <p className="l-lede" style={{ margin: "22px auto 0", maxWidth: 560 }}>
            Smells Phishy reads a suspicious text, email, link or screenshot and shows you
            what stood out. About eight seconds, from one press.
          </p>

          <div
            className="l-cta-row"
            style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}
          >
            <a href={BETA} className="l-btn l-btn--primary">
              Request a beta invite
            </a>
            <a href="#one-press" className="l-btn l-btn--ghost">
              See how it works
            </a>
          </div>
        </div>

        {/* the one product surface the hero is allowed */}
        <div className="l-panel" style={{ marginTop: "clamp(48px, 6vw, 76px)" }}>
          <div className="l-panel-bar">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: CORAL }} />
              <span style={{ fontSize: 13.5, fontWeight: 550, letterSpacing: "-0.008em", color: TEXT }}>
                Check 0421
              </span>
              <span className="l-meta">flagged</span>
            </span>
            <span className="l-meta" style={{ textTransform: "none", letterSpacing: "0.04em" }}>
              About 8s
            </span>
          </div>

          <div
            className="l-hero-surface-grid"
            style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 300px" }}
          >
            <div className="l-stage">
              <div className="l-stage-cols">
                <div className="l-source">
                  <p className="l-meta" style={{ margin: "0 0 12px" }}>
                    What arrived
                  </p>
                  <p className="l-meta" style={{ margin: "0 0 8px", textTransform: "none", letterSpacing: "0.02em" }}>
                    +1 (415) 555-0141
                  </p>
                  <div className="l-bubble">
                    Your parcel is held pending a small customs fee. Confirm within 24 hours or it
                    will be returned to sender.
                  </div>
                  <p className="l-meta" style={{ margin: "10px 0 0" }}>
                    Today 9:39
                  </p>
                </div>

                <div>
                  <p className="l-meta" style={{ margin: "0 0 12px", textAlign: "center" }}>
                    What came back
                  </p>
                  <Phone />
                </div>
              </div>
            </div>

            <div
              className="l-hero-rail"
              style={{ borderLeft: "1px solid var(--l-line)", padding: "22px 24px 24px" }}
            >
              <p className="l-meta" style={{ margin: "0 0 6px" }}>
                Metadata
              </p>
              {rail.map(([k, v]) => (
                <div key={k} className="l-row">
                  <span className="l-key">{k}</span>
                  <span className="l-val">{v}</span>
                </div>
              ))}
              <p style={{ margin: "18px 0 0", fontSize: 12.5, lineHeight: 1.55, color: "var(--l-text-3)" }}>
                Illustrative. Nothing you check leaves your phone until you approve it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── the cited numbers ──────────────────────────────────────────────────── */

export function Stats() {
  const stats: [string, string][] = [
    ["$20.9B", "reported lost to internet crime in 2025"],
    ["1,008,597", "complaints filed with the FBI in one year"],
    ["$7.75B", "of it reported by people over 60"],
  ];
  return (
    <section className="l-sec" style={{ paddingBottom: "clamp(72px, 8vw, 112px)" }}>
      <div className="l-shell">
        <Header eyebrow="Why this exists" title="Scams are not a niche problem." />
        <div
          className="l-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            marginTop: 40,
            border: "1px solid var(--l-line)",
            borderRadius: 14,
            overflow: "hidden",
            background: "var(--l-elev)",
          }}
        >
          {stats.map(([n, label], i) => (
            <div
              key={label}
              className="l-stat"
              style={{ padding: "26px 24px 28px", borderLeft: i === 0 ? undefined : "1px solid var(--l-line)" }}
            >
              <div style={{ fontSize: "clamp(28px, 3vw, 36px)", fontWeight: 600, letterSpacing: "-0.03em", color: TEXT, lineHeight: 1 }}>
                {n}
              </div>
              <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.5, color: TEXT2 }}>{label}</div>
            </div>
          ))}
        </div>
        <p style={{ margin: "14px 0 0", fontSize: 12.5, color: "var(--l-text-3)", lineHeight: 1.6 }}>
          Source:{" "}
          <a
            href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: TEXT2 }}
          >
            FBI IC3 2025 Internet Crime Report
          </a>
          . Reported figures, so the real totals are higher: most scams are never reported.
        </p>
      </div>
    </section>
  );
}

/* ── one press ──────────────────────────────────────────────────────────── */

function Glyph({ d, extra }: { d: string; extra?: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d={d} stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {extra}
    </svg>
  );
}

export function OnePress() {
  const cells = [
    {
      label: "Action Button",
      body: "Hold the button on the side of your iPhone. Set once, then it is the whole interaction.",
      glyph: (
        <Glyph
          d="M8 3.5h8a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 18V6A2.5 2.5 0 0 1 8 3.5Z"
          extra={<rect x="3" y="8" width="2.2" height="5" rx="1.1" fill={CORAL} />}
        />
      ),
    },
    {
      label: "Back Tap",
      body: "Two taps on the back of the phone, without taking it out of your hand.",
      glyph: (
        <Glyph
          d="M8 3.5h8a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 18V6A2.5 2.5 0 0 1 8 3.5Z"
          extra={
            <>
              <circle cx="12" cy="12.5" r="1.8" fill={CORAL} />
              <circle cx="12" cy="12.5" r="4.2" stroke={CORAL} strokeOpacity="0.5" strokeWidth="1.2" />
            </>
          }
        />
      ),
    },
    {
      label: "Share sheet",
      body: "Share a screenshot, a link or a message straight into the app from anywhere in iOS.",
      glyph: (
        <Glyph
          d="M12 15.5V3.5m0 0L8.5 7M12 3.5 15.5 7M5 12.5v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"
          extra={null}
        />
      ),
    },
    {
      label: "Siri",
      body: "Copy the message and ask Siri to check your clipboard. Nothing is sent until you approve it.",
      glyph: (
        <Glyph
          d="M12 4.5v15M8 8v8M16 8v8M4.5 10.5v3M19.5 10.5v3"
          extra={null}
        />
      ),
    },
  ];

  return (
    <section id="one-press" className="l-sec" style={{ paddingBottom: "clamp(72px, 8vw, 112px)", scrollMarginTop: 72 }}>
      <div className="l-shell">
        <Header
          eyebrow="One press"
          title="It runs off the Action Button, Back Tap, the share sheet, or Siri."
          lede="Set it once. After that, checking something suspicious is a single action."
        />
        <div className="l-cells l-cells--4" style={{ marginTop: 40, gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
          {cells.map((c) => (
            <div key={c.label} className="l-cell">
              {c.glyph}
              <h3 className="l-h3" style={{ marginTop: 16 }}>
                {c.label}
              </h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: TEXT2 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── the result ─────────────────────────────────────────────────────────── */

export function TheResult() {
  const parts: [string, string, string][] = [
    [
      "Verdict",
      "Hedged, always",
      "“Showed warning signs.” “Worth a second look.” “Nothing obviously off.” It reports what it can see and stops there.",
    ],
    [
      "Signals",
      "The lines that raised a flag",
      "Quoted back to you, so the judgement stays yours rather than the model's.",
    ],
    [
      "Next step",
      "One concrete thing to do",
      "Usually the boring, safe one: leave the message and go to the official app.",
    ],
  ];

  return (
    <section id="result" className="l-sec" style={{ paddingBottom: "clamp(72px, 8vw, 112px)", scrollMarginTop: 72 }}>
      <div className="l-shell">
        <Header
          eyebrow="The result"
          title="Hedged, and specific about why."
          lede="Nothing here claims a scam was caught. It points at warning signs and hands the call back to you."
        />

        <div className="l-panel" style={{ marginTop: 40 }}>
          <div className="l-panel-bar">
            <span style={{ fontSize: 13.5, fontWeight: 550, letterSpacing: "-0.008em", color: TEXT }}>
              Anatomy of a result
            </span>
            <span className="l-meta">3 parts</span>
          </div>
          <div
            className="l-split"
            style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.35fr) minmax(0, 1fr)" }}
          >
            <div style={{ padding: "8px clamp(20px, 3vw, 34px) 26px" }}>
              {parts.map(([key, title, body]) => (
                <div key={key} className="l-row" style={{ alignItems: "flex-start", padding: "20px 0" }}>
                  <span className="l-key" style={{ paddingTop: 3 }}>
                    {key}
                  </span>
                  <span>
                    <span className="l-h3" style={{ display: "block" }}>
                      {title}
                    </span>
                    <span style={{ display: "block", marginTop: 7, fontSize: 14.5, lineHeight: 1.6, color: TEXT2 }}>
                      {body}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div
              className="l-hero-rail"
              style={{ borderLeft: "1px solid var(--l-line)", padding: "24px clamp(20px, 3vw, 30px) 28px" }}
            >
              <p className="l-meta" style={{ margin: "0 0 16px" }}>
                Verdicts it can return
              </p>
              {[
                ["Showed warning signs", CORAL],
                ["Worth a second look", "#e0a92b"],
                ["Nothing obviously off", "#3fa46a"],
              ].map(([label, colour]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "11px 13px",
                    marginBottom: 8,
                    border: "1px solid var(--l-line)",
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.018)",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: colour, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: TEXT, letterSpacing: "-0.006em" }}>{label}</span>
                </div>
              ))}
              <p style={{ margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.55, color: "var(--l-text-3)" }}>
                Never a flat “this is a scam”. It reports what it can see in the message, and stops there.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── deep dive ──────────────────────────────────────────────────────────── */

export function DeepDive() {
  const sources: [string, string][] = [
    ["Consumer protection notice", "government"],
    ["The carrier's own support page", "official"],
    ["Recent reporting on the same pattern", "news"],
  ];

  return (
    <section id="deep-dive" className="l-sec" style={{ paddingBottom: "clamp(72px, 8vw, 112px)", scrollMarginTop: 72 }}>
      <div className="l-shell">
        <div
          className="l-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.15fr)",
            gap: "clamp(32px, 5vw, 72px)",
            alignItems: "center",
          }}
        >
          <Header
            eyebrow="Deep Dive"
            title="Every source it read, listed."
            lede="Optional, and one tap. It checks the claim against current public reporting and shows you where each line came from, so you can go and look yourself."
            width={460}
          />

          <div className="l-panel">
            <div className="l-panel-bar">
              <span style={{ fontSize: 13.5, fontWeight: 550, letterSpacing: "-0.008em", color: TEXT }}>Deep Dive</span>
              <span className="l-meta">example layout</span>
            </div>
            <div style={{ padding: "18px clamp(18px, 2.4vw, 24px) 20px" }}>
              <p className="l-meta" style={{ margin: "0 0 8px" }}>
                Checking
              </p>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: TEXT, letterSpacing: "-0.008em" }}>
                “Your parcel is held pending a small customs fee.”
              </p>

              <div style={{ marginTop: 20 }}>
                {sources.map(([label, kind], i) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 13,
                      padding: "13px 0",
                      borderTop: i === 0 ? "1px solid var(--l-line)" : "1px solid var(--l-line)",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 7,
                        flexShrink: 0,
                        background:
                          i === 0
                            ? "linear-gradient(150deg, #4b7bff, #1c5cf7)"
                            : i === 1
                              ? "linear-gradient(150deg, #ff8b7f, #ff6b5e)"
                              : "linear-gradient(150deg, #9fb6e8, #5f7bb0)",
                      }}
                    />
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: "block", fontSize: 14, color: TEXT, letterSpacing: "-0.006em" }}>
                        {label}
                      </span>
                      <span className="l-meta" style={{ display: "block", marginTop: 3 }}>
                        {kind}
                      </span>
                    </span>
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="none" style={{ marginLeft: "auto", flexShrink: 0 }} aria-hidden>
                      <path
                        d="M4.6 10.4 10.4 4.6M10.4 4.6H6M10.4 4.6V9"
                        stroke="var(--l-text-3)"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── privacy ────────────────────────────────────────────────────────────── */

export function Privacy() {
  const rows: [string, string][] = [
    [
      "Sending",
      "You approve the first time, and nothing you have not confirmed is ever sent. Checks run on our server and Google's Gemini, and your content is not kept after the check.",
    ],
    [
      "History",
      "Saved results live on your iPhone, protected by iOS. Delete a single check or all of them, any time.",
    ],
    [
      "Sign-in",
      "Optional. Everything works signed out. If you sign in with Apple or Google, the provider passes us a first name and an email address.",
    ],
    ["Business model", "Ten free checks a day. No ads, and nothing about you is sold."],
  ];

  return (
    <section id="privacy" className="l-sec" style={{ paddingBottom: "clamp(72px, 8vw, 112px)", scrollMarginTop: 72 }}>
      <div className="l-shell">
        <Header
          eyebrow="Privacy"
          title="It works without an account."
          lede="Suspicious of us too? Good instinct. Here is the whole arrangement."
        />

        <div className="l-panel" style={{ marginTop: 40, padding: "6px clamp(20px, 3vw, 32px) 12px" }}>
          {rows.map(([k, v]) => (
            <div key={k} className="l-row" style={{ alignItems: "flex-start", padding: "20px 0" }}>
              <span className="l-key" style={{ paddingTop: 3, width: 130 }}>
                {k}
              </span>
              <span style={{ fontSize: 14.5, lineHeight: 1.62, color: TEXT2, maxWidth: 720 }}>{v}</span>
            </div>
          ))}
        </div>

        <Link href="/privacy" className="l-link" style={{ display: "inline-block", marginTop: 22 }}>
          Read the full privacy policy
        </Link>
      </div>
    </section>
  );
}

/* ── closing ────────────────────────────────────────────────────────────── */

export function FinalCTA() {
  return (
    <section
      className="l-sec"
      style={{ position: "relative", paddingTop: "clamp(84px, 10vw, 140px)", paddingBottom: "clamp(84px, 10vw, 140px)" }}
    >
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Mesh fade="both" />
      </div>
      <div className="l-shell" style={{ zIndex: 1, textAlign: "center" }}>
        <h2 className="l-h2" style={{ maxWidth: 620, margin: "0 auto", fontSize: "clamp(30px, 4vw, 52px)" }}>
          The beta is small on purpose.
        </h2>
        <p className="l-lede" style={{ margin: "20px auto 0", maxWidth: 440 }}>
          Ask for an invite and we will save you a spot on the next round.
        </p>
        <div className="l-cta-row" style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 30, flexWrap: "wrap" }}>
          <a href={BETA} className="l-btn l-btn--primary">
            Request a beta invite
          </a>
          <Link href="/privacy" className="l-btn l-btn--ghost">
            Read the privacy policy
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── footer ─────────────────────────────────────────────────────────────── */

export function Footer() {
  return (
    <footer className="l-sec" style={{ borderTop: "1px solid var(--l-line)", paddingTop: 52, paddingBottom: 44 }}>
      <div className="l-shell">
        <div
          className="l-foot-grid"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40 }}
        >
          <div>
            <Wordmark size={14} />
            <p style={{ margin: "16px 0 0", fontSize: 13.5, lineHeight: 1.6, color: TEXT2, maxWidth: 260 }}>
              An iPhone app for checking the message you are not sure about.
            </p>
          </div>
          <div className="l-foot-links">
            <p className="l-meta" style={{ margin: "0 0 8px" }}>
              Product
            </p>
            <a href="#one-press">One press</a>
            <a href="#result">The result</a>
            <a href="#deep-dive">Deep Dive</a>
          </div>
          <div className="l-foot-links">
            <p className="l-meta" style={{ margin: "0 0 8px" }}>
              Legal
            </p>
            <Link href="/privacy">Privacy Policy</Link>
            <a href="#privacy">What we collect</a>
          </div>
          <div className="l-foot-links">
            <p className="l-meta" style={{ margin: "0 0 8px" }}>
              Contact
            </p>
            <a href={BETA}>Request an invite</a>
            <a href={BETA}>Email</a>
          </div>
        </div>

        <hr className="l-hr" style={{ margin: "40px 0 22px" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: "var(--l-text-3)", maxWidth: 600 }}>
            Smells Phishy points out warning signs. It cannot guarantee that something is safe
            or fraudulent, so verify anything important through an official source.
          </p>
          <p className="l-meta" style={{ margin: 0 }}>
            © 2026 Smells Phishy
          </p>
        </div>
      </div>
    </footer>
  );
}
