// src/components/sections/Transform/components/FloatingText.tsx
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
  shouldAnimate,
}: FloatingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldUseAnimation = shouldAnimate && !prefersReducedMotion;

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Split text into two lines for the specific message
  const lines = text.includes("manufacture")
    ? ["We don't chase virality.", "We manufacture it."]
    : text.split("\n");

  if (!shouldUseAnimation) {
    return isVisible ? (
      <div className="floating-text-modern">
        <div className="floating-message-card">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`floating-message-line ${index === 0 ? "line-setup" : "line-punch"}`}
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
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      role="article"
      aria-label={`Final message: ${text}`}
    >
      {/* Clean gradient border */}
      <motion.div
        className="floating-border"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isVisible
            ? {
                opacity: 1,
                scale: 1,
              }
            : {
                opacity: 0,
                scale: 0.9,
              }
        }
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* Message card */}
      <motion.div
        className="floating-message-card"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {lines.map((line, index) => (
          <motion.p
            key={index}
            className={`floating-message-line ${index === 0 ? "line-setup" : "line-punch"}`}
            variants={lineVariants}
          >
            {line}
          </motion.p>
        ))}

        {/* Subtle accent line */}
        <motion.div
          className="floating-accent-line"
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.div>

      {/* Corner accents - simplified */}
      {shouldUseAnimation && (
        <>
          <motion.div
            className="floating-corner corner-tl"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.4, delay: 1 }}
          />
          <motion.div
            className="floating-corner corner-br"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.4, delay: 1.1 }}
          />
        </>
      )}
    </motion.div>
  );
});

export default FloatingText;
