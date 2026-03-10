"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/home",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1"/>
        <rect x="14" y="3" width="7" height="5" rx="1"/>
        <rect x="14" y="12" width="7" height="9" rx="1"/>
        <rect x="3" y="16" width="7" height="5" rx="1"/>
      </svg>
    ),
  },
  {
    label: "AI Chat",
    href: "/chat",
    icon: (active: boolean) => (
      <div className={`p-2 rounded-2xl transition-all duration-200 ${active ? "gradient-primary shadow-purple" : ""}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#ffffff" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </div>
    ),
  },
  {
    label: "Profile",
    href: "/profile",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#7c3aed" : "#94a3b8"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="absolute bottom-0 left-0 right-0 flex items-center justify-around px-2 py-2 bg-white/90 backdrop-blur-lg border-t border-purple-100/50">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-0.5 py-1 px-3 relative transition-all duration-200"
          >
            {item.icon(!!isActive)}
            <span
              className="text-[11px] font-medium transition-colors"
              style={{ color: isActive ? "#7c3aed" : "#94a3b8" }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
