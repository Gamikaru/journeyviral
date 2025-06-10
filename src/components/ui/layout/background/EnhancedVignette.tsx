"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import "./enhanced-vignette.css";

interface EnhancedVignetteProps {
  scrollYProgress: MotionValue<number>;
}

export function EnhancedVignette({ scrollYProgress }: EnhancedVignetteProps) {
  return (
    <motion.div
      className="unified-vignette"
      style={{
        opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 0.5, 0.7, 1])
      }}
    />
  );
}
