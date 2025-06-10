"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import "./transition-zones.css";

interface TransitionZonesProps {
  scrollYProgress: MotionValue<number>;
}

export function TransitionZones({ scrollYProgress }: TransitionZonesProps) {
  return (
    <>
      {/* Enhanced section transition zones with more dynamic effects */}
      <motion.div
        className="unified-transition-zone transition-to-transform"
        style={{
          opacity: useTransform(scrollYProgress, [0.08, 0.12, 0.16], [0, 1, 0]),
          scale: useTransform(scrollYProgress, [0.08, 0.12, 0.16], [0.8, 1.1, 0.9])
        }}
      />

      <motion.div
        className="unified-transition-zone transition-to-stats"
        style={{
          opacity: useTransform(scrollYProgress, [0.25, 0.28, 0.32], [0, 1, 0]),
          scale: useTransform(scrollYProgress, [0.25, 0.28, 0.32], [0.9, 1.2, 0.8])
        }}
      />

      <motion.div
        className="unified-transition-zone transition-to-expertise"
        style={{
          opacity: useTransform(scrollYProgress, [0.42, 0.45, 0.48], [0, 1, 0]),
          scale: useTransform(scrollYProgress, [0.42, 0.45, 0.48], [0.7, 1.3, 0.9])
        }}
      />

      <motion.div
        className="unified-transition-zone transition-to-rule1"
        style={{
          opacity: useTransform(scrollYProgress, [0.65, 0.68, 0.72], [0, 1, 0]),
          scale: useTransform(scrollYProgress, [0.65, 0.68, 0.72], [0.8, 1.1, 0.8])
        }}
      />
    </>
  );
}
