"use client";

import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";

export default function LoginPage() {
  return (
    <div className="relative h-full bg-[#f8f7ff]">
      <PhoneStatusBar />

      <div className="px-6 py-4 overflow-y-auto" style={{ height: "calc(100% - 44px)" }}>
        <div className="space-y-5">
          {/* Elephant avatar */}
          <div className="flex flex-col items-center pt-2 opacity-0 animate-fade-in-up stagger-1">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 40%, #a855f7 100%)" }}
            >
              🐘
            </div>
            <h1 className="text-xl font-bold text-[#1a1a2e] mt-3">Welcome to Lucky</h1>
            <p className="text-sm text-[#64748b] mt-1">Your AI-powered stress regulation assistant</p>
          </div>

          {/* Pill tab switcher */}
          <div className="bg-[#f1f0fb] rounded-full p-1 flex gap-1 opacity-0 animate-fade-in-up stagger-2">
            <Link
              href="/signup"
              className="flex-1 text-center py-2 px-6 rounded-full text-sm font-semibold text-[#64748b]"
            >
              Sign Up
            </Link>
            <div
              className="flex-1 text-center py-2 px-6 rounded-full text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              Log In
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4 opacity-0 animate-fade-in-up stagger-3">
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-1.5">Email</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base">📧</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-field"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-1.5">Password</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base">🔒</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
              </div>
              <div className="flex justify-end mt-1.5">
                <Link href="#" className="text-sm text-[#7c3aed] font-medium">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          {/* Log In button */}
          <Link
            href="/home"
            className="block w-full py-3.5 bg-[#1a1a2e] text-white rounded-2xl font-semibold text-base text-center opacity-0 animate-fade-in-up stagger-4"
            style={{ boxShadow: "0 4px 12px rgba(26, 26, 46, 0.15)" }}
          >
            Log In
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-3 opacity-0 animate-fade-in-up stagger-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-[#94a3b8]">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social buttons */}
          <div className="flex gap-3 opacity-0 animate-fade-in-up stagger-5">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-2xl py-3 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-medium text-[#1a1a2e]">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-2xl py-3 shadow-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a1a2e">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-sm font-medium text-[#1a1a2e]">Apple</span>
            </button>
          </div>

          {/* Bottom link */}
          <p className="text-center text-sm text-[#64748b] pb-4 opacity-0 animate-fade-in-up stagger-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#7c3aed] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
