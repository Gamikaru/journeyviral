// src/components/sections/Transform/index.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { usePerformanceMode } from "../../../hooks/usePerformanceMode";
import { TransformSectionProps, ANIMATION_CONSTANTS } from "./types";
import TransformHeadline from "./TransformHeadline";
import TransformCTA from "./TransformCTA";
import TransformSupportingText from "./TransformSupportingText";
// Updated CSS imports - modular approach
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/animations.css";

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONSTANTS.STAGGER_DELAY,
      delayChildren: ANIMATION_CONSTANTS.CHILDREN_DELAY
    }
  }
} as const;

const ITEM_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_CONSTANTS.TRANSITION_DURATION,
      ease: ANIMATION_CONSTANTS.EASING
    }
  }
} as const;

export default function TransformSection({
  className = "",
  "aria-label": ariaLabel = "Transform your corporate content into viral success"
}: TransformSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { isLowPerf } = usePerformanceMode();

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10%",
    amount: 0.2
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, isLowPerf ? 100 : 300);

      return () => clearTimeout(timer);
    }
  }, [isInView, isLowPerf]);

  const sectionClasses = [
    "transform-section",
    "transform-section-unified",
    isLowPerf && "performance-mode",
    shouldAnimate && "animate-in",
    className
  ].filter(Boolean).join(" ");

  return (
    <section
      ref={sectionRef}
      id="transform"
      className={sectionClasses}
      aria-label={ariaLabel}
    >
      <div className="transform-content">
        <motion.div
          className="transform-container"
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="transform-content-grid">
            <motion.div
              className="transform-left-column"
              variants={ITEM_VARIANTS}
            >
              <div className="transform-headline-container">
                <TransformHeadline isInView={isInView} isLowPerf={isLowPerf} />
              </div>
              <div className="transform-cta-container">
                <TransformCTA isInView={isInView} />
              </div>
            </motion.div>

            <motion.div
              className="transform-right-column"
              variants={ITEM_VARIANTS}
            >
              <TransformSupportingText isInView={isInView} isLowPerf={isLowPerf} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}