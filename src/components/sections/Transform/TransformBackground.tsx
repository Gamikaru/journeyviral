"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import "./styles/transform-background.css";

interface TransformBackgroundProps {
  isVisible?: boolean;
}

const TransformBackground = memo(function TransformBackground({
  isVisible = false
}: TransformBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  // Static version for reduced motion or not visible
  if (!isVisible || prefersReducedMotion) {
    return <div className="transform-bg-static" />;
  }

  return (
    <div className="transform-bg-wrapper">
      {/* Base gradient layer */}
      <div className="transform-bg-base" />

      {/* Enhanced mesh gradient overlay */}
      <div className="transform-bg-mesh" />

      {/* Color enhancement layer */}
      <div className="transform-bg-color-boost" />

      {/* Purple blob - top left diagonal */}
      <motion.div
        className="transform-blob transform-blob-purple"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <motion.div
          className="blob-inner"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Cyan blob - bottom right diagonal */}
      <motion.div
        className="transform-blob transform-blob-cyan"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          x: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 18, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <motion.div
          className="blob-inner"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Pink accent blob - more visible */}
      <motion.div
        className="transform-blob transform-blob-pink"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, -30, 30, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.6 },
          x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 25, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Additional color accent - top right */}
      <motion.div
        className="transform-blob transform-blob-accent"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          opacity: { duration: 1, delay: 0.9 },
          scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />

      {/* Subtle vignette overlay */}
      <div className="transform-bg-vignette" />
    </div>
  );
});

export default TransformBackground;