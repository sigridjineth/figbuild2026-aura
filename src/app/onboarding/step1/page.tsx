"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function OnboardingStep1Page() {
  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />
      <div className="page-scroll safe-area-bottom space-y-5">
        <div className="flex items-center justify-between fade-up">
          <Link href="/signup" className="pill rounded-full px-4 py-2 text-sm text-white/76">
            ← Back
          </Link>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Step 1 / 5</span>
        </div>
        <div className="progress-track fade-up" style={{ animationDelay: "60ms" }}>
          <div className="progress-bar w-[20%]" />
        </div>

        <div className="panel-strong rounded-[30px] p-5 fade-up" style={{ animationDelay: "100ms" }}>
          <span className="eyebrow">Profile calibration</span>
          <h1 className="display-font mt-3 text-[2rem] leading-[1.04] text-white">What should Lucky know about you first?</h1>
          <p className="helper-copy mt-3">We only ask for what helps SafeSpace feel personal, respectful, and more accurate from day one.</p>
        </div>

        <div className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "140ms" }}>
          <div className="space-y-4">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Preferred name</span>
              <div className="field-shell">
                <span>✦</span>
                <input className="field-input" type="text" placeholder="Alex Morgan" />
              </div>
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Date of birth</span>
              <div className="field-shell">
                <span>◴</span>
                <input className="field-input" type="date" />
              </div>
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Identity</span>
              <div className="field-shell">
                <span>◎</span>
                <select className="field-select appearance-none" defaultValue="">
                  <option value="" disabled>
                    Choose what fits best
                  </option>
                  <option>Woman</option>
                  <option>Man</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </label>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Height</span>
              <div className="field-shell">
                <span>↕</span>
                <input className="field-input" type="text" placeholder="170 cm" />
              </div>
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Weight</span>
              <div className="field-shell">
                <span>◌</span>
                <input className="field-input" type="text" placeholder="65 kg" />
              </div>
            </label>
          </div>

          <Link href="/onboarding/step2" className="cta-primary mt-5 w-full">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
