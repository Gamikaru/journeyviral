// Path: src/components/ui/effects/types.ts
// Type definitions for the Effects System

import { ReactNode } from 'react';
import { MotionValue } from 'framer-motion';

// Base effect configuration
export interface BaseEffectConfig {
  intensity?: 'low' | 'medium' | 'high' | 'ultra';
  duration?: number;
  delay?: number;
  disabled?: boolean;
  respectReducedMotion?: boolean;
}

// Color themes for cyberpunk effects
export interface CyberpunkTheme {
  primary: string;
  secondary: string;
  accent: string;
  glow: string;
  background: string;
}

export const CYBERPUNK_THEMES = {
  neon: {
    primary: '#ff00ff',     // Magenta
    secondary: '#00ffff',   // Cyan
    accent: '#ffd700',      // Gold
    glow: '#ff6ec7',        // Pink
    background: '#1a0f2e'   // Deep purple
  },
  matrix: {
    primary: '#00ff00',     // Green
    secondary: '#008000',   // Dark green
    accent: '#40ff40',      // Bright green
    glow: '#80ff80',        // Light green
    background: '#000000'   // Black
  },
  retro: {
    primary: '#ff8c00',     // Orange
    secondary: '#ff69b4',   // Hot pink
    accent: '#00fa9a',      // Medium spring green
    glow: '#ff1493',        // Deep pink
    background: '#2d1b69'   // Dark blue
  },
  vhs: {
    primary: '#ffff00',     // Yellow
    secondary: '#ff0000',   // Red
    accent: '#0000ff',      // Blue
    glow: '#ffffff',        // White
    background: '#000000'   // Black
  }
} as const;

// Text effect configurations
export interface TextEffectConfig extends BaseEffectConfig {
  text: string;
  className?: string;
  theme?: keyof typeof CYBERPUNK_THEMES;
  glitchChars?: string[];
  typeSpeed?: number;
  cursorChar?: string;
}

// Background effect configurations
export interface BackgroundEffectConfig extends BaseEffectConfig {
  gridSize?: number;
  opacity?: number;
  speed?: number;
  theme?: keyof typeof CYBERPUNK_THEMES;
  blendMode?: string;
}

// Particle system configurations
export interface ParticleConfig extends BaseEffectConfig {
  count?: number;
  size?: [number, number];  // [min, max]
  speed?: [number, number]; // [min, max]
  color?: string;
  shape?: 'circle' | 'square' | 'triangle' | 'diamond';
  physics?: 'float' | 'fall' | 'orbit' | 'chaos';
}

// Interactive effect configurations
export interface InteractiveEffectConfig extends BaseEffectConfig {
  children: ReactNode;
  hoverEffect?: 'glow' | 'pulse' | 'glitch' | 'lift' | 'rotate';
  clickEffect?: 'ripple' | 'burst' | 'flash' | 'shake';
  theme?: keyof typeof CYBERPUNK_THEMES;
}

// Filter effect configurations
export interface FilterEffectConfig extends BaseEffectConfig {
  aberrationStrength?: number;
  pixelSize?: number;
  noiseIntensity?: number;
  scanlineOpacity?: number;
  distortionAmount?: number;
}

// Animation presets
export const ANIMATION_PRESETS = {
  glitch: {
    duration: 0.2,
    steps: 3,
    randomness: true
  },
  neon: {
    duration: 2,
    ease: 'easeInOut',
    infinite: true
  },
  vhs: {
    duration: 8,
    ease: 'linear',
    infinite: true
  },
  cyber: {
    duration: 1.5,
    ease: [0.4, 0, 0.2, 1],
    stagger: 0.1
  }
} as const;

// Performance modes
export type PerformanceMode = 'high' | 'medium' | 'low' | 'potato';

export interface PerformanceConfig {
  mode: PerformanceMode;
  maxParticles: number;
  reducedEffects: boolean;
  disableFilters: boolean;
  simplifiedAnimations: boolean;
}

// Effect orchestrator configuration
export interface EffectOrchestratorConfig {
  globalTheme?: keyof typeof CYBERPUNK_THEMES;
  performance?: PerformanceConfig;
  scrollProgress?: MotionValue<number>;
  mousePosition?: { x: number; y: number };
  activeSection?: string;
  glitchTrigger?: boolean;
}

// Component props interfaces
export interface EffectWrapperProps {
  children: ReactNode;
  effect: string;
  config?: BaseEffectConfig;
  className?: string;
}

export interface HigherOrderEffectProps {
  enabled?: boolean;
  config?: BaseEffectConfig;
  className?: string;
}
