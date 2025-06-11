"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

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

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const isLowPerf = usePerformanceMode();

  const { scrollY } = useScroll();
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    setShouldAnimate(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-theme="hero"
      className={`hero-section hero-section-unified ${
        isLowPerf ? "performance-mode" : ""
      } ${shouldAnimate ? "animate-in" : ""}`}
      aria-label="Revolutionary AI-powered viral content creation"
      style={{
        padding: 0,
        margin: 0,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        isolation: 'isolate'
      }}
    >
      {/* Hero background video - contained within this section */}
      <HeroBackground />

      {/* Gradient overlay above video but below content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-10" />

      {/* Content container */}
      <div
        className="relative z-30 w-full"
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="mx-auto px-4 text-center max-w-7xl"
          style={{ padding: "0 1rem", margin: "0 auto", width: "100%" }}
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div style={{ opacity: opacityFade }} className="relative z-40">
            <HeroContent
              mousePosition={mousePosition}
              itemVariants={itemVariants}
            />
          </motion.div>
          {/* <div className="relative z-40">
            <HeroStats
              itemVariants={itemVariants}
              opacityFade={opacityFade}
            />
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
