"use client";

import { motion } from "framer-motion";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";
import LuckyElephant from "@/components/lucky/LuckyElephant";

// --- Stress forecast chart data ---
const chartPoints = [
  { x: 0, y: 64 },
  { x: 42, y: 22 },  // stress peak ~12 min
  { x: 85, y: 38 },
  { x: 170, y: 56 },
  { x: 255, y: 66 },
  { x: 300, y: 70 },
];

function buildCurvePath(pts: { x: number; y: number }[]) {
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1];
    const c = pts[i];
    const dx = (c.x - p.x) / 3;
    d += ` C ${p.x + dx},${p.y} ${c.x - dx},${c.y} ${c.x},${c.y}`;
  }
  return d;
}

const linePath = buildCurvePath(chartPoints);
const areaPath =
  linePath +
  ` L ${chartPoints[chartPoints.length - 1].x},88 L ${chartPoints[0].x},88 Z`;

// --- Weekly heatmap data ---
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const TIME_SLOTS = ["6am", "9am", "12p", "3pm", "6pm", "9pm"];
const HEATMAP: number[][] = [
  [0.1, 0.2, 0.1, 0.2, 0.1, 0.1, 0.1],
  [0.5, 0.6, 0.4, 0.7, 0.5, 0.2, 0.2],
  [0.4, 0.5, 0.8, 0.6, 0.4, 0.3, 0.2],
  [0.7, 0.8, 0.6, 0.9, 0.7, 0.3, 0.2],
  [0.3, 0.4, 0.5, 0.4, 0.8, 0.5, 0.3],
  [0.2, 0.2, 0.3, 0.2, 0.6, 0.6, 0.2],
];

function heatColor(val: number) {
  if (val < 0.3) return "rgba(124,77,255,0.3)";
  if (val < 0.6) return "rgba(255,171,15,0.52)";
  return "rgba(255,107,107,0.72)";
}

// --- Signal cards ---
const SIGNALS = [
  {
    name: "Cortisol",
    value: "12.4",
    unit: "μg/dL",
    label: "Trending ↓",
    color: "#6BFFB8",
  },
  {
    name: "Vagal Tone",
    value: "68",
    unit: "ms",
    label: "Stable",
    color: "#B89EFF",
  },
  {
    name: "Tension",
    value: "Low",
    unit: "",
    label: "Normal",
    color: "#7C4DFF",
  },
];

// --- Circular progress ---
const SCORE = 78;
const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SCORE_OFFSET = CIRCUMFERENCE * (1 - SCORE / 100);

export default function DashboardPage() {
  return (
    <div className="relative h-full overflow-hidden bg-background">
      {/* Status bar */}
      <PhoneStatusBar />

      {/* Scrollable content area — sandwiched between status bar and bottom nav */}
      <div
        className="absolute inset-x-0 overflow-y-auto"
        style={{ top: 44, bottom: 68 }}
      >
        <div className="px-5 pt-3 pb-6 space-y-4">

          {/* ── Greeting ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">
                Sunday Morning
              </p>
              <h1 className="text-xl font-bold text-text-primary leading-tight">
                Hi! You&apos;re looking
              </h1>
              <h1 className="text-xl font-bold text-lavender-300 leading-tight">
                calm today 🌿
              </h1>
            </div>
            <LuckyElephant
              expression="smiling"
              size={76}
              message="Hi!"
            />
          </motion.div>

          {/* ── Stress Forecast Chart ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl p-4"
            style={{
              background: "#1A1425",
              border: "1px solid rgba(184,158,255,0.1)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-bold text-text-primary">
                  Stress Forecast
                </p>
                <p className="text-[10px] text-text-muted">Next 2 hours</p>
              </div>
              <motion.div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,107,107,0.1)",
                  border: "1px solid rgba(255,107,107,0.22)",
                }}
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#FF6B6B" }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <span className="text-[10px] font-bold text-stress">
                  Spike in ~12m
                </span>
              </motion.div>
            </div>

            {/* SVG line chart */}
            <div className="relative">
              <svg
                viewBox="0 0 300 92"
                className="w-full"
                style={{ height: 100 }}
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="dLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#B89EFF" />
                    <stop offset="30%" stopColor="#9B75FF" />
                    <stop offset="58%" stopColor="#FFD054" />
                    <stop offset="100%" stopColor="#FFAB0F" />
                  </linearGradient>
                  <linearGradient id="dAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9B75FF" stopOpacity="0.38" />
                    <stop offset="100%" stopColor="#9B75FF" stopOpacity="0.02" />
                  </linearGradient>
                  <filter id="lineGlow">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Horizontal grid */}
                <line x1="0" y1="44" x2="300" y2="44" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

                {/* Stress onset vertical marker */}
                <line
                  x1="42" y1="0" x2="42" y2="88"
                  stroke="rgba(255,107,107,0.25)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />

                {/* Area fill */}
                <path d={areaPath} fill="url(#dAreaGrad)" />

                {/* Glowing line */}
                <motion.path
                  d={linePath}
                  stroke="url(#dLineGrad)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  filter="url(#lineGlow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.6, ease: "easeOut", delay: 0.15 }}
                />

                {/* Current position dot */}
                <circle cx="0" cy="64" r="3.5" fill="#B89EFF" stroke="#1A1425" strokeWidth="2" />

                {/* Peak stress dot — pulsing */}
                <motion.circle
                  cx="42" cy="22" r="4.5"
                  fill="#FF6B6B"
                  stroke="#1A1425"
                  strokeWidth="2"
                  animate={{ r: [4.5, 6, 4.5], opacity: [1, 0.65, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
              </svg>

              {/* Time axis labels */}
              <div className="flex justify-between mt-1 px-0">
                {["Now", "+30m", "+1h", "+90m", "+2h"].map((t) => (
                  <span key={t} className="text-[9px] text-text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Interoceptive Signal Cards ─────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2.5">
              Interoceptive Signals
            </p>
            <div className="grid grid-cols-3 gap-2.5">
              {SIGNALS.map((sig, i) => (
                <motion.div
                  key={sig.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 + i * 0.08 }}
                  className="rounded-2xl p-3"
                  style={{
                    background: "#1A1425",
                    border: "1px solid rgba(184,158,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: sig.color }}
                    />
                    <span className="text-[8.5px] font-bold text-text-muted uppercase tracking-wider leading-none">
                      {sig.name}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-text-primary leading-none">
                    {sig.value}
                  </div>
                  {sig.unit && (
                    <div className="text-[9px] text-text-muted mt-0.5">{sig.unit}</div>
                  )}
                  <div
                    className="mt-2 text-[9px] font-bold"
                    style={{ color: sig.color }}
                  >
                    {sig.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Weekly Pattern Heatmap ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="rounded-3xl p-4"
            style={{
              background: "#1A1425",
              border: "1px solid rgba(184,158,255,0.1)",
            }}
          >
            <p className="text-xs font-bold text-text-primary mb-3">
              Weekly Pattern
            </p>
            <div className="flex gap-2">
              {/* Time slot labels */}
              <div className="flex flex-col gap-1.5 pt-5 flex-shrink-0">
                {TIME_SLOTS.map((t) => (
                  <div
                    key={t}
                    className="text-[8px] text-text-muted"
                    style={{ height: 20, display: "flex", alignItems: "center" }}
                  >
                    {t}
                  </div>
                ))}
              </div>

              {/* Grid */}
              <div className="flex-1 min-w-0">
                {/* Day headers */}
                <div className="flex gap-1 mb-1.5">
                  {DAYS.map((d, i) => (
                    <div
                      key={i}
                      className="flex-1 text-center text-[9px] font-bold text-text-muted"
                    >
                      {d}
                    </div>
                  ))}
                </div>
                {/* Heat cells */}
                <div className="flex flex-col gap-1.5">
                  {HEATMAP.map((row, ri) => (
                    <div key={ri} className="flex gap-1">
                      {row.map((val, ci) => (
                        <motion.div
                          key={ci}
                          className="flex-1 rounded"
                          style={{ height: 20, backgroundColor: heatColor(val) }}
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.38 + (ri * 7 + ci) * 0.008,
                            duration: 0.3,
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-3 mt-3 justify-end">
              {[
                { label: "Low", color: "rgba(124,77,255,0.3)" },
                { label: "Med", color: "rgba(255,171,15,0.52)" },
                { label: "High", color: "rgba(255,107,107,0.72)" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1">
                  <div
                    className="w-2.5 h-2.5 rounded-sm"
                    style={{ backgroundColor: l.color }}
                  />
                  <span className="text-[8px] text-text-muted">{l.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Interoceptive Awareness Score ─────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="rounded-3xl p-5"
            style={{
              background: "#1A1425",
              border: "1px solid rgba(184,158,255,0.1)",
              boxShadow: "0 0 32px rgba(124,77,255,0.07)",
            }}
          >
            <p className="text-xs font-bold text-text-primary mb-4">
              Interoceptive Awareness
            </p>
            <div className="flex items-center gap-5">
              {/* Circular progress ring */}
              <div className="relative flex-shrink-0" style={{ width: 96, height: 96 }}>
                <svg width="96" height="96" viewBox="0 0 96 96">
                  <defs>
                    <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#B89EFF" />
                      <stop offset="100%" stopColor="#7C4DFF" />
                    </linearGradient>
                  </defs>
                  {/* Track */}
                  <circle
                    cx="48" cy="48" r={RADIUS}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="7"
                  />
                  {/* Glow layer */}
                  <circle
                    cx="48" cy="48" r={RADIUS}
                    fill="none"
                    stroke="#B89EFF"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={SCORE_OFFSET}
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "48px 48px",
                      filter: "blur(5px)",
                      opacity: 0.28,
                    }}
                  />
                  {/* Progress arc */}
                  <motion.circle
                    cx="48" cy="48" r={RADIUS}
                    fill="none"
                    stroke="url(#scoreGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    animate={{ strokeDashoffset: SCORE_OFFSET }}
                    transition={{ duration: 1.6, ease: "easeOut", delay: 0.5 }}
                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "48px 48px",
                    }}
                  />
                </svg>
                {/* Score label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-text-primary leading-none">
                    {SCORE}
                  </span>
                  <span className="text-[10px] text-text-muted">/100</span>
                </div>
              </div>

              {/* Right-side description */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-lavender-300 mb-1">
                  Above Average
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed mb-3">
                  Your body awareness is sharp. You&apos;re noticing signals early.
                </p>
                {[
                  { label: "Accuracy", val: 82 },
                  { label: "Consistency", val: 74 },
                ].map((item) => (
                  <div key={item.label} className="mb-2">
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[9px] text-text-muted font-semibold">
                        {item.label}
                      </span>
                      <span className="text-[9px] text-text-muted">{item.val}%</span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #7C4DFF, #B89EFF)",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ duration: 1.1, ease: "easeOut", delay: 0.7 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="h-2" />
        </div>
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
