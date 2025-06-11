"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
import "./floating-particles.css";

interface FloatingParticlesProps {
  scrollYProgress: MotionValue<number>;
  density?: "low" | "medium" | "high";
  onError?: (error: Error) => void;
}

export function FloatingParticles({
  scrollYProgress,
  density = "medium",
  onError
}: FloatingParticlesProps) {

  // Density multiplier calculation
  const densityMultiplier = density === "low" ? 0.5 : density === "high" ? 1.3 : 1;

  // All hooks at top level
  const particlesOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5 * densityMultiplier, 0.8 * densityMultiplier, 0.6 * densityMultiplier, 0.3 * densityMultiplier]
  );
  const particlesScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  const particlesRotation = useTransform(scrollYProgress, [0, 1], [0, density === "high" ? 10 : 5]);

  // Memoized transforms object
  const transforms = useMemo(() => ({
    opacity: particlesOpacity,
    scale: particlesScale,
    rotation: particlesRotation
  }), [particlesOpacity, particlesScale, particlesRotation]);

  const handleParticlesError = useCallback((error: Error) => {
    console.warn("FloatingParticles error:", error);
    onError?.(error);
  }, [onError]);

  return (
    <ErrorBoundary fallback={null} onError={handleParticlesError}>
      <div className="particles-container" role="presentation" aria-hidden="true">
        <motion.div
          className={`unified-floating-particles density-${density}`}
          style={{
            opacity: transforms.opacity,
            scale: transforms.scale,
            rotate: transforms.rotation
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      </div>
    </ErrorBoundary>
  );
}
