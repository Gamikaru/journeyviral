// src/components/sections/Transform/components/FloatingText.tsx
"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { memo, useMemo } from "react";
import { FloatingTextProps } from "../types";
import { useAnimationSequence } from "../hooks/useAnimationSequence";
import "../styles/floating-text.css";
import "../styles/animations.css";

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
} as const;

const LINE_VARIANTS = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: "blur(4px)"
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    filter: "blur(4px)",
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
} as const;

const FloatingText = memo<FloatingTextProps>(function FloatingText({
  text,
  isVisible,
  shouldAnimate,
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldUseAnimation = shouldAnimate && !prefersReducedMotion;

  const { stage } = useAnimationSequence({
    isVisible,
    shouldAnimate: shouldUseAnimation
  });

  const lines = useMemo(() =>
    text.includes("manufacture")
      ? ["We don't chase virality.", "We manufacture it."]
      : text.split("\n"),
    [text]
  );

  // Static mode - show both lines
  if (!shouldUseAnimation) {
    return isVisible ? (
      <div className="floating-text-modern">
        <div className="floating-message-card static">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`floating-message-line ${
                index === 0 ? "line-setup" : "line-punch"
              } centered`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    ) : null;
  }

  return (
    <motion.div
      className="floating-text-modern"
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      role="article"
      aria-label={`Looping message sequence: Currently displaying ${
        stage === 'firstLine' ? '"We don\'t chase virality"' :
        stage === 'secondLine' ? '"We manufacture it"' :
        'complete message'
      }. This message repeats every 7 seconds.`}
      aria-live="polite"
    >
      <div className="floating-message-card animated">
        <AnimatePresence mode="wait">
          {stage === 'firstLine' && (
            <motion.p
              key="first-line-solo"
              className="floating-message-line line-setup centered"
              {...LINE_VARIANTS}
            >
              {lines[0]}
            </motion.p>
          )}

          {stage === 'secondLine' && (
            <motion.p
              key="second-line-solo"
              className="floating-message-line line-punch centered"
              {...LINE_VARIANTS}
            >
              {lines[1]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
});

export default FloatingText;