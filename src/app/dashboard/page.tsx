"use client";

import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";

const weekly = [42, 48, 40, 64, 58, 36, 29];
const triggerRows = [
  { label: "Meeting clusters", impact: "High", note: "Back-to-back context switching is your strongest pattern." },
  { label: "Low sleep reserve", impact: "Medium", note: "Forecast sensitivity increases after nights under 6.5 hours." },
  { label: "Evening rumination", impact: "Medium", note: "Lucky sees your best recovery response in low-light routines." },
];

export default function DashboardPage() {
  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />

      <div className="page-scroll safe-area-bottom space-y-5">
        <div className="fade-up">
          <span className="eyebrow">Insights</span>
          <h1 className="display-font mt-3 text-[2.25rem] leading-[0.98] text-gradient">How your stress pattern is unfolding this week.</h1>
        </div>

        <section className="grid grid-cols-2 gap-3 fade-up" style={{ animationDelay: "80ms" }}>
          <div className="panel-strong rounded-[28px] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Average stability</p>
            <p className="metric-value mt-3 text-[#9cf1cc]">74</p>
            <p className="text-sm text-white/58">Your baseline looks steadier than last week.</p>
          </div>
          <div className="panel rounded-[28px] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">Best intervention window</p>
            <p className="metric-value mt-3 text-[#ffc58f]">11m</p>
            <p className="text-sm text-white/58">Average lead time before stress becomes harder to redirect.</p>
          </div>
        </section>

        <section className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "140ms" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Seven-day drift</p>
              <p className="helper-copy mt-1">Lower bars mean calmer baseline; spikes suggest overload build-up.</p>
            </div>
            <span className="rounded-full border border-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              weekly
            </span>
          </div>
          <div className="mt-5 flex h-40 items-end gap-3 rounded-[26px] border border-white/7 bg-white/[0.03] px-4 py-4">
            {weekly.map((height, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className="w-full rounded-full"
                  style={{
                    height: `${height * 1.45}px`,
                    background: index > 3 ? "linear-gradient(180deg, #ff8ab3, #b7a2ff)" : "linear-gradient(180deg, #9cf1cc, #b7a2ff)",
                    boxShadow: "0 10px 20px rgba(183,162,255,0.14)",
                  }}
                />
                <span className="text-[11px] uppercase tracking-[0.16em] text-white/36">{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "190ms" }}>
          <div>
            <p className="text-sm font-semibold text-white">Highest sensitivity factors</p>
            <p className="helper-copy mt-1">These are the strongest drivers behind this week’s forecast shifts.</p>
          </div>
          <div className="mt-4 space-y-3">
            {triggerRows.map((row) => (
              <div key={row.label} className="rounded-[24px] border border-white/7 bg-white/[0.03] px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white">{row.label}</p>
                  <span className="rounded-full border border-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9cf1cc]">
                    {row.impact}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-6 text-white/54">{row.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel-strong rounded-[30px] p-5 fade-up" style={{ animationDelay: "240ms" }}>
          <p className="text-sm font-semibold text-white">Interpretation from Lucky</p>
          <p className="mt-3 text-[1.06rem] leading-7 text-white/85">
            Your pattern isn’t random — it clusters around fast transitions, low recovery space, and evenings where your mind stays activated. Earlier, shorter interventions are working better than longer ones.
          </p>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
