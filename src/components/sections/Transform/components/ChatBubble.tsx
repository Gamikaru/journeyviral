// src/components/sections/Transform/components/ChatBubble.tsx
"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import "../styles/chat-bubble.css";

interface ChatBubbleProps {
  text: string;
  type: 'setup' | 'problem' | 'bridge';
  isVisible: boolean;
  shouldAnimate: boolean;
  onAnimationComplete?: () => void;
}

const ChatBubble = memo(function ChatBubble({
  text,
  type,
  isVisible,
  shouldAnimate,
  onAnimationComplete
}: ChatBubbleProps) {
  const bubbleVariants = {
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
        ease: [0.22, 1, 0.36, 1]
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
  };

  // Format text with line breaks
  const formatText = (text: string) => {
    return text.split('\n').map((line, index, array) => (
      <span key={index} className="bubble-text-line">
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  };

  if (!shouldAnimate) {
    return isVisible ? (
      <div className={`chat-bubble-modern chat-bubble-${type}`}>
        <div className="bubble-glow-layer" aria-hidden="true" />
        <div className="bubble-glass">
          <p className="bubble-text">{formatText(text)}</p>
        </div>
        <div className="bubble-tail" aria-hidden="true" />
      </div>
    ) : null;
  }

  return (
    <motion.div
      className={`chat-bubble-modern chat-bubble-${type}`}
      variants={bubbleVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      onAnimationComplete={onAnimationComplete}
      role="article"
      aria-label={`Message: ${text}`}
    >
      {/* Glow effect layer */}
      <motion.div
        className="bubble-glow-layer"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* Glass bubble */}
      <div className="bubble-glass">
        <p className="bubble-text">{formatText(text)}</p>
      </div>

      {/* Tail */}
      <div className="bubble-tail" aria-hidden="true" />

      {/* Accent dot for certain types */}
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