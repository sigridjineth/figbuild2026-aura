"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function OnboardingStep5() {
  return (
    <div className="relative h-full bg-[#f8f7ff]">
      <PhoneStatusBar />

      <div className="flex flex-col items-center px-6 py-4" style={{ height: "calc(100% - 44px)" }}>
        {/* Header */}
        <div className="flex items-center justify-between w-full opacity-0 animate-fade-in-up stagger-1">
          <Link
            href="/onboarding/step4"
            className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-[#1a1a2e]"
          >
            &larr;
          </Link>
          <span className="text-sm font-medium text-[#64748b]">Step 5 of 5</span>
          <div className="w-10" />
        </div>

        {/* Progress bar */}
        <div className="h-2.5 bg-gray-200 rounded-full w-full mt-4 opacity-0 animate-fade-in-up stagger-1">
          <div className="h-full w-[100%] gradient-progress rounded-full" />
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {/* Lucky elephant in gradient circle */}
          <div className="opacity-0 animate-fade-in-up stagger-2">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center shadow-purple">
              <span className="text-5xl">&#x1F418;</span>
            </div>
          </div>

          {/* Title */}
          <div className="opacity-0 animate-fade-in-up stagger-3 text-center mt-4">
            <h1 className="text-2xl font-bold text-[#1a1a2e]">Meet Lucky</h1>
            <p className="text-base text-[#64748b] mt-1">Your AI Stress Companion</p>
          </div>

          {/* Chat bubble */}
          <div className="bg-white rounded-2xl shadow-card p-5 mx-4 mt-6 w-full relative opacity-0 animate-fade-in-up stagger-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">&#x1F418;</span>
              </div>
              <p className="text-sm text-[#1a1a2e] leading-relaxed">
                Hi there! I&apos;m Lucky, your personal stress regulation assistant. I&apos;ll help you
                understand and manage your stress levels throughout the day. Ready to get started?
              </p>
            </div>
          </div>
        </div>

        {/* Get Started button */}
        <div className="w-full mb-4 opacity-0 animate-fade-in-up stagger-5">
          <Link
            href="/home"
            className="block w-full py-3.5 text-white rounded-2xl font-semibold text-center text-base shadow-purple"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
