"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import "./mesh-gradient.css";

interface MeshGradientProps {
  scrollYProgress: MotionValue<number>;
}

export function MeshGradient({ scrollYProgress }: MeshGradientProps) {
  // Background texture variations
  const meshOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.8, 1, 0.6, 0.9, 0.7, 0.5]);
  const meshScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);

  return (
    <motion.div
      className="unified-mesh"
      style={{
        opacity: meshOpacity,
        scale: meshScale
      }}
    />
  );
}
