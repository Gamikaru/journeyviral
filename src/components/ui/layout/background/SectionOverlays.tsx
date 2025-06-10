"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import "./section-overlays.css";

interface SectionOverlaysProps {
  scrollYProgress: MotionValue<number>;
}

export function SectionOverlays({ scrollYProgress }: SectionOverlaysProps) {
  // Section-specific overlay controls with smoother transitions
  const transformOverlayOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.12, 0.20, 0.28, 0.35],
    [0, 0.8, 1, 0.9, 0]
  );

  const statsOverlayOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.36, 0.45, 0.52],
    [0, 0.9, 1, 0.9, 0]
  );

  const expertiseOverlayOpacity = useTransform(
    scrollYProgress,
    [0.40, 0.45, 0.54, 0.62, 0.68],
    [0, 0.85, 1, 0.8, 0]
  );

  const rule1OverlayOpacity = useTransform(
    scrollYProgress,
    [0.60, 0.68, 0.76, 0.84, 0.90],
    [0, 0.9, 1, 0.8, 0.3]
  );

  const rule2OverlayOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.82, 0.88, 0.94, 1],
    [0, 0.7, 1, 0.6, 0]
  );

  const rule3OverlayOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.88, 0.94, 1],
    [0, 0.8, 1, 0.5]
  );

  return (
    <>
      {/* DRAMATICALLY ENHANCED section-specific overlays */}
      <motion.div
        className="unified-section-overlay unified-overlay-transform"
        style={{ opacity: transformOverlayOpacity }}
      />

      <motion.div
        className="unified-section-overlay unified-overlay-stats"
        style={{ opacity: statsOverlayOpacity }}
      />

      <motion.div
        className="unified-section-overlay unified-overlay-expertise"
        style={{ opacity: expertiseOverlayOpacity }}
      />

      <motion.div
        className="unified-section-overlay unified-overlay-rule1"
        style={{ opacity: rule1OverlayOpacity }}
      />

      <motion.div
        className="unified-section-overlay unified-overlay-rule2"
        style={{ opacity: rule2OverlayOpacity }}
      />

      <motion.div
        className="unified-section-overlay unified-overlay-rule3"
        style={{ opacity: rule3OverlayOpacity }}
      />
    </>
  );
}
