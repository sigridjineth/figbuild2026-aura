# Aura: Pre-Conscious Stress Forecasting

**Your body knows stress is coming before you do.** Aura detects the pre-conscious cascade 5–20 minutes before you feel it, giving you time to regulate and take control.

A speculative wearable + companion app prototype for stress prevention and interoceptive awareness.

---

## The Problem

Stress management tools react *after* anxiety hits. By the time you notice the feeling, your nervous system is already escalating—heart rate climbing, breathing shallow, cortisol flooding. You're fighting an uphill battle.

There's a gap between what your body is doing and what you're aware of. **That gap is where Aura lives.**

---

## The Concept

What if you could feel your stress cascade *before it started*?

Aura pairs a speculative **wearable patch** with a **companion iOS web app** to detect the pre-conscious signature of stress—the subtle shifts in body temperature, skin conductance, breathing rhythm, and muscle tension that precede conscious awareness by 5–20 minutes.

When Aura detects the pattern:
- **You get a gentle notification** with a specific time-to-onset
- **You have time to intervene** with breathwork, movement, or mindfulness
- **The cascade never fully starts**

---

## Target Audience

**Primary:** College students (18–25) facing exam anxiety, social pressure, and high-stakes moments

**Secondary:** Working professionals, individuals managing anxiety disorders, therapists and clinicians, quantified-self enthusiasts

---

## Features & Screens

| Screen | Purpose | Key Elements |
|--------|---------|--------------|
| **Notification** | Hero moment | Your body is preparing a stress response. Pulsing Lucky, estimated onset timer, "Intervene Now" or "Monitor Quietly" buttons |
| **Dashboard** | Daily command center | Stress forecast chart (next 2h), interoceptive signal cards (cortisol, vagal tone, tension), weekly heatmap, awareness score (0–100) |
| **Regulate** | 2-min breathwork | Animated breathing circle, 4-second cycle (inhale–hold–exhale), real-time timer, emotion check-in post-session |
| **Relax** | 4-step guided release | Environment check → Meditation → Affirmations → Completion celebration |
| **Safeguards** | Privacy & ethics | 7 cards: Privacy, Consent, Anti-dependency, Clinical Mode, Emergency, Silent Mode, No Comparison |
| **Stories** | Real use cases | 3 personas (Maya, James, Priya) with situation → detection → intervention → outcome narratives |
| **Completion** | Celebratory moment | "You did it!" with Lucky smiling, confetti motion, encouragement to explore more |
| **Home** | Redirects | Auto-navigates to Notification for first-time experience |

---

## Lucky the Elephant

Lucky is Aura's companion mascot—a warm, encouraging presence throughout your journey. Lucky gives tips during regulation and relax sessions, celebrates your wins, and adapts emotionally to your state.

**4 expressions:**
- **Smiling** — encouraging, celebratory, proud
- **Sad** — empathetic, supportive during struggle
- **Crying** — deep empathy for acute distress
- **Mad** — energized, ready to take action

Lucky floats gently and bobbs with soothing animations, never rushed or clinical.

---

## Tech Stack

- **Framework:** Next.js 16
- **Runtime:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Fonts:** Nunito (rounded, approachable)

---

## Design System

**Aesthetic:** Calm, trustworthy, warm. Dark mode by default.

**Color Palette:**
- **Primary:** Lavender spectrum (#7C4DFF to #EDE5FF) — serene, introspective
- **Accent:** Amber spectrum (#FFAB0F to #FFF8E8) — warmth, energy, hope
- **Semantic:** Stress (#FF6B6B), Success (#6BFFB8), Calm (#B89EFF), Warning (#FFD054)

**Typography:**
- Display: 2rem, 700 weight (headlines)
- H1–H3: Scaled sizing, 600–700 weight
- Body: 1rem, 400 weight
- Captions & labels: Small, high tracking for emphasis

**Spacing & Radii:**
- Generous padding (lg: 1.5rem, xl: 2rem)
- Rounded corners (lg: 1rem, xl: 1.5rem) for approachability
- Breathing room between elements

**Animations:**
- Breathing circles that expand/contract
- Smooth fade-ins and slide transitions
- Pulsing accent elements (glow, dots)
- No sudden shocks — all motion is gentle and intentional

**Layout:** iOS phone frame (390px wide, ~852px tall) with status bar and bottom navigation

---

## Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** 9+

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will hot-reload as you edit files.

### Build & Deploy

```bash
npm run build
npm run start
```

---

## Project Structure

```
aura-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with design system tokens
│   │   ├── page.tsx             # Home (redirects to /notification)
│   │   ├── notification/
│   │   │   └── page.tsx         # Hero notification moment
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Stress forecast & signals dashboard
│   │   ├── regulate/
│   │   │   └── page.tsx         # 2-min breathing session
│   │   ├── relax/
│   │   │   └── page.tsx         # 4-step guided relaxation
│   │   ├── safeguards/
│   │   │   └── page.tsx         # Privacy & safety cards
│   │   ├── stories/
│   │   │   └── page.tsx         # Persona carousel (Maya, James, Priya)
│   │   └── completion/
│   │       └── page.tsx         # Celebratory completion screen
│   ├── components/
│   │   ├── ui/
│   │   │   ├── PhoneStatusBar.tsx
│   │   │   └── BottomNav.tsx
│   │   └── lucky/
│   │       └── LuckyElephant.tsx # Animated mascot with expressions
│   └── lib/
│       └── design-system.ts      # Color, typography, spacing tokens
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## Speculative Technology: The Aura Patch

The wearable patch is a thin, flexible biosensor worn on the upper arm or chest. It continuously measures:

- **Core body temperature** via passive thermal sensors
- **Skin conductance** (galvanic skin response) — sweat changes with nervous activation
- **Breathing rhythm** via chest expansion detection
- **Heart rate variability** — parasympathetic tone
- **Muscle tension** (EMG) in specific zones

**Power:** Body-heat harvesting via thermoelectric generators (Peltier effect), supplemented by a micro-battery. Designed to last 7–14 days per charge.

**Connectivity:** BLE 5.0 to the companion app. Minimal power footprint.

**Processing:** Edge-first. Signal processing happens on-device. Anomaly detection via machine learning (pre-trained models). Only essential data synced securely (with explicit consent).

---

## Use Cases: The Three Personas

### Maya — College Student, 21

**Situation:** Finals week, back-to-back exams, sleep-deprived.

**How Aura Helps:** At 11 PM, typing faster, breathing shallow, heart rate climbing — Aura detects the pre-panic signature. A notification arrives: "Your body needs 3 minutes." She opens the app, breathes with Lucky, and goes back to studying. **The spiral never starts.**

**Outcome:** Finished exams calmer, with better sleep. More confident in high-pressure moments.

---

### James — Working Parent, 34

**Situation:** Six back-to-back meetings, no breaks. Stress compounding throughout the day.

**How Aura Helps:** Aura forecasts a stress cascade building by 3 PM. "Step outside for 5 minutes" — he gets a nudge before he hits the wall. He takes a walk, comes back clearer. **His afternoon is better. His kids get the present dad, not the drained one.**

**Outcome:** Better work-life balance. More emotional availability for family.

---

### Priya — Managing Anxiety, 26

**Situation:** Generalized anxiety with panic attack history. Working with a therapist.

**How Aura Helps:** Over 6 weeks, Priya learns her personal pre-panic signature: a specific breathing pattern, typing rhythm shift, shoulder tension. Now she gets 10–20 minute warnings. **She shares the data with her therapist. Together, they decode her body.**

**Outcome:** Breakthrough in self-detection. Therapy becomes more precise. She feels more in control.

---

## Safeguards: Privacy, Consent & Ethics

Aura is built with mental wellness ethics at its core. Every safeguard is a promise:

1. **Privacy:** All data processed on-device. No cloud storage. No third-party trackers.
2. **Consent:** Granular permissions for every data type. You control what Aura measures.
3. **Anti-Dependency:** The app reduces prompts as your interoceptive awareness grows. Goal: empower independence.
4. **Clinical Mode:** Share anonymized session data with your therapist (opt-in only).
5. **Emergency:** Quick access to crisis resources (988, text HOME, local services) if you're in acute distress.
6. **Silent Mode:** Notification blackout when you choose. Aura respects your boundaries.
7. **No Comparison:** Your journey is yours alone. No leaderboards, no social comparison.

---

## Judging Criteria Alignment

**Prototype Quality:** Fully interactive iOS web prototype with 8 distinct screens, smooth animations, and working state management.

**Design Excellence:** Cohesive design system, thoughtful color palette, micro-interactions that feel intentional and warm.

**Problem-Solution Fit:** Clear problem statement (interoceptive gap), innovative solution (5–20 min early warning), and three detailed use cases proving value.

**Speculative Innovation:** The wearable patch is thoughtfully designed with realistic sensors and low-power thermoelectric harvesting, showing deeper technical thinking.

**User Empathy:** Mascot (Lucky) adds warmth. Safeguards section demonstrates commitment to ethics. Copy is conversational, never clinical.

**Technical Execution:** Modern stack (React 19, Next.js 16, TypeScript), responsive design, smooth animations via Framer Motion, well-organized component structure.

---

## FigBuild 2026 Submission

**Project:** Aura: Pre-Conscious Stress Forecasting

**Category:** Speculative Healthcare + Wellness

**Team:** Built during FigBuild 2026 Hackathon

---

## License

This project is a hackathon submission and prototype. All rights reserved.

---

**I'm here with you. ✦**
