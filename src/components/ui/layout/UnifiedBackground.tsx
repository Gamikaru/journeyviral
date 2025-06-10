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

  // Smooth color transitions between sections
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgb(10, 6, 22)",      // Hero - deep purple
      "rgb(8, 4, 18)",       // Transition
      "rgb(5, 2, 8)",        // Expertise - darker purple
      "rgb(2, 1, 4)",        // Transform - near black
      "rgb(8, 5, 20)",       // Stats - dark blue-purple
      "rgb(0, 0, 0)"         // Rule1 - black
    ]
  );

  // Gradient orb positions that move with scroll
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const orb1X = useTransform(scrollYProgress, [0, 0.5, 1], ["20%", "80%", "20%"]);
  const orb2X = useTransform(scrollYProgress, [0, 0.5, 1], ["80%", "20%", "80%"]);

  // Orb opacity changes
  const orb1Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 0.6, 0.6, 0.3]
  );

  const orb2Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 0.5, 0.5, 0.4]
  );

  return (
    <>
      {/* Fixed background that covers entire viewport */}
      <motion.div
        className="unified-background"
        style={{ backgroundColor }}
      >
        {/* Primary gradient orb - cyan */}
        <motion.div
          className="unified-orb unified-orb-cyan"
          style={{
            top: orb1Y,
            left: orb1X,
            opacity: orb1Opacity
          }}
        />

        {/* Secondary gradient orb - magenta */}
        <motion.div
          className="unified-orb unified-orb-magenta"
          style={{
            top: orb2Y,
            right: orb2X,
            opacity: orb2Opacity
          }}
        />

        {/* Static mesh gradient overlay */}
        <div className="unified-mesh" />

        {/* Subtle vignette */}
        <div className="unified-vignette" />
      </motion.div>

      {/* Container to measure scroll */}
      <div ref={containerRef} className="unified-scroll-container" />
    </>
  );
}