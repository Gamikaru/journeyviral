"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import "./styles/transform-typography.css";

interface TransformHeadlineProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const TransformHeadline = memo(function TransformHeadline({
  isInView,
  isLowPerf = false
}: TransformHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  // Stagger animation for each line
  const lineVariants = {
    hidden: {
      opacity: 0,
      x: shouldAnimate ? -30 : 0,
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
      className="transform-headline"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label="We transform your corporate cringe into viral gold"
    >
      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={0}
      >
        <span className="headline-text headline-pink headline-glow">WE TRANSFORM</span>
      </motion.span>

      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={1}
      >
        <span className="headline-text headline-white">YOUR CORPORATE</span>
      </motion.span>

      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={2}
      >
        <span className="headline-text headline-pink headline-glow">CRINGE</span>
        <span className="headline-spacing"> </span>
        <span className="headline-text headline-white">INTO</span>
      </motion.span>

      <motion.span
        className="headline-line"
        variants={lineVariants}
        custom={3}
      >
        <span className={`headline-text headline-gold ${shouldAnimate ? 'with-shimmer' : ''}`}>
          VIRAL GOLD
        </span>
      </motion.span>
    </motion.h2>
  );
});

export default TransformHeadline;