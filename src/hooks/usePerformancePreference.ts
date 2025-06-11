"use client";

import { useState, useEffect } from 'react';

export type PerformanceMode = 'low' | 'medium' | 'high' | 'minimal';

export function usePerformancePreference(): PerformanceMode {
  const [performanceMode, setPerformanceMode] = useState<PerformanceMode>('medium');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check device capabilities and user preferences
    const getPerformanceMode = (): PerformanceMode => {
      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return 'minimal';
      }

      // Check device memory (if available)
      const navigator = window.navigator as any;
      if (navigator.deviceMemory) {
        if (navigator.deviceMemory <= 2) return 'low';
        if (navigator.deviceMemory <= 4) return 'medium';
        return 'high';
      }

      // Check hardware concurrency
      if (navigator.hardwareConcurrency) {
        if (navigator.hardwareConcurrency <= 2) return 'low';
        if (navigator.hardwareConcurrency <= 4) return 'medium';
        return 'high';
      }

      // Check connection speed (if available)
      const connection = (navigator as any).connection;
      if (connection) {
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          return 'low';
        }
        if (connection.effectiveType === '3g') {
          return 'medium';
        }
      }

      // Check screen size as fallback
      if (window.innerWidth <= 768) return 'medium';
      if (window.innerWidth <= 1024) return 'medium';

      return 'high';
    };

    setPerformanceMode(getPerformanceMode());

    // Listen for changes in performance-related media queries
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setPerformanceMode('minimal');
      } else {
        setPerformanceMode(getPerformanceMode());
      }
    };

    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
      return () => reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    }
  }, []);

  return performanceMode;
}
