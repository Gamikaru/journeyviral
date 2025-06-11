import { useState, useEffect } from 'react';

interface PerformanceMode {
  isLowPerf: boolean;
  performanceScore: number;
}

export const usePerformanceMode = (): PerformanceMode => {
  const [isLowPerf, setIsLowPerf] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(1);

  useEffect(() => {
    const checkPerformance = () => {
      // Check various performance indicators
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const memory = (navigator as any).deviceMemory;
      const connection = (navigator as any).connection;
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;

      let score = 1;

      // Reduced motion is highest priority
      if (prefersReducedMotion) {
        setIsLowPerf(true);
        setPerformanceScore(0);
        return;
      }

      // Check device memory (in GB)
      if (memory) {
        if (memory <= 2) score *= 0.3;
        else if (memory <= 4) score *= 0.7;
      }

      // Check CPU cores
      if (hardwareConcurrency <= 2) score *= 0.5;
      else if (hardwareConcurrency <= 4) score *= 0.8;

      // Check connection quality
      if (connection) {
        if (connection.saveData) score = 0;
        else if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') score *= 0.3;
        else if (connection.effectiveType === '3g') score *= 0.7;
      }

      setPerformanceScore(score);
      setIsLowPerf(score < 0.5);
    };

    checkPerformance();

    // Re-check on connection change
    const connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', checkPerformance);
      return () => connection.removeEventListener('change', checkPerformance);
    }
  }, []);

  return { isLowPerf, performanceScore };
};
