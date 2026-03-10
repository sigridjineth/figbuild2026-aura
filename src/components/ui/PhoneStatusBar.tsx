"use client";

export default function PhoneStatusBar({ light = false }: { light?: boolean }) {
  const color = light ? '#ffffff' : '#1a1a2e';
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold" style={{ color }}>
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <svg width="16" height="12" viewBox="0 0 16 12" fill={color}>
          <rect x="0" y="4" width="3" height="8" rx="0.5" opacity="0.3" />
          <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" opacity="0.5" />
          <rect x="9" y="1" width="3" height="11" rx="0.5" opacity="0.7" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill={color}>
          <path d="M7.5 3.5C9.1 3.5 10.6 4.1 11.7 5.2L13 3.9C11.5 2.4 9.6 1.5 7.5 1.5C5.4 1.5 3.5 2.4 2 3.9L3.3 5.2C4.4 4.1 5.9 3.5 7.5 3.5Z" opacity="0.5"/>
          <path d="M7.5 6.5C8.6 6.5 9.6 6.9 10.3 7.6L11.7 6.2C10.6 5.1 9.1 4.5 7.5 4.5C5.9 4.5 4.4 5.1 3.3 6.2L4.7 7.6C5.4 6.9 6.4 6.5 7.5 6.5Z" opacity="0.7"/>
          <circle cx="7.5" cy="10" r="1.5"/>
        </svg>
        <div className="flex items-center">
          <div className="w-6 h-3 border rounded-sm relative" style={{ borderColor: color }}>
            <div className="absolute inset-0.5 rounded-xs" style={{ background: '#22c55e', width: '75%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
