import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same ">_" prompt mark as app/icon.svg, rendered as a PNG for iOS home screens.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
          <path d="M8 10l6 6-6 6" fill="none" stroke="#fafafa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 22h8" stroke="#fafafa" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}
