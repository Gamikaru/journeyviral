// Path: src/components/sections/Transform/TransformSupportingText.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import { X, TrendingUp, Link2, Home } from "lucide-react";
import "./styles/supporting-text-minimal.css";

interface TransformSupportingTextProps {
  isInView: boolean;
  isLowPerf?: boolean;
  glitchActive?: boolean;
}

const TransformSupportingText = memo(function TransformSupportingText({
  isInView,
  isLowPerf = false
}: TransformSupportingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  const messages = [
    {
      id: 1,
      icon: <X size={20} />,
      text: "YOU TRIED EVERYTHING.",
      color: "#ff0066"
    },
    {
      id: 2,
      icon: <TrendingUp size={20} />,
      text: "YOUR COMPETITOR JUST HIT 10M.",
      color: "#00ffff"
    },
    {
      id: 3,
      icon: <Link2 size={20} />,
      text: "THE ALGORITHM ISN'T BROKEN.",
      color: "#ffd700"
    },
    {
      id: 4,
      icon: <Home size={20} />,
      text: "WE DON'T CHASE VIRALITY.",
      color: "#00ff00"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="terminal-window-minimal">
      <div className="terminal-header">
        <span className="terminal-title">VIRAL_DIAGNOSTICS.exe</span>
        <div className="terminal-controls">
          <span className="control control-min" />
          <span className="control control-max" />
          <span className="control control-close" />
        </div>
      </div>

      <motion.div
        className="terminal-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            className="terminal-message"
            variants={itemVariants}
          >
            <span
              className="message-icon"
              style={{ color: message.color }}
            >
              {message.icon}
            </span>
            <span className="message-text">
              {message.text}
            </span>
          </motion.div>
        ))}

        {/* Terminal cursor */}
        {shouldAnimate && (
          <motion.div
            className="terminal-cursor"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "steps(2)"
            }}
          />
        )}
      </motion.div>
    </div>
  );
});

export default TransformSupportingText;