// src/components/sections/Expertise/ExpertiseHeadline.tsx
"use client";

import { motion } from "framer-motion";
import { memo, useState, ReactNode } from "react";
import "./styles/expertise-typography.css";

interface ExpertiseHeadlineProps {
  isInView: boolean;
  isLowPerf?: boolean;
  performanceLevel?: 'high' | 'medium' | 'low'; // Add this line
}

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Glitch text component for dramatic effect
const GlitchText = ({ children, className = "", delay = 0 }: GlitchTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`glitch-text ${className}`}
      data-text={children}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="glitch-main">{children}</span>
      {isHovered && (
        <>
          <span className="glitch-layer glitch-layer-1" aria-hidden="true">{children}</span>
          <span className="glitch-layer glitch-layer-2" aria-hidden="true">{children}</span>
        </>
      )}
    </motion.span>
  );
};

const ExpertiseHeadline = memo(function ExpertiseHeadline({
  isInView,
  isLowPerf = false,
  performanceLevel = 'high' // Add this with default
}: ExpertiseHeadlineProps) {

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const enableGlitch = !isLowPerf;

  return (
    <motion.header
      className="expertise-headline-container"
      variants={headlineVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Main headline with enhanced glow */}
      <h2 className="expertise-headline-enhanced">
        {enableGlitch ? (
          <>
            <GlitchText className="headline-our" delay={0}>OUR</GlitchText>
            {" "}
            <GlitchText className="headline-viral" delay={0.1}>VIRAL</GlitchText>
            {" "}
            <GlitchText className="headline-expertise" delay={0.2}>EXPERTISE</GlitchText>
          </>
        ) : (
          <>
            <motion.span
              className="headline-our"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              OUR
            </motion.span>
            {" "}
            <motion.span
              className="headline-viral"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              VIRAL
            </motion.span>
            {" "}
            <motion.span
              className="headline-expertise"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              EXPERTISE
            </motion.span>
          </>
        )}
      </h2>

      {/* Enhanced tagline with glow */}
      <motion.p
        className="expertise-tagline-enhanced"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        ENGINEERED FOR ALGORITHMS. DESIGNED TO DOMINATE.
      </motion.p>

      {/* Decorative elements */}
      {performanceLevel !== 'low' && (
        <motion.div
          className="headline-decoration"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="decoration-line decoration-left" />
          <div className="decoration-dot" />
          <div className="decoration-line decoration-right" />
        </motion.div>
      )}
    </motion.header>
  );
});

export default ExpertiseHeadline;