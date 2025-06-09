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
      scale: 0.8,
      x: 20,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      x: -10,
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  };

  // Format text with line breaks
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  if (!shouldAnimate) {
    return isVisible ? (
      <div className={`chat-bubble chat-bubble-${type}`}>
        <div className="bubble-border">
          <div className="border-glow" />
        </div>
        <div className="bubble-content">
          <p className="bubble-text">{formatText(text)}</p>
        </div>
        <div className="bubble-tail" />
      </div>
    ) : null;
  }

  return (
    <motion.div
      className={`chat-bubble chat-bubble-${type}`}
      variants={bubbleVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      onAnimationComplete={onAnimationComplete}
      role="article"
      aria-label={`Message: ${text}`}
    >
      <div className="bubble-border" aria-hidden="true">
        <div className="border-glow" />
      </div>

      <div className="bubble-content">
        <p className="bubble-text">{formatText(text)}</p>
      </div>

      <div className="bubble-tail" aria-hidden="true" />
    </motion.div>
  );
});

export default ChatBubble;
