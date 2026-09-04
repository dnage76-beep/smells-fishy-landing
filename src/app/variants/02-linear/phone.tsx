const INK = "#0a1f45";
const INK2 = "#5c6979";
const CORAL = "#ff6b5e";
const BLUE = "#1c5cf7";

/**
 * The product surface. Linear shows real app UI inside a bordered frame and
 * lets it run off the bottom edge of the container; this is that, with the
 * app's own light interface kept honest rather than restyled to match the
 * page.
 */
export function Phone() {
  return (
    <div className="l-phone">
      <div className="l-screen">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "11px 20px 2px",
            fontSize: 11,
            fontWeight: 600,
            color: INK,
          }}
        >
          <span>9:41</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }} aria-hidden>
            <svg width="14" height="9" viewBox="0 0 16 10" fill={INK}>
              <rect x="0" y="6" width="2.6" height="4" rx="0.8" />
              <rect x="4.2" y="4" width="2.6" height="6" rx="0.8" />
              <rect x="8.4" y="2" width="2.6" height="8" rx="0.8" />
              <rect x="12.6" y="0" width="2.6" height="10" rx="0.8" />
            </svg>
            <svg width="19" height="10" viewBox="0 0 22 11" aria-hidden>
              <rect x="0.5" y="0.5" width="17" height="10" rx="3" fill="none" stroke={INK} strokeOpacity="0.4" />
              <rect x="2" y="2" width="12" height="7" rx="1.6" fill={INK} />
              <path d="M19.5 3.5v4a2.4 2.4 0 0 0 0-4z" fill={INK} fillOpacity="0.4" />
            </svg>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "9px 16px 12px",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 650, color: INK, letterSpacing: "-0.01em" }}>Result</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 10.5,
              fontWeight: 600,
              color: "#a2382e",
              background: "#ffe6e2",
              borderRadius: 5,
              padding: "3px 7px",
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: CORAL }} />
            flagged
          </span>
        </div>

        <div style={{ padding: "0 12px 16px" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "13px 14px 14px",
              boxShadow: "0 0 0 1px rgba(10,31,69,0.06)",
            }}
          >
            <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
              <span style={{ width: 3, alignSelf: "stretch", borderRadius: 2, background: CORAL, flexShrink: 0 }} />
              <span>
                <span style={{ display: "block", fontSize: 15, fontWeight: 650, color: INK, letterSpacing: "-0.012em", lineHeight: 1.2 }}>
                  Showed warning signs
                </span>
                <span style={{ display: "block", fontSize: 11.5, color: INK2, marginTop: 3, lineHeight: 1.4 }}>
                  Worth a second look before you reply.
                </span>
              </span>
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: 12, padding: "12px 14px 13px", marginTop: 8, boxShadow: "0 0 0 1px rgba(10,31,69,0.06)" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: INK2 }}>
              What stood out
            </div>
            {["A delivery you never ordered", "A link instead of the carrier's app", "A deadline measured in hours"].map(
              (t, i) => (
                <div key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: i === 0 ? 9 : 7 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: CORAL, marginTop: 5, flexShrink: 0 }} />
                  <span style={{ fontSize: 11.5, lineHeight: 1.35, color: INK }}>{t}</span>
                </div>
              ),
            )}
          </div>

          <div style={{ background: "#fff", borderRadius: 12, padding: "12px 14px 13px", marginTop: 8, boxShadow: "0 0 0 1px rgba(10,31,69,0.06)" }}>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: INK2 }}>
              What to do next
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 9 }}>
              <span
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 4,
                  background: BLUE,
                  color: "#fff",
                  fontSize: 9.5,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                1
              </span>
              <span style={{ fontSize: 11.5, lineHeight: 1.35, color: INK }}>
                Open the carrier&apos;s own app and check the tracking there.
              </span>
            </div>
          </div>

          <div
            style={{
              marginTop: 8,
              borderRadius: 10,
              padding: "10px 13px",
              background: BLUE,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "#fff", letterSpacing: "-0.008em" }}>Deep Dive</span>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M5 2.5 9.5 7 5 11.5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
