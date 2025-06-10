import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  isLowPerf: boolean;
  shouldReduceMotion: boolean;
  deviceMemory?: number;
  connectionSpeed?: string;
}

export const usePerformanceMode = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLowPerf: false,
    shouldReduceMotion: false
  });

  useEffect(() => {
    const checkPerformance = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const memory = (navigator as any).deviceMemory;
      const connection = (navigator as any).connection;

      const shouldReduceMotion = prefersReducedMotion;
      const isLowPerf =
        prefersReducedMotion ||
        (memory && memory < 4) ||
        (connection && (connection.saveData || connection.effectiveType === 'slow-2g'));

      setMetrics({
        isLowPerf,
        shouldReduceMotion,
        deviceMemory: memory,
        connectionSpeed: connection?.effectiveType
      });
    };

    checkPerformance();
  }, []);

  return metrics;
};
