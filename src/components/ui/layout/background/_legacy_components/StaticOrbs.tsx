"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
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

  // Performance intensity calculation
  const intensity = performanceMode === "low" ? 0.6 : performanceMode === "high" ? 1.3 : 1;

  // All hooks at top level
  const orb1Y = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.78, 1], ["15%", "35%", "60%", "85%", "95%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 0.28, 0.62, 0.9, 1], ["85%", "65%", "40%", "15%", "5%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 0.45, 0.78, 1], ["50%", "25%", "75%", "90%"]);

  const orb1X = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.62, 0.78, 1], ["20%", "70%", "30%", "80%", "40%", "60%"]);
  const orb2X = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.62, 0.78, 1], ["80%", "30%", "75%", "20%", "65%", "35%"]);
  const orb3X = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["50%", "20%", "80%", "45%"]);

  const orb1Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
    [0.4 * intensity, 0.8 * intensity, 0.6 * intensity, 0.9 * intensity, 0.5 * intensity, 0.3 * intensity, 0.2 * intensity, 0.1 * intensity]
  );

  const orb2Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
    [0.5 * intensity, 0.4 * intensity, 0.9 * intensity, 0.6 * intensity, 0.9 * intensity, 0.5 * intensity, 0.3 * intensity, 0.2 * intensity]
  );

  const orb3Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
    [0.3 * intensity, 0.5 * intensity, 0.4 * intensity, 0.7 * intensity, 0.5 * intensity, 0.8 * intensity, 0.6 * intensity, 0.4 * intensity]
  );

  const orb1Scale = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], [1, 1.2 * intensity, 0.9, 1.4 * intensity, 0.8, 1.1 * intensity, 0.7]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.8, 1.1 * intensity, 1.3 * intensity, 0.9, 1.2 * intensity, 0.8]);
  const orb3Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.1, 0.8, 1.4 * intensity, 1, 0.9]);

  const orb1Rotate = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const orb2Rotate = useTransform(scrollYProgress, [0, 1], [0, -180]);

  // Fourth orb transforms
  const orb4Y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["70%", "20%", "80%", "40%"]);
  const orb4X = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["10%", "90%", "30%", "70%"]);
  const orb4Opacity = useTransform(scrollYProgress, [0, 0.28, 0.62, 0.9, 1], [0, 0.5, 0.8, 0.4, 0.2]);
  const orb4Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.7, 1.2, 0.8, 1.1, 0.6]);

  // Memoized transforms object
  const transforms = useMemo(() => ({
    orb1Y,
    orb2Y,
    orb3Y,
    orb1X,
    orb2X,
    orb3X,
    orb1Opacity,
    orb2Opacity,
    orb3Opacity,
    orb1Scale,
    orb2Scale,
    orb3Scale,
    orb1Rotate,
    orb2Rotate
  }), [orb1Y, orb2Y, orb3Y, orb1X, orb2X, orb3X, orb1Opacity, orb2Opacity, orb3Opacity, orb1Scale, orb2Scale, orb3Scale, orb1Rotate, orb2Rotate]);

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
            rotate: transforms.orb1Rotate
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
            rotate: transforms.orb2Rotate
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
            top: orb4Y,
            left: orb4X,
            opacity: orb4Opacity,
            scale: orb4Scale
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.6 }}
        />
      </div>
    </ErrorBoundary>
  );
}
