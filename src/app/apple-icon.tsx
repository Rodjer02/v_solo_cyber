import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#04050A",
          border: "6px solid #22D3EE",
          fontSize: 76,
          fontWeight: 900,
          letterSpacing: -2,
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "#22D3EE" }}>V</span>
        <span style={{ color: "#F472B6" }}>S</span>
      </div>
    ),
    size,
  );
}
