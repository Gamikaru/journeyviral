// src/components/sections/Expertise/ConnectionFlow.tsx
"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  number: string;
  label: string;
  color: string;
  gradient: string;
  icon: LucideIcon;
  description: string;
  glowIntensity: number;
}

interface ConnectionFlowProps {
  stats: StatItem[];
  performanceLevel: 'high' | 'medium' | 'low';
}

const ConnectionFlow = memo(function ConnectionFlow({ stats, performanceLevel }: ConnectionFlowProps) {
  return (
    <svg
      className="connection-flow-svg"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Gradient definitions for flow lines */}
        {stats.map((stat: StatItem, i: number) => (
          <linearGradient
            key={`gradient-${i}`}
            id={`flowGradient${i}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={stat.color} stopOpacity="0" />
            <stop offset="50%" stopColor={stat.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={stats[i + 1]?.color || stat.color} stopOpacity="0" />
          </linearGradient>
        ))}

        {/* Glow filter */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Animated connection paths */}
      {performanceLevel === 'high' && stats.slice(0, -1).map((_: StatItem, i: number) => (
        <g key={`connection-${i}`}>
          {/* Base path */}
          <motion.path
            d={`M ${150 + i * 300} 100 Q ${300 + i * 300} ${i % 2 ? 50 : 150} ${450 + i * 300} 100`}
            stroke={`url(#flowGradient${i})`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.2,
              ease: "easeInOut"
            }}
          />

          {/* Traveling dot */}
          <motion.circle
            r="4"
            fill={stats[i].color}
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              offsetDistance: ["0%", "100%"]
            }}
            transition={{
              duration: 2,
              delay: 1.5 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
            style={{
              offsetPath: `path('M ${150 + i * 300} 100 Q ${300 + i * 300} ${i % 2 ? 50 : 150} ${450 + i * 300} 100')`
            }}
          />

          {/* Energy pulse */}
          <motion.circle
            cx={150 + i * 300}
            cy="100"
            r="20"
            fill={stats[i].color}
            opacity="0.3"
            filter="url(#glow)"
            animate={{
              r: [20, 40, 20],
              opacity: [0.3, 0, 0.3]
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </g>
      ))}
    </svg>
  );
});

export default ConnectionFlow;
