"use client";

import { useEffect, useState } from "react";

const CYCLE_MS = 8800;

type Claim = { v: "True" | "False" | "Plausible"; label: string };
type Scenario = {
  kind: "Accurate" | "Misleading" | "False";
  color: string;
  subject: string;
  preview: string;
  claims: Claim[];
  sources: string[];
};

const SCENARIOS: Scenario[] = [
  {
    kind: "False",
    color: "#ff0040",
    subject: "Fake USPS delivery text",
    preview:
      "\"USPS: Your package is held. Pay $1.99 to reschedule: usps-redeliver.co/...\"",
    claims: [
      { v: "False", label: "Domain matches USPS" },
      { v: "False", label: "Payment request is legitimate" },
      { v: "True", label: "USPS never charges for redelivery" },
    ],
    sources: ["uspis.gov", "ftc.gov", "consumer.ftc.gov", "reuters.com"],
  },
  {
    kind: "Misleading",
    color: "#FF8A3D",
    subject: "Miracle-cure Facebook post",
    preview:
      "\"Doctors hate this: one spoon of cinnamon reverses diabetes in 14 days.\"",
    claims: [
      { v: "False", label: "Cinnamon reverses diabetes" },
      { v: "Plausible", label: "Minor blood-sugar effect studied" },
      { v: "False", label: "Endorsed by the AMA" },
    ],
    sources: ["mayoclinic.org", "nih.gov", "diabetes.org", "snopes.com"],
  },
  {
    kind: "Accurate",
    color: "#22c55e",
    subject: "IRS refund notice",
    preview:
      "\"IRS: your 2025 refund of $842 has been approved. Direct deposit arrives in 3-5 business days.\"",
    claims: [
      { v: "True", label: "IRS refund timing matches policy" },
      { v: "True", label: "No payment or link requested" },
      { v: "Plausible", label: "Amount consistent with filing" },
    ],
    sources: ["irs.gov", "ftc.gov", "treasury.gov", "consumerfinance.gov"],
  },
];

function useSyncedCycle(period: number, total: number) {
  const [state, setState] = useState({ t: 0, idx: 0 });
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const cycles = Math.floor(elapsed / period);
      const t = (elapsed % period) / period;
      setState({ t, idx: cycles % total });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [period, total]);
  return state;
}

function VerdictChip({
  kind,
  color,
  shown,
}: {
  kind: Scenario["kind"];
  color: string;
  shown: boolean;
}) {
  const icon =
    kind === "Accurate" ? (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12l5 5 9-11"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : kind === "False" ? (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ) : (
      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
        <path
          d="M6 1v8M6 12v1"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: color,
        color: "#fff",
        padding: "7px 12px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: -0.1,
        opacity: shown ? 1 : 0,
        transform: shown ? "scale(1)" : "scale(0.92)",
        transition:
          "opacity 300ms ease, transform 300ms cubic-bezier(.2,.9,.3,1.3)",
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.22)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </span>
      Rating: {kind}
    </div>
  );
}

function ClaimRow({ v, label, shown }: Claim & { shown: boolean }) {
  const color =
    v === "True" ? "#22c55e" : v === "False" ? "#ff0040" : "#FF8A3D";
  const glyph =
    v === "True" ? (
      <path
        d="M4 9l3 3 7-8"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ) : v === "False" ? (
      <path
        d="M5 5l8 8M13 5l-8 8"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    ) : (
      <path
        d="M9 4v6M9 12v1"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 0",
        borderBottom: "0.5px solid rgba(60,60,67,0.12)",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(6px)",
        transition:
          "opacity 380ms ease, transform 380ms cubic-bezier(.2,.9,.3,1)",
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: color,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 18 18">
          {glyph}
        </svg>
      </span>
      <div style={{ fontSize: 13, color: "#111", lineHeight: 1.35, flex: 1 }}>
        {label}
      </div>
      <div
        style={{
          fontSize: 10.5,
          fontWeight: 600,
          fontFamily: '"JetBrains Mono", monospace',
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color,
        }}
      >
        {v}
      </div>
    </div>
  );
}

function SourceDot({ label, shown }: { label: string; shown: boolean }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "#fff",
        border: "1px solid rgba(29,78,216,0.18)",
        padding: "4px 9px",
        borderRadius: 999,
        fontSize: 11,
        color: "#1d4ed8",
        fontWeight: 500,
        opacity: shown ? 1 : 0,
        transform: shown ? "scale(1)" : "scale(0.8)",
        transition:
          "opacity 300ms ease, transform 300ms cubic-bezier(.2,.9,.3,1.3)",
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#1d4ed8",
        }}
      />
      {label}
    </div>
  );
}

export function AnimatedFactualCheck() {
  const { t, idx: scenarioIdx } = useSyncedCycle(CYCLE_MS, SCENARIOS.length);
  const s = SCENARIOS[scenarioIdx];

  const checkingSources = t >= 0.26 && t < 0.5;
  const verdict = t >= 0.5;

  let status = "Analyzing…";
  if (checkingSources) status = "Checking sources…";
  if (verdict) status = "Verdict ready";

  const analyzeProgress = Math.min(1, t / 0.5);
  const claimsShown = verdict
    ? Math.min(s.claims.length, Math.floor((t - 0.52) / 0.07) + 1)
    : 0;
  const sourcesShown = checkingSources
    ? Math.min(s.sources.length, Math.floor((t - 0.27) / 0.045) + 1)
    : verdict
      ? s.sources.length
      : 0;
  const verdictShown = t > 0.52;

  return (
    <div
      style={{
        background: "#EFEFF4",
        minHeight: "100%",
        padding: "68px 12px 40px",
        fontFamily: "-apple-system, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          background: "#1d4ed8",
          borderRadius: 14,
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2.2" />
            <path
              d="M16.5 16.5L21 21"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div style={{ lineHeight: 1.15, flex: 1 }}>
          <div
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: -0.3,
            }}
          >
            Factual Check
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.82)",
              fontSize: 11,
              marginTop: 2,
            }}
          >
            AI analysis grounded with Google Search
          </div>
        </div>
        <div
          style={{
            color: "#fff",
            fontSize: 13,
            fontWeight: 500,
            background: "rgba(255,255,255,0.16)",
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          Done
        </div>
      </div>

      <div
        style={{
          marginTop: 10,
          background: "#fff",
          borderRadius: 14,
          padding: "12px 14px",
        }}
      >
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 600,
            fontFamily: '"JetBrains Mono", monospace',
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#8a8a8e",
            marginBottom: 6,
          }}
        >
          Input · Screenshot
        </div>
        <div style={{ fontSize: 13, color: "#111", lineHeight: 1.45 }}>
          {s.preview}
        </div>
        <div style={{ fontSize: 12, color: "#6b6b6b", marginTop: 6 }}>
          {s.subject}
        </div>
      </div>

      <div
        style={{
          marginTop: 10,
          background: "#fff",
          borderRadius: 14,
          padding: "12px 14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: verdict ? s.color : "#1d4ed8",
              boxShadow: `0 0 0 0 ${verdict ? s.color : "#1d4ed8"}66`,
              animation: verdict ? "none" : "pulseDot 1.2s infinite",
            }}
          />
          <div style={{ color: "#111", fontSize: 13, fontWeight: 600 }}>
            {status}
          </div>
          {verdict && (
            <div style={{ marginLeft: "auto" }}>
              <VerdictChip kind={s.kind} color={s.color} shown={verdictShown} />
            </div>
          )}
        </div>
        <div
          style={{
            height: 3,
            background: "rgba(29,78,216,0.12)",
            borderRadius: 999,
            overflow: "hidden",
            marginTop: 8,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${analyzeProgress * 100}%`,
              background: "#1d4ed8",
              transition: "width 120ms linear",
            }}
          />
        </div>
        <div
          style={{
            marginTop: 12,
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            minHeight: 28,
          }}
        >
          {s.sources.map((src, i) => (
            <SourceDot
              key={src + scenarioIdx}
              label={src}
              shown={i < sourcesShown}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: 10,
          background: "#fff",
          borderRadius: 14,
          padding: "4px 14px 8px",
          opacity: verdict ? 1 : 0.35,
          transition: "opacity 320ms ease",
        }}
      >
        <div
          style={{
            paddingTop: 10,
            paddingBottom: 4,
            fontSize: 10.5,
            fontWeight: 600,
            fontFamily: '"JetBrains Mono", monospace',
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#8a8a8e",
          }}
        >
          Sub-claims
        </div>
        {s.claims.map((c, i) => (
          <ClaimRow
            key={i + "-" + scenarioIdx}
            v={c.v}
            label={c.label}
            shown={i < claimsShown}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 14,
          paddingLeft: 2,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#1d4ed8">
          <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
        </svg>
        <span style={{ color: "#1d4ed8", fontSize: 11.5, fontWeight: 500 }}>
          Analyzed by SmellsFishy
        </span>
      </div>
      <div
        style={{
          color: "#8a8a8e",
          fontSize: 10.5,
          marginTop: 4,
          paddingLeft: 2,
        }}
      >
        AI-generated / may contain errors. Verify facts independently.
      </div>
    </div>
  );
}
