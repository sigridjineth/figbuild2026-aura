"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";

type SectionKey = "medical" | "medications" | "privacy" | "account";

const sections: {
  key: SectionKey;
  icon: string;
  iconBg: string;
  title: string;
  subtitle: string;
}[] = [
  {
    key: "medical",
    icon: "\u{1F3E5}",
    iconBg: "bg-pink-100",
    title: "Medical Information",
    subtitle: "Health history & conditions",
  },
  {
    key: "medications",
    icon: "\u{1F48A}",
    iconBg: "bg-green-100",
    title: "Medications",
    subtitle: "2 active medications",
  },
  {
    key: "privacy",
    icon: "\u{1F512}",
    iconBg: "bg-blue-100",
    title: "Permissions & Privacy",
    subtitle: "Control app access",
  },
  {
    key: "account",
    icon: "\u2699\uFE0F",
    iconBg: "bg-orange-100",
    title: "Account Settings",
    subtitle: "Security & preferences",
  },
];

export default function ProfilePage() {
  const [openSections, setOpenSections] = useState<Record<SectionKey, boolean>>({
    medical: false,
    medications: false,
    privacy: false,
    account: false,
  });

  const toggleSection = (key: SectionKey) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 transition-transform duration-200"
      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <div className="flex flex-col h-full bg-[#f8f7ff]">
      <PhoneStatusBar />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Header */}
        <div className="px-5 pt-1 pb-3 flex items-center gap-3 bg-white">
          <Link href="/home" className="flex items-center justify-center w-8 h-8 -ml-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-[#1a1a2e]">Profile &amp; Settings</h1>
        </div>

        {/* Personal Information Hero Card */}
        <div className="mx-5 mt-3 rounded-3xl overflow-hidden shadow-card bg-white animate-fade-in-up">
          {/* Gradient header band */}
          <div className="gradient-header h-20 relative rounded-t-3xl">
            {/* Edit icon */}
            <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>

          {/* Avatar overlapping the gradient */}
          <div className="flex flex-col items-center -mt-10 px-5 pb-5">
            <div className="w-20 h-20 rounded-full bg-white p-1 shadow-lg">
              <div className="w-full h-full rounded-full gradient-primary flex items-center justify-center">
                <span className="text-3xl">{"\u{1F418}"}</span>
              </div>
            </div>
            <h2 className="text-lg font-bold text-[#1a1a2e] mt-2">Sarah Johnson</h2>
            <p className="text-sm text-[#94a3b8]">sarah.johnson@email.com</p>
            <p className="text-xs text-[#94a3b8] mt-0.5">Age: 28</p>

            {/* Stats row */}
            <div className="w-full mt-4 pt-4 border-t border-gray-100 flex items-center">
              <div className="flex-1 text-center">
                <p className="text-lg font-bold text-[#1a1a2e]">28</p>
                <p className="text-xs text-[#94a3b8]">Days Active</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex-1 text-center">
                <p className="text-lg font-bold text-[#7c3aed]">45</p>
                <p className="text-xs text-[#94a3b8]">Sessions</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="flex-1 text-center">
                <p className="text-lg font-bold text-[#1a1a2e]">12h</p>
                <p className="text-xs text-[#94a3b8]">Total Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="mx-5 mt-4 space-y-2">
          {sections.map((section, idx) => (
            <div
              key={section.key}
              className={`bg-white rounded-2xl shadow-card overflow-hidden animate-fade-in-up stagger-${idx + 1}`}
            >
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full px-4 py-4 flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-full ${section.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-lg">{section.icon}</span>
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-semibold text-[#1a1a2e]">{section.title}</p>
                  <p className="text-xs text-[#94a3b8]">{section.subtitle}</p>
                </div>
                <ChevronIcon isOpen={openSections[section.key]} />
              </button>

              {openSections[section.key] && (
                <div className="px-4 pb-4 pt-0 animate-fade-in">
                  <div className="border-t border-gray-50 pt-3">
                    {section.key === "medical" && (
                      <div className="space-y-2.5">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#94a3b8]">Conditions</span>
                          <span className="text-sm font-medium text-[#1a1a2e]">Anxiety, Insomnia</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#94a3b8]">Allergies</span>
                          <span className="text-sm font-medium text-[#1a1a2e]">Penicillin</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#94a3b8]">Blood Type</span>
                          <span className="text-sm font-medium text-[#1a1a2e]">O+</span>
                        </div>
                      </div>
                    )}
                    {section.key === "medications" && (
                      <div className="space-y-2.5">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#94a3b8]">Sertraline</span>
                          <span className="text-sm font-medium text-[#1a1a2e]">50mg daily</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#94a3b8]">Melatonin</span>
                          <span className="text-sm font-medium text-[#1a1a2e]">3mg nightly</span>
                        </div>
                      </div>
                    )}
                    {section.key === "privacy" && (
                      <div className="space-y-2.5">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#94a3b8]">Location Access</span>
                          <span className="text-xs font-medium text-[#22c55e] bg-green-50 px-2 py-0.5 rounded-full">Enabled</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#94a3b8]">Health Data</span>
                          <span className="text-xs font-medium text-[#22c55e] bg-green-50 px-2 py-0.5 rounded-full">Enabled</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#94a3b8]">Notifications</span>
                          <span className="text-xs font-medium text-[#22c55e] bg-green-50 px-2 py-0.5 rounded-full">Enabled</span>
                        </div>
                      </div>
                    )}
                    {section.key === "account" && (
                      <div className="space-y-2.5">
                        <div className="flex justify-between">
                          <span className="text-sm text-[#94a3b8]">Two-Factor Auth</span>
                          <span className="text-sm font-medium text-[#1a1a2e]">Enabled</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-[#94a3b8]">Data Encryption</span>
                          <span className="text-sm font-medium text-[#1a1a2e]">AES-256</span>
                        </div>
                        <button className="text-sm text-[#ef4444] font-medium mt-2">
                          Delete Account
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Wellness Goal Card */}
        <div className="mx-5 mt-4 mb-24 gradient-wellness rounded-2xl p-5 shadow-purple animate-fade-in-up stagger-5">
          <p className="text-sm text-white/80 font-medium">Your Wellness Goal</p>
          <p className="text-base font-bold text-white mt-1">Complete 5 breathing sessions this week</p>
          <div className="mt-3 h-2 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: "60%" }} />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-white/80">3 of 5 completed</span>
            <span className="text-xs text-white/80">60%</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
