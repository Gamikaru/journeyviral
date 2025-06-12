// Path: src/components/ui/effects/text/GlitchText.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextEffectConfig } from '../types';
import { generateGlitchChars, prefersReducedMotion } from '../utils/effectHelpers';

interface GlitchTextProps extends Omit<TextEffectConfig, 'text'> {
  children: React.ReactNode;
  trigger?: boolean;
  continuous?: boolean;
  layers?: number;
}

export default function GlitchText({
  children,
  intensity = 'medium',
  duration = 0.3,
  trigger = false,
  continuous = false,
  layers = 3,
  glitchChars = generateGlitchChars(30),
  theme = 'neon',
  disabled = false,
  respectReducedMotion = true,
  className = ''
}: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchLayers, setGlitchLayers] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout>();
  const textContent = typeof children === 'string' ? children : '';

  // Respect reduced motion preference
  const shouldAnimate = !disabled && (!respectReducedMotion || !prefersReducedMotion());

  // Generate glitch variants
  const generateGlitchVariants = () => {
    if (!textContent) return [];

    return Array.from({ length: layers }, () => {
      return textContent
        .split('')
        .map(char => {
          if (Math.random() < 0.3) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');
    });
  };

  // Trigger glitch effect
  const triggerGlitch = () => {
    if (!shouldAnimate) return;

    setGlitchLayers(generateGlitchVariants());
    setIsGlitching(true);

    setTimeout(() => {
      setIsGlitching(false);
    }, duration * 1000);
  };

  // Handle trigger prop
  useEffect(() => {
    if (trigger) {
      triggerGlitch();
    }
  }, [trigger]);

  // Handle continuous mode
  useEffect(() => {
    if (continuous && shouldAnimate) {
      const interval = setInterval(() => {
        triggerGlitch();
      }, 2000 + Math.random() * 3000);

      intervalRef.current = interval;
      return () => clearInterval(interval);
    }
  }, [continuous, shouldAnimate]);

  const intensityConfig = {
    low: { translateX: 1, translateY: 1, opacity: 0.3 },
    medium: { translateX: 2, translateY: 2, opacity: 0.5 },
    high: { translateX: 4, translateY: 3, opacity: 0.7 },
    ultra: { translateX: 6, translateY: 4, opacity: 0.9 }
  };

  const config = intensityConfig[intensity];

  const layerColors = {
    neon: ['#ff00ff', '#00ffff', '#ffd700'],
    matrix: ['#00ff00', '#40ff40', '#80ff80'],
    retro: ['#ff8c00', '#ff69b4', '#00fa9a'],
    vhs: ['#ff0000', '#00ff00', '#0000ff']
  };

  return (
    <span
      className={`glitch-text-container ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        '--glitch-intensity': intensity
      } as React.CSSProperties}
    >
      {/* Original text */}
      <span className="glitch-text-original">
        {children}
      </span>

      {/* Glitch layers */}
      <AnimatePresence>
        {shouldAnimate && isGlitching && glitchLayers.map((layer, index) => (
          <motion.span
            key={index}
            className="glitch-text-layer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, config.opacity, 0],
              x: [0, (index % 2 ? config.translateX : -config.translateX), 0],
              y: [0, (index % 3 ? config.translateY : -config.translateY), 0],
              filter: [
                'hue-rotate(0deg)',
                `hue-rotate(${index * 120}deg)`,
                'hue-rotate(0deg)'
              ]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: duration / 3,
              delay: index * 0.02,
              ease: 'easeInOut',
              repeat: 2
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              color: layerColors[theme][index] || layerColors[theme][0],
              mixBlendMode: 'screen',
              pointerEvents: 'none',
              userSelect: 'none'
            }}
          >
            {layer}
          </motion.span>
        ))}
      </AnimatePresence>

      <style jsx>{`
        .glitch-text-container {
          position: relative;
          display: inline-block;
        }

        .glitch-text-original {
          position: relative;
          z-index: 1;
        }

        .glitch-text-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .glitch-text-layer {
            display: none;
          }
        }
      `}</style>
    </span>
  );
}
