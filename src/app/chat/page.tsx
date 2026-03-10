"use client";

import { useEffect, useRef, useState } from "react";
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
    text: "Hi Alex — I’m noticing a gentle rise in your breathing cadence. Want to regulate before it turns into mental noise?",
  },
  {
    id: 2,
    sender: "user",
    text: "Yes. I feel scattered, but not fully overwhelmed yet.",
  },
  {
    id: 3,
    sender: "bot",
    text: "That’s the perfect moment to intervene. We can do a 90-second reset, a verbal grounding loop, or a tiny plan for the next hour.",
  },
];

const quickReplies = ["Start a 90-second reset", "Help me refocus", "What triggered this?"];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const submit = (value = input) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { id: Date.now(), sender: "user", text: trimmed }]);
    setInput("");

    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "I’m with you. Let’s make the next minute easier, not perfect. Start by unclenching your jaw and giving your exhale two extra beats.",
        },
      ]);
    }, 850);
  };

  return (
    <div className="app-surface h-full overflow-hidden">
      <PhoneStatusBar />

      <div className="flex h-[calc(100%-42px)] flex-col">
        <div className="px-5 pb-4 pt-2">
          <div className="panel flex items-center gap-3 rounded-[28px] px-4 py-4">
            <Link href="/home" className="pill flex h-10 w-10 items-center justify-center rounded-full text-white/76">
              ←
            </Link>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-2xl">
              🐘
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Lucky</p>
              <p className="text-xs text-[#9cf1cc]">Live regulation mode · tuned to your current pattern</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-[190px]">
          <div className="space-y-4">
            <div className="fade-up rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
              Your last three successful interventions: slower exhale, naming the next task, and stepping out of your chair.
            </div>

            {messages.map((message) => (
              <div key={message.id} className={`fade-up flex ${message.sender === "user" ? "justify-end" : "items-start gap-3"}`}>
                {message.sender === "bot" && (
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] text-base">🐘</div>
                )}
                <div className={message.sender === "bot" ? "chat-bot" : "chat-user"}>{message.text}</div>
              </div>
            ))}

            <div className="grid gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => submit(reply)}
                  className="pill rounded-full px-4 py-3 text-left text-sm text-white/72"
                >
                  {reply}
                </button>
              ))}
            </div>

            <div ref={endRef} />
          </div>
        </div>

        <div className="absolute bottom-[104px] left-4 right-4 z-10 rounded-[30px] border border-white/8 bg-[#0b101b]/88 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="field-shell min-h-[56px]">
            <input
              className="field-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") submit();
              }}
              placeholder="Tell Lucky what you’re feeling or what’s coming next…"
            />
            <button onClick={() => submit()} className="cta-primary h-11 min-w-11 px-4 text-sm">
              Send
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
