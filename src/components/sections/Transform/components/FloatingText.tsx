"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";
import "../styles/floating-text.css";

interface FloatingTextProps {
  text: string;
  isVisible: boolean;
  shouldAnimate: boolean;
}

const FloatingText = memo(function FloatingText({
  text,
  isVisible,
  shouldAnimate
}: FloatingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldUseAnimation = shouldAnimate && !prefersReducedMotion;

  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 30,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: -20,
      filter: "blur(6px)",
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.6, 1]
      }
    }
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 25,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <motion.div
        key={index}
        className="floating-text-line"
        variants={lineVariants}
      >
        {line}
      </motion.div>
    ));
  };

  if (!shouldUseAnimation) {
    return isVisible ? (
      <div className="floating-text-container">
        <div className="floating-text-static">
          {text.split('\n').map((line, index) => (
            <div key={index} className="floating-text-line">
              {line}
            </div>
          ))}
        </div>
      </div>
    ) : null;
  }

  return (
    <motion.div
      className="floating-text-container"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
    >
      {/* Animated border */}
      <motion.div
        className="floating-text-border"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.8 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Border glow */}
      <motion.div
        className="floating-text-border-glow"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? {
          opacity: [0.4, 0.8, 0.6],
          scale: [0.9, 1.02, 1]
        } : { opacity: 0, scale: 0.9 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Inner content container */}
      <motion.div
        className="floating-text-inner"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Corner accents */}
        {shouldUseAnimation && isVisible && (
          <>
            <motion.div
              className="floating-text-accent floating-text-accent-tl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <motion.div
              className="floating-text-accent floating-text-accent-tr"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
            <motion.div
              className="floating-text-accent floating-text-accent-bl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            />
            <motion.div
              className="floating-text-accent floating-text-accent-br"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            />
          </>
        )}

        {/* Main text content */}
        <motion.div
          className="floating-text-content"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {formatText(text)}
        </motion.div>

        {/* Enhanced shimmer sweep */}
        {shouldUseAnimation && isVisible && (
          <motion.div
            className="floating-text-shimmer"
            initial={{ x: '-150%', opacity: 0 }}
            animate={{
              x: ['100%', '250%'],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 2.5,
              delay: 1.2,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
});

export default FloatingText;
