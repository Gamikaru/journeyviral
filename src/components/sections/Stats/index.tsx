"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import StatsBackground from "./StatsBackground";
import StatsHeadline from "./StatsHeadline";
import StatsGrid from "./StatsGrid";
import "./styles/stats-section.css";

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

interface StatsProps {
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isLowPerf = usePerformanceMode();

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-50px",
    amount: 0.2
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView && !isLowPerf) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 300);

      return () => clearTimeout(timer);
    } else if (isInView && isLowPerf) {
      setShouldAnimate(true);
    }
  }, [isInView, isLowPerf]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className={`stats-section ${isLowPerf ? 'performance-mode' : ''} ${shouldAnimate ? 'animate-in' : ''}`}
      aria-label="Proven results and viral content statistics"
    >
      {/* Background */}
      <div className="stats-bg-container">
        {!isLowPerf ? (
          <StatsBackground isVisible={shouldAnimate} />
        ) : (
          <div className="stats-bg-simple" />
        )}
      </div>

      {/* Main Content Container */}
      <div className="stats-content">
        <div className="stats-inner">
          <motion.div
            className="stats-grid"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Left Column - Stats Cards */}
            <motion.div
              className="stats-left"
              variants={{
                hidden: { opacity: 0, x: -40, y: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
            >
              <StatsGrid isInView={isInView} isLowPerf={isLowPerf} />
            </motion.div>

            {/* Right Column - Headline */}
            <motion.div
              className="stats-right"
              variants={{
                hidden: { opacity: 0, x: 40, y: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.15
                  }
                }
              }}
            >
              <StatsHeadline isInView={isInView} isLowPerf={isLowPerf} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
