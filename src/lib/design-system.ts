// Aura Design System — FigBuild 2026
// Vibrant gradients, soft lavender backgrounds, purple accent. Matches Figma exactly.

export const colors = {
  background: '#f8f7ff',
  surface: '#ffffff',
  surfaceElevated: '#ffffff',
  border: '#e9e5f5',
  softBg: '#f1f0fb',

  primary: '#1a1a2e',
  accent: '#7c3aed',
  accentLight: '#ede9fe',
  accentBg: '#8b5cf6',
  link: '#9810fa',

  gradientStart: '#4f46e5',
  gradientMid: '#7c3aed',
  gradientEnd: '#a855f7',

  textPrimary: '#1a1a2e',
  textSecondary: '#64748b',
  textMuted: '#94a3b8',
  textWhite: '#ffffff',

  stressLow: '#22c55e',
  stressMedium: '#eab308',
  stressHigh: '#ef4444',

  relaxGradient: ['#3b82f6', '#06b6d4'],
  regulationGradient: ['#ec4899', '#a855f7'],
  chatGradient: ['#10b981', '#14b8a6'],
} as const;

export const typography = {
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
} as const;

export const shadows = {
  card: '0 2px 12px rgba(124, 58, 237, 0.06), 0 1px 3px rgba(0,0,0,0.04)',
  cardHover: '0 8px 25px rgba(124, 58, 237, 0.12), 0 2px 6px rgba(0,0,0,0.04)',
  purple: '0 4px 20px rgba(139, 92, 246, 0.25)',
  button: '0 4px 15px rgba(139, 92, 246, 0.3)',
} as const;

export type LuckyExpression = 'smiling' | 'sad' | 'crying' | 'mad';
