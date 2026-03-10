"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function OnboardingStep1Page() {
  return (
    <div className="relative h-full bg-[#f8f7ff]">
      <PhoneStatusBar />

      <div className="px-6 py-4 overflow-y-auto" style={{ height: "calc(100% - 44px)" }}>
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center opacity-0 animate-fade-in-up stagger-1">
            <Link
              href="/signup"
              className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-[#1a1a2e]"
            >
              &larr;
            </Link>
            <span className="flex-1 text-center text-sm font-medium text-[#64748b]">
              Step 1 of 5
            </span>
            <div className="w-10" />
          </div>

          {/* Progress bar */}
          <div className="h-2.5 bg-gray-200 rounded-full opacity-0 animate-fade-in-up stagger-1">
            <div className="w-[20%] h-full gradient-progress rounded-full" />
          </div>

          {/* Icon and title */}
          <div className="flex flex-col items-center pt-2 opacity-0 animate-fade-in-up stagger-2">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
              👤
            </div>
            <h1 className="text-xl font-bold text-[#1a1a2e] mt-3">Personal Information</h1>
            <p className="text-sm text-[#64748b] mt-1">Tell us about yourself</p>
          </div>

          {/* Form */}
          <div className="space-y-4 opacity-0 animate-fade-in-up stagger-3">
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Full Name</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">👤</span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Date of Birth</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">📅</span>
                <input
                  type="date"
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Gender</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">⚧</span>
                <select className="input-field appearance-none">
                  <option value="" disabled selected>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4 opacity-0 animate-fade-in-up stagger-4">
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Height</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">📏</span>
                <input
                  type="text"
                  placeholder="e.g., 5'10&quot; or 178 cm"
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Weight</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">⚖️</span>
                <input
                  type="text"
                  placeholder="e.g., 160 lbs or 73 kg"
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Continue button */}
          <div className="opacity-0 animate-fade-in-up stagger-5">
            <Link
              href="/onboarding/step2"
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
