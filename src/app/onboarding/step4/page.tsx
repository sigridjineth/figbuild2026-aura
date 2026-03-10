"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function OnboardingStep4() {
  const [permissions, setPermissions] = useState({
    health: false,
    notifications: false,
    location: false,
  });

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative h-full bg-[#f8f7ff]">
      <PhoneStatusBar />

      <div className="px-6 py-4 space-y-4 overflow-y-auto" style={{ height: "calc(100% - 44px)" }}>
        {/* Header */}
        <div className="flex items-center opacity-0 animate-fade-in-up stagger-1">
          <Link
            href="/onboarding/step3"
            className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-[#1a1a2e]"
          >
            &larr;
          </Link>
          <span className="flex-1 text-center text-sm font-medium text-[#64748b]">
            Step 4 of 5
          </span>
          <div className="w-10" />
        </div>

        {/* Progress bar */}
        <div className="h-2.5 bg-gray-200 rounded-full opacity-0 animate-fade-in-up stagger-1">
          <div className="h-full w-[80%] gradient-progress rounded-full" />
        </div>

        {/* Icon and title */}
        <div className="flex flex-col items-center text-center opacity-0 animate-fade-in-up stagger-2">
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-2xl">
            &#x1F510;
          </div>
          <h1 className="text-xl font-bold text-[#1a1a2e] mt-2">App Permissions</h1>
          <p className="text-sm text-[#64748b] mt-1">Help Lucky work better for you</p>
        </div>

        {/* Privacy info box */}
        <div className="bg-[#f0fdf4] rounded-2xl p-4 border-l-4 border-[#008236] shadow-card opacity-0 animate-fade-in-up stagger-3">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-base flex-shrink-0">
              &#x1F512;
            </div>
            <div>
              <p className="font-semibold text-[#0d542b]">Your Privacy Matters</p>
              <p className="text-sm text-[#008236] mt-1">
                All data is encrypted and stored securely. You can change these settings anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Permission toggles */}
        <div className="space-y-3 opacity-0 animate-fade-in-up stagger-4">
          {/* Health Data Access */}
          <div className="bg-white rounded-2xl p-4 shadow-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-xl">&#x2764;&#xFE0F;</span>
              </div>
              <div>
                <p className="font-medium text-[#1a1a2e]">Health Data Access</p>
                <p className="text-sm text-[#64748b]">Connect with Apple Health</p>
              </div>
            </div>
            <div
              className="w-12 h-7 rounded-full relative cursor-pointer transition-colors"
              style={{
                background: permissions.health
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "#e5e7eb",
                boxShadow: permissions.health
                  ? "0 2px 8px rgba(139, 92, 246, 0.3)"
                  : "none",
              }}
              onClick={() => togglePermission("health")}
            >
              <div
                className={`w-5.5 h-5.5 bg-white rounded-full shadow absolute top-[3px] transition-transform ${
                  permissions.health ? "translate-x-[22px]" : "translate-x-[3px]"
                }`}
                style={{ width: 22, height: 22 }}
              />
            </div>
          </div>

          {/* Push Notifications */}
          <div className="bg-white rounded-2xl p-4 shadow-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-xl">&#x1F514;</span>
              </div>
              <div>
                <p className="font-medium text-[#1a1a2e]">Push Notifications</p>
                <p className="text-sm text-[#64748b]">Get stress alerts and reminders</p>
              </div>
            </div>
            <div
              className="w-12 h-7 rounded-full relative cursor-pointer transition-colors"
              style={{
                background: permissions.notifications
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "#e5e7eb",
                boxShadow: permissions.notifications
                  ? "0 2px 8px rgba(139, 92, 246, 0.3)"
                  : "none",
              }}
              onClick={() => togglePermission("notifications")}
            >
              <div
                className={`bg-white rounded-full shadow absolute top-[3px] transition-transform ${
                  permissions.notifications ? "translate-x-[22px]" : "translate-x-[3px]"
                }`}
                style={{ width: 22, height: 22 }}
              />
            </div>
          </div>

          {/* Location Services */}
          <div className="bg-white rounded-2xl p-4 shadow-card flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl">&#x1F4CD;</span>
              </div>
              <div>
                <p className="font-medium text-[#1a1a2e]">Location Services</p>
                <p className="text-sm text-[#64748b]">Environmental stress factors</p>
              </div>
            </div>
            <div
              className="w-12 h-7 rounded-full relative cursor-pointer transition-colors"
              style={{
                background: permissions.location
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "#e5e7eb",
                boxShadow: permissions.location
                  ? "0 2px 8px rgba(139, 92, 246, 0.3)"
                  : "none",
              }}
              onClick={() => togglePermission("location")}
            >
              <div
                className={`bg-white rounded-full shadow absolute top-[3px] transition-transform ${
                  permissions.location ? "translate-x-[22px]" : "translate-x-[3px]"
                }`}
                style={{ width: 22, height: 22 }}
              />
            </div>
          </div>
        </div>

        {/* Continue button */}
        <div className="opacity-0 animate-fade-in-up stagger-5">
          <Link
            href="/onboarding/step5"
            className="block w-full py-3.5 bg-[#1a1a2e] text-white rounded-2xl font-semibold text-center text-base shadow-lg"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
