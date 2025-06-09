// src/components/sections/Expertise/ExpertiseStats.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import ExpertiseCard from "./ExpertiseCard";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";
import "./styles/expertise-stats.css";

interface ExpertiseStatsProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const ExpertiseStats = memo(function ExpertiseStats({
  isInView,
  isLowPerf = false
}: ExpertiseStatsProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  const stats = [
    {
      number: "98%",
      label: "ALGORITHM MASTERY",
      color: "#00ffff",
      gradient: "cyan",
      icon: Target,
      description: "Precision targeting"
    },
    {
      number: "2.5M+",
      label: "AVG VIEWS /VIDEO",
      color: "#00d4ff",
      gradient: "blue",
      icon: TrendingUp,
      description: "Viral reach"
    },
    {
      number: "87%",
      label: "VIRAL HIT RATE",
      color: "#ff00ff",
      gradient: "pink",
      icon: Users,
      description: "Engagement boost"
    },
    {
      number: "420%",
      label: "ROI INCREASE",
      color: "#ff6ec7",
      gradient: "purple",
      icon: DollarSign,
      description: "Revenue growth"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldAnimate ? 0.1 : 0,
        delayChildren: shouldAnimate ? 0.2 : 0
      }
    }
  };

  return (
    <motion.div
      className="expertise-stats-container"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Stats grid */}
      <div className="expertise-stats-grid" role="list" aria-label="Our expertise metrics">
        {stats.map((stat, index) => (
          <ExpertiseCard
            key={stat.label}
            stat={stat}
            index={index}
            shouldAnimate={shouldAnimate}
          />
        ))}
      </div>

      {/* Connecting lines for desktop */}
      {!isLowPerf && (
        <svg
          className="expertise-stats-connections"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff00ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff00ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ff6ec7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff6ec7" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.path
            d="M 125 100 Q 250 50 375 100"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView && shouldAnimate ? {
              pathLength: 1,
              opacity: 1
            } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M 375 100 Q 500 150 625 100"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView && shouldAnimate ? {
              pathLength: 1,
              opacity: 1
            } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.path
            d="M 625 100 Q 750 50 875 100"
            stroke="url(#lineGradient3)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView && shouldAnimate ? {
              pathLength: 1,
              opacity: 1
            } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          />

          {/* Animated dots */}
          {shouldAnimate && [0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="4"
              fill="#fff"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                offsetDistance: ["0%", "100%"]
              }}
              transition={{
                duration: 2,
                delay: 1 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
              style={{
                offsetPath: `path('${
                  i === 0 ? "M 125 100 Q 250 50 375 100" :
                  i === 1 ? "M 375 100 Q 500 150 625 100" :
                  "M 625 100 Q 750 50 875 100"
                }')`
              }}
            />
          ))}

          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
      )}
    </motion.div>
  );
});

export default ExpertiseStats;