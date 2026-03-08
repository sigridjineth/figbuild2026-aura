"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import LuckyElephant from "@/components/lucky/LuckyElephant";

const sparkles = [
  { x: -120, y: -180, size: 6, delay: 0, color: "#B89EFF" },
  { x: 100, y: -160, size: 8, delay: 0.2, color: "#FFAB0F" },
  { x: -80, y: -100, size: 4, delay: 0.4, color: "#6BFFB8" },
  { x: 130, y: -80, size: 6, delay: 0.1, color: "#B89EFF" },
  { x: -140, y: 20, size: 5, delay: 0.6, color: "#FFD054" },
  { x: 140, y: 40, size: 7, delay: 0.3, color: "#B89EFF" },
  { x: -60, y: 100, size: 4, delay: 0.5, color: "#FFAB0F" },
  { x: 80, y: 120, size: 5, delay: 0.15, color: "#6BFFB8" },
  { x: 0, y: -200, size: 10, delay: 0.25, color: "#FFD054" },
  { x: -160, y: -50, size: 4, delay: 0.45, color: "#B89EFF" },
  { x: 160, y: -120, size: 6, delay: 0.35, color: "#FFAB0F" },
  { x: 50, y: 160, size: 5, delay: 0.55, color: "#B89EFF" },
];

const stats = [
  { label: "Stress Reduced", value: "24%", icon: "📉", color: "#6BFFB8" },
  { label: "Session", value: "3 min", icon: "⏱️", color: "#B89EFF" },
  { label: "Streak", value: "7 days", icon: "🔥", color: "#FFAB0F" },
];

export default function CompletionPage() {
  return (
    <>
      <PhoneStatusBar />
      <div className="relative flex flex-col items-center px-5 pb-10 overflow-hidden" style={{ minHeight: "calc(852px - 40px)" }}>

        {/* Ambient background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(184,158,255,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            top: "120px",
          }}
        />

        {/* Sparkle Particles */}
        <div className="absolute top-1/3 left-1/2 pointer-events-none">
          {sparkles.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: s.size,
                height: s.size,
                background: s.color,
                left: s.x,
                top: s.y,
                boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.6, 0],
                scale: [0, 1, 0.8, 0],
                y: [0, -20, -40],
              }}
              transition={{
                duration: 3,
                delay: s.delay,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Star shapes */}
          {[
            { x: -90, y: -140, delay: 0.8 },
            { x: 110, y: -200, delay: 1.1 },
            { x: -50, y: 80, delay: 1.4 },
          ].map((star, i) => (
            <motion.svg
              key={`star-${i}`}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="absolute"
              style={{ left: star.x, top: star.y }}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: [0, 1, 0], rotate: 180, scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, delay: star.delay, repeat: Infinity, repeatDelay: 2 }}
            >
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill="#FFD054"
                stroke="#FFAB0F"
                strokeWidth="1"
              />
            </motion.svg>
          ))}
        </div>

        {/* Lucky Elephant — large and celebratory */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="mt-10 relative z-10"
        >
          <LuckyElephant expression="smiling" size={160} />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-4 relative z-10"
        >
          <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">
            You did amazing!
          </h1>
          <p className="text-sm text-text-secondary mt-2 leading-relaxed">
            You took a moment for yourself.<br />That&rsquo;s the most powerful thing you can do.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-3 mt-8 w-full relative z-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 flex flex-col items-center py-4 px-2 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #1A1425, #241E30)",
                border: `1px solid ${stat.color}33`,
                boxShadow: `0 4px 16px ${stat.color}11`,
              }}
            >
              <span className="text-xl mb-1">{stat.icon}</span>
              <p
                className="text-lg font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-[10px] text-text-muted text-center mt-0.5 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Affirmation Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full mt-4 p-4 rounded-2xl relative z-10"
          style={{
            background: "linear-gradient(135deg, rgba(184,158,255,0.08), rgba(255,171,15,0.06))",
            border: "1px solid rgba(184,158,255,0.2)",
          }}
        >
          <p className="text-sm text-text-secondary text-center leading-relaxed">
            ✨ &nbsp;Stress detected &amp; addressed before it peaked. Your pre-conscious awareness is growing stronger every session.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-col gap-3 w-full mt-6 relative z-10"
        >
          <button
            className="w-full py-4 rounded-2xl font-bold text-base text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #7C4DFF 0%, #B89EFF 50%, #FFAB0F 100%)",
              boxShadow: "0 4px 20px rgba(124, 77, 255, 0.4)",
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}
            />
            <span className="relative z-10">📝 &nbsp;Log Experience</span>
          </button>

          <Link
            href="/dashboard"
            className="w-full py-3.5 rounded-2xl font-semibold text-base text-center transition-all"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(184, 158, 255, 0.35)",
              color: "#B89EFF",
            }}
          >
            Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </>
  );
}
