"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
import "./enhanced-vignette.css";

interface EnhancedVignetteProps {
  scrollYProgress: MotionValue<number>;
  intensity?: "subtle" | "normal" | "strong";
  onError?: (error: Error) => void;
}

export function EnhancedVignette({
  scrollYProgress,
  intensity = "normal",
  onError
}: EnhancedVignetteProps) {

  // Intensity multiplier calculation
  const intensityMultiplier = intensity === "subtle" ? 0.7 : intensity === "strong" ? 1.3 : 1;

  // All hooks at top level
  const vignetteOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8 * intensityMultiplier, 0.5 * intensityMultiplier, 0.7 * intensityMultiplier, 1 * intensityMultiplier]
  );
  const vignetteScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  // Memoized transforms object
  const transforms = useMemo(() => ({
    opacity: vignetteOpacity,
    scale: vignetteScale
  }), [vignetteOpacity, vignetteScale]);

  const handleVignetteError = useCallback((error: Error) => {
    console.warn("EnhancedVignette error:", error);
    onError?.(error);
  }, [onError]);

  return (
    <ErrorBoundary fallback={null} onError={handleVignetteError}>
      <div className="vignette-container" role="presentation" aria-hidden="true">
        <motion.div
          className={`unified-vignette intensity-${intensity}`}
          style={{
            opacity: transforms.opacity,
            scale: transforms.scale
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </ErrorBoundary>
  );
}
