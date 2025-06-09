"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import StatCard from "./StatCard";
import "./styles/stats-grid.css";

interface StatsGridProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const StatsGrid = memo(function StatsGrid({
  isInView,
  isLowPerf = false
}: StatsGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  const stats = [
    {
      number: "10M+",
      label: "VIRAL VIEWS",
      color: "#00ffff",
      glow: "rgba(0, 255, 255, 0.5)",
      bgGlow: "rgba(0, 255, 255, 0.15)",
      icon: "trending"
    },
    {
      number: "500%",
      label: "AVG GROWTH",
      color: "#00ff88",
      glow: "rgba(0, 255, 136, 0.5)",
      bgGlow: "rgba(0, 255, 136, 0.15)",
      icon: "growth"
    },
    {
      number: "1 MONTH",
      label: "VIRAL GUARANTEE",
      color: "#ff00ff",
      glow: "rgba(255, 0, 255, 0.5)",
      bgGlow: "rgba(255, 0, 255, 0.15)",
      icon: "rocket"
    },
    {
      number: "< 7 DAYS",
      label: "TO LAUNCH",
      color: "#ffd700",
      glow: "rgba(255, 215, 0, 0.5)",
      bgGlow: "rgba(255, 215, 0, 0.15)",
      icon: "clock"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldAnimate ? 0.1 : 0,
        delayChildren: shouldAnimate ? 0.3 : 0
      }
    }
  };

  return (
    <motion.div
      className="stats-cards-grid"
      role="list"
      aria-label="Our viral content achievements"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          stat={stat}
          index={index}
          shouldAnimate={shouldAnimate}
        />
      ))}
    </motion.div>
  );
});

export default StatsGrid;
