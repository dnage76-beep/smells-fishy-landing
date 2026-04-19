"use client";

import type { ReactNode } from "react";

export function IPhone15Pro({
  children,
  width = 380,
  actionButtonRed = false,
  actionButtonPressed = false,
}: {
  children: ReactNode;
  width?: number;
  actionButtonRed?: boolean;
  actionButtonPressed?: boolean;
}) {
  const height = Math.round(width * (874 / 402));
  const scale = width / 380;
  const actionOffset = actionButtonPressed ? -1 : 0;
  const actionFaceBg = actionButtonRed
    ? "linear-gradient(180deg, #ff8aa0 0%, #d6445e 45%, #7a2130 100%)"
    : "linear-gradient(180deg, #3a3a3c 0%, #1a1a1c 45%, #2b2b2d 100%)";
  const actionGlow = 14 + (actionButtonPressed ? 10 : 0);
  const actionShadow = actionButtonRed
    ? `0 0 ${actionGlow}px rgba(214,68,94,0.55), inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.6)`
    : "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.5)";

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        borderRadius: 54,
        padding: 5,
        background:
          "linear-gradient(135deg, #4a4a4e 0%, #1c1c1e 40%, #0a0a0a 60%, #2b2b2d 100%)",
        boxShadow:
          "0 60px 90px -20px rgba(0,0,0,0.7), 0 30px 50px -15px rgba(29,78,216,0.18), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 3,
          borderRadius: 51,
          background: "#000",
        }}
      />
      {/* Action button - flat side button with left offset */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: -3 + actionOffset,
          top: 108,
          width: 5,
          height: 34,
          borderRadius: "2px 0 0 2px",
          background: actionFaceBg,
          boxShadow: actionShadow,
          transition:
            "left 420ms cubic-bezier(.4,.1,.3,1), background 700ms ease, box-shadow 700ms ease",
          zIndex: 4,
        }}
      />
      {/* Volume buttons */}
      <div
        style={{
          position: "absolute",
          left: -3,
          top: 160,
          width: 5,
          height: 54,
          borderRadius: "2px 0 0 2px",
          background:
            "linear-gradient(180deg, #3a3a3c 0%, #1a1a1c 45%, #2b2b2d 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 3px rgba(0,0,0,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: 224,
          width: 5,
          height: 54,
          borderRadius: "2px 0 0 2px",
          background:
            "linear-gradient(180deg, #3a3a3c 0%, #1a1a1c 45%, #2b2b2d 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 3px rgba(0,0,0,0.5)",
        }}
      />
      {/* Power button */}
      <div
        style={{
          position: "absolute",
          right: -3,
          top: 170,
          width: 5,
          height: 86,
          borderRadius: "0 2px 2px 0",
          background:
            "linear-gradient(180deg, #3a3a3c 0%, #1a1a1c 45%, #2b2b2d 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 3px rgba(0,0,0,0.5)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 7,
          borderRadius: 47,
          background: "#EFEFF4",
          overflow: "hidden",
          fontFamily: "-apple-system, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 54 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${28 * scale}px`,
            zIndex: 20,
          }}
        >
          <span
            style={{
              fontFamily: "-apple-system, system-ui",
              fontWeight: 600,
              fontSize: 16 * scale,
              color: "#000",
            }}
          >
            9:41
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 6 * scale }}>
            <svg width={18 * scale} height={11 * scale} viewBox="0 0 18 11">
              <rect x="0" y="7" width="3" height="4" rx="0.6" fill="#000" />
              <rect x="4.5" y="5" width="3" height="6" rx="0.6" fill="#000" />
              <rect x="9" y="2.5" width="3" height="8.5" rx="0.6" fill="#000" />
              <rect x="13.5" y="0" width="3" height="11" rx="0.6" fill="#000" />
            </svg>
            <span
              style={{
                fontSize: 11 * scale,
                fontWeight: 600,
                color: "#000",
                letterSpacing: -0.3,
              }}
            >
              5G
            </span>
            <svg width={26 * scale} height={12 * scale} viewBox="0 0 26 12">
              <rect
                x="0.5"
                y="0.5"
                width="22"
                height="11"
                rx="3"
                stroke="#000"
                strokeOpacity="0.35"
                fill="none"
              />
              <rect x="2" y="2" width="19" height="8" rx="1.6" fill="#000" />
              <rect
                x="23.5"
                y="4"
                width="2"
                height="4"
                rx="0.8"
                fill="#000"
                opacity="0.35"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 11 * scale,
            left: "50%",
            transform: "translateX(-50%)",
            width: 118 * scale,
            height: 34 * scale,
            borderRadius: 22 * scale,
            background: "#000",
            zIndex: 50,
          }}
        />
        <div style={{ position: "absolute", inset: 0 }}>{children}</div>
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 130,
            height: 5,
            borderRadius: 100,
            background: "rgba(0,0,0,0.3)",
            zIndex: 60,
          }}
        />
      </div>
    </div>
  );
}

export function HeroPhoneStage({ children }: { children: ReactNode }) {
  return (
    <div
      className="phone-stage"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 0",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 620,
          height: 620,
          background:
            "radial-gradient(circle, rgba(29,78,216,0.28), rgba(29,78,216,0.06) 45%, transparent 70%)",
          filter: "blur(30px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          animation: "glowPulse 5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(255,138,61,0.14), transparent 70%)",
          filter: "blur(30px)",
          bottom: 10,
          right: 40,
          pointerEvents: "none",
        }}
      />
      <div
        className="phone-tilt"
        style={{
          transform: "perspective(1600px) rotateY(-7deg) rotateX(2deg)",
          transformOrigin: "center",
          transition:
            "transform 500ms cubic-bezier(.2,.9,.3,1), filter 500ms ease",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
