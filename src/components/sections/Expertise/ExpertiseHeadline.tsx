// src/components/sections/Expertise/ExpertiseHeadline.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import "./styles/expertise-typography.css";

interface ExpertiseHeadlineProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const ExpertiseHeadline = memo(function ExpertiseHeadline({
  isInView,
  isLowPerf = false
}: ExpertiseHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  return (
    <motion.header
      className="expertise-headline-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Compact headline */}
      <h2 className="expertise-headline">
        <span className="headline-text headline-white">OUR</span>
        <span className={`headline-text headline-viral ${shouldAnimate ? 'with-animation' : ''}`}>
          VIRAL
        </span>
        <span className="headline-text headline-cyan">EXPERTISE</span>
      </h2>

      {/* Integrated tagline */}
      <p className="expertise-tagline">
        Engineered for algorithms. Designed to dominate.
      </p>
    </motion.header>
  );
});

export default ExpertiseHeadline;