"use client";

import { motion } from "framer-motion";

export type LuckyExpression = "smiling" | "sad" | "crying" | "mad";

interface LuckyElephantProps {
  expression?: LuckyExpression;
  size?: number;
  message?: string;
  className?: string;
}

export default function LuckyElephant({
  expression = "smiling",
  size = 120,
  message,
  className = "",
}: LuckyElephantProps) {
  const getEyes = () => {
    switch (expression) {
      case "smiling":
        return (
          <>
            {/* Happy curved eyes */}
            <path d="M36 42 Q40 38 44 42" stroke="#2A1660" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M56 42 Q60 38 64 42" stroke="#2A1660" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case "sad":
        return (
          <>
            <ellipse cx="40" cy="41" rx="3" ry="3.5" fill="#2A1660" />
            <ellipse cx="60" cy="41" rx="3" ry="3.5" fill="#2A1660" />
            {/* Sad eyebrows */}
            <path d="M34 36 Q40 34 46 36" stroke="#2A1660" strokeWidth="1.5" fill="none" />
            <path d="M54 36 Q60 34 66 36" stroke="#2A1660" strokeWidth="1.5" fill="none" />
          </>
        );
      case "crying":
        return (
          <>
            <ellipse cx="40" cy="41" rx="3" ry="4" fill="#2A1660" />
            <ellipse cx="60" cy="41" rx="3" ry="4" fill="#2A1660" />
            {/* Tears */}
            <motion.ellipse
              cx="43" cy="48" rx="2" ry="3"
              fill="#7CB8FF"
              animate={{ y: [0, 8], opacity: [0.8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.ellipse
              cx="63" cy="48" rx="2" ry="3"
              fill="#7CB8FF"
              animate={{ y: [0, 8], opacity: [0.8, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.7 }}
            />
          </>
        );
      case "mad":
        return (
          <>
            <ellipse cx="40" cy="42" rx="3" ry="3" fill="#2A1660" />
            <ellipse cx="60" cy="42" rx="3" ry="3" fill="#2A1660" />
            {/* Angry eyebrows */}
            <path d="M33 36 L47 39" stroke="#2A1660" strokeWidth="2" strokeLinecap="round" />
            <path d="M67 36 L53 39" stroke="#2A1660" strokeWidth="2" strokeLinecap="round" />
          </>
        );
    }
  };

  const getMouth = () => {
    switch (expression) {
      case "smiling":
        return <path d="M42 56 Q50 64 58 56" stroke="#2A1660" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
      case "sad":
        return <path d="M42 60 Q50 54 58 60" stroke="#2A1660" strokeWidth="2" fill="none" strokeLinecap="round" />;
      case "crying":
        return <ellipse cx="50" cy="58" rx="5" ry="4" fill="#2A1660" />;
      case "mad":
        return <path d="M42 58 L58 58" stroke="#2A1660" strokeWidth="2.5" strokeLinecap="round" />;
    }
  };

  const getCheekColor = () => {
    switch (expression) {
      case "smiling": return "#FFB8D4";
      case "sad": return "#D4C4FF";
      case "crying": return "#A8C4FF";
      case "mad": return "#FF9B9B";
    }
  };

  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large ears */}
        <ellipse cx="20" cy="45" rx="18" ry="22" fill="#D4C4FF" />
        <ellipse cx="20" cy="45" rx="12" ry="16" fill="#EDE5FF" />
        <ellipse cx="80" cy="45" rx="18" ry="22" fill="#D4C4FF" />
        <ellipse cx="80" cy="45" rx="12" ry="16" fill="#EDE5FF" />

        {/* Body / head */}
        <ellipse cx="50" cy="50" rx="30" ry="32" fill="#B89EFF" />

        {/* Trunk */}
        <path
          d="M50 62 Q50 72 45 78 Q42 82 44 85 Q46 88 50 86"
          stroke="#9B75FF"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Cheeks */}
        <circle cx="32" cy="50" r="6" fill={getCheekColor()} opacity="0.5" />
        <circle cx="68" cy="50" r="6" fill={getCheekColor()} opacity="0.5" />

        {/* Eyes and mouth based on expression */}
        {getEyes()}
        {getMouth()}

        {/* Tiny crown / star for Lucky */}
        <motion.g
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transformOrigin: "50px 12px" }}
        >
          <polygon
            points="50,5 53,15 63,15 55,21 58,31 50,25 42,31 45,21 37,15 47,15"
            fill="#FFD054"
            stroke="#FFAB0F"
            strokeWidth="0.5"
            transform="scale(0.5) translate(50, 0)"
          />
        </motion.g>
      </svg>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 px-4 py-2 bg-surface-elevated rounded-2xl text-sm text-text-secondary text-center max-w-[200px]"
        >
          {message}
        </motion.div>
      )}
    </motion.div>
  );
}
