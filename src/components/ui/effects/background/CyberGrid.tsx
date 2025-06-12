// Path: src/components/ui/effects/background/CyberGrid.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundEffectConfig } from '../types';
import { createThemeCSSVars, prefersReducedMotion } from '../utils/effectHelpers';

interface CyberGridProps extends BackgroundEffectConfig {
  perspective?: boolean;
  animated?: boolean;
  pulseEffect?: boolean;
  lineWidth?: number;
}

export default function CyberGrid({
  gridSize = 50,
  opacity = 0.3,
  speed = 20,
  theme = 'neon',
  perspective = true,
  animated = true,
  pulseEffect = true,
  lineWidth = 1,
  intensity = 'medium',
  disabled = false,
  respectReducedMotion = true,
  className = ''
}: CyberGridProps) {
  const shouldAnimate = !disabled && (!respectReducedMotion || !prefersReducedMotion());
  const themeVars = createThemeCSSVars(theme);

  const intensityConfig = {
    low: { scale: 1.5, blur: 1, brightness: 0.7 },
    medium: { scale: 2, blur: 0, brightness: 1 },
    high: { scale: 2.5, blur: 0, brightness: 1.2 },
    ultra: { scale: 3, blur: 0, brightness: 1.4 }
  };

  const config = intensityConfig[intensity];

  return (
    <div
      className={`cyber-grid-container ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...themeVars
      } as React.CSSProperties}
    >
      {/* Main grid */}
      <motion.div
        className="cyber-grid-main"
        animate={shouldAnimate && animated ? {
          transform: perspective
            ? `perspective(500px) rotateX(60deg) scale(${config.scale}) translateY(${gridSize}px)`
            : `scale(${config.scale}) translateY(${gridSize}px)`
        } : {}}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          inset: '-50%',
          backgroundImage: `
            linear-gradient(var(--effect-primary) ${lineWidth}px, transparent ${lineWidth}px),
            linear-gradient(90deg, var(--effect-secondary) ${lineWidth}px, transparent ${lineWidth}px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity,
          filter: `blur(${config.blur}px) brightness(${config.brightness})`,
          transform: perspective
            ? `perspective(500px) rotateX(60deg) scale(${config.scale})`
            : `scale(${config.scale})`
        }}
      />

      {/* Pulse overlay */}
      {pulseEffect && (
        <motion.div
          className="cyber-grid-pulse"
          animate={shouldAnimate ? {
            opacity: [0.2, 0.6, 0.2]
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at center,
              transparent 0%,
              var(--effect-primary) 50%,
              var(--effect-secondary) 100%
            )`,
            opacity: 0.2,
            mixBlendMode: 'soft-light'
          }}
        />
      )}

      {/* Grid intersection points */}
      <div
        className="cyber-grid-nodes"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at center, var(--effect-accent) 1px, transparent 1px)`,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity: opacity * 0.5,
          animation: shouldAnimate && animated ? 'cyber-grid-nodes-pulse 3s ease-in-out infinite' : 'none'
        }}
      />

      <style jsx>{`
        .cyber-grid-container {
          z-index: 1;
        }

        @keyframes cyber-grid-nodes-pulse {
          0%, 100% {
            opacity: ${opacity * 0.3};
            transform: scale(1);
          }
          50% {
            opacity: ${opacity * 0.8};
            transform: scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cyber-grid-main,
          .cyber-grid-pulse,
          .cyber-grid-nodes {
            animation: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 768px) {
          .cyber-grid-main {
            background-size: ${gridSize * 1.5}px ${gridSize * 1.5}px;
          }
          .cyber-grid-nodes {
            background-size: ${gridSize * 1.5}px ${gridSize * 1.5}px;
          }
        }
      `}</style>
    </div>
  );
}
