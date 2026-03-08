"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";
import LuckyElephant from "@/components/lucky/LuckyElephant";

type RelaxStep = 1 | 2 | 3 | 4;

const MEDITATION_DURATION = 180; // 3 minutes in seconds

const AFFIRMATIONS = [
  { text: "You are safe", color: "from-lavender-900/40 to-lavender-800/20", accent: "#B89EFF" },
  { text: "This moment will pass", color: "from-amber-900/30 to-amber-800/15", accent: "#FFAB0F" },
  { text: "You are stronger than you know", color: "from-lavender-800/30 to-lavender-900/20", accent: "#9B75FF" },
];

const slideVariants = {
  enter: { x: 280, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -280, opacity: 0 },
};

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function RelaxPage() {
  const [step, setStep] = useState<RelaxStep>(1);
  const [meditationTime, setMeditationTime] = useState(MEDITATION_DURATION);
  const [affirmIdx, setAffirmIdx] = useState(0);
  const [sessionStart] = useState(() => Date.now());
  const [sessionDuration, setSessionDuration] = useState(0);

  // Meditation countdown (step 2)
  useEffect(() => {
    if (step !== 2) return;

    const interval = setInterval(() => {
      setMeditationTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setStep(3);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [step]);

  // Affirmation auto-cycle (step 3)
  useEffect(() => {
    if (step !== 3) return;

    const cycle = setInterval(() => {
      setAffirmIdx((prev) => (prev + 1) % AFFIRMATIONS.length);
    }, 4000);

    // Auto-advance to completion after all affirmations shown twice
    const advance = setTimeout(() => {
      clearInterval(cycle);
      setStep(4);
    }, AFFIRMATIONS.length * 4000 + 2000);

    return () => {
      clearInterval(cycle);
      clearTimeout(advance);
    };
  }, [step]);

  // Capture session duration on completion
  useEffect(() => {
    if (step === 4) {
      setSessionDuration(Math.floor((Date.now() - sessionStart) / 1000));
    }
  }, [step, sessionStart]);

  const meditationProgress = 1 - meditationTime / MEDITATION_DURATION;

  return (
    <div className="relative h-full flex flex-col bg-background overflow-hidden">
      {/* Ambient morphing blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            top: "15%",
            left: "10%",
            width: 220,
            height: 220,
            background: "radial-gradient(circle, rgba(124,77,255,0.10) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 24, -16, 0],
            y: [0, -18, 28, 0],
            scale: [1, 1.18, 0.92, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            bottom: "20%",
            right: "8%",
            width: 160,
            height: 160,
            background: "radial-gradient(circle, rgba(255,171,15,0.08) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -20, 14, 0],
            y: [0, 22, -18, 0],
            scale: [1, 0.9, 1.12, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <PhoneStatusBar />

      {/* Step progress dots */}
      <div className="flex justify-center gap-2 px-6 py-2 z-10">
        {([1, 2, 3, 4] as RelaxStep[]).map((s) => (
          <motion.div
            key={s}
            className="h-1.5 rounded-full"
            style={{ background: s <= step ? "#B89EFF" : "rgba(184,158,255,0.15)" }}
            animate={{ width: s === step ? 24 : 8 }}
            transition={{ duration: 0.4 }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ── STEP 1: Environment Check ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center justify-between px-6 pb-24 pt-4"
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold text-text-primary">Deep Relax</h1>
              <p className="text-text-muted text-xs mt-1">Multi-step guided session</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <LuckyElephant expression="smiling" size={130} />
              <div className="text-center px-4">
                <p className="text-xl font-semibold text-text-primary">
                  Are you in a comfortable space?
                </p>
                <p className="text-text-secondary text-sm mt-2">
                  Find somewhere quiet where you won't be disturbed
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <motion.button
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-full font-bold text-lg text-white"
                style={{
                  background: "linear-gradient(135deg, #7C4DFF, #B89EFF)",
                  boxShadow: "0 0 32px rgba(124,77,255,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Yes, let's go
              </motion.button>
              <motion.button
                onClick={() => setStep(2)}
                className="w-full py-3 rounded-full font-semibold text-text-secondary"
                style={{ border: "1px solid rgba(184,158,255,0.2)" }}
                whileTap={{ scale: 0.97 }}
              >
                Not really, but continue
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* ── STEP 2: Guided Meditation ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center justify-between px-6 pb-20 pt-3"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-text-primary">Guided Meditation</h2>
            </div>

            {/* Morphing blob + Lucky */}
            <div className="relative flex items-center justify-center" style={{ width: 240, height: 240 }}>
              {/* Outer morphing blob */}
              <motion.div
                className="absolute"
                style={{
                  width: 200,
                  height: 200,
                  background: "radial-gradient(circle, rgba(124,77,255,0.18) 0%, rgba(184,158,255,0.08) 50%, transparent 70%)",
                }}
                animate={{
                  borderRadius: [
                    "60% 40% 70% 30% / 45% 55% 45% 55%",
                    "40% 60% 30% 70% / 60% 35% 65% 40%",
                    "70% 30% 45% 55% / 35% 65% 35% 65%",
                    "50% 50% 60% 40% / 50% 60% 40% 50%",
                    "60% 40% 70% 30% / 45% 55% 45% 55%",
                  ],
                  scale: [1, 1.08, 0.96, 1.04, 1],
                  rotate: [0, 15, -10, 8, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Inner glow */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 150,
                  height: 150,
                  background: "radial-gradient(circle, rgba(184,158,255,0.12) 0%, transparent 70%)",
                }}
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <LuckyElephant expression="smiling" size={110} />
            </div>

            {/* Timer */}
            <div className="text-center space-y-3">
              <motion.div
                key={meditationTime}
                initial={{ scale: 1.08, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="text-6xl font-thin text-lavender-300 tabular-nums"
              >
                {formatTime(meditationTime)}
              </motion.div>

              {/* Thin progress ring */}
              <div className="flex justify-center">
                <svg width="48" height="6">
                  <rect x="0" y="2" width="48" height="2" rx="1" fill="rgba(184,158,255,0.15)" />
                  <motion.rect
                    x="0"
                    y="2"
                    height="2"
                    rx="1"
                    fill="#B89EFF"
                    animate={{ width: 48 * meditationProgress }}
                    transition={{ duration: 0.8 }}
                  />
                </svg>
              </div>

              <p className="text-text-secondary text-sm px-6 leading-relaxed">
                Close your eyes and focus on Lucky's voice...
              </p>
            </div>

            <motion.button
              onClick={() => setStep(3)}
              className="w-full py-3 rounded-full text-sm font-semibold text-text-muted"
              style={{ border: "1px solid rgba(184,158,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
            >
              Skip to affirmations
            </motion.button>
          </motion.div>
        )}

        {/* ── STEP 3: Affirmations ── */}
        {step === 3 && (
          <motion.div
            key="step3"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center justify-between px-6 pb-20 pt-3"
          >
            <div className="text-center">
              <h2 className="text-xl font-bold text-text-primary">Affirmations</h2>
              <p className="text-text-muted text-xs mt-1">Words to carry with you</p>
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <LuckyElephant expression="smiling" size={100} />

              {/* Affirmation card */}
              <div className="relative w-full" style={{ height: 120 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={affirmIdx}
                    initial={{ opacity: 0, y: 18, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.96 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center rounded-3xl px-6"
                    style={{
                      background: `linear-gradient(135deg, rgba(124,77,255,0.14), rgba(184,158,255,0.08))`,
                      border: `1px solid ${AFFIRMATIONS[affirmIdx].accent}30`,
                      boxShadow: `0 0 32px ${AFFIRMATIONS[affirmIdx].accent}15`,
                    }}
                  >
                    <p
                      className="text-2xl font-bold text-center text-text-primary leading-tight"
                      style={{ textShadow: `0 0 20px ${AFFIRMATIONS[affirmIdx].accent}40` }}
                    >
                      {AFFIRMATIONS[affirmIdx].text}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {AFFIRMATIONS.map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-1.5 rounded-full"
                    style={{ background: i === affirmIdx ? "#B89EFF" : "rgba(184,158,255,0.2)" }}
                    animate={{ width: i === affirmIdx ? 20 : 6 }}
                    transition={{ duration: 0.35 }}
                  />
                ))}
              </div>
            </div>

            <motion.button
              onClick={() => setStep(4)}
              className="w-full py-3 rounded-full text-sm font-semibold text-text-muted"
              style={{ border: "1px solid rgba(184,158,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
            >
              Continue
            </motion.button>
          </motion.div>
        )}

        {/* ── STEP 4: Completion ── */}
        {step === 4 && (
          <motion.div
            key="step4"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center justify-between px-6 pb-24 pt-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: "backOut" }}
              className="text-center"
            >
              <div
                className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3"
                style={{ background: "rgba(107,255,184,0.12)", color: "#6BFFB8", border: "1px solid rgba(107,255,184,0.2)" }}
              >
                Session Complete
              </div>
              <h1 className="text-2xl font-bold text-text-primary">You did it!</h1>
              <p className="text-text-secondary mt-1 text-sm">You've done something great for yourself</p>
            </motion.div>

            <LuckyElephant expression="smiling" size={130} />

            {/* Stats cards */}
            <div className="w-full grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="p-4 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(124,77,255,0.14), rgba(184,158,255,0.08))",
                  border: "1px solid rgba(184,158,255,0.15)",
                }}
              >
                <p className="text-2xl font-bold text-lavender-300">{formatTime(sessionDuration)}</p>
                <p className="text-[11px] text-text-muted mt-1 font-medium">Duration</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22, duration: 0.4 }}
                className="p-4 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(107,255,184,0.10), rgba(107,255,184,0.05))",
                  border: "1px solid rgba(107,255,184,0.15)",
                }}
              >
                <p className="text-2xl font-bold" style={{ color: "#6BFFB8" }}>~23%</p>
                <p className="text-[11px] text-text-muted mt-1 font-medium">Stress reduction</p>
              </motion.div>
            </div>

            {/* Action buttons */}
            <div className="w-full flex flex-col gap-3">
              <motion.a
                href="/completion"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full py-4 rounded-full font-bold text-white text-base text-center block"
                style={{
                  background: "linear-gradient(135deg, #7C4DFF, #B89EFF)",
                  boxShadow: "0 0 28px rgba(124,77,255,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Log Experience
              </motion.a>
              <motion.a
                href="/dashboard"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="w-full py-3 rounded-full font-semibold text-text-secondary text-sm text-center block"
                style={{ border: "1px solid rgba(184,158,255,0.2)" }}
                whileTap={{ scale: 0.97 }}
              >
                Back to Dashboard
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
