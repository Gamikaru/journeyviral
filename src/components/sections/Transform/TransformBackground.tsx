// src/components/sections/Transform/TransformBackground.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo, useMemo } from "react";
import "./styles/transform-background.css";

interface TransformBackgroundProps {
  isVisible?: boolean;
}

const TransformBackground = memo(function TransformBackground({
  isVisible = false
}: TransformBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  // Generate particles only once
  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 5
    })), []
  );

  if (!isVisible || prefersReducedMotion) {
    return <div className="transform-bg-static" />;
  }

  return (
    <div className="transform-bg-wrapper">
      {/* Base gradient layer */}
      <div className="transform-bg-gradient-base" />

      {/* Mesh pattern overlay */}
      <div className="transform-bg-mesh-pattern" />

      {/* Primary glow orb - purple/magenta */}
      <motion.div
        className="transform-glow-orb orb-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="orb-inner" />
        <div className="orb-outer" />
      </motion.div>

      {/* Secondary glow orb - cyan */}
      <motion.div
        className="transform-glow-orb orb-secondary"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
          scale: [1.1, 1, 1.1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="orb-inner" />
        <div className="orb-outer" />
      </motion.div>

      {/* Accent orb - pink */}
      <motion.div
        className="transform-glow-orb orb-accent"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.9, 1.1, 0.9],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles */}
      <div className="transform-particles" aria-hidden="true">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0
            }}
            animate={{
              x: [`${particle.x}%`, `${particle.x + 20}%`, `${particle.x}%`],
              y: [`${particle.y}%`, `${particle.y - 30}%`, `${particle.y}%`],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>

      {/* Light rays effect */}
      <div className="transform-light-rays">
        <motion.div
          className="light-ray ray-1"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="light-ray ray-2"
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scaleY: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Vignette overlay */}
      <div className="transform-bg-vignette" />
    </div>
  );
});

export default TransformBackground;