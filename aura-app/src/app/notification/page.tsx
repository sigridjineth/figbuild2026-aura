"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LuckyElephant from "@/components/lucky/LuckyElephant";

export default function NotificationPage() {
  return (
    <div className="relative h-full bg-background flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient background orbs */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,77,255,0.22) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,171,15,0.16) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-24 -left-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,158,255,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Notification card */}
      <motion.div
        className="relative z-10 w-full max-w-xs"
        initial={{ opacity: 0, y: -28, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Pulsing aura glow behind card */}
        <motion.div
          className="absolute -inset-4 rounded-[2.5rem]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(184,158,255,0.22) 0%, transparent 68%)",
            zIndex: -1,
          }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* iOS-style notification card */}
        <div
          className="rounded-3xl p-6 border border-lavender-900/40"
          style={{
            background: "rgba(26, 20, 37, 0.93)",
            backdropFilter: "blur(28px)",
            boxShadow:
              "0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* App header bar */}
          <div className="flex items-center gap-2.5 mb-5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7C4DFF 0%, #FFAB0F 100%)" }}
            >
              ✦
            </div>
            <div>
              <div className="text-xs font-bold text-text-primary tracking-wide">Aura</div>
              <div className="text-[10px] text-text-muted leading-none">now</div>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-amber-400"
                animate={{ opacity: [1, 0.2, 1], scale: [1, 1.6, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="text-[10px] text-amber-400 font-semibold tracking-wider">LIVE</span>
            </div>
          </div>

          {/* Lucky elephant with pulsing aura */}
          <div className="flex justify-center mb-4 relative">
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 130,
                height: 130,
                background: "radial-gradient(circle, rgba(184,158,255,0.28) 0%, transparent 65%)",
              }}
              animate={{ scale: [0.7, 1.15, 0.7], opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
            <LuckyElephant expression="smiling" size={108} />
          </div>

          {/* Notification message */}
          <div className="text-center mb-5">
            <h2 className="text-base font-bold text-text-primary leading-snug mb-3">
              Your body is preparing a stress response.
            </h2>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,208,84,0.11)",
                border: "1px solid rgba(255,208,84,0.28)",
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-amber-300 flex-shrink-0"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-amber-300">
                Estimated onset: ~12 minutes
              </span>
            </motion.div>
          </div>

          {/* Divider */}
          <div
            className="mb-4"
            style={{ height: 1, background: "rgba(255,255,255,0.07)" }}
          />

          {/* CTA Buttons */}
          <div className="flex gap-3">
            <Link href="/regulate" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-2xl text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #7C4DFF 0%, #B89EFF 100%)",
                  boxShadow: "0 4px 18px rgba(124,77,255,0.35)",
                }}
              >
                Intervene Now
              </motion.button>
            </Link>
            <Link href="/dashboard" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-3 rounded-2xl text-sm font-semibold text-text-secondary"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Monitor Quietly
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Footer message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 mt-5 text-xs text-text-muted text-center"
      >
        I&apos;m here with you ✦
      </motion.p>
    </div>
  );
}
