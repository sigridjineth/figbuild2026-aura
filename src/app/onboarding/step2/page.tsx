"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

const CONDITIONS = [
  "Anxiety",
  "Depression",
  "Insomnia",
  "PTSD",
  "Chronic Pain",
  "Heart Condition",
  "None of the above",
];

export default function OnboardingStep2Page() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCondition = (condition: string) => {
    if (condition === "None of the above") {
      setSelected((prev) =>
        prev.includes(condition) ? [] : ["None of the above"]
      );
    } else {
      setSelected((prev) => {
        const without = prev.filter((c) => c !== "None of the above");
        return without.includes(condition)
          ? without.filter((c) => c !== condition)
          : [...without, condition];
      });
    }
  };

  return (
    <div className="relative h-full bg-[#f8f7ff]">
      <PhoneStatusBar />

      <div className="px-6 py-4 overflow-y-auto" style={{ height: "calc(100% - 44px)" }}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center opacity-0 animate-fade-in-up stagger-1">
            <Link
              href="/onboarding/step1"
              className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-[#1a1a2e]"
            >
              &larr;
            </Link>
            <span className="flex-1 text-center text-sm font-medium text-[#64748b]">
              Step 2 of 5
            </span>
            <div className="w-10" />
          </div>

          {/* Progress bar */}
          <div className="h-2.5 bg-gray-200 rounded-full opacity-0 animate-fade-in-up stagger-1">
            <div className="w-[40%] h-full gradient-progress rounded-full" />
          </div>

          {/* Icon and title */}
          <div className="flex flex-col items-center pt-2 opacity-0 animate-fade-in-up stagger-2">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
              🏥
            </div>
            <h1 className="text-xl font-bold text-[#1a1a2e] mt-3">Medical Background</h1>
            <p className="text-sm text-[#64748b] mt-1">Help us understand your health</p>
          </div>

          {/* Info box */}
          <div className="bg-[#eff6ff] rounded-2xl p-4 border-l-4 border-[#1447e6] shadow-card opacity-0 animate-fade-in-up stagger-3">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-base flex-shrink-0">
                💡
              </div>
              <div>
                <p className="font-semibold text-[#1c398e] text-sm">Why we ask</p>
                <p className="text-sm text-[#1447e6] mt-1">
                  Understanding your medical background helps us personalize stress predictions and recommendations for you.
                </p>
              </div>
            </div>
          </div>

          {/* Condition checkboxes */}
          <div className="space-y-3 opacity-0 animate-fade-in-up stagger-4">
            {CONDITIONS.map((condition) => {
              const isChecked = selected.includes(condition);
              return (
                <button
                  key={condition}
                  type="button"
                  onClick={() => toggleCondition(condition)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all ${
                    isChecked
                      ? "bg-[#f5f3ff] border-2 border-[#8b5cf6]"
                      : "bg-white border border-gray-200 shadow-sm"
                  }`}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center rounded-md"
                    style={{
                      width: 22,
                      height: 22,
                      border: isChecked ? "none" : "2px solid #d1d5db",
                      background: isChecked
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)"
                        : "white",
                    }}
                  >
                    {isChecked && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm font-medium text-[#1a1a2e]">{condition}</span>
                </button>
              );
            })}
          </div>

          {/* Continue button */}
          <div className="opacity-0 animate-fade-in-up stagger-5">
            <Link
              href="/onboarding/step3"
              className="block w-full py-3.5 bg-[#1a1a2e] text-white rounded-2xl font-semibold text-base text-center shadow-lg"
            >
              Continue
            </Link>
          </div>

          {/* Bottom spacer */}
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}
