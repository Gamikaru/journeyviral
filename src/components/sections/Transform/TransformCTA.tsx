"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, memo } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import "./styles/cta.css";
import "./styles/animations.css";

interface TransformCTAProps {
  isInView: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}

const TransformCTA = memo(function TransformCTA({
  isInView,
  onClick,
  isLoading = false
}: TransformCTAProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleClick = () => {
    if (isLoading) return;

    setIsClicked(true);
    // Visual feedback
    setTimeout(() => setIsClicked(false), 600);

    // Call parent handler
    if (onClick) {
      onClick();
    } else {
      console.log("CTA clicked - Let's get started!");
    }
  };

  return (
    <motion.button
      className={`transform-cta ${isHovered ? 'is-hovered' : ''} ${isClicked ? 'is-clicked' : ''} ${isLoading ? 'is-loading' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? {
        opacity: 1,
        scale: 1
      } : {
        opacity: 0,
        scale: 0.9
      }}
      transition={{
        duration: prefersReducedMotion ? 0.3 : 0.5,
        delay: prefersReducedMotion ? 0 : 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      whileHover={!prefersReducedMotion && !isLoading ? {
        scale: 1.05,
        y: -2
      } : {}}
      whileTap={!prefersReducedMotion && !isLoading ? {
        scale: 0.98
      } : {}}
      onHoverStart={() => !isLoading && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={isLoading}
      aria-label={isLoading ? "Loading..." : "Get started with viral content transformation"}
      type="button"
    >
      {/* Gradient background layers */}
      <span className="cta-bg-gradient" aria-hidden="true" />
      <span className="cta-bg-glow" aria-hidden="true" />

      {/* Border gradient */}
      <span className="cta-border" aria-hidden="true" />

      {/* Shimmer effect */}
      {!prefersReducedMotion && (
        <span className="cta-shimmer" aria-hidden="true" />
      )}

      {/* Particle effects on hover */}
      <AnimatePresence>
        {isHovered && !prefersReducedMotion && !isLoading && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="cta-particle"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (i - 1) * 30],
                  y: [0, -30 - (i * 10)]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                style={{
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Button content */}
      <span className="cta-content">
        {/* Left icon - sparkles */}
        <motion.span
          className="cta-icon cta-icon-left"
          animate={isHovered && !isLoading ? {
            rotate: [0, -10, 10, 0],
            scale: [1, 1.2, 1]
          } : {}}
          transition={{ duration: 0.4 }}
        >
          <Sparkles size={16} />
        </motion.span>

        {/* Text */}
        <span className="cta-text">
          {isLoading ? "LOADING..." : "LET'S GET STARTED"}
        </span>

        {/* Right icon - arrow */}
        <motion.span
          className="cta-icon cta-icon-right"
          animate={isHovered && !isLoading ? {
            x: [0, 5, 0],
            scale: [1, 1.1, 1]
          } : {
            x: 0,
            scale: 1
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight size={18} />
        </motion.span>
      </span>

      {/* Click ripple effect */}
      <AnimatePresence>
        {isClicked && (
          <motion.span
            className="cta-ripple"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
});

export default TransformCTA;