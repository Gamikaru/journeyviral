// src/components/sections/Expertise/ExpertiseBackground.tsx
"use client";

import { motion, MotionValue, useReducedMotion } from "framer-motion";
import { memo, useMemo } from "react";
import "./styles/expertise-background.css";

interface ExpertiseBackgroundProps {
  isVisible?: boolean;
  scrollYProgress?: MotionValue<number>;
  orbTransforms?: {
    orbY1: MotionValue<number>;
    orbX1: MotionValue<number>;
    orbY2: MotionValue<number>;
    orbX2: MotionValue<number>;
    orbScale: MotionValue<number>;
  };
}

const ExpertiseBackground = memo(function ExpertiseBackground({
  isVisible = false,
  scrollYProgress,
  orbTransforms
}: ExpertiseBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  // Optimize particle generation
  const particles = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: 2 + Math.random() * 2,
      duration: 15 + Math.random() * 10,
      delay: i * 0.5,
      initialX: Math.random() * 100
    })), []
  );

  if (!isVisible) {
    return <div className="expertise-bg-static" />;
  }

  return (
    <div className="expertise-bg-wrapper">
      {/* Enhanced gradient mesh with better performance */}
      <div className="expertise-bg-mesh-enhanced" />

      {/* Refined orb system - single element with pseudo-elements */}
      <motion.div
        className="expertise-orb-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={orbTransforms && !prefersReducedMotion ? {
          x: orbTransforms.orbX1,
          y: orbTransforms.orbY1,
        } : {}}
      />

      <motion.div
        className="expertise-orb-secondary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        style={orbTransforms && !prefersReducedMotion ? {
          x: orbTransforms.orbX2,
          y: orbTransforms.orbY2,
        } : {}}
      />

      {/* Optimized particle field */}
      {!prefersReducedMotion && (
        <div className="expertise-particle-field" aria-hidden="true">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="particle-enhanced"
              initial={{
                x: `${particle.initialX}%`,
                y: "110%",
                opacity: 0
              }}
              animate={{
                y: "-10%",
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear"
              }}
              style={{
                left: `${particle.initialX}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced vignette with gradient */}
      <div className="expertise-bg-vignette-enhanced" />

      {/* Animated accent lines */}
      <div className="expertise-accent-lines" aria-hidden="true">
        <motion.div
          className="accent-line accent-line-1"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="accent-line accent-line-2"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scaleX: [1, 0.8, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Subtle noise overlay for texture */}
      <div className="expertise-bg-noise-subtle" />
    </div>
  );
});

export default ExpertiseBackground;