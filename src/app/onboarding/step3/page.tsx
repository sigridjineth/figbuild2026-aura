"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

const medicationOptions = [
  { name: "Sertraline", detail: "50mg • morning" },
  { name: "Melatonin", detail: "3mg • evenings" },
];

export default function OnboardingStep3Page() {
  const [noneSelected, setNoneSelected] = useState(false);

  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />
      <div className="page-scroll safe-area-bottom space-y-5">
        <div className="flex items-center justify-between fade-up">
          <Link href="/onboarding/step2" className="pill rounded-full px-4 py-2 text-sm text-white/76">
            ← Back
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Step 3 / 5</span>
        </div>
        <div className="progress-track fade-up" style={{ animationDelay: "60ms" }}>
          <div className="progress-bar w-[60%]" />
        </div>

        <div className="panel-strong rounded-[30px] p-5 fade-up" style={{ animationDelay: "100ms" }}>
          <span className="eyebrow">Support layers</span>
          <h1 className="display-font mt-3 text-[1.9rem] leading-[1.05] text-white">Any medications or rhythms we should respect?</h1>
          <p className="helper-copy mt-3">You can skip this. SafeSpace uses it only to avoid tone-deaf timing and suggestions.</p>
        </div>

        <div className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "140ms" }}>
          <button className="option-tile">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-xl">＋</div>
            <div>
              <p className="text-sm font-semibold text-white">Add medication</p>
              <p className="mt-1 text-xs text-white/52">Use reminders that harmonize with your care routine.</p>
            </div>
          </button>

          <div className="mt-4 space-y-3">
            {medicationOptions.map((option) => (
              <div key={option.name} className="option-tile">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b7a2ff]/12 text-lg">✦</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">{option.name}</p>
                  <p className="mt-1 text-xs text-white/52">{option.detail}</p>
                </div>
                <button className="text-sm font-semibold text-[#9cf1cc]">Edit</button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setNoneSelected((prev) => !prev)}
            className={`option-tile mt-4 ${noneSelected ? "selected" : ""}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-lg">○</div>
            <div>
              <p className="text-sm font-semibold text-white">No current medication</p>
              <p className="mt-1 text-xs text-white/52">We’ll keep your routines simple and easy to adjust later.</p>
            </div>
          </button>

          <Link href="/onboarding/step4" className="cta-primary mt-5 w-full">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
