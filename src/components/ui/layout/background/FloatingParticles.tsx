"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import "./floating-particles.css";

interface FloatingParticlesProps {
  scrollYProgress: MotionValue<number>;
}

export function FloatingParticles({ scrollYProgress }: FloatingParticlesProps) {
  return (
    <motion.div
      className="unified-floating-particles"
      style={{
        opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 0.8, 0.6, 0.3])
      }}
    />
  );
}
