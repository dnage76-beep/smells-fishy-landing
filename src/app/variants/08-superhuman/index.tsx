// Variant 08 — Superhuman construction.
//
// Dark luxury: one continuous near-black to indigo field, a cinematic
// iPhone composition floating in it with a reflection and reflected light,
// very few words at an elegant scale, and a long slow vertical rhythm.
import Image from "next/image";
import Link from "next/link";
import RevealController from "./reveal";
import "./superhuman.css";

const BETA =
  "mailto:dnage76@gmail.com?subject=Smells%20Phishy%20beta%20invite";

const display = "var(--font-display), system-ui, sans-serif";

/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  return (
    <Tag
      className={`sh-reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

function Wordmark({ size = 24 }: { size?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      <Image
        src="/assets/fishy-logo.png"
        alt=""
        width={size}
        height={size}
        unoptimized
        style={{ width: size, height: size, borderRadius: size * 0.28, display: "block" }}
      />
      <span
        style={{
          fontFamily: display,
          fontWeight: 500,
          fontSize: size * 0.62,
          letterSpacing: "0.005em",
          lineHeight: 1,
          color: "var(--t1)",
        }}
      >
        Smells Phishy
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <nav className="sh-nav">
      <div className="sh-nav-in">
        <Link href="/" aria-label="Smells Phishy home">
          <Wordmark />
        </Link>
        <div className="sh-nav-md" style={{ display: "flex", gap: 30, marginLeft: 14 }}>
          <a className="sh-navlink" href="#press">One press</a>
          <a className="sh-navlink" href="#deep-dive">Deep Dive</a>
          <a className="sh-navlink" href="#privacy">Privacy</a>
        </div>
        <div style={{ flex: 1 }} />
        <a className="sh-btn sh-btn-sm" href={BETA}>
          Request an invite
        </a>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* the device                                                          */
/* ------------------------------------------------------------------ */

function Phone() {
  return (
    <div className="sh-phone">
      <div className="sh-bezel">
        <div className="sh-island" aria-hidden />
        <div className="sh-screen">
          <div className="sh-status">
            <span>9:41</span>
            <span className="sh-sig" aria-hidden>
              <i style={{ height: 4 }} />
              <i style={{ height: 6 }} />
              <i style={{ height: 8 }} />
              <i style={{ height: 10, opacity: 0.4 }} />
            </span>
          </div>

          <div className="sh-app">
            <div className="sh-app-top">
              <div className="sh-app-kicker">Check result</div>
            </div>

            <div className="sh-quoted">
              &ldquo;USPS: your parcel is on hold. A $3.95 redelivery fee is
              due today. Pay at usps-redeliverfee.info/x7k&rdquo;
            </div>

            <div className="sh-verdict">
              <div className="sh-verdict-t">Showed warning signs</div>
              <div className="sh-verdict-s">
                Worth a second look before you reply or tap anything.
              </div>
            </div>

            <div className="sh-card">
              <div className="sh-card-h">What stood out</div>
              <div className="sh-card-line">
                A fee demanded by text, due today
              </div>
              <div className="sh-card-line">
                The link is not a usps.com address
              </div>
              <div className="sh-card-line">
                A delivery you have no record of
              </div>
            </div>

            <div className="sh-card">
              <div className="sh-card-h">What to do next</div>
              <div className="sh-card-line">
                Open the carrier&apos;s own app instead of the link.
              </div>
            </div>

            <div className="sh-action">
              Deep Dive
              <svg width="11" height="11" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2.8 8h10.4" />
                <path d="M9.2 4.2 13 8l-3.8 3.8" />
              </svg>
            </div>

            <div className="sh-foot-pill">
              <i aria-hidden /> SAVED ON THIS IPHONE
            </div>
          </div>
        </div>
        <div className="sh-glass" aria-hidden />
      </div>
    </div>
  );
}

function DeviceComposition() {
  return (
    <div className="sh-stage">
      <div className="sh-bloom" aria-hidden />
      <div
        className="sh-tilt"
        role="img"
        aria-label="An iPhone showing a Smells Phishy result: the verdict reads showed warning signs, followed by what stood out and what to do next."
      >
        <Phone />
      </div>
      <div className="sh-reflect-clip" aria-hidden>
        <div className="sh-tilt sh-reflection">
          <Phone />
        </div>
      </div>
      <div className="sh-floor" aria-hidden />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <header className="sh-hero">
      <div className="sh-wrap">
        <Reveal>
          <div className="sh-eyebrow">iPhone &middot; Private beta</div>
        </Reveal>
        <Reveal delay={140}>
          <h1 className="sh-display sh-h1">Take about eight seconds first.</h1>
        </Reveal>
        <Reveal delay={280}>
          <p className="sh-body">
            One press on your iPhone. A hedged read on whatever is in front of
            you, and one thing to do about it.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div className="sh-hero-actions">
            <a className="sh-btn sh-btn-solid" href={BETA}>
              Request a beta invite
            </a>
            <a className="sh-quiet" href="#privacy">
              Read the privacy promise
            </a>
          </div>
        </Reveal>
        <Reveal delay={520}>
          <DeviceComposition />
        </Reveal>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* statement                                                           */
/* ------------------------------------------------------------------ */

function Statement() {
  return (
    <section className="sh-statement">
      <div className="sh-narrow">
        <Reveal>
          <div className="sh-eyebrow">Why it exists</div>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="sh-display sh-h2" style={{ marginTop: 26 }}>
            A scam only needs you to answer once.
          </h2>
        </Reveal>
        <Reveal delay={320}>
          <p className="sh-body" style={{ margin: "26px auto 0", maxWidth: "36ch" }}>
            So the check has to be faster than the impulse to reply.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* moments                                                             */
/* ------------------------------------------------------------------ */

function ArtShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="sh-art">
      <div className="sh-art-glow" aria-hidden />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 34, flexWrap: "wrap", justifyContent: "center" }}>
        {children}
      </div>
    </div>
  );
}

function PressArt() {
  return (
    <ArtShell>
      <div className="sh-disc">
        <span>Press</span>
      </div>
      <div className="sh-triggers">
        {[
          ["Action Button", "Hold"],
          ["Back Tap", "Double"],
          ["Share Sheet", "Any app"],
          ["Siri", "Clipboard"],
        ].map(([a, b]) => (
          <div className="sh-trigger" key={a}>
            <b>{a}</b>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </ArtShell>
  );
}

function SecondsArt() {
  const r = 84;
  const c = 2 * Math.PI * r;
  return (
    <ArtShell>
      <div className="sh-dial">
        <svg width="190" height="190" viewBox="0 0 190 190" aria-hidden>
          <circle cx="95" cy="95" r={r} fill="none" stroke="rgba(245,240,225,0.08)" strokeWidth="1" />
          <circle
            cx="95"
            cy="95"
            r={r}
            fill="none"
            stroke="url(#shArc)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={`${c * 0.8} ${c}`}
            transform="rotate(-90 95 95)"
          />
          <defs>
            <linearGradient id="shArc" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#48a7f8" />
              <stop offset="100%" stopColor="#3d6bff" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
        <div className="sh-dial-t">
          <span className="sh-dial-num">8s</span>
          <span className="sh-dial-lab">About</span>
        </div>
      </div>
      <div className="sh-triggers">
        {["A hedged verdict", "What stood out", "What to do next"].map((t) => (
          <div className="sh-trigger" key={t}>
            <b>{t}</b>
          </div>
        ))}
      </div>
    </ArtShell>
  );
}

const CHANNELS = [
  "imessage", "whatsapp", "telegram", "signal", "messenger", "instagram",
  "facebook", "x", "reddit", "linkedin", "safari", "chrome",
];

function ChannelArt() {
  return (
    <div className="sh-art" style={{ padding: "34px 30px" }}>
      <div className="sh-art-glow" aria-hidden />
      <div
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "26px 34px",
          placeItems: "center",
        }}
      >
        {CHANNELS.map((c) => (
          <span
            key={c}
            className="sh-mark"
            style={{
              width: 26,
              height: 26,
              display: "block",
              background: "rgba(245,240,225,0.42)",
              WebkitMaskImage: `url(/logos/${c}.svg)`,
              maskImage: `url(/logos/${c}.svg)`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Moment({
  id,
  n,
  title,
  body,
  art,
  flip = false,
}: {
  id?: string;
  n: string;
  title: string;
  body: string;
  art: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <div className={`sh-moment${flip ? " sh-moment-flip" : ""}`} id={id}>
      <Reveal delay={flip ? 120 : 0}>{art}</Reveal>
      <Reveal delay={flip ? 0 : 120}>
        <div>
          <span className="sh-moment-n">{n}</span>
          <h3 className="sh-display sh-h3">{title}</h3>
          <p className="sh-body">{body}</p>
        </div>
      </Reveal>
    </div>
  );
}

function Moments() {
  return (
    <section className="sh-wrap">
      <hr className="sh-rule" />
      <Moment
        id="press"
        n="01"
        title="One press."
        body="From the Action Button, a Back Tap, the Share Sheet, or by asking Siri to check your clipboard. You see exactly what is about to be sent before it goes."
        art={<PressArt />}
        flip
      />
      <hr className="sh-rule" />
      <Moment
        n="02"
        title="About eight seconds."
        body="Long enough to read the message properly. Short enough that the thing you are unsure about is still on screen."
        art={<SecondsArt />}
      />
      <hr className="sh-rule" />
      <Moment
        n="03"
        title="Anything you can screenshot."
        body="Texts, email, DMs, listings, links, pop-ups. If a screen can lie to you, it can be checked."
        art={<ChannelArt />}
        flip
      />
      <hr className="sh-rule" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* deep dive                                                           */
/* ------------------------------------------------------------------ */

function DeepDive() {
  return (
    <section className="sh-statement sh-left" id="deep-dive" style={{ paddingBottom: "clamp(56px, 7vw, 92px)" }}>
      <div className="sh-wrap">
        <Reveal>
          <div className="sh-eyebrow">Deep Dive</div>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="sh-display sh-h2" style={{ marginTop: 24, maxWidth: "16ch" }}>
            Then check its work.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className="sh-body" style={{ marginTop: 24, maxWidth: "42ch" }}>
            One more press digs further into the claim and lists every source
            it read, so the answer is something you can verify rather than
            something you have to trust.
          </p>
        </Reveal>
        <Reveal delay={380}>
          <dl className="sh-table">
            {[
              ["usps.com", "How the carrier actually contacts you"],
              ["ic3.gov", "FBI reporting on delivery-fee texts"],
              ["reportfraud.ftc.gov", "Where to report it, if you want to"],
            ].map(([a, b]) => (
              <div className="sh-tr" key={a}>
                <dt>{a}</dt>
                <dd>{b}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={460}>
          <p className="sh-body" style={{ marginTop: 20, fontSize: 12.5, color: "var(--t3)" }}>
            An illustration of the feature. Sources differ with every check.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* numbers                                                             */
/* ------------------------------------------------------------------ */

function Numbers() {
  return (
    <section className="sh-wrap" style={{ padding: "clamp(50px, 7vw, 90px) 32px" }}>
      <Reveal>
        <div className="sh-eyebrow">Reported to the FBI, one year</div>
      </Reveal>
      <Reveal delay={140}>
        <div className="sh-nums" style={{ marginTop: 40 }}>
          {[
            ["$20.9B", "reported lost to internet crime in 2025"],
            ["1,008,597", "complaints filed"],
            ["$7.75B", "of it reported by people over 60"],
          ].map(([n, l]) => (
            <div className="sh-num" key={l}>
              <b>{n}</b>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={240}>
        <p className="sh-body" style={{ marginTop: 22, fontSize: 12.5, color: "var(--t3)" }}>
          Source:{" "}
          <a
            href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--t2)" }}
          >
            FBI IC3 2025 Internet Crime Report
          </a>
          . Reported figures only. Most scams are never reported.
        </p>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* privacy                                                             */
/* ------------------------------------------------------------------ */

function Privacy() {
  return (
    <section className="sh-statement sh-left" id="privacy" style={{ paddingTop: "clamp(56px, 7vw, 92px)" }}>
      <div className="sh-wrap">
        <Reveal>
          <div className="sh-eyebrow">Privacy</div>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="sh-display sh-h2" style={{ marginTop: 24, maxWidth: "14ch" }}>
            Be suspicious of us too.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <dl className="sh-table">
            {[
              ["You approve every send", "Checking runs on our server and Google's Gemini, for that one check. Our server does not keep the content afterwards."],
              ["History stays on the phone", "Saved results live on your iPhone, protected by iOS. Delete one, or delete all of them."],
              ["No account required", "Signing in with Apple or Google is optional. If you do, the sign-in provider gives us a first name and an email address. Otherwise an anonymous device key is all that prevents abuse. No ads. Nothing sold."],
            ].map(([a, b]) => (
              <div className="sh-tr" key={a}>
                <dt>{a}</dt>
                <dd>{b}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={340}>
          <div style={{ marginTop: 34 }}>
            <Link href="/privacy" className="sh-quiet">
              Read the full privacy policy
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* close                                                               */
/* ------------------------------------------------------------------ */

function Final() {
  return (
    <section className="sh-final">
      <div className="sh-final-glow" aria-hidden />
      <div className="sh-narrow">
        <Reveal>
          <div className="sh-eyebrow">Private beta</div>
        </Reveal>
        <Reveal delay={160}>
          <h2 className="sh-display sh-h2">The beta is small on purpose.</h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="sh-body" style={{ margin: "26px auto 0", maxWidth: "34ch" }}>
            iPhone only, while we get it right.
          </p>
        </Reveal>
        <Reveal delay={420}>
          <div className="sh-hero-actions">
            <a className="sh-btn sh-btn-solid" href={BETA}>
              Request a beta invite
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="sh-foot">
      <div
        className="sh-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <Wordmark size={20} />
        <div style={{ display: "flex", gap: 28 }}>
          <Link href="/privacy">Privacy Policy</Link>
          <a href={BETA}>Contact</a>
        </div>
      </div>
      <div className="sh-wrap">
        <p className="sh-fine">
          Smells Phishy points out warning signs. It cannot guarantee that
          anything is safe or fraudulent. Always verify important requests
          through an official source you looked up yourself. © 2026 Smells
          Phishy.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

export default function SuperhumanVariant() {
  return (
    <div className="sh">
      <div className="sh-field" aria-hidden />
      {/* Without JS the arrival animation never runs, so show everything. */}
      <noscript>
        <style>{`.sh-reveal { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <RevealController />
      <Nav />
      <Hero />
      <Statement />
      <Moments />
      <DeepDive />
      <Numbers />
      <Privacy />
      <Final />
      <Footer />
    </div>
  );
}
