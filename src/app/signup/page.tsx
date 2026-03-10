"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function SignupPage() {
  return (
    <div className="app-surface h-full overflow-hidden">
      <div className="floating-orb left-[-28px] top-20 h-24 w-24 bg-[#7f6bff]/40" />
      <div className="floating-orb right-6 top-28 h-16 w-16 bg-[#9cf1cc]/35" style={{ animationDelay: "1.4s" }} />
      <PhoneStatusBar />

      <div className="page-scroll safe-area-bottom relative space-y-6">
        <div className="space-y-3 fade-up">
          <span className="eyebrow">SafeSpace access</span>
          <div className="panel-strong hero-gradient rounded-[30px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Begin softly</p>
                <h1 className="display-font mt-3 text-[2rem] leading-[1.02] text-gradient">
                  Build your calm before the spiral arrives.
                </h1>
                <p className="helper-copy mt-3 max-w-[15rem]">
                  SafeSpace helps you catch stress signals early, then turns them into quieter choices, steadier days, and rituals that actually stick.
                </p>
              </div>
              <div className="panel rounded-[26px] px-4 py-4 text-center">
                <div className="text-4xl">🐘</div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9cf1cc]">Lucky</p>
                <p className="mt-1 text-[11px] text-white/60">Your companion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-rail fade-up" style={{ animationDelay: "80ms" }}>
          <div className="tab-active">Create account</div>
          <Link href="/login" className="tab-idle">
            Log in
          </Link>
        </div>

        <div className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "120ms" }}>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Set up your SafeSpace</p>
              <p className="helper-copy mt-1">This takes less than a minute.</p>
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
              private by default
            </div>
          </div>

          <div className="space-y-3.5">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Full name</span>
              <div className="field-shell">
                <span className="text-lg">✦</span>
                <input className="field-input" type="text" placeholder="How should we address you?" />
              </div>
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Email</span>
              <div className="field-shell">
                <span className="text-lg">⌁</span>
                <input className="field-input" type="email" placeholder="name@email.com" />
              </div>
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Password</span>
              <div className="field-shell">
                <span className="text-lg">◌</span>
                <input className="field-input" type="password" placeholder="Choose something memorable" />
              </div>
            </label>
          </div>

          <div className="mt-5 rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
            <p className="text-sm font-semibold text-white">Your first week includes</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/74">
              <div className="rounded-[20px] bg-white/[0.03] px-3 py-3">• early stress forecast</div>
              <div className="rounded-[20px] bg-white/[0.03] px-3 py-3">• calm rituals matched to context</div>
              <div className="rounded-[20px] bg-white/[0.03] px-3 py-3">• private companion chat</div>
              <div className="rounded-[20px] bg-white/[0.03] px-3 py-3">• gentle onboarding with Lucky</div>
            </div>
          </div>

          <Link href="/onboarding/step1" className="cta-primary mt-5 w-full">
            Continue into onboarding
          </Link>
        </div>

        <div className="space-y-3 fade-up" style={{ animationDelay: "180ms" }}>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/40">
            <div className="h-px flex-1 bg-white/8" />
            or continue with
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="cta-secondary">Google</button>
            <button className="cta-secondary">Apple</button>
          </div>
          <p className="text-center text-sm text-white/56">
            Already with us?{" "}
            <Link href="/login" className="font-semibold text-[#9cf1cc]">
              Enter SafeSpace
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
