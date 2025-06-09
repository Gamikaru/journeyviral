// src/components/sections/Expertise/ExpertiseMethod.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo, useState } from "react";
import { Brain, Cpu, TrendingUp, Sparkles } from "lucide-react";
import "./styles/expertise-method.css";

interface ExpertiseMethodProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const ExpertiseMethod = memo(function ExpertiseMethod({
  isInView,
  isLowPerf = false
}: ExpertiseMethodProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  // Simplified container variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.article
      className={`expertise-method ${isHovered ? 'is-hovered' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      role="region"
      aria-label="Our viral content methodology"
    >
      {/* Glass card with halo only - remove outline */}
      <div className="method-glass-card" aria-hidden="true">
        <div className="glass-halo" />
      </div>

      <div className="method-content">
        <div className="method-content-inner">
          {/* Formula Section */}
          <div className="formula-container">
            <motion.div
              className="formula-inline"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* AI Component */}
              <span className="formula-component">
                <Brain className="formula-icon" size={24} aria-hidden="true" />
                <span className="formula-label">AI</span>
              </span>

              <span className="formula-operator" aria-label="multiplied by">×</span>

              {/* Psychology Component */}
              <span className="formula-component">
                <Cpu className="formula-icon" size={24} aria-hidden="true" />
                <span className="formula-label">PSYCHOLOGY</span>
              </span>

              <span className="formula-operator" aria-label="multiplied by">×</span>

              {/* Platform Hacks Component */}
              <span className="formula-component">
                <TrendingUp className="formula-icon" size={24} aria-hidden="true" />
                <span className="formula-label">PLATFORM HACKS</span>
              </span>

              <span className="formula-equals" aria-label="equals">=</span>

              {/* Result */}
              <span className="formula-result">VIRAL PRECISION</span>
            </motion.div>
          </div>

          {/* Centered Description */}
          <motion.p
            className="method-description"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We don't guess - we <span className="text-highlight">engineer virality</span>.
            Our method hacks algorithms and exploits platform psychology
            to deliver <span className="text-highlight">unstoppable growth</span>.
          </motion.p>

          {/* Centered CTA Button */}
          <motion.button
            className="method-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={shouldAnimate ? { scale: 1.03, y: -2 } : {}}
            whileTap={{ scale: 0.98 }}
            aria-label="Discover our secret sauce methodology"
          >
            <span className="cta-text">The Secret Sauce?</span>
            <motion.span
              className="cta-sparkle"
              animate={isHovered && shouldAnimate ? {
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              } : {}}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <Sparkles size={18} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
});

export default ExpertiseMethod;