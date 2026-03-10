"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

const CONDITIONS = [
  "Presentation anxiety",
  "Sleep disruption",
  "Panic history",
  "Chronic pain",
  "High workload burnout",
  "Heart sensitivity",
  "None of the above",
];

export default function OnboardingStep2Page() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCondition = (condition: string) => {
    if (condition === "None of the above") {
      setSelected((prev) => (prev.includes(condition) ? [] : [condition]));
      return;
    }

    setSelected((prev) => {
      const next = prev.filter((item) => item !== "None of the above");
      return next.includes(condition) ? next.filter((item) => item !== condition) : [...next, condition];
    });
  };

  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />
      <div className="page-scroll safe-area-bottom space-y-5">
        <div className="flex items-center justify-between fade-up">
          <Link href="/onboarding/step1" className="pill rounded-full px-4 py-2 text-sm text-white/76">
            ← Back
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Step 2 / 5</span>
        </div>
        <div className="progress-track fade-up" style={{ animationDelay: "60ms" }}>
          <div className="progress-bar w-[40%]" />
        </div>

        <div className="panel-strong rounded-[30px] p-5 fade-up" style={{ animationDelay: "100ms" }}>
          <span className="eyebrow">Context matters</span>
          <h1 className="display-font mt-3 text-[1.9rem] leading-[1.05] text-white">What patterns should we be sensitive to?</h1>
          <p className="helper-copy mt-3">We use this to tune recommendations — never to diagnose or label you.</p>
        </div>

        <div className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "140ms" }}>
          <div className="rounded-[24px] border border-[#9cf1cc]/20 bg-[#9cf1cc]/6 p-4 text-sm text-white/75">
            Lucky adapts faster when you share what typically precedes stressful spirals or overload.
          </div>
          <div className="mt-4 space-y-3">
            {CONDITIONS.map((condition) => {
              const isSelected = selected.includes(condition);

              return (
                <button
                  key={condition}
                  type="button"
                  onClick={() => toggleCondition(condition)}
                  className={`option-tile ${isSelected ? "selected" : ""}`}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border"
                    style={{
                      borderColor: isSelected ? "rgba(183,162,255,0.5)" : "rgba(255,255,255,0.1)",
                      background: isSelected ? "rgba(183,162,255,0.12)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    {isSelected ? "✓" : "◌"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{condition}</p>
                    <p className="mt-1 text-xs text-white/50">Used only to tailor early warnings and rituals.</p>
                  </div>
                </button>
              );
            })}
          </div>

          <Link href="/onboarding/step3" className="cta-primary mt-5 w-full">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
