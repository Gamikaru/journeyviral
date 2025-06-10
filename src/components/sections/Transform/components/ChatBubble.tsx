// src/components/sections/Transform/components/ChatBubble.tsx
"use client";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import { ChatBubbleProps, ANIMATION_CONSTANTS } from "../types";
import "../styles/chat-bubble.css";
import "../styles/animations.css";

const BUBBLE_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: 20,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      ease: ANIMATION_CONSTANTS.EASING
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    x: -10,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
} as const;

const ChatBubble = memo<ChatBubbleProps>(function ChatBubble({
  text,
  type,
  isVisible,
  shouldAnimate,
  onAnimationComplete
}) {
  const formattedText = useMemo(() =>
    text.split('\n').map((line, index, array) => (
      <span key={index} className="bubble-text-line">
        {line}
        {index < array.length - 1 && <br />}
      </span>
    )), [text]
  );

  const bubbleClasses = `chat-bubble-modern chat-bubble-${type}`;
  const ariaLabel = `Message: ${text}`;

  if (!shouldAnimate) {
    return isVisible ? (
      <div className={bubbleClasses}>
        <div className="bubble-glow-layer" aria-hidden="true" />
        <div className="bubble-glass">
          <p className="bubble-text">{formattedText}</p>
        </div>
        <div className="bubble-tail" aria-hidden="true" />
      </div>
    ) : null;
  }

  return (
    <motion.div
      className={bubbleClasses}
      variants={BUBBLE_VARIANTS}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      onAnimationComplete={onAnimationComplete}
      role="article"
      aria-label={ariaLabel}
    >
      <motion.div
        className="bubble-glow-layer"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      <div className="bubble-glass">
        <p className="bubble-text">{formattedText}</p>
      </div>

      <div className="bubble-tail" aria-hidden="true" />

      {type === 'problem' && (
        <motion.div
          className="bubble-accent-dot"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        />
      )}
    </motion.div>
  );
});

export default ChatBubble;