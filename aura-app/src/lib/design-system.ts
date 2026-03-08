// Aura Design System — FigBuild 2026
// Calm, warm, trustworthy. Dark mode default. Lavender to warm amber.

export const colors = {
  // Core palette
  background: '#0F0B1A',
  surface: '#1A1425',
  surfaceElevated: '#241E30',
  surfaceHover: '#2E2740',

  // Lavender spectrum
  lavender: {
    50: '#F5F0FF',
    100: '#EDE5FF',
    200: '#D4C4FF',
    300: '#B89EFF',
    400: '#9B75FF',
    500: '#7C4DFF',
    600: '#6B3FE0',
    700: '#5530B8',
    800: '#3D2287',
    900: '#2A1660',
  },

  // Amber spectrum
  amber: {
    50: '#FFF8E8',
    100: '#FFEFC4',
    200: '#FFE08A',
    300: '#FFD054',
    400: '#FFC02E',
    500: '#FFAB0F',
    600: '#E69500',
    700: '#B87500',
    800: '#8A5800',
    900: '#5C3B00',
  },

  // Semantic
  calm: '#B89EFF',
  warning: '#FFD054',
  stress: '#FF6B6B',
  success: '#6BFFB8',

  // Text
  textPrimary: '#F5F0FF',
  textSecondary: '#A89BBF',
  textMuted: '#6B5F80',

  // Gradients (as CSS)
  gradientCalm: 'linear-gradient(135deg, #B89EFF 0%, #FFAB0F 100%)',
  gradientStress: 'linear-gradient(135deg, #FF6B6B 0%, #FFD054 100%)',
  gradientAura: 'linear-gradient(135deg, #7C4DFF 0%, #B89EFF 50%, #FFAB0F 100%)',
  gradientSurface: 'linear-gradient(180deg, #1A1425 0%, #0F0B1A 100%)',
} as const;

export const typography = {
  fontFamily: "'SF Pro Rounded', 'Nunito', system-ui, -apple-system, sans-serif",

  display: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h1: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h2: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h3: {
    fontSize: '1.1rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  body: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  bodySmall: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.02em',
  },
  label: {
    fontSize: '0.8125rem',
    fontWeight: 600,
    lineHeight: 1.3,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.06em',
  },
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
} as const;

export const radii = {
  sm: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 2px 8px rgba(124, 77, 255, 0.08)',
  md: '0 4px 16px rgba(124, 77, 255, 0.12)',
  lg: '0 8px 32px rgba(124, 77, 255, 0.16)',
  glow: '0 0 24px rgba(184, 158, 255, 0.3)',
  glowStrong: '0 0 48px rgba(184, 158, 255, 0.5)',
} as const;

// Lucky the Elephant expressions
export type LuckyExpression = 'smiling' | 'sad' | 'crying' | 'mad';

export const luckyColors = {
  body: '#B89EFF',
  bodyDark: '#9B75FF',
  ears: '#D4C4FF',
  cheeks: '#FFB8D4',
  trunk: '#A88EEF',
} as const;
