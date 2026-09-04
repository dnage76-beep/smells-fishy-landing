// Variant 07 — Raycast construction.
//
// Everything here is static: no client JS, no hydration, CSS-only motion.
// That is deliberate. Raycast's whole argument is speed, and a landing page
// that ships zero JavaScript is the honest version of that argument.
import Image from "next/image";
import Link from "next/link";
import "./raycast.css";

const BETA =
  "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";

const display = "var(--font-display), system-ui, sans-serif";

/* ------------------------------------------------------------------ */
/* small pieces                                                        */
/* ------------------------------------------------------------------ */

function Key({ children }: { children: React.ReactNode }) {
  return <kbd className="ray-key">{children}</kbd>;
}

function Wordmark({ size = 22 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <Image
        src="/assets/fishy-logo.png"
        alt=""
        width={size}
        height={size}
        unoptimized
        style={{ width: size, height: size, borderRadius: size * 0.27, display: "block" }}
      />
      <span
        style={{
          fontFamily: display,
          fontWeight: 600,
          fontSize: size * 0.66,
          letterSpacing: "-0.005em",
          lineHeight: 1,
        }}
      >
        <span style={{ color: "var(--cream)" }}>Smells</span>{" "}
        <span style={{ color: "var(--coral)" }}>Phishy</span>
      </span>
    </span>
  );
}

type IconName =
  | "flag"
  | "quote"
  | "arrow"
  | "layers"
  | "lock"
  | "nobody"
  | "press"
  | "check"
  | "eye";

function Icon({ name, size = 15 }: { name: IconName; size?: number }) {
  const p: Record<IconName, React.ReactNode> = {
    flag: (
      <>
        <path d="M8 1.6 14.6 13.4H1.4z" />
        <path d="M8 6.2v3" />
        <path d="M8 11.4h.01" />
      </>
    ),
    quote: (
      <>
        <path d="M2.6 4.4h10.8M2.6 8h7.4M2.6 11.6h9" />
      </>
    ),
    arrow: (
      <>
        <path d="M2.4 8h11.2" />
        <path d="M9.4 3.9 13.6 8l-4.2 4.1" />
      </>
    ),
    layers: (
      <>
        <path d="M8 1.8 14.4 5.4 8 9 1.6 5.4z" />
        <path d="m1.6 10.6 6.4 3.6 6.4-3.6" />
      </>
    ),
    lock: (
      <>
        <rect x="2.8" y="6.8" width="10.4" height="7.4" rx="2" />
        <path d="M5.3 6.8V5a2.7 2.7 0 0 1 5.4 0v1.8" />
      </>
    ),
    nobody: (
      <>
        <circle cx="8" cy="5.6" r="2.7" />
        <path d="M2.9 14.2a5.1 5.1 0 0 1 10.2 0" />
        <path d="M1.8 1.8 14.2 14.2" />
      </>
    ),
    press: (
      <>
        <rect x="4.4" y="1.9" width="7.2" height="12.2" rx="3.6" />
        <path d="M8 4.9v2.4" />
      </>
    ),
    check: (
      <>
        <path d="M2.6 8.4 6.2 12l7.2-8" />
      </>
    ),
    eye: (
      <>
        <path d="M1.4 8S3.9 3.4 8 3.4 14.6 8 14.6 8 12.1 12.6 8 12.6 1.4 8 1.4 8Z" />
        <circle cx="8" cy="8" r="1.9" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {p[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* nav                                                                 */
/* ------------------------------------------------------------------ */

export function Nav() {
  return (
    <nav className="ray-nav">
      <div className="ray-nav-in">
        <Link href="/" aria-label="Smells Phishy home">
          <Wordmark size={22} />
        </Link>
        <div className="ray-hidden-md" style={{ display: "flex", gap: 22, marginLeft: 8 }}>
          <a className="ray-navlink" href="#loop">How it works</a>
          <a className="ray-navlink" href="#deep-dive">Deep Dive</a>
          <a className="ray-navlink" href="#privacy">Privacy</a>
        </div>
        <div style={{ flex: 1 }} />
        <a className="ray-cta" href={BETA}>
          <span className="ray-lg-only">Request an invite</span>
          <span className="ray-sm-only">Request invite</span>
          <Key>↵</Key>
        </a>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* the command surface — the artefact the page is built around         */
/* ------------------------------------------------------------------ */

function CommandSurface() {
  return (
    <div className="ray-surface-shell ray-in" style={{ animationDelay: "180ms" }}>
      <div className="ray-surface-glow" aria-hidden />
      <div className="ray-surface" role="img" aria-label="An example check: a delivery-fee text is pasted in and comes back flagged as showing warning signs, with what stood out and one next step.">
        {/* input row */}
        <div className="ray-sq-row">
          <span style={{ color: "var(--coral)", display: "flex" }}>
            <Icon name="eye" size={16} />
          </span>
          <span className="ray-sq-input">
            Check what I just pasted
            <i className="ray-caret" />
          </span>
          <Key>⌘</Key>
          <Key>P</Key>
        </div>

        {/* what went in */}
        <div className="ray-sec">
          <span>Pasted from Messages</span>
          <span style={{ color: "#4a5061" }}>1 message</span>
        </div>
        <div className="ray-quote">
          &ldquo;USPS: your parcel is on hold. A <b>$3.95</b> redelivery fee is
          due today or it returns to sender. Pay at{" "}
          <b>usps-redeliverfee.info/x7k</b>&rdquo;
        </div>

        {/* what came out */}
        <div className="ray-sec" style={{ paddingTop: 16 }}>
          <span>Result</span>
          <span style={{ color: "#4a5061" }}>7.6s</span>
        </div>

        <div className="ray-row ray-row-sel">
          <span style={{ color: "var(--coral)", display: "flex", marginTop: 1 }}>
            <Icon name="flag" size={16} />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="ray-row-title">Showed warning signs</div>
            <div className="ray-row-sub" style={{ marginTop: 2 }}>
              Worth a second look before you tap anything.
            </div>
          </div>
          <Key>↵</Key>
        </div>

        <div className="ray-sec" style={{ paddingTop: 14 }}>
          <span>What stood out</span>
        </div>
        {[
          "A fee demanded by text, with a deadline of today",
          "The link is not a usps.com address",
          "A delivery you have no record of ordering",
        ].map((t) => (
          <div className="ray-row" key={t}>
            <span className="ray-dot" />
            <div className="ray-row-sub">{t}</div>
          </div>
        ))}

        <div className="ray-sec" style={{ paddingTop: 14 }}>
          <span>What to do next</span>
        </div>
        <div className="ray-row">
          <span style={{ color: "var(--green)", display: "flex", marginTop: 1 }}>
            <Icon name="arrow" size={16} />
          </span>
          <div className="ray-row-sub" style={{ color: "#c8cddb" }}>
            Go to the carrier&apos;s own app or type usps.com yourself. Do not
            use the link.
          </div>
        </div>

        {/* action bar */}
        <div className="ray-bar">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
            <i
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--green)",
                boxShadow: "0 0 8px var(--green)",
              }}
            />
            Saved on this iPhone only
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span>Deep Dive</span>
            <Key>⌘</Key>
            <Key>↵</Key>
          </span>
        </div>
      </div>
      <div className="ray-reflect" aria-hidden />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* hero                                                                */
/* ------------------------------------------------------------------ */

const TRIGGERS: [string, IconName][] = [
  ["Action Button", "press"],
  ["Back Tap", "press"],
  ["Share Sheet", "arrow"],
  ["Siri", "quote"],
];

export function Hero() {
  return (
    <header className="ray-hero">
      <div className="ray-spot" aria-hidden />
      <div className="ray-grid" aria-hidden />
      <div className="ray-wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="ray-badge ray-in">
          <i aria-hidden /> iPhone · private beta
        </div>
        <h1 className="ray-h1 ray-in" style={{ animationDelay: "60ms" }}>
          Check it before
          <br />
          you answer<i>.</i>
        </h1>
        <p className="ray-sub ray-in" style={{ animationDelay: "110ms" }}>
          One press. About eight seconds. A hedged verdict, the lines that
          stood out, and one thing to do next.
        </p>
        <div className="ray-hero-actions ray-in" style={{ animationDelay: "150ms" }}>
          <a className="ray-cta" href={BETA} style={{ height: 36, paddingLeft: 15 }}>
            Request a beta invite <Key>↵</Key>
          </a>
          <a className="ray-ghost" href="#privacy" style={{ height: 36 }}>
            Read the privacy promise
          </a>
        </div>
        <div className="ray-hero-note ray-in" style={{ animationDelay: "190ms" }}>
          NO ACCOUNT · 10 FREE CHECKS A DAY
        </div>

        <CommandSurface />

        <div className="ray-triggers ray-in" style={{ animationDelay: "240ms" }}>
          <span
            className="ray-eyebrow"
            style={{ alignSelf: "center", marginRight: 4 }}
          >
            One press from
          </span>
          {TRIGGERS.map(([label, icon]) => (
            <span className="ray-trigger" key={label}>
              <Icon name={icon} size={13} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* what comes back                                                     */
/* ------------------------------------------------------------------ */

const CARDS: { icon: IconName; color: string; title: string; body: string }[] = [
  {
    icon: "flag",
    color: "var(--coral)",
    title: "A hedged verdict",
    body: "Showed warning signs. Worth a second look. Looks okay so far. Never a promise either way.",
  },
  {
    icon: "quote",
    color: "var(--lum)",
    title: "What stood out",
    body: "The exact lines that read like a scam, quoted back to you in plain English.",
  },
  {
    icon: "arrow",
    color: "var(--green)",
    title: "What to do next",
    body: "One concrete step. Usually: open the real app yourself instead of tapping the link.",
  },
  {
    icon: "layers",
    color: "var(--violet)",
    title: "Deep Dive",
    body: "An optional second pass that checks the claim further and links every source it read.",
  },
  {
    icon: "lock",
    color: "var(--amber)",
    title: "History stays put",
    body: "Saved checks live on your iPhone. Delete one, or delete all of them.",
  },
  {
    icon: "nobody",
    color: "var(--blue)",
    title: "No account",
    body: "Nothing to sign up for. An anonymous device key is all that stops abuse.",
  },
];

// Each channel wears its own brand hue, the way Raycast's extension grid
// does. The marks are the real logo files in public/logos.
const CHANNELS: [string, string][] = [
  ["imessage", "#34C759"], ["whatsapp", "#25D366"], ["telegram", "#26A5E4"],
  ["signal", "#3A76F0"], ["messenger", "#00B2FF"], ["discord", "#5865F2"],
  ["instagram", "#E4405F"], ["facebook", "#0866FF"], ["x", "#C9CEDB"],
  ["reddit", "#FF4500"], ["snapchat", "#F7D000"], ["tiktok", "#EE1D52"],
  ["linkedin", "#0A66C2"], ["youtube", "#FF3B30"], ["safari", "#3B9DFF"],
  ["chrome", "#4285F4"],
];

export function WhatComesBack() {
  return (
    <section className="ray-section">
      <div className="ray-aura ray-aura-r" aria-hidden />
      <div className="ray-wrap">
        <div className="ray-head-split">
          <div>
            <div className="ray-eyebrow">What comes back</div>
            <h2 className="ray-h2">A read you can act on.</h2>
          </div>
          <p className="ray-lede" style={{ maxWidth: "34ch", marginBottom: 3 }}>
            Not a score. Not a scare. The reasoning, in the order you need it.
          </p>
        </div>

        <div className="ray-cards">
          {CARDS.map((c) => (
            <article className="ray-card" key={c.title}>
              <div className="ray-glyph" style={{ color: c.color, background: "color-mix(in srgb, currentColor 10%, transparent)" }}>
                <Icon name={c.icon} size={15} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 52 }}>
          <div className="ray-head-split">
            <div>
              <div className="ray-eyebrow">Surface area</div>
              <h2 className="ray-h2" style={{ fontSize: "clamp(22px, 2.4vw, 27px)" }}>
                If a screen can lie to you, you can check it.
              </h2>
            </div>
          </div>
          <div className="ray-tiles">
            {CHANNELS.map(([c, hue]) => (
              <span className="ray-tile" key={c} style={{ color: hue }}>
                <span
                  style={{
                    WebkitMaskImage: `url(/logos/${c}.svg)`,
                    maskImage: `url(/logos/${c}.svg)`,
                  }}
                />
              </span>
            ))}
          </div>
          <p className="ray-lede" style={{ maxWidth: "60ch", fontSize: 13 }}>
            Anything you can screenshot: texts, email, DMs, listings, links,
            pop-ups.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* the loop                                                            */
/* ------------------------------------------------------------------ */

const LOOP: [string, string, string, string][] = [
  ["01", "Press", "Action Button, Back Tap, the Share Sheet, or ask Siri to check your clipboard.", "⌘"],
  ["02", "Confirm", "You see exactly what is about to be sent. Nothing leaves the phone until you say so.", "↵"],
  ["03", "Read", "About eight seconds later: verdict, what stood out, what to do next.", "esc"],
];

export function Loop() {
  return (
    <>
      <div className="ray-wrap"><div className="ray-rule" /></div>
      <section className="ray-section" id="loop">
        <div className="ray-wrap">
          <div className="ray-head-split">
            <div>
              <div className="ray-eyebrow">The loop</div>
              <h2 className="ray-h2">Three moves, about eight seconds.</h2>
            </div>
            <p className="ray-lede" style={{ maxWidth: "34ch", marginBottom: 3 }}>
              Fast enough to use while the message is still on screen.
            </p>
          </div>

          <div className="ray-loop">
            {LOOP.map(([n, t, b, k]) => (
              <div className="ray-loop-row" key={n}>
                <span className="ray-loop-n">{n}</span>
                <span className="ray-loop-t">{t}</span>
                <span className="ray-loop-b">{b}</span>
                <Key>{k}</Key>
              </div>
            ))}
          </div>

          <p className="ray-lede" style={{ maxWidth: "68ch", fontSize: 13 }}>
            Checking runs on our server and Google&apos;s Gemini. The content is
            used for that one check and our server does not keep it afterwards.
          </p>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* deep dive                                                           */
/* ------------------------------------------------------------------ */

const SOURCES: [string, string, string][] = [
  ["USPS", "usps.com", "How the carrier actually contacts you"],
  ["IC3", "ic3.gov", "FBI reporting on delivery-fee texts"],
  ["FTC", "reportfraud.ftc.gov", "Where to report it if you want to"],
];

export function DeepDive() {
  return (
    <>
      <div className="ray-wrap"><div className="ray-rule" /></div>
      <section className="ray-section" id="deep-dive">
        <div className="ray-aura ray-aura-l" aria-hidden />
        <div className="ray-wrap">
          <div className="ray-split">
            <div>
              <div className="ray-eyebrow">Deep Dive</div>
              <h2 className="ray-h2">When you want the receipts.</h2>
              <p className="ray-lede">
                One more press sends the claim out for a closer look, then shows
                you every source it read. You get to check its work.
              </p>
              <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 9 }}>
                <span style={{ fontSize: 13, color: "var(--dim)" }}>Runs on</span>
                <Key>⌘</Key>
                <Key>↵</Key>
                <span style={{ fontSize: 13, color: "var(--dim)" }}>from the result</span>
              </div>
            </div>

            <div className="ray-panel" style={{ overflow: "hidden" }}>
              <div className="ray-sec" style={{ padding: "13px 15px" }}>
                <span>Deep Dive · example</span>
                <span style={{ color: "#4a5061" }}>3 sources</span>
              </div>
              {SOURCES.map(([tag, domain, note]) => (
                <div className="ray-src" key={domain}>
                  <span
                    className="ray-src-ico"
                    style={{
                      background: "rgba(72,167,248,0.12)",
                      border: "1px solid rgba(72,167,248,0.3)",
                      color: "var(--lum)",
                    }}
                  >
                    {tag.slice(0, 2)}
                  </span>
                  <span style={{ color: "var(--cream)", fontFamily: "var(--mono)", fontSize: 12.5 }}>
                    {domain}
                  </span>
                  <span style={{ color: "var(--dim)", fontSize: 12.5, marginLeft: "auto", textAlign: "right" }}>
                    {note}
                  </span>
                </div>
              ))}
              <div className="ray-src" style={{ color: "#4a5061", fontSize: 11.5, fontFamily: "var(--mono)" }}>
                Sources shown are an illustration of the feature, not a saved result.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* stakes                                                              */
/* ------------------------------------------------------------------ */

export function Stakes() {
  return (
    <>
      <div className="ray-wrap"><div className="ray-rule" /></div>
      <section className="ray-section">
        <div className="ray-wrap">
          <div className="ray-eyebrow">Why it exists</div>
          <h2 className="ray-h2" style={{ marginBottom: 34 }}>
            Reported losses, one year.
          </h2>
          <div className="ray-stats">
            {[
              ["$20.9B", "lost to internet crime in 2025"],
              ["1,008,597", "complaints filed with the FBI"],
              ["$7.75B", "taken from people 60 and older"],
            ].map(([n, l]) => (
              <div className="ray-stat" key={l}>
                <b>{n}</b>
                <span>{l}</span>
              </div>
            ))}
          </div>
          <p className="ray-lede" style={{ maxWidth: "72ch", fontSize: 12.5 }}>
            Source:{" "}
            <a
              href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lum)" }}
            >
              FBI IC3 2025 Internet Crime Report
            </a>
            . Reported figures only. Most scams never get reported.
          </p>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* privacy                                                             */
/* ------------------------------------------------------------------ */

export function Privacy() {
  return (
    <>
      <div className="ray-wrap"><div className="ray-rule" /></div>
      <section className="ray-section" id="privacy">
        <div className="ray-aura ray-aura-r" aria-hidden />
        <div className="ray-wrap">
          <div className="ray-head-split">
            <div>
              <div className="ray-eyebrow">Privacy</div>
              <h2 className="ray-h2">Suspicious of us too? Good.</h2>
            </div>
            <Link
              href="/privacy"
              className="ray-ghost"
              style={{ textDecoration: "none", marginBottom: 3 }}
            >
              Read the full policy
              <Icon name="arrow" size={13} />
            </Link>
          </div>
          <div className="ray-plist">
            {[
              ["You approve every send", "Checking runs on our server and Google's Gemini. The content is used for that check and is not stored on our server afterwards."],
              ["History stays on your iPhone", "Results are saved on the device, protected by iOS. Delete any check, or all of them, whenever you like."],
              ["No account, no tracking", "An anonymous device key prevents abuse. No ads. Nothing sold."],
            ].map(([t, b]) => (
              <div className="ray-prow" key={t}>
                <h3>{t}</h3>
                <p>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* cta + footer                                                        */
/* ------------------------------------------------------------------ */

export function FinalCTA() {
  return (
    <section className="ray-final">
      <div className="ray-spot" aria-hidden />
      <div className="ray-wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="ray-eyebrow" style={{ textAlign: "center" }}>
          Private beta
        </div>
        <h2
          className="ray-h1"
          style={{ fontSize: "clamp(31px, 4.4vw, 52px)", marginTop: 16, maxWidth: "17ch" }}
        >
          The beta is small on purpose<i>.</i>
        </h2>
        <p className="ray-sub" style={{ fontSize: 16 }}>
          iPhone only, while we get it right. Ask for a spot and we will save
          you one.
        </p>
        <div className="ray-hero-actions">
          <a className="ray-cta" href={BETA} style={{ height: 38, paddingLeft: 16, fontSize: 14 }}>
            Request a beta invite <Key>↵</Key>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="ray-foot">
      <div
        className="ray-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Wordmark size={20} />
        <div style={{ display: "flex", gap: 22 }}>
          <Link href="/privacy">Privacy Policy</Link>
          <a href={BETA}>Contact</a>
          <a href="#loop">How it works</a>
        </div>
      </div>
      <div className="ray-wrap">
        <p className="ray-fine">
          Smells Phishy points out warning signs. It cannot guarantee that
          anything is safe or fraudulent. Always verify important requests
          through an official source you looked up yourself. © 2026 Smells
          Phishy.
        </p>
      </div>
    </footer>
  );
}

export default function RaycastVariant() {
  return (
    <div className="ray">
      <Nav />
      <Hero />
      <WhatComesBack />
      <Loop />
      <DeepDive />
      <Stakes />
      <Privacy />
      <FinalCTA />
      <Footer />
    </div>
  );
}
