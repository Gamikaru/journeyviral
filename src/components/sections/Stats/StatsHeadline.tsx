"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import "./styles/stats-typography.css";

interface StatsHeadlineProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const StatsHeadline = memo(function StatsHeadline({
  isInView,
  isLowPerf = false
}: StatsHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  const lineVariants = {
    hidden: {
      opacity: 0,
      x: shouldAnimate ? 30 : 0,
      y: shouldAnimate ? 10 : 0,
      filter: "blur(4px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: shouldAnimate ? {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1]
      } : {
        duration: 0.3
      }
    })
  };

  return (
    <motion.h2
      className="stats-headline"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label="And proven results speak louder than promises"
    >
      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={0}
      >
        <span className="headline-text headline-white">AND...</span>
      </motion.span>

      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={1}
      >
        <span className={`headline-text headline-gold ${shouldAnimate ? 'with-shimmer' : ''}`}>
          PROVEN RESULTS
        </span>
      </motion.span>

      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={2}
      >
        <span className="headline-text headline-white">SPEAK LOUDER</span>
      </motion.span>

      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={3}
      >
        <span className="headline-text headline-white">THAN</span>
        <span className="headline-spacing"> </span>
        <span className="headline-text headline-cyan headline-glow">
          PROMISES.
        </span>
      </motion.span>
    </motion.h2>
  );
});

export default StatsHeadline;
