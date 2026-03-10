"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import PhoneStatusBar from "@/components/ui/PhoneStatusBar";
import BottomNav from "@/components/ui/BottomNav";

interface Message {
  id: number;
  sender: "bot" | "user";
  text: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hi Sarah! \u{1F44B} I noticed your stress levels have been moderate today. How are you feeling right now?",
  },
  {
    id: 2,
    sender: "user",
    text: "I've been feeling a bit anxious about my presentation tomorrow.",
  },
  {
    id: 3,
    sender: "bot",
    text: "That's completely understandable. Presentation anxiety is very common. Let me suggest a few things that might help:\n\n1. \u{1F9D8} Try a 5-minute breathing exercise\n2. \u{1F4DD} Write down your key points\n3. \u{1F3B5} Listen to calming music\n\nWould you like to try any of these?",
  },
  {
    id: 4,
    sender: "user",
    text: "The breathing exercise sounds good!",
  },
  {
    id: 5,
    sender: "bot",
    text: "Great choice! I'll guide you through a simple box breathing technique. Ready when you are! \u{1FAC1}",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: "I hear you! Let me think about that and get back to you with some personalized suggestions. \u{1F418}",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <PhoneStatusBar />

      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
        <Link href="/home" className="flex items-center justify-center w-8 h-8 -ml-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
          <span className="text-lg">{"\u{1F418}"}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-bold text-[#1a1a2e] leading-tight">AI Assistant</h1>
          <p className="text-xs text-[#94a3b8]">Lucky is here to help</p>
        </div>
      </div>

      {/* Chat messages area with gradient background */}
      <div className="flex-1 overflow-y-auto gradient-chat-bg" style={{ paddingBottom: "76px" }}>
        <div className="px-4 py-4 space-y-4">
          {messages.map((msg) =>
            msg.sender === "bot" ? (
              <div key={msg.id} className="flex items-start gap-2.5 animate-fade-in-up">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">{"\u{1F418}"}</span>
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 max-w-[78%] shadow-card">
                  <p className="text-sm text-[#1a1a2e] whitespace-pre-line leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex justify-end animate-fade-in-up">
                <div className="gradient-primary rounded-2xl px-4 py-3 max-w-[78%] shadow-purple">
                  <p className="text-sm text-white whitespace-pre-line leading-relaxed">{msg.text}</p>
                </div>
              </div>
            )
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area — sits above the bottom nav */}
      <div className="absolute bottom-[56px] left-0 right-0 px-4 py-3 bg-white border-t border-gray-100 flex items-center gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full bg-[#f1f0fb] rounded-full pl-4 pr-10 py-3 text-sm outline-none placeholder-[#94a3b8] text-[#1a1a2e]"
          />
          {/* Microphone icon inside input */}
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#7c3aed] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="1" width="6" height="11" rx="3" />
              <path d="M19 10v2a7 7 0 01-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </button>
        </div>
        {/* Send button */}
        <button
          onClick={handleSend}
          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-purple transition-transform active:scale-95"
          style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
