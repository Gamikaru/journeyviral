// Path: src/components/ui/effects/utils/effectHelpers.ts
// Utility functions for effects system

import { CYBERPUNK_THEMES, PerformanceMode } from '../types';

// Generate random glitch characters
export const generateGlitchChars = (count: number = 20): string[] => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return Array.from({ length: count }, () => chars[Math.floor(Math.random() * chars.length)]);
};

// Generate random binary string
export const generateBinaryString = (length: number = 8): string => {
  return Array.from({ length }, () => Math.round(Math.random())).join('');
};

// Calculate effect intensity based on performance mode
export const calculateIntensity = (
  baseIntensity: number,
  performanceMode: PerformanceMode
): number => {
  const multipliers = {
    high: 1.0,
    medium: 0.7,
    low: 0.5,
    potato: 0.2
  };
  return baseIntensity * multipliers[performanceMode];
};

// Get theme colors with fallback
export const getThemeColors = (themeName?: keyof typeof CYBERPUNK_THEMES) => {
  return CYBERPUNK_THEMES[themeName || 'neon'];
};

// Create CSS custom properties from theme
export const createThemeCSSVars = (theme: keyof typeof CYBERPUNK_THEMES) => {
  const colors = getThemeColors(theme);
  return {
    '--effect-primary': colors.primary,
    '--effect-secondary': colors.secondary,
    '--effect-accent': colors.accent,
    '--effect-glow': colors.glow,
    '--effect-bg': colors.background,
  };
};

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll/mouse events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if device supports hardware acceleration
export const supportsHardwareAcceleration = (): boolean => {
  if (typeof window === 'undefined') return false;

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  return !!gl;
};

// Check if reduced motion is preferred
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Generate random position within bounds
export const randomPosition = (
  bounds: { width: number; height: number },
  padding: number = 0
) => ({
  x: padding + Math.random() * (bounds.width - 2 * padding),
  y: padding + Math.random() * (bounds.height - 2 * padding)
});

// Linear interpolation
export const lerp = (start: number, end: number, factor: number): number => {
  return start + (end - start) * factor;
};

// Map a value from one range to another
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

// Clamp value between min and max
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

// Generate unique ID for effects
export const generateEffectId = (prefix: string = 'effect'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Check if element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Get device pixel ratio for high DPI displays
export const getPixelRatio = (): number => {
  return typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
};

// Format hex color to rgba
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Create noise texture data URL
export const createNoiseDataURL = (
  width: number = 64,
  height: number = 64,
  opacity: number = 0.1
): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 255;
    data[i] = noise;     // R
    data[i + 1] = noise; // G
    data[i + 2] = noise; // B
    data[i + 3] = opacity * 255; // A
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
};

// Performance monitoring
export class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;

  measureFPS(): number {
    const now = performance.now();
    this.frameCount++;

    if (now >= this.lastTime + 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
      this.frameCount = 0;
      this.lastTime = now;
    }

    return this.fps;
  }

  getRecommendedPerformanceMode(): PerformanceMode {
    const fps = this.measureFPS();

    if (fps >= 50) return 'high';
    if (fps >= 30) return 'medium';
    if (fps >= 20) return 'low';
    return 'potato';
  }
}
