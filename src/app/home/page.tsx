"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";

const signalCards = [
  { label: "Readiness", value: "82", suffix: "/100", tone: "#9cf1cc" },
  { label: "Breath rhythm", value: "+6", suffix: "%", tone: "#b7a2ff" },
  { label: "Recovery reserve", value: "14", suffix: "m", tone: "#ffc58f" },
];

const rituals = [
  {
    title: "Downshift in 90 seconds",
    copy: "Short, sensory reset for the moment your chest starts rising.",
    href: "/chat",
    accent: "rgba(153,240,199,0.16)",
  },
  {
    title: "Signal review",
    copy: "Look at today’s pattern and learn what moved your baseline.",
    href: "/dashboard",
    accent: "rgba(183,162,255,0.16)",
  },
];

const moments = [
  { time: "10:30", title: "Presentation prep", detail: "Stress drift expected 18 minutes before start" },
  { time: "14:15", title: "Meeting stack", detail: "Energy likely dips after your third call" },
  { time: "20:00", title: "Wind-down window", detail: "Best time for a 6-minute breathing ritual" },
];

export default function HomePage() {
  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />

      <div className="page-scroll safe-area-bottom space-y-5">
        <div className="fade-up flex items-center justify-between">
          <div>
            <span className="eyebrow">Good evening, Alex</span>
            <h1 className="display-font mt-3 text-[2.3rem] leading-[0.98] text-gradient">
              Your calm window is still open.
            </h1>
          </div>
          <Link href="/profile" className="pill flex h-12 w-12 items-center justify-center rounded-full text-2xl">
            🐘
          </Link>
        </div>

        <section className="panel-strong hero-gradient rounded-[32px] p-5 fade-up" style={{ animationDelay: "90ms" }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/56">Live forecast</p>
              <p className="mt-3 max-w-[14rem] text-[1.65rem] font-semibold leading-[1.1] text-white">
                We’re seeing a gentle climb — not urgent, just worth meeting softly.
              </p>
              <p className="helper-copy mt-3 max-w-[14rem]">
                Your body looks slightly more activated than yesterday, but still highly responsive to a short reset.
              </p>
            </div>
            <div className="panel rounded-[28px] px-4 py-4 text-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Peak in</p>
              <p className="metric-value mt-2 text-white">18m</p>
              <p className="mt-1 text-xs text-[#9cf1cc]">Enough time to intervene</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {signalCards.map((card) => (
              <div key={card.label} className="rounded-[24px] border border-white/8 bg-white/[0.03] px-3 py-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/42">{card.label}</p>
                <div className="mt-3 flex items-end gap-1">
                  <span className="display-font text-[1.8rem] leading-none" style={{ color: card.tone }}>
                    {card.value}
                  </span>
                  <span className="pb-1 text-xs text-white/48">{card.suffix}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3 fade-up" style={{ animationDelay: "140ms" }}>
          {rituals.map((ritual) => (
            <Link
              key={ritual.title}
              href={ritual.href}
              className="panel rounded-[28px] p-4"
              style={{ background: `linear-gradient(180deg, ${ritual.accent}, rgba(14,19,31,0.78))` }}
            >
              <p className="text-sm font-semibold text-white">{ritual.title}</p>
              <p className="mt-2 text-xs leading-6 text-white/58">{ritual.copy}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#9cf1cc]">Open →</span>
            </Link>
          ))}
        </section>

        <section className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "190ms" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Lucky’s recommendation</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">Most effective right now</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9cf1cc]/12 text-xl">✦</div>
          </div>
          <p className="mt-4 text-[1.1rem] font-medium leading-7 text-white/88">
            Take one minute to widen your exhale before the next task switch. It should lower the rise we’re seeing in your breath rhythm.
          </p>
          <div className="mt-5 flex gap-3">
            <Link href="/chat" className="cta-primary flex-1">
              Do it with Lucky
            </Link>
            <Link href="/dashboard" className="cta-secondary flex-1">
              Review pattern
            </Link>
          </div>
        </section>

        <section className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "240ms" }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Today’s pressure map</p>
              <p className="helper-copy mt-1">Moments where extra gentleness will pay off.</p>
            </div>
            <Link href="/dashboard" className="text-sm font-semibold text-[#b7a2ff]">
              View all
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {moments.map((moment) => (
              <div key={moment.time} className="flex items-start gap-3 rounded-[24px] border border-white/7 bg-white/[0.03] px-4 py-4">
                <div className="rounded-full bg-white/[0.06] px-3 py-2 text-xs font-semibold tracking-[0.14em] text-white/55">
                  {moment.time}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{moment.title}</p>
                  <p className="mt-1 text-xs leading-6 text-white/54">{moment.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
