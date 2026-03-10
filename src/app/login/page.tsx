"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function LoginPage() {
  return (
    <div className="app-surface h-full overflow-hidden">
      <div className="floating-orb right-[-20px] top-16 h-24 w-24 bg-[#ff8ab3]/25" />
      <div className="floating-orb left-8 top-32 h-20 w-20 bg-[#9cf1cc]/22" style={{ animationDelay: "1.2s" }} />
      <PhoneStatusBar />

      <div className="page-scroll safe-area-bottom space-y-6">
        <div className="fade-up space-y-3">
          <span className="eyebrow">Return to steady</span>
          <div className="panel-strong rounded-[30px] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/56">Welcome back to SafeSpace</p>
            <h1 className="display-font mt-3 text-[2rem] leading-[1.03] text-gradient">
              Pick up where your nervous system left off.
            </h1>
            <p className="helper-copy mt-3 max-w-[15rem]">
              Your insights, regulation history, and quiet rituals are waiting exactly where you left them.
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/72">
              <span className="text-lg">🫧</span>
              <span>Last check-in: calm drift trending earlier than yesterday.</span>
            </div>
          </div>
        </div>

        <div className="tab-rail fade-up" style={{ animationDelay: "80ms" }}>
          <Link href="/signup" className="tab-idle">
            Create account
          </Link>
          <div className="tab-active">Log in</div>
        </div>

        <div className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "120ms" }}>
          <div className="space-y-3.5">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Email</span>
              <div className="field-shell">
                <span className="text-lg">⌁</span>
                <input className="field-input" type="email" placeholder="name@email.com" />
              </div>
            </label>
            <label className="block space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/82">Password</span>
                <Link href="#" className="text-sm font-semibold text-[#9cf1cc]">
                  Reset
                </Link>
              </div>
              <div className="field-shell">
                <span className="text-lg">◌</span>
                <input className="field-input" type="password" placeholder="Enter your password" />
              </div>
            </label>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/70">
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">Safety mode</p>
              <p className="mt-2 font-semibold text-white">Data stays private</p>
            </div>
            <div className="rounded-[22px] border border-white/8 bg-white/[0.03] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-white/40">Companion</p>
              <p className="mt-2 font-semibold text-white">Lucky remembers your tone</p>
            </div>
          </div>

          <Link href="/home" className="cta-primary mt-5 w-full">
            Enter SafeSpace
          </Link>
        </div>

        <div className="fade-up space-y-3" style={{ animationDelay: "180ms" }}>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/40">
            <div className="h-px flex-1 bg-white/8" />
            other options
            <div className="h-px flex-1 bg-white/8" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="cta-secondary">Google</button>
            <button className="cta-secondary">Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
}
