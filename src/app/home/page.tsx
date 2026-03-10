"use client";

import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";

export default function HomePage() {
  const stressScore = 45;
  const stressLevel = "Moderate";
  const circumference = 2 * Math.PI * 45; // ~283
  const progressOffset = circumference - (stressScore / 100) * circumference;

  return (
    <div className="relative h-full bg-[#f8f7ff]">
      {/* ── Gradient Header ── */}
      <div className="gradient-header rounded-b-3xl animate-fade-in-up opacity-0 stagger-1">
        <PhoneStatusBar light />
        <div className="flex items-center justify-between px-6 pt-2 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              A
            </div>
            <div>
              <h1 className="text-[17px] font-bold text-white leading-tight">Hi, Alex!</h1>
              <p className="text-[13px] text-white/70">Welcome back</p>
            </div>
          </div>
          <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {/* Notification dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full" />
          </button>
        </div>
      </div>

      {/* ── Scrollable Content ── */}
      <div className="overflow-y-auto pb-24" style={{ height: "calc(100% - 0px)", marginTop: "-8px" }}>

        {/* ── Stress Level Card ── */}
        <div className="bg-white rounded-3xl p-5 mx-5 shadow-card -mt-2 relative animate-fade-in-up opacity-0 stagger-2">
          {/* Header row */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-[13px] font-medium text-gray-500">Current Stress Level</p>
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Circular Gauge */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg width="120" height="120" viewBox="0 0 100 100" className="transform -rotate-90">
                <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="50%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#f1f0fb"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                {/* Foreground arc */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gaugeGradient)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference.toString()}
                  strokeDashoffset={progressOffset}
                  style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
                />
              </svg>
              {/* Center score text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-yellow-500">{stressScore}</span>
              </div>
            </div>

            {/* Label */}
            <p className="text-[15px] font-bold text-gray-800 mt-2">{stressLevel}</p>
            <p className="text-[12px] text-gray-400 mt-0.5">Your stress levels are moderate right now</p>

            {/* Level indicator dots */}
            <div className="flex items-center gap-2 mt-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-50" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 ring-2 ring-yellow-100" />
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-50" />
            </div>
          </div>
        </div>

        {/* ── Health Stats Row ── */}
        <div className="px-5 mt-4 flex gap-3 animate-fade-in-up opacity-0 stagger-3">
          {/* Heart Rate */}
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-card flex items-center gap-3">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-lg">
              ❤️
            </div>
            <div>
              <p className="text-[15px] font-bold text-gray-800 leading-tight">72 bpm</p>
              <p className="text-[11px] text-gray-400">Heart Rate</p>
            </div>
          </div>
          {/* Sleep */}
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-card flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-lg">
              😴
            </div>
            <div>
              <p className="text-[15px] font-bold text-gray-800 leading-tight">7.5h</p>
              <p className="text-[11px] text-gray-400">Sleep</p>
            </div>
          </div>
          {/* Energy */}
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-card flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-lg">
              ⚡
            </div>
            <div>
              <p className="text-[15px] font-bold text-gray-800 leading-tight">85%</p>
              <p className="text-[11px] text-gray-400">Energy</p>
            </div>
          </div>
        </div>

        {/* ── Lucky's Tip ── */}
        <div className="mx-5 mt-4 bg-white rounded-2xl p-4 shadow-card flex gap-3 items-start animate-fade-in-up opacity-0 stagger-4">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl shrink-0">
            🐘
          </div>
          <div>
            <p className="text-[13px] font-bold text-purple-600">Lucky&apos;s Tip</p>
            <p className="text-[13px] text-gray-500 mt-0.5 leading-relaxed">
              Based on your current stress level, I&apos;d recommend a 5-minute breathing exercise. Would you like to try?
            </p>
          </div>
        </div>

        {/* ── Choose Your Mode ── */}
        <div className="px-5 mt-5 animate-fade-in-up opacity-0 stagger-5">
          <h2 className="text-[17px] font-semibold text-gray-800">Choose Your Mode</h2>

          {/* Relax Mode */}
          <div className="gradient-relax rounded-2xl p-4 flex items-center justify-between mt-3 shadow-purple cursor-pointer hover:scale-[1.01] transition-transform duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-lg">
                🧘
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">Relax Mode</p>
                <p className="text-[12px] text-white/70">Guided breathing and calming exercises</p>
              </div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Regulation Mode */}
          <div className="gradient-regulation rounded-2xl p-4 flex items-center justify-between mt-3 shadow-purple cursor-pointer hover:scale-[1.01] transition-transform duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-lg">
                📊
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">Regulation Mode</p>
                <p className="text-[12px] text-white/70">Real-time stress monitoring and intervention</p>
              </div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* Chat with Lucky */}
          <div className="gradient-chat-mode rounded-2xl p-4 flex items-center justify-between mt-3 shadow-purple cursor-pointer hover:scale-[1.01] transition-transform duration-200 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-lg">
                🐘
              </div>
              <div>
                <p className="text-[15px] font-bold text-white">Chat with Lucky</p>
                <p className="text-[12px] text-white/70">Talk to your AI assistant anytime</p>
              </div>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Bottom Navigation ── */}
      <BottomNav />
    </div>
  );
}
