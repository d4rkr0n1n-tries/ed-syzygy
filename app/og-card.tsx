import { ImageResponse } from "next/og";

export const ogAlt = "Education for All — turn your engineering skills into education for everyone.";
export const ogSize = { width: 1200, height: 630 };

// Shared 1200×630 social card used by both opengraph-image and twitter-image.
export function renderOgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#a3a3a3" }}>
          <svg width="44" height="44" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#fafafa" />
            <path d="M8 10l6 6-6 6" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 22h8" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span>$ git commit -m &quot;teach: one hour, one student&quot;</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, color: "#6b6b6b", textDecoration: "line-through", marginBottom: 12 }}>
            Your work goes unnoticed.
          </div>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
            Education for All.
          </div>
        </div>

        <div style={{ fontSize: 30, color: "#a3a3a3", maxWidth: 940, lineHeight: 1.35 }}>
          For the developers and security engineers whose best work ships quietly.
        </div>
      </div>
    ),
    ogSize,
  );
}
