// src/components/sections/Transform/index.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TransformBackground from "./TransformBackground";
import TransformHeadline from "./TransformHeadline";
import TransformCTA from "./TransformCTA";
import TransformSupportingText from "./TransformSupportingText";
import "./styles/transform-section.css";

// Performance detection hook
const usePerformanceMode = () => {
  const [isLowPerf, setIsLowPerf] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const memory = (navigator as any).deviceMemory;
      const connection = (navigator as any).connection;

      if (prefersReducedMotion) setIsLowPerf(true);
      if (memory && memory < 4) setIsLowPerf(true);
      if (connection && (connection.saveData || connection.effectiveType === 'slow-2g')) {
        setIsLowPerf(true);
      }
    };

    checkPerformance();
  }, []);

  return isLowPerf;
};

export default function TransformSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isLowPerf = usePerformanceMode();

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10%",
    amount: 0.2
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, isLowPerf ? 100 : 300);

      return () => clearTimeout(timer);
    }
  }, [isInView, isLowPerf]);

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
      y: 30
    },
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
    <section
      ref={sectionRef}
      id="transform"
      className={`transform-section ${isLowPerf ? 'performance-mode' : ''} ${shouldAnimate ? 'animate-in' : ''}`}
      aria-label="Transform your corporate content into viral success"
    >
      {/* Background */}
      <div className="transform-bg-container" aria-hidden="true">
        {!isLowPerf ? (
          <TransformBackground isVisible={shouldAnimate} />
        ) : (
          <div className="transform-bg-simple" />
        )}
      </div>

      {/* Main Content Container */}
      <div className="transform-content">
        <motion.div
          className="transform-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Headline Section */}
          <motion.div
            className="transform-headline-wrapper"
            variants={itemVariants}
          >
            <TransformHeadline isInView={isInView} isLowPerf={isLowPerf} />
          </motion.div>

          {/* Content Grid */}
          <div className="transform-content-grid">
            {/* Left Column - CTA */}
            <motion.div
              className="transform-cta-wrapper"
              variants={itemVariants}
            >
              <TransformCTA isInView={isInView} />
            </motion.div>

            {/* Right Column - Supporting Text/Chat */}
            <motion.div
              className="transform-chat-wrapper"
              variants={itemVariants}
            >
              <TransformSupportingText isInView={isInView} isLowPerf={isLowPerf} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}