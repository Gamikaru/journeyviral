"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import "../styles/final-card.css";

interface FinalCardProps {
  text: string;
  isVisible: boolean;
  shouldAnimate: boolean;
}

const FinalCard = memo(function FinalCard({
  text,
  isVisible,
  shouldAnimate
}: FinalCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
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
        delay: 0.3
      }
    }
  };

  // Format text with line breaks
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index} className="final-card-line">
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  if (!shouldAnimate) {
    return isVisible ? (
      <div className="final-card">
        <div className="final-card-border" />
        <div className="final-card-glow" />
        <div className="final-card-content">
          <h3 className="final-card-text">{formatText(text)}</h3>
        </div>
      </div>
    ) : null;
  }

  return (
    <motion.div
      className="final-card"
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      role="article"
      aria-label={`Final message: ${text}`}
    >
      {/* Animated neon border */}
      <motion.div
        className="final-card-border"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />

      {/* Pulsing glow effect */}
      <motion.div
        className="final-card-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? {
          opacity: [0, 1, 0.7, 1],
          scale: [0.8, 1.1, 1, 1.05]
        } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Corner accents */}
      {shouldAnimate && isVisible && (
        <>
          <motion.div
            className="final-card-corner final-card-corner-tl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          <motion.div
            className="final-card-corner final-card-corner-tr"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          />
          <motion.div
            className="final-card-corner final-card-corner-bl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          />
          <motion.div
            className="final-card-corner final-card-corner-br"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />
        </>
      )}

      {/* Main content */}
      <motion.div
        className="final-card-content"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="final-card-text">
          {formatText(text)}
        </h3>
      </motion.div>

      {/* Floating particles */}
      {shouldAnimate && isVisible && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="final-card-particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, -80 - (Math.random() * 40)],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3,
                delay: 1.2 + (i * 0.3),
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
});

export default FinalCard;
