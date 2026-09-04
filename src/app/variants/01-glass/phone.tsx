const INK = "#0a1f45";
const INK2 = "#5c6979";
const CORAL = "#ff6b5e";
const BLUE = "#1c5cf7";
const display = "var(--font-display), ui-rounded, system-ui, sans-serif";

/**
 * The device. Bezel is glass; the screen is a solid content surface, because
 * that is the rule the construction is built on: glass over content, never
 * glass as content.
 */
export function Phone() {
  return (
    <div style={{ position: "relative" }}>
      <div className="g-phone-ground" />
      <div className="g-phone">
        <div className="g-screen">
          {/* status bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px 24px 4px",
              fontSize: 12,
              fontWeight: 600,
              color: INK,
              letterSpacing: "0.01em",
            }}
          >
            <span>9:41</span>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }} aria-hidden>
              <svg width="16" height="10" viewBox="0 0 16 10" fill={INK}>
                <rect x="0" y="6" width="2.6" height="4" rx="0.8" />
                <rect x="4.2" y="4" width="2.6" height="6" rx="0.8" />
                <rect x="8.4" y="2" width="2.6" height="8" rx="0.8" />
                <rect x="12.6" y="0" width="2.6" height="10" rx="0.8" />
              </svg>
              <svg width="22" height="11" viewBox="0 0 22 11" aria-hidden>
                <rect x="0.5" y="0.5" width="17" height="10" rx="3" fill="none" stroke={INK} strokeOpacity="0.4" />
                <rect x="2" y="2" width="12" height="7" rx="1.6" fill={INK} />
                <path d="M19.5 3.5v4a2.4 2.4 0 0 0 0-4z" fill={INK} fillOpacity="0.4" />
              </svg>
            </span>
          </div>

          {/* nav bar */}
          <div style={{ padding: "10px 20px 14px", textAlign: "center", position: "relative" }}>
            <div style={{ fontFamily: display, fontWeight: 600, fontSize: 15, color: INK }}>Result</div>
            <div
              style={{
                position: "absolute",
                right: 20,
                top: 9,
                fontSize: 11.5,
                fontWeight: 600,
                color: INK2,
                background: "rgba(10,31,69,0.06)",
                borderRadius: 999,
                padding: "3px 9px",
              }}
            >
              About 8s
            </div>
          </div>

          <div style={{ padding: "0 14px 18px" }}>
            {/* verdict */}
            <div
              style={{
                borderRadius: 20,
                padding: "16px 16px 17px",
                background: "linear-gradient(160deg, #fff2f0 0%, #ffffff 78%)",
                boxShadow: "0 1px 0 0 rgba(255,107,94,0.28) inset, 0 0 0 1px rgba(255,107,94,0.2)",
              }}
            >
              <div style={{ display: "flex", gap: 11, alignItems: "center" }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 11,
                    background: `linear-gradient(160deg, #ff8b7f, ${CORAL})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 4px 10px -2px rgba(255,107,94,0.6)",
                  }}
                  aria-hidden
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="#fff">
                    <path d="M8 1.6 15 14H1L8 1.6Z" fillOpacity="0" />
                    <rect x="7" y="4.6" width="2" height="5.2" rx="1" />
                    <rect x="7" y="11" width="2" height="2" rx="1" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: display, fontWeight: 600, fontSize: 17.5, color: INK, lineHeight: 1.1 }}>
                    Showed warning signs
                  </div>
                  <div style={{ fontSize: 11.5, color: INK2, marginTop: 3 }}>Worth a second look before you reply.</div>
                </div>
              </div>
            </div>

            {/* what stood out */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "14px 16px 15px", marginTop: 10 }}>
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                  color: INK2,
                }}
              >
                What stood out
              </div>
              {["A delivery you never ordered", "A link instead of the carrier's app", "A deadline measured in hours"].map(
                (t, i) => (
                  <div key={t} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginTop: i === 0 ? 11 : 8 }}>
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: CORAL,
                        marginTop: 5.5,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 12, lineHeight: 1.4, color: INK }}>{t}</span>
                  </div>
                ),
              )}
            </div>

            {/* next step */}
            <div style={{ background: "#fff", borderRadius: 20, padding: "14px 16px 15px", marginTop: 10 }}>
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                  color: INK2,
                }}
              >
                What to do next
              </div>
              <div style={{ display: "flex", gap: 9, alignItems: "flex-start", marginTop: 11 }}>
                <span
                  style={{
                    width: 17,
                    height: 17,
                    borderRadius: "50%",
                    background: BLUE,
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  1
                </span>
                <span style={{ fontSize: 12, lineHeight: 1.4, color: INK }}>
                  Open the carrier&apos;s own app and check the tracking there.
                </span>
              </div>
            </div>

            {/* deep dive affordance */}
            <div
              style={{
                marginTop: 10,
                borderRadius: 18,
                padding: "12px 15px",
                background: "linear-gradient(150deg, #0d266b, #1c5cf7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 8px 18px -8px rgba(28,92,247,0.7)",
              }}
            >
              <span style={{ fontFamily: display, fontWeight: 600, fontSize: 13.5, color: "#f5f0e1" }}>
                Deep Dive
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M5 2.5 9.5 7 5 11.5" stroke="#f5f0e1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* home indicator */}
          <div
            aria-hidden
            style={{
              height: 5,
              width: 118,
              borderRadius: 999,
              background: "rgba(10,31,69,0.28)",
              margin: "0 auto 9px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
