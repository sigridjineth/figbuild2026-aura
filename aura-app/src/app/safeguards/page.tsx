"use client";

import { motion } from "framer-motion";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";
import LuckyElephant from "@/components/lucky/LuckyElephant";

const safeguards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: "Privacy",
    description: "All data processed on-device. No cloud.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="5" width="22" height="14" rx="2" ry="2"/>
        <circle cx="16" cy="12" r="3" fill="#B89EFF" fillOpacity="0.3"/>
        <line x1="4" y1="12" x2="10" y2="12"/>
      </svg>
    ),
    title: "Consent",
    description: "Granular permissions for every data type",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
        <polyline points="17 18 23 18 23 12"/>
      </svg>
    ),
    title: "Anti-dependency",
    description: "App reduces prompts as your awareness grows",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Clinical Mode",
    description: "Share with your therapist (opt-in)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: "Emergency",
    description: "Crisis resources when you need them",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    ),
    title: "Silent Mode",
    description: "Notification blackout when you choose",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    ),
    title: "No Comparison",
    description: "Your journey is yours alone",
  },
];

export default function SafeguardsPage() {
  return (
    <>
      <PhoneStatusBar />
      <main className="px-5 pb-28 overflow-y-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mt-4 mb-5"
        >
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #7C4DFF22, #B89EFF33)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-text-muted tracking-widest uppercase">Your</p>
            <h1 className="text-xl font-bold text-text-primary leading-tight">Privacy &amp; Safety</h1>
          </div>
        </motion.div>

        {/* Lucky Elephant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <LuckyElephant
            expression="smiling"
            size={100}
            message="Your data is safe with me!"
          />
        </motion.div>

        {/* Safeguard Cards */}
        <div className="flex flex-col gap-3">
          {safeguards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #1A142588, #241E3088)",
                border: "1px solid rgba(184, 158, 255, 0.2)",
                boxShadow: "0 2px 12px rgba(124, 77, 255, 0.06)",
              }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(184, 158, 255, 0.1)" }}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-text-primary text-sm">{item.title}</p>
                <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{item.description}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "rgba(107, 255, 184, 0.15)" }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#6BFFB8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center text-xs text-text-muted mt-6 leading-relaxed"
        >
          Aura is designed with mental wellness ethics at its core.{"\n"}Your trust is our foundation.
        </motion.p>
      </main>
      <BottomNav />
    </>
  );
}
