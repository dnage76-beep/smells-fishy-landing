import type { Metadata } from "next";
import { Nav, Footer } from "../components/site";
import { POLICY_SECTIONS, EFFECTIVE_DATE } from "./policy";

export const metadata: Metadata = {
  title: "Privacy Policy — Smells Phishy",
  description:
    "What Smells Phishy does with what you check: sent securely for the check only, never kept on the server, history stays on your iPhone.",
};

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#EFF2F8" }}>
      <Nav />
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(48px, 7vw, 80px) 20px 80px", color: "#0A1F45" }}>
        <h1
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 5vw, 44px)",
            margin: 0,
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ color: "#5C6979", marginTop: 8 }}>Effective {EFFECTIVE_DATE}</p>
        <div aria-hidden style={{ width: 34, height: 4, borderRadius: 999, background: "#FF6B5E", margin: "16px 0 34px" }} />
        {POLICY_SECTIONS.map((s) => (
          <section key={s.title} style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: 21,
                margin: "0 0 8px",
              }}
            >
              {s.title}
            </h2>
            <p style={{ margin: 0, color: "#3D4A5C", fontSize: 16, lineHeight: 1.65 }}>{s.body}</p>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
