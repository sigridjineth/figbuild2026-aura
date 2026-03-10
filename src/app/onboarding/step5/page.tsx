"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function OnboardingStep5Page() {
  return (
    <div className="app-surface h-full overflow-hidden">
      <div className="floating-orb left-10 top-36 h-24 w-24 bg-[#b7a2ff]/28" />
      <div className="floating-orb right-6 top-52 h-16 w-16 bg-[#9cf1cc]/24" style={{ animationDelay: "1.1s" }} />
      <PhoneStatusBar />

      <div className="flex h-[calc(100%-42px)] flex-col px-5 pb-10 pt-3">
        <div className="flex items-center justify-between fade-up">
          <Link href="/onboarding/step4" className="pill rounded-full px-4 py-2 text-sm text-white/76">
            ← Back
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Step 5 / 5</span>
          <div className="w-16" />
        </div>
        <div className="progress-track mt-4 fade-up" style={{ animationDelay: "60ms" }}>
          <div className="progress-bar w-full" />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-6 text-center">
          <div className="fade-up" style={{ animationDelay: "120ms" }}>
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-6xl shadow-[0_24px_60px_rgba(118,92,255,0.18)]">
              🐘
            </div>
          </div>

          <div className="space-y-3 fade-up" style={{ animationDelay: "180ms" }}>
            <span className="eyebrow justify-center">Your companion is ready</span>
            <h1 className="display-font text-[2.3rem] leading-[1] text-gradient">Meet Lucky, your calm co-pilot.</h1>
            <p className="mx-auto max-w-[17rem] text-sm leading-7 text-white/68">
              Lucky notices when your body starts tightening, translates the signal into something understandable, and helps you choose the gentlest next move.
            </p>
          </div>

          <div className="panel mx-2 rounded-[30px] p-5 text-left fade-up" style={{ animationDelay: "240ms" }}>
            <p className="text-sm font-semibold text-white">What Lucky does best</p>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              <div className="rounded-[22px] bg-white/[0.03] px-4 py-4">• catches your rising stress earlier than conscious awareness</div>
              <div className="rounded-[22px] bg-white/[0.03] px-4 py-4">• matches the intervention to your energy, context, and preference</div>
              <div className="rounded-[22px] bg-white/[0.03] px-4 py-4">• stays compassionate, private, and never clinical in tone</div>
            </div>
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: "300ms" }}>
          <Link href="/home" className="cta-primary w-full">
            Enter SafeSpace
          </Link>
        </div>
      </div>
    </div>
  );
}
