"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";
import LuckyElephant from "@/components/lucky/LuckyElephant";

const stories = [
  {
    name: "Maya",
    age: 21,
    role: "College Student",
    emoji: "📚",
    gradientFrom: "#2A1660",
    gradientTo: "#3D2287",
    accentColor: "#B89EFF",
    situation: "Finals week pressure",
    trigger: "Aura detects cortisol spike",
    intervention: "3-min breathwork session",
    outcome: "Avoids anxiety spiral",
    narrative:
      "It's 11 PM. Maya's typing speed increases, her blinks slow — Aura reads the pre-panic signature before she does. A gentle nudge appears: \"Your body needs 3 minutes.\" She breathes. The spiral never starts.",
    luckyMessage: "You caught it early, Maya! 🌟",
    tagline: "Caught before it began",
  },
  {
    name: "James",
    age: 34,
    role: "Working Parent",
    emoji: "👨‍👧",
    gradientFrom: "#3B2000",
    gradientTo: "#5C3B00",
    accentColor: "#FFAB0F",
    situation: "Back-to-back meetings",
    trigger: "Compound stress forecast",
    intervention: "5-min walk reminder",
    outcome: "Breaks the cascade",
    narrative:
      "Six meetings, no breaks. Aura forecasts a stress cascade building by 3 PM. \"Step outside for 5 minutes\" — James does. His afternoon is clearer. His kids get the dad who's present, not drained.",
    luckyMessage: "Balance unlocked, James! ✨",
    tagline: "The cascade that didn't happen",
  },
  {
    name: "Priya",
    age: 26,
    role: "Managing Anxiety",
    emoji: "🌸",
    gradientFrom: "#1A2A1A",
    gradientTo: "#2A1660",
    accentColor: "#6BFFB8",
    situation: "Generalized anxiety patterns",
    trigger: "Learns pre-panic signature",
    intervention: "10–20 min early warnings",
    outcome: "Shares insights with therapist",
    narrative:
      "Over 6 weeks, Priya learns her pre-panic signature: a slight uptick in typing rhythm, a specific breathing pattern. Now she gets 10–20 minute warnings. Her therapist calls it \"a breakthrough in self-detection.\"",
    luckyMessage: "Self-awareness is your superpower! 💜",
    tagline: "Self-knowledge changes everything",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 320 : -320,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 320 : -320,
    opacity: 0,
  }),
};

export default function StoriesPage() {
  const [[activeIndex, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const next = activeIndex + newDirection;
    if (next >= 0 && next < stories.length) {
      setPage([next, newDirection]);
    }
  };

  const story = stories[activeIndex];

  return (
    <>
      <PhoneStatusBar />
      <div className="flex flex-col pb-24" style={{ minHeight: "calc(852px - 40px)" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-5 mt-4 mb-4"
        >
          <p className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-1">Real Stories</p>
          <h1 className="text-xl font-bold text-text-primary">How Aura Helps</h1>
        </motion.div>

        {/* Story Card Carousel */}
        <div className="relative flex-1 mx-5 overflow-hidden rounded-3xl" style={{ minHeight: 520 }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col p-5"
              style={{
                background: `linear-gradient(160deg, ${story.gradientFrom} 0%, ${story.gradientTo} 100%)`,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Persona Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{story.emoji}</span>
                    <div>
                      <p className="text-lg font-bold text-text-primary">{story.name}</p>
                      <p className="text-xs text-text-secondary">{story.age} · {story.role}</p>
                    </div>
                  </div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1"
                    style={{ background: `${story.accentColor}22`, color: story.accentColor }}
                  >
                    {story.tagline}
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {activeIndex + 1}/{stories.length}
                </div>
              </div>

              {/* Journey Steps */}
              <div className="flex flex-col gap-2 mb-4">
                {[
                  { label: "Situation", value: story.situation, icon: "📍" },
                  { label: "Detected", value: story.trigger, icon: "🔮" },
                  { label: "Action", value: story.intervention, icon: "💡" },
                  { label: "Result", value: story.outcome, icon: "✅" },
                ].map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-sm">{step.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-text-muted">{step.label} · </span>
                      <span className="text-xs font-semibold text-text-primary">{step.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Narrative */}
              <p className="text-sm text-text-secondary leading-relaxed flex-1 italic">
                &ldquo;{story.narrative}&rdquo;
              </p>

              {/* Lucky Reaction */}
              <div className="flex justify-center mt-3">
                <LuckyElephant
                  expression="smiling"
                  size={80}
                  message={story.luckyMessage}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots + Nav */}
        <div className="flex items-center justify-between px-5 mt-4">
          <button
            onClick={() => paginate(-1)}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: activeIndex === 0 ? "rgba(255,255,255,0.03)" : "rgba(184, 158, 255, 0.15)",
              opacity: activeIndex === 0 ? 0.3 : 1,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="flex gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > activeIndex ? 1 : -1])}
                className="rounded-full transition-all"
                style={{
                  width: i === activeIndex ? 24 : 8,
                  height: 8,
                  background: i === activeIndex ? "#B89EFF" : "rgba(184, 158, 255, 0.25)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            disabled={activeIndex === stories.length - 1}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{
              background: activeIndex === stories.length - 1 ? "rgba(255,255,255,0.03)" : "rgba(184, 158, 255, 0.15)",
              opacity: activeIndex === stories.length - 1 ? 0.3 : 1,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B89EFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
