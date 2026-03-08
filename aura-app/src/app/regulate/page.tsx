"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";
import LuckyElephant from "@/components/lucky/LuckyElephant";

type BreathPhase = "inhale" | "hold" | "exhale";
type ScreenView = "intro" | "breathing" | "complete";

const PHASE_DURATION = 4;
const SESSION_DURATION = 120;

const phaseConfig: Record<BreathPhase, { label: string; next: BreathPhase; scale: number; color: string }> = {
  inhale: { label: "Breathe In...", next: "hold", scale: 1.35, color: "#9B75FF" },
  hold:   { label: "Hold...",       next: "exhale", scale: 1.35, color: "#B89EFF" },
  exhale: { label: "Breathe Out...", next: "inhale", scale: 0.72, color: "#7C4DFF" },
};

const EMOTIONS = [
  { emoji: "😔", label: "Low" },
  { emoji: "😐", label: "Okay" },
  { emoji: "🙂", label: "Better" },
  { emoji: "😊", label: "Good" },
  { emoji: "🌟", label: "Great" },
];

export default function RegulatePage() {
  const [view, setView] = useState<ScreenView>("intro");
  const [phase, setPhase] = useState<BreathPhase>("inhale");
  const [phaseTimer, setPhaseTimer] = useState(PHASE_DURATION);
  const [totalElapsed, setTotalElapsed] = useState(0);
  const [rating, setRating] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const progress = Math.min(totalElapsed / SESSION_DURATION, 1);
  const remaining = SESSION_DURATION - totalElapsed;
  const remainingStr = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")}`;

  useEffect(() => {
    if (view !== "breathing") return;

    intervalRef.current = setInterval(() => {
      setTotalElapsed((prev) => prev + 1);
      setPhaseTimer((prev) => {
        if (prev <= 1) {
          setPhase((p) => phaseConfig[p].next);
          return PHASE_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [view]);

  useEffect(() => {
    if (totalElapsed >= SESSION_DURATION && view === "breathing") {
      setView("complete");
    }
  }, [totalElapsed, view]);

  function handleStart() {
    setPhase("inhale");
    setPhaseTimer(PHASE_DURATION);
    setTotalElapsed(0);
    setView("breathing");
  }

  function handleEnd() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setView("complete");
  }

  return (
    <div className="relative h-full flex flex-col bg-background overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 320,
            height: 320,
            background: "radial-gradient(circle, rgba(124,77,255,0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <PhoneStatusBar />

      <AnimatePresence mode="wait">
        {/* ── INTRO VIEW ── */}
        {view === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center justify-between px-6 pb-24 pt-4"
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold text-text-primary">Quick Regulate</h1>
              <p className="text-text-secondary mt-1 text-sm">2-minute breathwork</p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <LuckyElephant expression="smiling" size={130} message="Let's breathe together!" />

              {/* Preview of breathing pattern */}
              <div className="flex gap-4 mt-2">
                {(["inhale", "hold", "exhale"] as BreathPhase[]).map((p) => (
                  <div key={p} className="flex flex-col items-center gap-1">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: "rgba(124,77,255,0.2)", border: "1px solid rgba(184,158,255,0.3)" }}
                    >
                      {PHASE_DURATION}s
                    </div>
                    <span className="text-[10px] text-text-muted capitalize">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              onClick={handleStart}
              className="w-full py-4 rounded-full font-bold text-lg text-white"
              style={{
                background: "linear-gradient(135deg, #7C4DFF, #B89EFF)",
                boxShadow: "0 0 32px rgba(124,77,255,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Begin Session
            </motion.button>
          </motion.div>
        )}

        {/* ── BREATHING VIEW ── */}
        {view === "breathing" && (
          <motion.div
            key="breathing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-between px-6 pb-20 pt-4"
          >
            {/* Header */}
            <div className="text-center w-full">
              <h1 className="text-xl font-bold text-text-primary">Quick Regulate</h1>
              <p className="text-text-muted text-xs mt-0.5">2-minute breathwork</p>
            </div>

            {/* Breathing circle area */}
            <div className="relative flex items-center justify-center" style={{ width: 240, height: 240 }}>
              {/* Outer ripple ring — only on inhale */}
              <AnimatePresence>
                {phase === "inhale" && (
                  <motion.div
                    key="ripple-outer"
                    className="absolute rounded-full"
                    style={{
                      width: 170,
                      height: 170,
                      border: "1px solid rgba(184,158,255,0.25)",
                    }}
                    initial={{ scale: 1, opacity: 0.4 }}
                    animate={{ scale: 2.4, opacity: 0 }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
              </AnimatePresence>

              {/* Mid ripple ring */}
              <AnimatePresence>
                {phase === "inhale" && (
                  <motion.div
                    key="ripple-mid"
                    className="absolute rounded-full"
                    style={{
                      width: 170,
                      height: 170,
                      border: "1px solid rgba(184,158,255,0.15)",
                    }}
                    initial={{ scale: 1, opacity: 0.3 }}
                    animate={{ scale: 1.9, opacity: 0 }}
                    transition={{ duration: 4, ease: "linear", delay: 0.8 }}
                  />
                )}
              </AnimatePresence>

              {/* Glow halo */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 170,
                  height: 170,
                  background: "radial-gradient(circle, rgba(124,77,255,0.25) 0%, transparent 70%)",
                }}
                animate={{ scale: phaseConfig[phase].scale * 1.2, opacity: phase === "exhale" ? 0.4 : 0.8 }}
                transition={{
                  duration: phase === "hold" ? 0.2 : PHASE_DURATION,
                  ease: "easeInOut",
                }}
              />

              {/* Main circle */}
              <motion.div
                className="relative rounded-full flex items-center justify-center"
                style={{
                  width: 160,
                  height: 160,
                  background: "radial-gradient(circle at 35% 35%, #B89EFF 0%, #7C4DFF 55%, #3D2287 100%)",
                  boxShadow: "0 0 40px rgba(184,158,255,0.35), 0 0 80px rgba(124,77,255,0.2)",
                }}
                animate={{ scale: phaseConfig[phase].scale }}
                transition={{
                  duration: phase === "hold" ? 0.15 : PHASE_DURATION,
                  ease: "easeInOut",
                }}
              >
                <motion.span
                  key={`${phase}-${phaseTimer}`}
                  initial={{ opacity: 0.6, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-white font-light"
                  style={{ fontSize: 48, lineHeight: 1 }}
                >
                  {phaseTimer}
                </motion.span>
              </motion.div>
            </div>

            {/* Phase instruction */}
            <AnimatePresence mode="wait">
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-2xl font-semibold text-lavender-200">{phaseConfig[phase].label}</p>
                <p className="text-text-muted text-sm mt-1">{remainingStr} remaining</p>
              </motion.div>
            </AnimatePresence>

            {/* Progress + end button */}
            <div className="w-full space-y-3">
              <div className="w-full h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #5530B8, #7C4DFF, #B89EFF)" }}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0.8, ease: "linear" }}
                />
              </div>
              <motion.button
                onClick={handleEnd}
                className="w-full py-3 rounded-full text-sm font-semibold text-text-muted"
                style={{ border: "1px solid rgba(184,158,255,0.2)" }}
                whileTap={{ scale: 0.97 }}
              >
                End Session
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* ── COMPLETE VIEW ── */}
        {view === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 flex flex-col items-center justify-between px-6 pb-24 pt-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "backOut" }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold text-text-primary">Great job!</h1>
              <p className="text-text-secondary mt-1">How do you feel?</p>
            </motion.div>

            <LuckyElephant expression="smiling" size={130} />

            {/* Emotion rating */}
            <div className="flex gap-2 w-full justify-between">
              {EMOTIONS.map((e, i) => (
                <motion.button
                  key={i}
                  onClick={() => setRating(i + 1)}
                  className="flex flex-col items-center gap-1.5 py-3 flex-1 rounded-2xl transition-colors"
                  style={{
                    background:
                      rating === i + 1
                        ? "linear-gradient(135deg, rgba(124,77,255,0.4), rgba(184,158,255,0.3))"
                        : "rgba(36,30,48,0.8)",
                    border:
                      rating === i + 1
                        ? "1px solid rgba(184,158,255,0.5)"
                        : "1px solid rgba(184,158,255,0.1)",
                    boxShadow: rating === i + 1 ? "0 0 16px rgba(124,77,255,0.3)" : "none",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                >
                  <span className="text-2xl">{e.emoji}</span>
                  <span className="text-[9px] font-semibold text-text-muted">{e.label}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {rating !== null && (
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full py-4 rounded-full font-bold text-white text-lg"
                  style={{
                    background: "linear-gradient(135deg, #7C4DFF, #B89EFF)",
                    boxShadow: "0 0 28px rgba(124,77,255,0.45)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.location.href = "/completion"}
                >
                  Save & Done
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
