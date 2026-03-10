"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/home",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "currentColor" : "rgba(195,201,221,0.72)"} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5" />
        <path d="M5.5 10v9.5h13V10" />
        <path d="M10 19.5v-5h4v5" />
      </svg>
    ),
  },
  {
    label: "Insights",
    href: "/dashboard",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "currentColor" : "rgba(195,201,221,0.72)"} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20V10" />
        <path d="M12 20V4" />
        <path d="M19 20v-7" />
      </svg>
    ),
  },
  {
    label: "Lucky",
    href: "/chat",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "currentColor" : "rgba(195,201,221,0.72)"} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 7.5A3.5 3.5 0 0 1 9.5 4H14a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H9l-3 2v-4.2A3.5 3.5 0 0 1 6 14.5z" />
      </svg>
    ),
  },
  {
    label: "Profile",
    href: "/profile",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "currentColor" : "rgba(195,201,221,0.72)"} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c1.8-3 4.15-4.5 7-4.5S17.2 17 19 20" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-floating">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

        return (
          <Link key={item.href} href={item.href} className={`nav-item ${isActive ? "active" : ""}`}>
            {item.icon(Boolean(isActive))}
            <span className="text-[11px] font-semibold tracking-[0.08em]">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
