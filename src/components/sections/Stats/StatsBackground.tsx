"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import "./styles/stats-background.css";

interface StatsBackgroundProps {
  isVisible?: boolean;
}

const StatsBackground = memo(function StatsBackground({
  isVisible = false
}: StatsBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!isVisible || prefersReducedMotion) {
    return <div className="stats-bg-static" />;
  }

  return (
    <div className="stats-bg-wrapper">
      {/* Base gradient layer */}
      <div className="stats-bg-base" />

      {/* Enhanced mesh gradient overlay */}
      <div className="stats-bg-mesh" />

      {/* Color enhancement layer */}
      <div className="stats-bg-color-boost" />

      {/* Cyan blob - left side */}
      <motion.div
        className="stats-blob stats-blob-cyan"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 22, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Purple blob - right side */}
      <motion.div
        className="stats-blob stats-blob-purple"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 16, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Green accent blob */}
      <motion.div
        className="stats-blob stats-blob-green"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.6 },
          scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Subtle vignette overlay */}
      <div className="stats-bg-vignette" />
    </div>
  );
});

export default StatsBackground;
