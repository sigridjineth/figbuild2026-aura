"use client";

import { useState } from "react";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";

type SectionKey = "signals" | "privacy" | "preferences" | "account";

const sections: {
  key: SectionKey;
  title: string;
  subtitle: string;
  emoji: string;
  body: string[];
}[] = [
  {
    key: "signals",
    title: "Personal signals",
    subtitle: "What SafeSpace has learned so far",
    emoji: "✦",
    body: [
      "Your earliest cue is usually faster breathing before visible tension.",
      "You respond best to short prompts over long reflection exercises.",
      "Low-light evening routines improve recovery more than audio alone.",
    ],
  },
  {
    key: "privacy",
    title: "Privacy posture",
    subtitle: "How your data is handled",
    emoji: "⌁",
    body: [
      "Sensitive health patterns stay encrypted and purpose-limited.",
      "Notification tone can be softened, hidden, or silenced entirely.",
      "You can revoke context permissions without breaking the core app.",
    ],
  },
  {
    key: "preferences",
    title: "Ritual preferences",
    subtitle: "How Lucky should show up",
    emoji: "◔",
    body: [
      "Prefer concise coaching during work hours.",
      "Use gentler language when stress is already elevated.",
      "Offer movement prompts before reflective journaling.",
    ],
  },
  {
    key: "account",
    title: "Account care",
    subtitle: "Security and housekeeping",
    emoji: "◎",
    body: [
      "Two-factor authentication is active.",
      "Companion memory is synced across devices.",
      "Weekly insight digest arrives every Sunday evening.",
    ],
  },
];

export default function ProfilePage() {
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    signals: true,
    privacy: false,
    preferences: false,
    account: false,
  });

  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />

      <div className="page-scroll safe-area-bottom space-y-5">
        <div className="fade-up">
          <span className="eyebrow">Profile</span>
          <h1 className="display-font mt-3 text-[2.25rem] leading-[0.98] text-gradient">The version of care you want SafeSpace to practice.</h1>
        </div>

        <section className="panel-strong hero-gradient rounded-[32px] p-5 fade-up" style={{ animationDelay: "80ms" }}>
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-4xl">
              🐘
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/46">Calm identity</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Alex Morgan</h2>
              <p className="mt-1 text-sm text-white/56">28 days of pattern learning • trust-first settings enabled</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-[24px] bg-white/[0.04] px-3 py-4">
              <p className="metric-value text-[#9cf1cc]">28</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/42">days active</p>
            </div>
            <div className="rounded-[24px] bg-white/[0.04] px-3 py-4">
              <p className="metric-value text-[#b7a2ff]">45</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/42">check-ins</p>
            </div>
            <div className="rounded-[24px] bg-white/[0.04] px-3 py-4">
              <p className="metric-value text-[#ffc58f]">12h</p>
              <p className="text-xs uppercase tracking-[0.16em] text-white/42">saved recovery</p>
            </div>
          </div>
        </section>

        <section className="panel rounded-[30px] p-5 fade-up" style={{ animationDelay: "130ms" }}>
          <p className="text-sm font-semibold text-white">This week’s wellness promise</p>
          <p className="mt-3 text-[1.02rem] leading-7 text-white/80">
            We’ll focus on earlier, quieter interventions — fewer notifications, better-timed ones, and rituals that preserve your energy instead of demanding more of it.
          </p>
          <div className="mt-4 progress-track">
            <div className="progress-bar w-[68%]" />
          </div>
          <div className="mt-2 flex justify-between text-xs uppercase tracking-[0.16em] text-white/40">
            <span>3 of 5 calming rituals completed</span>
            <span>68%</span>
          </div>
        </section>

        <section className="space-y-3 fade-up" style={{ animationDelay: "180ms" }}>
          {sections.map((section) => {
            const expanded = open[section.key];

            return (
              <div key={section.key} className="panel rounded-[28px] p-4">
                <button
                  type="button"
                  onClick={() => setOpen((prev) => ({ ...prev, [section.key]: !prev[section.key] }))}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] text-xl">{section.emoji}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{section.title}</p>
                    <p className="mt-1 text-xs text-white/48">{section.subtitle}</p>
                  </div>
                  <span className="text-white/42">{expanded ? "−" : "+"}</span>
                </button>

                {expanded && (
                  <div className="mt-4 space-y-2 border-t border-white/7 pt-4 text-sm leading-7 text-white/70">
                    {section.body.map((line) => (
                      <div key={line} className="rounded-[20px] bg-white/[0.03] px-4 py-3">
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
