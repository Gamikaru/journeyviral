"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import "./mesh-gradient.css";

interface MeshGradientProps {
  scrollYProgress: MotionValue<number>;
  intensity?: "low" | "medium" | "high";
  onError?: (error: Error) => void;
}

export function MeshGradient({
  scrollYProgress,
  intensity = "medium",
  onError
}: MeshGradientProps) {

  // Intensity multiplier calculation
  const intensityMultiplier = intensity === "low" ? 0.6 : intensity === "high" ? 1.2 : 1;

  // All hooks at top level
  const meshOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0.8 * intensityMultiplier, 1 * intensityMultiplier, 0.6 * intensityMultiplier, 0.9 * intensityMultiplier, 0.7 * intensityMultiplier, 0.5 * intensityMultiplier]
  );
  const meshScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);
  const meshRotation = useTransform(scrollYProgress, [0, 1], [0, intensity === "high" ? 5 : 2]);

  // Memoized transforms object
  const transforms = useMemo(() => ({
    meshOpacity,
    meshScale,
    meshRotation
  }), [meshOpacity, meshScale, meshRotation]);

  const handleMeshError = useCallback((error: Error) => {
    console.warn("MeshGradient error:", error);
    onError?.(error);
  }, [onError]);

  return (
    <ErrorBoundary fallback={null} onError={handleMeshError}>
      <div className="mesh-container" role="presentation" aria-hidden="true">
        <motion.div
          className={`unified-mesh intensity-${intensity}`}
          style={{
            opacity: transforms.meshOpacity,
            scale: transforms.meshScale,
            rotate: transforms.meshRotation
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>
    </ErrorBoundary>
  );
}
