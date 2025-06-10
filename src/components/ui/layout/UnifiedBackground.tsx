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

  // Enhanced color transitions with more character and smoother blending
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18, 0.32, 0.48, 0.64, 0.78, 0.88, 1],
    [
      "rgb(10, 6, 22)",      // Hero - deep purple
      "rgb(12, 4, 24)",      // Early transition
      "rgb(8, 8, 28)",       // Transform - creative purple with blue hints
      "rgb(5, 12, 18)",      // Stats - data blue-teal
      "rgb(8, 6, 20)",       // Expertise - professional purple-blue
      "rgb(2, 2, 8)",        // Rule1 - dramatic dark
      "rgb(4, 2, 12)",       // Rule2 - comparison contrast
      "rgb(8, 6, 12)",       // Rule3 - value warmth
      "rgb(0, 0, 0)"         // Footer - pure black
    ]
  );

  // Enhanced floating orbs that travel across the screen
  const floatingOrb1X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["-10%", "30%", "70%", "110%", "120%"]);
  const floatingOrb1Y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["20%", "60%", "30%", "80%", "10%", "50%"]);

  const floatingOrb2X = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ["110%", "60%", "20%", "-20%"]);
  const floatingOrb2Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["80%", "20%", "70%", "30%", "90%"]);

  const floatingOrb3X = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["-15%", "80%", "40%", "115%"]);
  const floatingOrb3Y = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["50%", "15%", "85%", "25%"]);

  // Dynamic orb positioning with section-specific behaviors
  const orb1Y = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.78, 1], ["15%", "35%", "60%", "85%", "95%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 0.28, 0.62, 0.9, 1], ["85%", "65%", "40%", "15%", "5%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 0.45, 0.78, 1], ["50%", "25%", "75%", "90%"]);

  const orb1X = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.62, 0.78, 1], ["20%", "70%", "30%", "80%", "40%", "60%"]);
  const orb2X = useTransform(scrollYProgress, [0, 0.28, 0.45, 0.62, 0.78, 1], ["80%", "30%", "75%", "20%", "65%", "35%"]);
  const orb3X = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["50%", "20%", "80%", "45%"]);

  // Enhanced section-specific opacity with more dramatic changes
  const orb1Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
    [0.4, 0.8, 0.6, 0.9, 0.5, 0.3, 0.2, 0.1] // Strong in Transform and Stats
  );

  const orb2Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
    [0.5, 0.4, 0.9, 0.6, 0.9, 0.5, 0.3, 0.2] // Peaks at Stats and Expertise
  );

  const orb3Opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.45, 0.62, 0.78, 0.9, 1],
    [0.3, 0.5, 0.4, 0.7, 0.5, 0.8, 0.6, 0.4] // Active in Rules sections
  );

  // Dynamic orb scale with energy bursts
  const orb1Scale = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], [1, 1.2, 0.9, 1.4, 0.8, 1.1, 0.7]);
  const orb2Scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.8, 1.1, 1.3, 0.9, 1.2, 0.8]);
  const orb3Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1.1, 0.8, 1.4, 1, 0.9]);

  // Floating orb properties
  const floatingOrb1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.7, 0.9, 1], [0, 0.8, 1, 0.9, 0.6, 0]);
  const floatingOrb2Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.7, 0.9, 0.8, 0]);
  const floatingOrb3Opacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.85, 1], [0, 0.6, 1, 0.7, 0]);

  const floatingOrb1Scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.5, 1.2, 0.8, 1.1]);
  const floatingOrb2Scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.7, 1, 1.3, 0.6]);
  const floatingOrb3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.8]);

  // Dynamic traveling spotlights with more variation
  const spotlightPrimaryX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["10%", "60%", "20%", "80%", "40%", "90%"]);
  const spotlightPrimaryY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["80%", "20%", "70%", "30%", "85%"]);

  const spotlightSecondaryX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["90%", "30%", "85%", "15%", "70%"]);
  const spotlightSecondaryY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["20%", "85%", "30%", "75%"]);

  // Background texture variations
  const meshOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.8, 1, 0.6, 0.9, 0.7, 0.5]);
  const meshScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9]);

  // Section-specific overlay controls with smoother transitions
  const transformOverlayOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.12, 0.20, 0.28, 0.35],
    [0, 0.8, 1, 0.9, 0]
  );

  const statsOverlayOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.36, 0.45, 0.52],
    [0, 0.9, 1, 0.9, 0]
  );

  const expertiseOverlayOpacity = useTransform(
    scrollYProgress,
    [0.40, 0.45, 0.54, 0.62, 0.68],
    [0, 0.85, 1, 0.8, 0]
  );

  const rule1OverlayOpacity = useTransform(
    scrollYProgress,
    [0.60, 0.68, 0.76, 0.84, 0.90],
    [0, 0.9, 1, 0.8, 0.3]
  );

  const rule2OverlayOpacity = useTransform(
    scrollYProgress,
    [0.75, 0.82, 0.88, 0.94, 1],
    [0, 0.7, 1, 0.6, 0]
  );

  const rule3OverlayOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.88, 0.94, 1],
    [0, 0.8, 1, 0.5]
  );

  return (
    <>
      {/* Fixed background that covers entire viewport */}
      <motion.div
        className="unified-background"
        style={{ backgroundColor }}
      >
        {/* FLOATING ORBS - Travel across screen during scroll */}
        <motion.div
          className="unified-floating-orb floating-orb-cyan"
          style={{
            left: floatingOrb1X,
            top: floatingOrb1Y,
            opacity: floatingOrb1Opacity,
            scale: floatingOrb1Scale,
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
          }}
        />

        <motion.div
          className="unified-floating-orb floating-orb-magenta"
          style={{
            left: floatingOrb2X,
            top: floatingOrb2Y,
            opacity: floatingOrb2Opacity,
            scale: floatingOrb2Scale,
            rotate: useTransform(scrollYProgress, [0, 1], [0, -270])
          }}
        />

        <motion.div
          className="unified-floating-orb floating-orb-mixed"
          style={{
            left: floatingOrb3X,
            top: floatingOrb3Y,
            opacity: floatingOrb3Opacity,
            scale: floatingOrb3Scale,
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
          }}
        />

        {/* Enhanced primary orb - cyan with dynamic behavior */}
        <motion.div
          className="unified-orb unified-orb-cyan"
          style={{
            top: orb1Y,
            left: orb1X,
            opacity: orb1Opacity,
            scale: orb1Scale,
            rotate: useTransform(scrollYProgress, [0, 1], [0, 270])
          }}
        />

        {/* Enhanced secondary orb - magenta with counter-rotation */}
        <motion.div
          className="unified-orb unified-orb-magenta"
          style={{
            top: orb2Y,
            right: orb2X,
            opacity: orb2Opacity,
            scale: orb2Scale,
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180])
          }}
        />

        {/* Enhanced tertiary orb - green accent */}
        <motion.div
          className="unified-orb unified-orb-green"
          style={{
            top: orb3Y,
            left: orb3X,
            opacity: orb3Opacity,
            scale: orb3Scale
          }}
        />

        {/* Enhanced fourth orb - purple with section-specific activation */}
        <motion.div
          className="unified-orb unified-orb-purple"
          style={{
            top: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["70%", "20%", "80%", "40%"]),
            left: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], ["10%", "90%", "30%", "70%"]),
            opacity: useTransform(scrollYProgress, [0, 0.28, 0.62, 0.9, 1], [0, 0.5, 0.8, 0.4, 0.2]),
            scale: useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.7, 1.2, 0.8, 1.1, 0.6])
          }}
        />

        {/* Enhanced dynamic traveling spotlights */}
        <motion.div
          className="unified-spotlight unified-spotlight-primary"
          style={{
            left: spotlightPrimaryX,
            top: spotlightPrimaryY,
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.3, 0.7, 0.9, 1], [0.3, 0.8, 0.6, 0.9, 0.7, 0.3]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9])
          }}
        />

        <motion.div
          className="unified-spotlight unified-spotlight-secondary"
          style={{
            left: spotlightSecondaryX,
            top: spotlightSecondaryY,
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.4, 0.8, 1], [0.4, 0.7, 0.9, 0.6, 0.4]),
            scale: useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.7, 1.1, 1.3, 0.8])
          }}
        />

        {/* Enhanced animated mesh gradient with scroll responsiveness */}
        <motion.div
          className="unified-mesh"
          style={{
            opacity: meshOpacity,
            scale: meshScale
          }}
        />

        {/* Floating particles for extra depth */}
        <motion.div
          className="unified-floating-particles"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 0.8, 0.6, 0.3])
          }}
        />

        {/* DRAMATICALLY ENHANCED section-specific overlays */}
        <motion.div
          className="unified-section-overlay unified-overlay-transform"
          style={{ opacity: transformOverlayOpacity }}
        />

        <motion.div
          className="unified-section-overlay unified-overlay-stats"
          style={{ opacity: statsOverlayOpacity }}
        />

        <motion.div
          className="unified-section-overlay unified-overlay-expertise"
          style={{ opacity: expertiseOverlayOpacity }}
        />

        <motion.div
          className="unified-section-overlay unified-overlay-rule1"
          style={{ opacity: rule1OverlayOpacity }}
        />

        <motion.div
          className="unified-section-overlay unified-overlay-rule2"
          style={{ opacity: rule2OverlayOpacity }}
        />

        <motion.div
          className="unified-section-overlay unified-overlay-rule3"
          style={{ opacity: rule3OverlayOpacity }}
        />

        {/* Enhanced section transition zones with more dynamic effects */}
        <motion.div
          className="unified-transition-zone transition-to-transform"
          style={{
            opacity: useTransform(scrollYProgress, [0.08, 0.12, 0.16], [0, 1, 0]),
            scale: useTransform(scrollYProgress, [0.08, 0.12, 0.16], [0.8, 1.1, 0.9])
          }}
        />

        <motion.div
          className="unified-transition-zone transition-to-stats"
          style={{
            opacity: useTransform(scrollYProgress, [0.25, 0.28, 0.32], [0, 1, 0]),
            scale: useTransform(scrollYProgress, [0.25, 0.28, 0.32], [0.9, 1.2, 0.8])
          }}
        />

        <motion.div
          className="unified-transition-zone transition-to-expertise"
          style={{
            opacity: useTransform(scrollYProgress, [0.42, 0.45, 0.48], [0, 1, 0]),
            scale: useTransform(scrollYProgress, [0.42, 0.45, 0.48], [0.7, 1.3, 0.9])
          }}
        />

        <motion.div
          className="unified-transition-zone transition-to-rule1"
          style={{
            opacity: useTransform(scrollYProgress, [0.65, 0.68, 0.72], [0, 1, 0]),
            scale: useTransform(scrollYProgress, [0.65, 0.68, 0.72], [0.8, 1.1, 0.8])
          }}
        />

        {/* Enhanced vignette with dynamic intensity */}
        <motion.div
          className="unified-vignette"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 0.5, 0.7, 1])
          }}
        />
      </motion.div>

      {/* Container to measure scroll */}
      <div ref={containerRef} className="unified-scroll-container" />
    </>
  );
}