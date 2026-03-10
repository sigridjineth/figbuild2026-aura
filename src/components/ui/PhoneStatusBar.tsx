"use client";

export default function PhoneStatusBar({ light = true }: { light?: boolean }) {
  const color = light ? "rgba(246, 247, 251, 0.92)" : "#081018";
  const muted = light ? "rgba(246, 247, 251, 0.72)" : "rgba(8, 16, 24, 0.72)";

  return (
    <div
      className="safe-area-top flex items-center justify-between px-6 pb-2 pt-4 text-[11px] font-semibold tracking-[0.22em] uppercase"
      style={{ color }}
    >
      <span>9:41</span>
      <div className="flex items-center gap-2">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <rect x="0.5" y="6.5" width="2.5" height="5" rx="0.8" fill={muted} />
          <rect x="4.5" y="4.5" width="2.5" height="7" rx="0.8" fill={muted} />
          <rect x="8.5" y="2.5" width="2.5" height="9" rx="0.8" fill={muted} />
          <rect x="12.5" y="0.5" width="2.5" height="11" rx="0.8" fill={color} />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M2 4.5C5.4 1.3 10.6 1.3 14 4.5" stroke={muted} strokeWidth="1.4" strokeLinecap="round" />
          <path d="M4.4 7C6.45 5.15 9.55 5.15 11.6 7" stroke={muted} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="8" cy="10" r="1.25" fill={color} />
        </svg>
        <div className="flex items-center gap-1 rounded-full border px-1.5 py-1" style={{ borderColor: muted }}>
          <div className="h-1.5 w-4 rounded-full" style={{ background: "linear-gradient(90deg, #9cf1cc, #c1b1ff)" }} />
          <div className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
        </div>
      </div>
    </div>
  );
}
