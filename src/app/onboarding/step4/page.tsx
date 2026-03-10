"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function OnboardingStep4Page() {
  const [permissions, setPermissions] = useState({
    health: true,
    notifications: true,
    location: false,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const rows: { key: keyof typeof permissions; title: string; detail: string; emoji: string }[] = [
    { key: "health", title: "Health data", detail: "Use biometrics to forecast nervous-system drift.", emoji: "♡" },
    { key: "notifications", title: "Gentle nudges", detail: "Offer calm interventions before you feel overloaded.", emoji: "◔" },
    { key: "location", title: "Context signals", detail: "Adjust suggestions based on environment and routine.", emoji: "⌂" },
  ];

  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />
      <div className="page-scroll safe-area-bottom space-y-5">
        <div className="flex items-center justify-between fade-up">
          <Link href="/onboarding/step3" className="pill rounded-full px-4 py-2 text-sm text-white/76">
            ← Back
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Step 4 / 5</span>
        </div>
        <div className="progress-track fade-up" style={{ animationDelay: "60ms" }}>
          <div className="progress-bar w-[80%]" />
        </div>

        <div className="panel-strong rounded-[30px] p-5 fade-up" style={{ animationDelay: "100ms" }}>
          <span className="eyebrow">Trust settings</span>
          <h1 className="display-font mt-3 text-[1.9rem] leading-[1.05] text-white">Help SafeSpace feel useful — without crossing your line.</h1>
          <p className="helper-copy mt-3">Everything below can be changed later. Privacy is always visible, never hidden in the fine print.</p>
        </div>

        <div className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "140ms" }}>
          <div className="rounded-[24px] border border-[#9cf1cc]/20 bg-[#9cf1cc]/6 p-4 text-sm text-white/74">
            Your data stays encrypted, purpose-limited, and under your control. SafeSpace is designed to reduce dependence, not create it.
          </div>

          <div className="mt-4 space-y-3">
            {rows.map((row) => {
              const enabled = permissions[row.key];

              return (
                <button key={row.key} type="button" onClick={() => togglePermission(row.key)} className="option-tile justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] text-xl">{row.emoji}</div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-white">{row.title}</p>
                      <p className="mt-1 text-xs text-white/52">{row.detail}</p>
                    </div>
                  </div>
                  <div
                    className="relative h-8 w-14 rounded-full transition-colors"
                    style={{
                      background: enabled ? "linear-gradient(135deg, #9cf1cc, #b7a2ff)" : "rgba(255,255,255,0.09)",
                    }}
                  >
                    <div
                      className="absolute top-1 h-6 w-6 rounded-full bg-[#081018] transition-transform"
                      style={{ transform: enabled ? "translateX(32px)" : "translateX(4px)" }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <Link href="/onboarding/step5" className="cta-primary mt-5 w-full">
            Final step
          </Link>
        </div>
      </div>
    </div>
  );
}
