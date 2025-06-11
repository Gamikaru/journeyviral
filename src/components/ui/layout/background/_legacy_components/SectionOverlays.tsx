"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
import "./section-overlays.css";

interface SectionOverlaysProps {
  scrollYProgress: MotionValue<number>;
  intensity?: "low" | "medium" | "high" | "minimal";
  onError?: (error: Error) => void;
}

export function SectionOverlays({
  scrollYProgress,
  intensity = "medium",
  onError
}: SectionOverlaysProps) {

  // Intensity multiplier calculation
  const intensityMultiplier = intensity === "minimal" ? 0.3 : intensity === "low" ? 0.6 : intensity === "high" ? 1.2 : 1;

  // All hooks at top level
  const transformOverlayOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.12, 0.20, 0.28, 0.35],
    [0, 0.8 * intensityMultiplier, 1 * intensityMultiplier, 0.9 * intensityMultiplier, 0]
  );

  const statsOverlayOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.36, 0.45, 0.52],
    [0, 0.9 * intensityMultiplier, 1 * intensityMultiplier, 0.9 * intensityMultiplier, 0]
  );

  const expertiseOverlayOpacity = useTransform(
    scrollYProgress,
    [0.40, 0.45, 0.54, 0.62, 0.68],
    [0, 0.85 * intensityMultiplier, 1 * intensityMultiplier, 0.8 * intensityMultiplier, 0]
  );

  const rule1OverlayOpacity = useTransform(
    scrollYProgress,
    [0.60, 0.68, 0.76, 0.84, 0.90],
    [0, 0.9 * intensityMultiplier, 1 * intensityMultiplier, 0.8 * intensityMultiplier, 0.3 * intensityMultiplier]
  );

  const rule2OverlayOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.82, 0.88, 0.94, 1],
    [0, 0.7 * intensityMultiplier, 1 * intensityMultiplier, 0.6 * intensityMultiplier, 0]
  );

  const rule3OverlayOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.88, 0.94, 1],
    [0, 0.8 * intensityMultiplier, 1 * intensityMultiplier, 0.5 * intensityMultiplier]
  );

  // Memoized transforms object
  const transforms = useMemo(() => ({
    transformOverlayOpacity,
    statsOverlayOpacity,
    expertiseOverlayOpacity,
    rule1OverlayOpacity,
    rule2OverlayOpacity,
    rule3OverlayOpacity
  }), [transformOverlayOpacity, statsOverlayOpacity, expertiseOverlayOpacity, rule1OverlayOpacity, rule2OverlayOpacity, rule3OverlayOpacity]);

  const handleOverlaysError = useCallback((error: Error) => {
    console.warn("SectionOverlays error:", error);
    onError?.(error);
  }, [onError]);

  if (intensity === "minimal") {
    return null;
  }

  return (
    <ErrorBoundary fallback={null} onError={handleOverlaysError}>
      <div className="overlays-container" role="presentation" aria-hidden="true">
        {/* DRAMATICALLY ENHANCED section-specific overlays */}
        <motion.div
          className={`unified-section-overlay unified-overlay-transform intensity-${intensity}`}
          style={{ opacity: transforms.transformOverlayOpacity }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className={`unified-section-overlay unified-overlay-stats intensity-${intensity}`}
          style={{ opacity: transforms.statsOverlayOpacity }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className={`unified-section-overlay unified-overlay-expertise intensity-${intensity}`}
          style={{ opacity: transforms.expertiseOverlayOpacity }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className={`unified-section-overlay unified-overlay-rule1 intensity-${intensity}`}
          style={{ opacity: transforms.rule1OverlayOpacity }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className={`unified-section-overlay unified-overlay-rule2 intensity-${intensity}`}
          style={{ opacity: transforms.rule2OverlayOpacity }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          className={`unified-section-overlay unified-overlay-rule3 intensity-${intensity}`}
          style={{ opacity: transforms.rule3OverlayOpacity }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </ErrorBoundary>
  );
}
