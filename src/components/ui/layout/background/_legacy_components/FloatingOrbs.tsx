"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
import "./floating-orbs.css";

interface FloatingOrbsProps {
  scrollYProgress: MotionValue<number>;
  isEnabled?: boolean;
  isMobile?: boolean;
  intensity?: "low" | "medium" | "high";
  onError?: (error: Error) => void;
}

export function FloatingOrbs({
  scrollYProgress,
  isEnabled = true,
  isMobile = false,
  intensity = "medium",
  onError
}: FloatingOrbsProps) {

  // Calculate base intensity
  const baseIntensity = intensity === "low" ? 0.5 : intensity === "high" ? 1.2 : 1;

  // All hooks at top level - MUST be called unconditionally
  const floatingOrb1X = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    intensity === "low"
      ? ["-8%", "24%", "56%", "88%", "96%"]
      : ["-10%", "30%", "70%", "110%", "120%"]
  );
  const floatingOrb1Y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["20%", "60%", "30%", "80%", "10%", "50%"]
  );

  const floatingOrb2X = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["110%", "60%", "20%", "-20%"]
  );
  const floatingOrb2Y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["80%", "20%", "70%", "30%", "90%"]
  );

  const floatingOrb3X = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    ["-15%", "80%", "40%", "115%"]
  );
  const floatingOrb3Y = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["50%", "15%", "85%", "25%"]
  );

  const floatingOrb1Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.7, 0.9, 1],
    [0, 0.8 * baseIntensity, 1 * baseIntensity, 0.9 * baseIntensity, 0.6 * baseIntensity, 0]
  );
  const floatingOrb2Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.7 * baseIntensity, 0.9 * baseIntensity, 0.8 * baseIntensity, 0]
  );
  const floatingOrb3Opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.6, 0.85, 1],
    [0, 0.6 * baseIntensity, 1 * baseIntensity, 0.7 * baseIntensity, 0]
  );

  const floatingOrb1Scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.5, 1.2 * baseIntensity, 0.8, 1.1 * baseIntensity]
  );
  const floatingOrb2Scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0.7, 1 * baseIntensity, 1.3 * baseIntensity, 0.6]
  );
  const floatingOrb3Scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1.1 * baseIntensity, 0.8]
  );

  // Rotation transforms
  const floatingOrb1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const floatingOrb2Rotate = useTransform(scrollYProgress, [0, 1], [0, -270]);
  const floatingOrb3Rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Memoized transforms object
  const transforms = useMemo(() => ({
    floatingOrb1X,
    floatingOrb1Y,
    floatingOrb2X,
    floatingOrb2Y,
    floatingOrb3X,
    floatingOrb3Y,
    floatingOrb1Opacity,
    floatingOrb2Opacity,
    floatingOrb3Opacity,
    floatingOrb1Scale,
    floatingOrb2Scale,
    floatingOrb3Scale,
    floatingOrb1Rotate,
    floatingOrb2Rotate,
    floatingOrb3Rotate
  }), [
    floatingOrb1X, floatingOrb1Y, floatingOrb2X, floatingOrb2Y, floatingOrb3X, floatingOrb3Y,
    floatingOrb1Opacity, floatingOrb2Opacity, floatingOrb3Opacity,
    floatingOrb1Scale, floatingOrb2Scale, floatingOrb3Scale,
    floatingOrb1Rotate, floatingOrb2Rotate, floatingOrb3Rotate
  ]);

  const handleOrbError = useCallback((error: Error) => {
    console.warn("FloatingOrbs error:", error);
    onError?.(error);
  }, [onError]);

  if (!isEnabled) {
    return null;
  }

  return (
    <ErrorBoundary fallback={null} onError={handleOrbError}>
      <div className="floating-orbs-container" role="presentation" aria-hidden="true">
        {/* FLOATING ORBS - Travel across screen during scroll */}
        <motion.div
          className={`unified-floating-orb floating-orb-cyan ${isMobile ? 'mobile-optimized' : ''}`}
          style={{
            left: transforms.floatingOrb1X,
            top: transforms.floatingOrb1Y,
            opacity: transforms.floatingOrb1Opacity,
            scale: transforms.floatingOrb1Scale,
            rotate: transforms.floatingOrb1Rotate
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <motion.div
          className={`unified-floating-orb floating-orb-magenta ${isMobile ? 'mobile-optimized' : ''}`}
          style={{
            left: transforms.floatingOrb2X,
            top: transforms.floatingOrb2Y,
            opacity: transforms.floatingOrb2Opacity,
            scale: transforms.floatingOrb2Scale,
            rotate: transforms.floatingOrb2Rotate
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />

        <motion.div
          className={`unified-floating-orb floating-orb-mixed ${isMobile ? 'mobile-optimized' : ''}`}
          style={{
            left: transforms.floatingOrb3X,
            top: transforms.floatingOrb3Y,
            opacity: transforms.floatingOrb3Opacity,
            scale: transforms.floatingOrb3Scale,
            rotate: transforms.floatingOrb3Rotate
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.6 }}
        />
      </div>
    </ErrorBoundary>
  );
}
