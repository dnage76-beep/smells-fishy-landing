// Variant 03 — built on Stripe.com's construction. See README.md in this
// folder for what is borrowed and what is deliberately ours.
import Image from "next/image";
import Link from "next/link";
import "./stripe.css";
import ScrollFx from "./scroll-fx";
import { VerdictStack, PressPanel, EvidencePanel } from "./artefacts";
import {
  IconArrow,
  IconClock,
  IconEye,
  IconKey,
  IconLayers,
  IconLink,
  IconPhoneLock,
  IconShield,
  IconTrash,
} from "./icons";

const BETA_MAILTO = "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";
const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, "Roboto Mono", monospace';

const NAV = [
  ["How it works", "#press"],
  ["Deep Dive", "#deep-dive"],
  ["Privacy", "#privacy"],
] as const;

function Wordmark({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}>
      <Image
        src="/assets/fishy-logo.png"
        alt=""
        width={26}
        height={26}
        unoptimized
        style={{ width: 26, height: 26, borderRadius: 7, objectFit: "cover" }}
      />
      <span className={className} style={{ fontFamily: "var(--font-display), system-ui, sans-serif", fontWeight: 600, fontSize: size, letterSpacing: "0.005em" }}>
        <span className="sp-wordmark-a">Smells</span> <span className="sp-wordmark-b">Phishy</span>
      </span>
    </Link>
  );
}

/* ================================ nav ================================ */

export function Nav() {
  return (
    <nav className="sp-nav">
      <div className="sp-wrap">
        <div className="sp-nav-inner">
          <Wordmark className="sp-nav-wordmark" />
          <div className="sp-nav-links" style={{ display: "flex", alignItems: "center", gap: 26, marginLeft: 14 }}>
            {NAV.map(([label, href]) => (
              <a key={label} href={href} className="sp-navlink">
                {label}
              </a>
            ))}
          </div>
          <a href={BETA_MAILTO} className="sp-btn sp-btn-cream sp-btn-sm sp-nav-cta" style={{ marginLeft: "auto" }}>
            Request an invite
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ================================ hero ================================ */

export function Hero() {
  return (
    <header className="sp-top">
      <div className="sp-ribbon-edge" aria-hidden />
      <div className="sp-ribbon" aria-hidden />
      <div className="sp-ribbon-echo" aria-hidden />
      <div className="sp-hero-body">
        <div className="sp-wrap" style={{ paddingTop: "clamp(48px, 6vw, 88px)" }}>
          <div className="sp-grid" style={{ alignItems: "start" }}>
            <div className="sp-claim-l sp-rv sp-in">
              <p className="sp-eyebrow sp-eyebrow-on-dark">Private iPhone beta</p>
              <h1 className="sp-h1" style={{ color: "#f5f0e1" }}>
                Check it before
                <br />
                you answer.
              </h1>
              <p className="sp-lede" style={{ color: "rgba(215,229,252,0.86)" }}>
                One press on your iPhone. About eight seconds later, Smells Phishy
                tells you what stood out and what to do next.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
                <a href={BETA_MAILTO} className="sp-btn sp-btn-cream">
                  Request a beta invite
                </a>
                <a href="#press" className="sp-btn" style={{ background: "rgba(255,255,255,0.12)", color: "#f5f0e1", border: "1px solid rgba(255,255,255,0.28)" }}>
                  See one press
                  <IconArrow size={15} />
                </a>
              </div>
              <p className="sp-mono" style={{ marginTop: 26, color: "rgba(205,224,252,0.74)" }}>
                No account required · History stays on your iPhone
              </p>
            </div>

            <div className="sp-art-r sp-rv sp-in" style={{ transitionDelay: "90ms" }}>
              <VerdictStack />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ============================ channel strip ============================ */

const CHANNELS = ["imessage", "whatsapp", "messenger", "instagram", "facebook", "telegram", "x", "linkedin"];

export function Channels() {
  return (
    <section className="sp-section" style={{ paddingTop: 0, paddingBottom: "clamp(56px, 6vw, 76px)" }}>
      <div className="sp-wrap">
        <div className="sp-grid" style={{ rowGap: 24 }}>
          <div className="sp-full sp-rv">
            <p className="sp-mono" style={{ color: "#8b9bb2", marginBottom: 22 }}>
              Anything you can screenshot
            </p>
            <div className="sp-logostrip">
              {CHANNELS.map((n) => (
                <Image key={n} src={`/logos/${n}.svg`} alt="" width={22} height={22} unoptimized />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ section header ============================ */

function Claim({
  eyebrow,
  title,
  body,
  bullets,
  link,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  bullets?: string[];
  link?: { label: string; href: string };
  dark?: boolean;
}) {
  return (
    <>
      <p className={`sp-eyebrow ${dark ? "sp-eyebrow-on-dark" : ""}`}>{eyebrow}</p>
      <h2 className="sp-h2" style={{ color: dark ? "#f5f0e1" : "#0a1f45" }}>
        {title}
      </h2>
      <p className="sp-body" style={{ color: dark ? "rgba(201,216,242,0.86)" : "#46586f" }}>
        {body}
      </p>
      {bullets && (
        <ul style={{ listStyle: "none", margin: "24px 0 0", padding: 0 }}>
          {bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: 11, alignItems: "flex-start", padding: "8px 0" }}>
              <span style={{ color: dark ? "#7cc2fb" : "#1c5cf7", flexShrink: 0, marginTop: 1 }}>
                <IconShield size={17} />
              </span>
              <span style={{ fontSize: 15.5, lineHeight: 1.55, color: dark ? "#c9d8f2" : "#25364f" }}>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {link && (
        <a href={link.href} className={`sp-link ${dark ? "sp-link-on-dark" : ""}`} style={{ marginTop: 26 }}>
          {link.label}
          <IconArrow size={15} />
        </a>
      )}
    </>
  );
}

/* ============================ 1. the verdict ============================ */

const SCALE: [string, string, string][] = [
  ["Looks okay so far", "#1f9d61", "Nothing common to scams turned up. Still your call."],
  ["Worth a second look", "#c98a12", "A couple of things do not add up. Slow down."],
  ["Showed warning signs", "#e04b3c", "Several patterns scammers lean on. Do not reply yet."],
];

function VerdictScale() {
  return (
    <div className="sp-card" style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 40,
          padding: "0 18px",
          borderBottom: "1px solid #e6ebf2",
          background: "#fbfcfe",
        }}
      >
        <span className="sp-mono" style={{ color: "#8b9bb2" }}>
          The three answers
        </span>
        <span className="sp-mono" style={{ color: "#8b9bb2" }}>
          Hedged on purpose
        </span>
      </div>
      {SCALE.map(([label, colour, note], i) => (
        <div
          key={label}
          className="sp-rv"
          style={{
            transitionDelay: `${i * 80}ms`,
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
            padding: "17px 18px",
            borderTop: i === 0 ? "none" : "1px solid #eef2f7",
          }}
        >
          <span aria-hidden style={{ width: 3, alignSelf: "stretch", borderRadius: 2, background: colour, flexShrink: 0 }} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.015em", color: "#0a1f45" }}>{label}</div>
            <p style={{ margin: "4px 0 0", fontSize: 14.5, lineHeight: 1.5, color: "#5c6979" }}>{note}</p>
          </div>
        </div>
      ))}
      <div style={{ borderTop: "1px solid #eef2f7", padding: "13px 18px", background: "#fbfcfe" }}>
        <p style={{ margin: 0, fontFamily: MONO, fontSize: 11.5, lineHeight: 1.55, color: "#8b9bb2" }}>
          It points at warning signs. It never claims certainty.
        </p>
      </div>
    </div>
  );
}

export function TheAnswer() {
  return (
    <section id="answer" className="sp-section sp-rule">
      <div className="sp-wrap">
        <div className="sp-grid" style={{ alignItems: "center" }}>
          <div className="sp-claim-l sp-rv">
            <Claim
              eyebrow="The answer"
              title={
                <>
                  A verdict you can act on,
                  <br />
                  hedged on purpose.
                </>
              }
              body="Smells Phishy names what the message looks like, points at the exact lines that raised a flag, and gives you one thing to do next."
              bullets={[
                "The signals it found, quoted from your own screenshot",
                "One next step, written for the situation",
                "The same three answers every time, so you learn the scale",
              ]}
            />
          </div>
          <div className="sp-art-r sp-rv" style={{ transitionDelay: "80ms" }}>
            <VerdictScale />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ 2. one press ============================ */

export function OnePress() {
  return (
    <section id="press" className="sp-section sp-tint sp-rule">
      <div className="sp-wrap">
        <div className="sp-grid" style={{ alignItems: "center" }}>
          <div className="sp-claim-r sp-rv">
            <Claim
              eyebrow="One press"
              title={
                <>
                  It starts with a button
                  <br />
                  you already have.
                </>
              }
              body="Point the Action Button or a Back Tap at Smells Phishy. Screenshot the message, press once, and the check runs. Nothing to copy, nothing to paste, no app to go hunting for."
              link={{ label: "Read the privacy policy", href: "/privacy" }}
            />
          </div>
          <div className="sp-art-l sp-rv" style={{ transitionDelay: "80ms" }}>
            <PressPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ 3. deep dive ============================ */

export function DeepDive() {
  return (
    <section id="deep-dive" className="sp-section sp-ink-bg">
      <div className="sp-wrap">
        <div className="sp-grid" style={{ alignItems: "center" }}>
          <div className="sp-claim-l sp-rv">
            <Claim
              dark
              eyebrow="Deep Dive"
              title={
                <>
                  When you want
                  <br />
                  the receipts.
                </>
              }
              body="One more press sends the same content back with web search switched on. You get what current public reporting says about it, and every source it read, listed for you to open."
              link={{ label: "See what the app keeps", href: "#privacy" }}
            />
          </div>
          <div className="sp-art-r sp-rv" style={{ transitionDelay: "80ms" }}>
            <EvidencePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ feature grid ============================ */

const FEATURES: [React.ReactNode, string, string][] = [
  [<IconClock key="a" />, "About eight seconds", "Typical time from the press to the verdict."],
  [<IconLayers key="b" />, "Text, email, link or screenshot", "If a screen can lie to you, it can be checked."],
  [<IconPhoneLock key="c" />, "History stays on your iPhone", "Saved on the device, protected by iOS."],
  [<IconKey key="d" />, "No account required", "Signing in with Apple or Google is optional."],
  [<IconLink key="e" />, "Sources you can open", "Every Deep Dive lists what it read."],
  [<IconTrash key="f" />, "Delete any check, any time", "One check or the whole history."],
];

export function Features() {
  return (
    <section className="sp-section">
      <div className="sp-wrap">
        <div className="sp-grid sp-rv" style={{ marginBottom: 46 }}>
          <div className="sp-head-6">
            <p className="sp-eyebrow">The short version</p>
            <h2 className="sp-h2">Small app. Narrow job. Done properly.</h2>
          </div>
        </div>
        <div className="sp-grid" style={{ rowGap: 40 }}>
          {FEATURES.map(([icon, title, body], i) => (
            <div key={title} className="sp-third sp-feat sp-rv" style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
              <span className="sp-feat-icon">{icon}</span>
              <h3 className="sp-h3">{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================ privacy ============================ */

const PRIVACY: [string, string, React.ReactNode][] = [
  ["You agree before anything is sent", "The check runs on our server and Google's Gemini. Your content is used for that check only, and the server does not keep it afterward.", <IconShield key="a" />],
  ["Your history is yours", "Results and the content you checked are saved on your iPhone, under iOS file protection. Delete one, or delete all of it.", <IconPhoneLock key="b" />],
  ["No ads, nothing sold", "No tracking across other apps and no data for sale. Signing in is optional; if you do, the provider gives us a first name and an email address.", <IconEye key="c" />],
];

export function Privacy() {
  return (
    <section id="privacy" className="sp-section sp-tint sp-rule">
      <div className="sp-wrap">
        <div className="sp-grid sp-rv" style={{ marginBottom: 46 }}>
          <div className="sp-head-6">
            <p className="sp-eyebrow">Privacy</p>
            <h2 className="sp-h2">Suspicious of us too? Good instinct.</h2>
          </div>
        </div>
        <div className="sp-grid" style={{ rowGap: 36 }}>
          {PRIVACY.map(([title, body, icon], i) => (
            <div key={title} className="sp-third sp-rv" style={{ transitionDelay: `${i * 70}ms`, borderTop: "1px solid #dbe3ee", paddingTop: 24 }}>
              <span style={{ color: "#1c5cf7", display: "block" }}>
                {icon}
              </span>
              <h3 className="sp-h3" style={{ margin: "14px 0 7px" }}>
                {title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.62, color: "#5c6979" }}>{body}</p>
            </div>
          ))}
          <div className="sp-full sp-rv" style={{ marginTop: 8 }}>
            <Link href="/privacy" className="sp-link">
              Read the full privacy policy
              <IconArrow size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ final CTA ============================ */

export function FinalCTA() {
  return (
    <section className="sp-cta">
      <div className="sp-ribbon-b-edge" aria-hidden />
      <div className="sp-ribbon-b" aria-hidden />
      <div className="sp-wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="sp-grid">
          <div className="sp-head-6 sp-rv">
            <p className="sp-eyebrow sp-eyebrow-on-dark">The beta</p>
            <h2 className="sp-h2" style={{ color: "#f5f0e1" }}>
              Small on purpose.
            </h2>
            <p className="sp-body" style={{ color: "rgba(215,229,252,0.86)" }}>
              Smells Phishy is on a private iPhone beta while it gets sharper. Ask for
              an invite and a spot gets held for you.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 32 }}>
              <a href={BETA_MAILTO} className="sp-btn sp-btn-cream">
                Request a beta invite
              </a>
              <Link href="/privacy" className="sp-btn" style={{ background: "rgba(255,255,255,0.12)", color: "#f5f0e1", border: "1px solid rgba(255,255,255,0.28)" }}>
                Privacy policy
              </Link>
            </div>
          </div>
          <div
            className="sp-cta-spec sp-rv"
            style={{
              gridColumn: "9 / span 4",
              alignSelf: "end",
              background: "rgba(4,11,30,0.42)",
              border: "1px solid rgba(245,240,225,0.18)",
              borderRadius: 12,
              padding: "4px 18px 14px",
              backdropFilter: "blur(8px)",
            }}
          >
            {[
              ["Platform", "iPhone"],
              ["Account", "Not required"],
              ["History", "Stays on the device"],
              ["Verdicts", "Hedged, always"],
            ].map(([k, v], i) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "11px 0",
                  borderTop: i === 0 ? "none" : "1px solid rgba(245,240,225,0.16)",
                }}
              >
                <span className="sp-mono" style={{ color: "rgba(205,224,252,0.72)" }}>{k}</span>
                <span className="sp-mono" style={{ color: "#f5f0e1" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ footer ============================ */

export function Footer() {
  return (
    <footer className="sp-footer" style={{ paddingTop: 56, paddingBottom: 48, background: "#fff" }}>
      <div className="sp-wrap">
        <div className="sp-grid" style={{ rowGap: 34 }}>
          <div className="sp-quarter">
            <Wordmark size={17} />
            <p style={{ margin: "16px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#5c6979", maxWidth: 250 }}>
              A second opinion on the message you were not expecting.
            </p>
          </div>
          <div className="sp-quarter">
            <p className="sp-mono" style={{ color: "#8b9bb2", marginBottom: 12 }}>
              Product
            </p>
            <a href="#answer" className="sp-footlink">
              The answer
            </a>
            <a href="#press" className="sp-footlink">
              One press
            </a>
            <a href="#deep-dive" className="sp-footlink">
              Deep Dive
            </a>
          </div>
          <div className="sp-quarter">
            <p className="sp-mono" style={{ color: "#8b9bb2", marginBottom: 12 }}>
              Legal
            </p>
            <Link href="/privacy" className="sp-footlink">
              Privacy Policy
            </Link>
            <a href="#privacy" className="sp-footlink">
              What stays on device
            </a>
          </div>
          <div className="sp-quarter">
            <p className="sp-mono" style={{ color: "#8b9bb2", marginBottom: 12 }}>
              Contact
            </p>
            <a href={BETA_MAILTO} className="sp-footlink">
              Request an invite
            </a>
            <a href="mailto:dnage76@gmail.com" className="sp-footlink">
              dnage76@gmail.com
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #e6ebf2", marginTop: 44, paddingTop: 22 }}>
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: "#8b9bb2", maxWidth: 760 }}>
            Smells Phishy points out warning signs. It cannot guarantee that a
            message is safe or fraudulent. Always verify important requests
            through an official source. Product names and marks shown above
            belong to their owners and do not imply any affiliation. © 2026
            Smells Phishy.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { ScrollFx };
