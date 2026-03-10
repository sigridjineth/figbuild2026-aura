// SafeSpace Design System — moonlit sanctuary edition

export const colors = {
  background: "#090d16",
  surface: "rgba(14, 19, 31, 0.78)",
  surfaceStrong: "rgba(20, 27, 44, 0.94)",
  border: "rgba(255,255,255,0.08)",
  textPrimary: "#f6f7fb",
  textSecondary: "#c3c9dd",
  textMuted: "#8690ac",
  mint: "#99f0c7",
  lilac: "#b7a2ff",
  peach: "#ffc58f",
  rose: "#ff8ab3",
} as const;

export const typography = {
  display: "var(--font-display)",
  body: "var(--font-body)",
} as const;

export const shadows = {
  panel: "0 18px 40px rgba(0,0,0,0.24)",
  glow: "0 24px 50px rgba(118, 92, 255, 0.16)",
  button: "0 16px 30px rgba(153, 240, 199, 0.2)",
} as const;

export type LuckyExpression = "smiling" | "sad" | "crying" | "mad";
