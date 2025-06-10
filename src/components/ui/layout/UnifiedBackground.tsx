// src/components/layout/UnifiedBackground.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./unified-background.css";

export default function UnifiedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through entire page
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Enhanced color transitions with more variation
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 1],
    [
      "rgb(10, 6, 22)",      // Hero - deep purple
      "rgb(8, 4, 18)",       // Hero to Transform transition
      "rgb(5, 2, 8)",        // Transform - darker purple
      "rgb(12, 8, 28)",      // Stats - enhanced blue-purple
      "rgb(10, 6, 22)",      // Expertise - back to purple but different tone
      "rgb(4, 2, 8)",        // Rule1 transition - very dark
      "rgb(0, 0, 0)"         // Rule1 - pure black
    ]
  );

  // Multiple gradient orbs with section-specific behaviors
  const orb1Y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["15%", "45%", "75%", "90%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ["85%", "55%", "25%", "10%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "30%", "70%"]);

  const orb1X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["20%", "60%", "30%", "70%", "40%"]);
  const orb2X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["80%", "40%", "75%", "25%", "60%"]);
  const orb3X = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["50%", "25%", "75%", "50%"]);

  // Section-specific opacity with more dramatic changes
  const orb1Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 1],
    [0.3, 0.6, 0.4, 0.8, 0.5, 0.2, 0.1] // More dramatic for Transform and Stats
  );

  const orb2Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 1],
    [0.4, 0.3, 0.7, 0.5, 0.8, 0.4, 0.2] // Peaks at Stats and Expertise
  );

  const orb3Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 1],
    [0.2, 0.4, 0.3, 0.6, 0.4, 0.6, 0.3] // More active in middle sections
  );

  // Enhanced orb scale variations
  const orb1Scale = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.78, 1], [1, 1.3, 0.9, 1.1, 0.7]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.78, 1], [0.8, 0.9, 1.2, 0.8, 1]);
  const orb3Scale = useTransform(scrollYProgress, [0, 0.45, 0.62, 1], [1.1, 0.8, 1.3, 0.9]);

  // New: Section-specific rotation for dynamic feel
  const orb1Rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orb2Rotate = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <>
      {/* Fixed background that covers entire viewport */}
      <motion.div
        className="unified-background"
        style={{ backgroundColor }}
      >
        {/* Primary gradient orb - cyan with enhanced behavior */}
        <motion.div
          className="unified-orb unified-orb-cyan"
          style={{
            top: orb1Y,
            left: orb1X,
            opacity: orb1Opacity,
            scale: orb1Scale,
            rotate: orb1Rotate
          }}
        />

        {/* Secondary gradient orb - magenta with enhanced behavior */}
        <motion.div
          className="unified-orb unified-orb-magenta"
          style={{
            top: orb2Y,
            right: orb2X,
            opacity: orb2Opacity,
            scale: orb2Scale,
            rotate: orb2Rotate
          }}
        />

        {/* Tertiary gradient orb - green accent */}
        <motion.div
          className="unified-orb unified-orb-green"
          style={{
            top: orb3Y,
            left: orb3X,
            opacity: orb3Opacity,
            scale: orb3Scale
          }}
        />

        {/* New: Fourth orb for more complexity */}
        <motion.div
          className="unified-orb unified-orb-purple"
          style={{
            top: useTransform(scrollYProgress, [0, 0.5, 1], ["70%", "20%", "80%"]),
            left: useTransform(scrollYProgress, [0, 0.5, 1], ["10%", "90%", "30%"]),
            opacity: useTransform(scrollYProgress, [0, 0.28, 0.62, 1], [0, 0.4, 0.6, 0.2]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.1, 0.8])
          }}
        />

        {/* Enhanced mesh gradient overlay */}
        <div className="unified-mesh" />

        {/* Enhanced section-specific accent layers with more variation */}
        <motion.div
          className="unified-accent-layer unified-accent-transform"
          style={{
            opacity: useTransform(scrollYProgress, [0.05, 0.12, 0.28, 0.35], [0, 0.8, 1, 0])
          }}
        />

        <motion.div
          className="unified-accent-layer unified-accent-stats"
          style={{
            opacity: useTransform(scrollYProgress, [0.25, 0.32, 0.45, 0.52], [0, 0.9, 1, 0])
          }}
        />

        <motion.div
          className="unified-accent-layer unified-accent-expertise"
          style={{
            opacity: useTransform(scrollYProgress, [0.42, 0.48, 0.62, 0.68], [0, 0.7, 1, 0])
          }}
        />

        <motion.div
          className="unified-accent-layer unified-accent-rule1"
          style={{
            opacity: useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [0, 0.8, 1, 0.6])
          }}
        />

        {/* New: Dynamic floating particles for each section */}
        <motion.div
          className="unified-particles unified-particles-transform"
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0])
          }}
        />

        <motion.div
          className="unified-particles unified-particles-stats"
          style={{
            opacity: useTransform(scrollYProgress, [0.3, 0.35, 0.45, 0.5], [0, 1, 1, 0])
          }}
        />

        <motion.div
          className="unified-particles unified-particles-expertise"
          style={{
            opacity: useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0])
          }}
        />

        {/* New: Section-specific geometric patterns */}
        <motion.div
          className="unified-geometry unified-geometry-grid"
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.75, 0.9], [0, 0.6, 0.3])
          }}
        />

        {/* Enhanced vignette with section awareness */}
        <motion.div
          className="unified-vignette"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.6, 1])
          }}
        />
      </motion.div>

      {/* Container to measure scroll - increased height for all sections */}
      <div ref={containerRef} className="unified-scroll-container" />
    </>
  );
}