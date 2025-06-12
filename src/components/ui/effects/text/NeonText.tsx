// Path: src/components/ui/effects/text/NeonText.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextEffectConfig } from '../types';
import { createThemeCSSVars, prefersReducedMotion } from '../utils/effectHelpers';

interface NeonTextProps extends Omit<TextEffectConfig, 'text'> {
  children: React.ReactNode;
  flickerSpeed?: number;
  glowStrength?: number;
  animated?: boolean;
}

export default function NeonText({
  children,
  intensity = 'medium',
  duration = 2,
  theme = 'neon',
  flickerSpeed = 0.1,
  glowStrength = 1,
  animated = true,
  disabled = false,
  respectReducedMotion = true,
  className = ''
}: NeonTextProps) {
  const shouldAnimate = !disabled && (!respectReducedMotion || !prefersReducedMotion());

  const intensityConfig = {
    low: { shadowBlur: 10, shadowSpread: 2, opacity: 0.7 },
    medium: { shadowBlur: 20, shadowSpread: 4, opacity: 0.85 },
    high: { shadowBlur: 30, shadowSpread: 6, opacity: 1 },
    ultra: { shadowBlur: 40, shadowSpread: 8, opacity: 1 }
  };

  const config = intensityConfig[intensity];
  const themeVars = createThemeCSSVars(theme);

  const neonAnimation = shouldAnimate && animated ? {
    textShadow: [
      `0 0 ${config.shadowBlur}px var(--effect-primary), 0 0 ${config.shadowSpread * 2}px var(--effect-primary), 0 0 ${config.shadowSpread * 4}px var(--effect-primary)`,
      `0 0 ${config.shadowBlur * 1.5}px var(--effect-glow), 0 0 ${config.shadowSpread * 3}px var(--effect-glow), 0 0 ${config.shadowSpread * 6}px var(--effect-glow)`,
      `0 0 ${config.shadowBlur}px var(--effect-primary), 0 0 ${config.shadowSpread * 2}px var(--effect-primary), 0 0 ${config.shadowSpread * 4}px var(--effect-primary)`
    ],
    filter: [
      'brightness(1) saturate(1)',
      `brightness(${1 + glowStrength * 0.3}) saturate(${1 + glowStrength * 0.5})`,
      'brightness(1) saturate(1)'
    ]
  } : {};

  return (
    <motion.span
      className={`neon-text ${className}`}
      animate={neonAnimation}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'reverse'
      }}
      style={{
        ...themeVars,
        color: 'var(--effect-primary)',
        textShadow: `0 0 ${config.shadowBlur}px var(--effect-primary), 0 0 ${config.shadowSpread * 2}px var(--effect-primary), 0 0 ${config.shadowSpread * 4}px var(--effect-primary)`,
        opacity: config.opacity,
        filter: `brightness(${1 + glowStrength * 0.2})`,
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        position: 'relative',
        display: 'inline-block'
      } as React.CSSProperties}
    >
      {children}

      {/* Flickering overlay */}
      {shouldAnimate && animated && (
        <motion.span
          className="neon-flicker"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            color: 'var(--effect-glow)',
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }}
          animate={{
            opacity: [0, 0.3, 0, 0.5, 0, 0.2, 0]
          }}
          transition={{
            duration: flickerSpeed,
            repeat: Infinity,
            repeatType: 'loop',
            times: [0, 0.1, 0.2, 0.4, 0.5, 0.8, 1]
          }}
        >
          {children}
        </motion.span>
      )}

      <style jsx>{`
        .neon-text {
          position: relative;
          display: inline-block;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .neon-flicker {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .neon-text {
            animation: none !important;
          }
          .neon-flicker {
            display: none;
          }
        }
      `}</style>
    </motion.span>
  );
}
