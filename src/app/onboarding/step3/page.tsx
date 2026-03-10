"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function OnboardingStep3Page() {
  return (
    <div className="relative h-full bg-[#f8f7ff]">
      <PhoneStatusBar />

      <div className="px-6 py-4 overflow-y-auto" style={{ height: "calc(100% - 44px)" }}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center opacity-0 animate-fade-in-up stagger-1">
            <Link
              href="/onboarding/step2"
              className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-[#1a1a2e]"
            >
              &larr;
            </Link>
            <span className="flex-1 text-center text-sm font-medium text-[#64748b]">
              Step 3 of 5
            </span>
            <div className="w-10" />
          </div>

          {/* Progress bar */}
          <div className="h-2.5 bg-gray-200 rounded-full opacity-0 animate-fade-in-up stagger-1">
            <div className="w-[60%] h-full gradient-progress rounded-full" />
          </div>

          {/* Icon and title */}
          <div className="flex flex-col items-center pt-2 opacity-0 animate-fade-in-up stagger-2">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              💊
            </div>
            <h1 className="text-xl font-bold text-[#1a1a2e] mt-3">Current Medication</h1>
            <p className="text-sm text-[#64748b] mt-1">Add your current medications</p>
          </div>

          {/* Add Medication button */}
          <div className="opacity-0 animate-fade-in-up stagger-3">
            <button
              type="button"
              className="w-full border-2 border-dashed border-[#8b5cf6] rounded-2xl p-4 text-center text-[#8b5cf6] font-medium flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 4V16M4 10H16"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Add Medication
            </button>
          </div>

          {/* Example medication card */}
          <div className="bg-white rounded-2xl p-4 shadow-card opacity-0 animate-fade-in-up stagger-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-[#1a1a2e]">Sertraline 50mg</p>
                <p className="text-sm text-[#64748b] mt-1">Daily - Morning</p>
              </div>
              <button type="button" className="text-[#94a3b8] p-1 hover:text-[#64748b] transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 5H15M6 5V3.5C6 3.22386 6.22386 3 6.5 3H11.5C11.7761 3 12 3.22386 12 3.5V5M7.5 8V13M10.5 8V13M4.5 5L5.25 14.5C5.25 14.7761 5.47386 15 5.75 15H12.25C12.5261 15 12.75 14.7761 12.75 14.5L13.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Continue button */}
          <div className="opacity-0 animate-fade-in-up stagger-5">
            <Link
              href="/onboarding/step4"
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
