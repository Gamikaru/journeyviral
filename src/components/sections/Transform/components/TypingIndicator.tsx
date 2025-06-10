"use client";

import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import { TypingIndicatorProps } from "../types";
import "../styles/typing-indicator.css";

const TYPING_VARIANTS = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
} as const;

const DOT_ANIMATION = {
  opacity: [0.3, 1, 0.3],
  scale: [1, 1.2, 1]
} as const;

const DOT_TRANSITION = {
  duration: 1,
  repeat: Infinity
} as const;

const TypingDots = memo(function TypingDots() {
  return (
    <div className="typing-dots" aria-hidden="true">
      <motion.span
        className="typing-dot"
        animate={DOT_ANIMATION}
        transition={{ ...DOT_TRANSITION, delay: 0 }}
      />
      <motion.span
        className="typing-dot"
        animate={DOT_ANIMATION}
        transition={{ ...DOT_TRANSITION, delay: 0.2 }}
      />
      <motion.span
        className="typing-dot"
        animate={DOT_ANIMATION}
        transition={{ ...DOT_TRANSITION, delay: 0.4 }}
      />
    </div>
  );
});

const TypingIndicator = memo<TypingIndicatorProps>(function TypingIndicator({
  isVisible,
  shouldAnimate
}) {
  if (!shouldAnimate) {
    return isVisible ? (
      <div className="typing-indicator">
        <div className="typing-bubble">
          <div className="bubble-border">
            <div className="border-glow typing-glow" />
          </div>
          <div className="bubble-content">
            <div className="typing-dots">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
          <div className="bubble-tail" />
        </div>
      </div>
    ) : null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="typing-indicator"
          variants={TYPING_VARIANTS}
          initial="hidden"
          animate="visible"
          exit="hidden"
          aria-label="Someone is typing"
        >
          <div className="typing-bubble">
            <div className="bubble-border" aria-hidden="true">
              <div className="border-glow typing-glow" />
            </div>
            <div className="bubble-content">
              <TypingDots />
            </div>
            <div className="bubble-tail" aria-hidden="true" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default TypingIndicator;
