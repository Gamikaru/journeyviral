"use client";

import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import "../styles/typing-indicator.css";

interface TypingIndicatorProps {
  isVisible: boolean;
  shouldAnimate: boolean;
}

const TypingIndicator = memo(function TypingIndicator({
  isVisible,
  shouldAnimate
}: TypingIndicatorProps) {
  const typingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

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
          variants={typingVariants}
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
              <div className="typing-dots" aria-hidden="true">
                <motion.span
                  className="typing-dot"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0
                  }}
                />
                <motion.span
                  className="typing-dot"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.2
                  }}
                />
                <motion.span
                  className="typing-dot"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: 0.4
                  }}
                />
              </div>
            </div>

            <div className="bubble-tail" aria-hidden="true" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default TypingIndicator;
