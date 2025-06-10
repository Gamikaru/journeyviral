"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
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

  // Performance-optimized transforms
  const transforms = useMemo(() => {
    const baseIntensity = intensity === "low" ? 0.5 : intensity === "high" ? 1.2 : 1;

    return {
      // Enhanced floating orbs that travel across the screen
      floatingOrb1X: useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["-10%", "30%", "70%", "110%", "120%"].map(v =>
          intensity === "low" ? v.replace(/\d+/, n => String(parseInt(n) * 0.8)) : v
        )
      ),
      floatingOrb1Y: useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        ["20%", "60%", "30%", "80%", "10%", "50%"]
      ),

      floatingOrb2X: useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 1],
        ["110%", "60%", "20%", "-20%"]
      ),
      floatingOrb2Y: useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["80%", "20%", "70%", "30%", "90%"]
      ),

      floatingOrb3X: useTransform(
        scrollYProgress,
        [0, 0.4, 0.8, 1],
        ["-15%", "80%", "40%", "115%"]
      ),
      floatingOrb3Y: useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        ["50%", "15%", "85%", "25%"]
      ),

      // Enhanced opacity and scale with performance considerations
      floatingOrb1Opacity: useTransform(
        scrollYProgress,
        [0, 0.1, 0.4, 0.7, 0.9, 1],
        [0, 0.8 * baseIntensity, 1 * baseIntensity, 0.9 * baseIntensity, 0.6 * baseIntensity, 0]
      ),
      floatingOrb2Opacity: useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [0, 0.7 * baseIntensity, 0.9 * baseIntensity, 0.8 * baseIntensity, 0]
      ),
      floatingOrb3Opacity: useTransform(
        scrollYProgress,
        [0, 0.15, 0.6, 0.85, 1],
        [0, 0.6 * baseIntensity, 1 * baseIntensity, 0.7 * baseIntensity, 0]
      ),

      floatingOrb1Scale: useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 1],
        [0.5, 1.2 * baseIntensity, 0.8, 1.1 * baseIntensity]
      ),
      floatingOrb2Scale: useTransform(
        scrollYProgress,
        [0, 0.4, 0.8, 1],
        [0.7, 1 * baseIntensity, 1.3 * baseIntensity, 0.6]
      ),
      floatingOrb3Scale: useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.9, 1.1 * baseIntensity, 0.8]
      )
    };
  }, [scrollYProgress, intensity]);

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
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
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
            rotate: useTransform(scrollYProgress, [0, 1], [0, -270])
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
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.6 }}
        />
      </div>
    </ErrorBoundary>
  );
}
