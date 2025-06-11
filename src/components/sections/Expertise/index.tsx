// src/components/sections/Expertise/index.tsx
"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import ExpertiseHeadline from "./ExpertiseHeadline";
import ExpertiseStats from "./ExpertiseStats";
import ExpertiseMethod from "./ExpertiseMethod";
import "./styles/expertise-section.css";

// Enhanced performance detection hook
const usePerformanceMode = () => {
  const [isLowPerf, setIsLowPerf] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(1);

  useEffect(() => {
    const checkPerformance = () => {
      // Check various performance indicators
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const memory = (navigator as any).deviceMemory;
      const connection = (navigator as any).connection;
      const hardwareConcurrency = navigator.hardwareConcurrency || 1;

      let score = 1;

      // Reduced motion is highest priority
      if (prefersReducedMotion) {
        setIsLowPerf(true);
        setPerformanceScore(0);
        return;
      }

      // Check device memory (in GB)
      if (memory) {
        if (memory <= 2) score *= 0.3;
        else if (memory <= 4) score *= 0.7;
      }

      // Check CPU cores
      if (hardwareConcurrency <= 2) score *= 0.5;
      else if (hardwareConcurrency <= 4) score *= 0.8;

      // Check connection quality
      if (connection) {
        if (connection.saveData) score = 0;
        else if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') score *= 0.3;
        else if (connection.effectiveType === '3g') score *= 0.7;
      }

      setPerformanceScore(score);
      setIsLowPerf(score < 0.5);
    };

    checkPerformance();

    // Re-check on connection change
    const connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', checkPerformance);
      return () => connection.removeEventListener('change', checkPerformance);
    }
  }, []);

  return { isLowPerf, performanceScore };
};

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { isLowPerf, performanceScore } = usePerformanceMode();

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
    amount: 0.3
  });

  // Optimized scroll-based parallax with throttling
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Simplified transform values for better performance
  const orbY1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isLowPerf ? 0 : -50],
    { clamp: true }
  );

  const orbY2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isLowPerf ? 0 : 50],
    { clamp: true }
  );

  const orbScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1.1, 0.9],
    { clamp: true }
  );

  // Trigger animations when in view
  useEffect(() => {
    if (isInView) {
      // Small delay for smooth entry
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // Memoized container variants for performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.6
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="expertise"
      data-theme="expertise"
      className={`expertise-section expertise-section-unified ${isLowPerf ? 'performance-mode' : ''} ${shouldAnimate ? 'animate-in' : ''}`}
      aria-label="Our viral content expertise and methodology"
      data-performance={performanceScore}
    >
      {/* Remove background container - now handled by UnifiedBackground */}

      {/* Main Content Container with Grid Layout */}
      <div className="expertise-content">
        <motion.div
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {/* Headline Section */}
          <div className="expertise-headline-area">
            <ExpertiseHeadline isInView={isInView} isLowPerf={isLowPerf} />
          </div>

          {/* Stats Section */}
          <div className="expertise-stats-area">
            <ExpertiseStats isInView={isInView} isLowPerf={isLowPerf} />
          </div>

          {/* Method Section */}
          <div className="expertise-method-area">
            <ExpertiseMethod isInView={isInView} isLowPerf={isLowPerf} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}