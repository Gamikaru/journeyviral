"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import "./static-orbs.css";

interface StaticOrbsProps {
  scrollYProgress: MotionValue<number>;
  isEnabled?: boolean;
  performanceMode?: "low" | "medium" | "high";
  onError?: (error: Error) => void;
}

export function StaticOrbs({
  scrollYProgress,
  isEnabled = true,
  performanceMode = "medium",
  onError
}: StaticOrbsProps) {

  // Performance-optimized transforms with memoization
  const transforms = useMemo(() => {
    const intensity = performanceMode === "low" ? 0.6 : performanceMode === "high" ? 1.3 : 1;

    return {
      // Dynamic orb positioning with section-specific behaviors
      orb1Y: useTransform(scrollYProgress, [0, 0.28, 0.45, 0.78, 1], ["15%", "35%", "60%", "85%", "95%"]),
      orb2Y: useTransform(scrollYProgress, [0, 0.28, 0.62, 0.9, 1], ["85%", "65%", "40%", "15%", "5%"]),
      orb3Y: useTransform(scrollYProgress, [0, 0.45, 0.78, 1], ["50%", "25%", "75%", "90%"]),

      orb1X: useTransform(scrollYProgress, [0, 0.28, 0.45, 0.62, 0.78, 1], ["20%", "70%", "30%", "80%", "40%", "60%"]),
      orb2X: useTransform(scrollYProgress, [0, 0.28, 0.45, 0.62, 0.78, 1], ["80%", "30%", "75%", "20%", "65%", "35%"]),
      orb3X: useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["50%", "20%", "80%", "45%"]),

      // Enhanced section-specific opacity with performance considerations
      orb1Opacity: useTransform(
        scrollYProgress,
        [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
        [0.4 * intensity, 0.8 * intensity, 0.6 * intensity, 0.9 * intensity, 0.5 * intensity, 0.3 * intensity, 0.2 * intensity, 0.1 * intensity]
      ),

      orb2Opacity: useTransform(
        scrollYProgress,
        [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
        [0.5 * intensity, 0.4 * intensity, 0.9 * intensity, 0.6 * intensity, 0.9 * intensity, 0.5 * intensity, 0.3 * intensity, 0.2 * intensity]
      ),

      orb3Opacity: useTransform(
        scrollYProgress,
        [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
        [0.3 * intensity, 0.5 * intensity, 0.4 * intensity, 0.7 * intensity, 0.5 * intensity, 0.8 * intensity, 0.6 * intensity, 0.4 * intensity]
      ),

      // Dynamic orb scale with energy bursts
      orb1Scale: useTransform(scrollYProgress, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], [1, 1.2 * intensity, 0.9, 1.4 * intensity, 0.8, 1.1 * intensity, 0.7]),
      orb2Scale: useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.8, 1.1 * intensity, 1.3 * intensity, 0.9, 1.2 * intensity, 0.8]),
      orb3Scale: useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.1, 0.8, 1.4 * intensity, 1, 0.9])
    };
  }, [scrollYProgress, performanceMode]);

  const handleOrbError = useCallback((error: Error) => {
    console.warn("StaticOrbs error:", error);
    onError?.(error);
  }, [onError]);

  if (!isEnabled) {
    return null;
  }

  return (
    <ErrorBoundary fallback={null} onError={handleOrbError}>
      <div className="static-orbs-container" role="presentation" aria-hidden="true">
        {/* Enhanced primary orb - cyan with dynamic behavior */}
        <motion.div
          className={`unified-orb unified-orb-cyan performance-${performanceMode}`}
          style={{
            top: transforms.orb1Y,
            left: transforms.orb1X,
            opacity: transforms.orb1Opacity,
            scale: transforms.orb1Scale,
            rotate: useTransform(scrollYProgress, [0, 1], [0, 270])
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Enhanced secondary orb - magenta with counter-rotation */}
        <motion.div
          className={`unified-orb unified-orb-magenta performance-${performanceMode}`}
          style={{
            top: transforms.orb2Y,
            right: transforms.orb2X,
            opacity: transforms.orb2Opacity,
            scale: transforms.orb2Scale,
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180])
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        />

        {/* Enhanced tertiary orb - green accent */}
        <motion.div
          className={`unified-orb unified-orb-green performance-${performanceMode}`}
          style={{
            top: transforms.orb3Y,
            left: transforms.orb3X,
            opacity: transforms.orb3Opacity,
            scale: transforms.orb3Scale
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        />

        {/* Enhanced fourth orb - purple with section-specific activation */}
        <motion.div
          className={`unified-orb unified-orb-purple performance-${performanceMode}`}
          style={{
            top: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["70%", "20%", "80%", "40%"]),
            left: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["10%", "90%", "30%", "70%"]),
            opacity: useTransform(scrollYProgress, [0, 0.28, 0.62, 0.9, 1], [0, 0.5, 0.8, 0.4, 0.2]),
            scale: useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.7, 1.2, 0.8, 1.1, 0.6])
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.6 }}
        />
      </div>
    </ErrorBoundary>
  );
}
