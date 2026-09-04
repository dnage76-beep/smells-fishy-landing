// The concrete artefacts. Stripe pairs every claim with a real thing on the
// right: a code panel, a dashboard card. Here the artefacts are the app's own
// output — a verdict card, a press timeline, an evidence trail — all labelled
// as examples so nothing reads as a promise.
import { IconFlag, IconLink } from "./icons";

const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, "Roboto Mono", monospace';

/* ------------------------------------------------------------------ */
/* Hero: the message being checked, and the verdict that comes back.    */
/* ------------------------------------------------------------------ */

export function VerdictStack() {
  return (
    <div style={{ position: "relative" }}>
      {/* back layer: what went in */}
      <div className="sp-panel" style={{ marginLeft: 30 }}>
        <div className="sp-panel-tabs">
          <span className="sp-mono sp-tab-on">Checked</span>
          <span className="sp-mono sp-tab">Example</span>
        </div>
        <div style={{ padding: "18px 20px 20px" }}>
          <div className="sp-mono" style={{ color: "rgba(200,219,250,0.5)" }}>
            SMS · unknown number
          </div>
          <p
            style={{
              margin: "10px 0 0",
              color: "#e7eefc",
              fontFamily: MONO,
              fontSize: 13,
              lineHeight: 1.62,
              letterSpacing: "-0.005em",
            }}
          >
            USPS: your package is on hold at the depot.
            <br />
            Settle the $2.99 redelivery fee within 12h:
            <br />
            <span style={{ color: "#ff9a90" }}>usps-redelivery-fee.help/pay</span>
          </p>
        </div>
      </div>

      {/* front layer: what came back */}
      <div className="sp-card sp-card-hero" style={{ position: "relative", zIndex: 2, marginTop: -20, marginRight: 30, overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 18px",
            height: 40,
            borderBottom: "1px solid #e6ebf2",
            background: "#fbfcfe",
          }}
        >
          <span className="sp-mono" style={{ color: "#8b9bb2" }}>
            Result · example
          </span>
          <span className="sp-mono" style={{ color: "#8b9bb2" }}>
            8.2s
          </span>
        </div>

        <div style={{ padding: "20px 20px 4px", display: "flex", gap: 13, alignItems: "flex-start" }}>
          <span
            style={{
              flexShrink: 0,
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "#fff1ef",
              color: "#e04b3c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconFlag size={18} />
          </span>
          <div>
            <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", color: "#0a1f45", lineHeight: 1.2 }}>
              Showed warning signs
            </div>
            <p style={{ margin: "5px 0 0", fontSize: 14.5, lineHeight: 1.5, color: "#5c6979" }}>
              Worth a second look before you reply or tap anything.
            </p>
          </div>
        </div>

        <Block label="What stood out">
          {[
            "Urgency about a package you did not order",
            "The link does not go to the carrier’s own domain",
            "A small fee, paid on a page you have never used",
          ].map((line) => (
            <li key={line} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 9 }}>
              <span
                aria-hidden
                style={{ flexShrink: 0, width: 5, height: 5, borderRadius: 5, background: "#ff6b5e", marginTop: 7 }}
              />
              <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#25364f" }}>{line}</span>
            </li>
          ))}
        </Block>

        <Block label="What to do next" last>
          <li style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 9 }}>
            <span
              aria-hidden
              style={{
                flexShrink: 0,
                width: 18,
                height: 18,
                borderRadius: 5,
                background: "#1c5cf7",
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              1
            </span>
            <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#25364f" }}>
              Open the carrier’s own app and look the tracking number up there.
            </span>
          </li>
        </Block>
      </div>
    </div>
  );
}

function Block({ label, children, last = false }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div
      style={{
        padding: last ? "16px 20px 20px" : "16px 20px",
        borderTop: "1px solid #eef2f7",
        marginTop: 16,
      }}
    >
      <div className="sp-mono" style={{ color: "#8b9bb2" }}>
        {label}
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>{children}</ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* One press: the button, and the eight seconds after it.               */
/* ------------------------------------------------------------------ */

const STEPS: [string, string, string][] = [
  ["01", "Press", "0.0s"],
  ["02", "Read the screen", "0.3s"],
  ["03", "Check the signals", "~8s"],
  ["04", "Verdict", "done"],
];

export function PressPanel() {
  return (
    <div className="sp-panel">
      <div className="sp-panel-tabs">
        <span className="sp-mono sp-tab-on">Action Button</span>
        <span className="sp-mono sp-tab">Back Tap</span>
        <span className="sp-mono sp-tab">Share Sheet</span>
      </div>

      <div className="sp-press-body" style={{ display: "flex", gap: 30, padding: "32px 24px 22px", alignItems: "center" }}>
        <svg width="132" height="231" viewBox="0 0 112 196" fill="none" aria-hidden style={{ flexShrink: 0 }}>
          <rect x="18.75" y="6.75" width="86.5" height="182.5" rx="18" stroke="rgba(200,219,250,0.34)" strokeWidth="1.5" />
          <rect x="25.75" y="13.75" width="72.5" height="168.5" rx="12" stroke="rgba(200,219,250,0.16)" strokeWidth="1.5" />
          {/* side hardware */}
          <rect x="15" y="52" width="4" height="26" rx="2" fill="#ff6b5e" />
          <rect x="15" y="88" width="4" height="17" rx="2" fill="rgba(200,219,250,0.3)" />
          <rect x="15" y="110" width="4" height="17" rx="2" fill="rgba(200,219,250,0.3)" />
          <rect x="105" y="76" width="4" height="30" rx="2" fill="rgba(200,219,250,0.3)" />
          {/* callout */}
          <path d="M14 65H2" stroke="#ff6b5e" strokeWidth="1.25" strokeDasharray="2.5 3" />
          {/* a screenshot sitting on the screen */}
          <rect x="34" y="34" width="56" height="34" rx="6" fill="rgba(124,194,251,0.12)" stroke="rgba(124,194,251,0.3)" strokeWidth="1" />
          <path d="M40 44h34M40 51h44M40 58h24" stroke="rgba(200,219,250,0.4)" strokeWidth="2" strokeLinecap="round" />
          <rect x="34" y="78" width="56" height="9" rx="4.5" fill="rgba(72,167,248,0.55)" />
          <path d="M34 98h56M34 108h40M34 118h50M34 128h30" stroke="rgba(200,219,250,0.18)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="sp-mono" style={{ color: "#ff9a90", marginBottom: 14 }}>
            Action button
          </div>
          {STEPS.map(([n, label, t], i) => (
            <div
              key={n}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                padding: "11px 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(124,194,251,0.12)",
              }}
            >
              <span style={{ fontFamily: MONO, fontSize: 11, color: "rgba(200,219,250,0.42)" }}>{n}</span>
              <span style={{ flex: 1, fontSize: 14.5, color: "#e7eefc", letterSpacing: "-0.01em" }}>{label}</span>
              <span style={{ fontFamily: MONO, fontSize: 11, color: i === 2 ? "#7cc2fb" : "rgba(200,219,250,0.42)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "6px 22px 22px" }}>
        <div className="sp-rail">
          <div className="sp-rail-fill" />
          <span className="sp-tick" style={{ left: 0 }} />
          <span className="sp-tick" style={{ left: "50%" }} />
          <span className="sp-tick" style={{ right: 0 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
          <span className="sp-mono" style={{ color: "rgba(200,219,250,0.42)" }}>
            0s
          </span>
          <span className="sp-mono" style={{ color: "rgba(200,219,250,0.42)" }}>
            4s
          </span>
          <span className="sp-mono" style={{ color: "#7cc2fb" }}>
            about 8s
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Deep Dive: the evidence trail.                                       */
/* ------------------------------------------------------------------ */

const SOURCES: [string, string, string][] = [
  ["01", "ftc.gov", "Consumer alert on package delivery texts that ask for a small fee."],
  ["02", "ic3.gov", "Reported smishing pattern using lookalike carrier domains."],
  ["03", "usps.com", "Official notice: USPS does not text a payment link out of the blue."],
];

export function EvidencePanel() {
  return (
    <div className="sp-panel" style={{ background: "#0a1a40" }}>
      <div className="sp-panel-tabs">
        <span className="sp-mono sp-tab-on">Sources</span>
        <span className="sp-mono sp-tab">Searches</span>
        <span className="sp-mono sp-tab" style={{ marginLeft: "auto", color: "rgba(200,219,250,0.38)" }}>
          Example
        </span>
      </div>
      <div style={{ padding: "6px 0" }}>
        {SOURCES.map(([n, host, line], i) => (
          <div
            key={n}
            className="sp-rv sp-evidence-row"
            style={{
              transitionDelay: `${i * 90}ms`,
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              padding: "15px 22px",
              borderTop: i === 0 ? "none" : "1px solid rgba(124,194,251,0.1)",
            }}
          >
            <span style={{ fontFamily: MONO, fontSize: 11, color: "rgba(200,219,250,0.4)", marginTop: 3 }}>{n}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, color: "#7cc2fb" }}>
                <IconLink size={14} />
                <span style={{ fontFamily: MONO, fontSize: 12.5, letterSpacing: "-0.005em" }}>{host}</span>
              </div>
              <p style={{ margin: "6px 0 0", fontSize: 14.5, lineHeight: 1.5, color: "#c9d8f2" }}>{line}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(124,194,251,0.14)",
          padding: "13px 22px",
          background: "rgba(255,255,255,0.03)",
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span className="sp-mono" style={{ color: "rgba(200,219,250,0.5)" }}>
          3 sources listed
        </span>
        <span className="sp-mono" style={{ color: "rgba(200,219,250,0.5)" }}>
          Open any one
        </span>
      </div>
    </div>
  );
}
