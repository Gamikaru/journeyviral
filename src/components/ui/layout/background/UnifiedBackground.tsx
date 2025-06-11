"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import { SimpleTransitions } from "./SimpleTransitions";
import { BackgroundPerformance } from "./performance";
import "./unified-background.css";

// Lightweight media query hook
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

interface UnifiedBackgroundProps {
  className?: string;
  reducedMotion?: boolean;
  debug?: boolean;
}

export default function UnifiedBackground({
  className,
  reducedMotion = false,
  debug = false,
}: UnifiedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );

  // Get optimal performance settings
  const performanceSettings = useMemo(
    () => BackgroundPerformance.getOptimalSettings(),
    []
  );

  // Track scroll progress with optimized settings
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  // Proposed improved color scheme
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
    [
      "rgb(35, 25, 55)", // Hero - much richer purple (+10 brightness)
      "rgb(25, 30, 65)", // Transform - deeper blue (+10 brightness)
      "rgb(20, 35, 45)", // Stats - teal depth (+10 brightness)
      "rgb(40, 25, 50)", // Expertise - professional purple (+10 brightness)
      "rgb(30, 20, 45)", // Rule1 - dramatic purple (+10 brightness)
      "rgb(25, 18, 35)", // Rule2 - contrast purple (+10 brightness)
      "rgb(35, 25, 30)", // Rule3 - warmer finale (+10 brightness)
      "rgb(15, 15, 20)", // Footer - near black (+10 brightness)
    ]
  );

  // Conditional orb animations based on performance
  const shouldShowOrbs =
    performanceSettings.enableOrbs && !prefersReducedMotion && !reducedMotion;
  const shouldShowWaves =
    performanceSettings.enableWaves &&
    !isMobile &&
    !prefersReducedMotion &&
    !reducedMotion;
  const shouldShowRays =
    performanceSettings.enableRays &&
    !isMobile &&
    !prefersReducedMotion &&
    !reducedMotion;

  // Gentle floating orbs with parallax effect (only if performance allows)
  const orb1X = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["5%", "75%", "95%"]
  );
  const orb1Y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["10%", "60%", "40%", "80%"]
  );

  // Primary orb with section-specific intensity
  const orb1Opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
    [0.2, 0.6, 0.4, 0.7, 0.5, 0.6, 0.3, 0] // Higher peak values, section-specific
  );

  const orb1Scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
    [0.8, 1.2, 0.9, 1.3, 1.0, 1.1, 0.7] // More dramatic scaling
  );

  // Second orb (only if not mobile and performance allows)
  const showSecondOrb = performanceSettings.orbCount > 1 && shouldShowOrbs;
  const orb2X = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ["95%", "25%", "5%"]
  );
  const orb2Y = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["85%", "30%", "15%"]
  );

  // Secondary orb with different timing
  const orb2Opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    [0, 0.3, 0.5, 0.3, 0.6, 0.4, 0.5, 0] // Offset peaks for variety
  );

  const orb2Scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1.05, 0.8]
  );

  // Add color variation to orbs based on scroll
  const orb1Color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      "rgba(0, 255, 255, 0.8)", // Cyan
      "rgba(147, 51, 234, 0.8)", // Purple
      "rgba(0, 255, 136, 0.8)", // Green
      "rgba(255, 0, 255, 0.8)"   // Magenta
    ]
  );

  // Subtle wave animation for middle sections (performance permitting)
  const waveOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.6, 0.75],
    [0, 0.25, 0.25, 0]
  );

  // Gentle ray animation for later sections (performance permitting)
  const rayOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.7, 0.9, 1],
    [0, 0.15, 0.15, 0]
  );

  // Start performance monitoring in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      BackgroundPerformance.measureFPS();

      // Log debug info
      console.log("🎨 UnifiedBackground Debug Info:", {
        isMobile,
        prefersReducedMotion,
        performanceSettings,
        shouldShowOrbs,
        shouldShowWaves,
        shouldShowRays,
      });
    }
  }, []);

  return (
    <>
      {/* Main background with color transitions */}
      <motion.div
        className={`simplified-background ${className || ""} ${debug ? "debug-mode" : ""}`}
        style={{ backgroundColor }}
      >
        {/* Enhanced vignette for depth */}
        <div className="simple-vignette" />

        {/* Section-specific subtle transitions */}
        <SimpleTransitions
          scrollYProgress={scrollYProgress}
          disabled={
            !performanceSettings.enableTransitions || prefersReducedMotion
          }
        />

        {/* Floating orbs - performance optimized */}
        {shouldShowOrbs && (
          <motion.div
            className="gentle-orb orb-cyan"
            style={{
              left: orb1X,
              top: orb1Y,
              opacity: debug ? 0.9 : orb1Opacity,
              scale: orb1Scale,
            }}
          />
        )}

        {showSecondOrb && (
          <motion.div
            className="gentle-orb orb-pink"
            style={{
              left: orb2X,
              top: orb2Y,
              opacity: debug ? 0.9 : orb2Opacity,
              scale: orb2Scale,
            }}
          />
        )}

        {/* Subtle waves for middle sections */}
        {shouldShowWaves && (
          <motion.div
            className="subtle-waves"
            style={{ opacity: waveOpacity }}
          />
        )}

        {/* Gentle rays for later sections */}
        {shouldShowRays && (
          <motion.div className="gentle-rays" style={{ opacity: rayOpacity }} />
        )}

        {/* Mobile-only: Simple gradient overlay */}
        {isMobile && !prefersReducedMotion && (
          <motion.div
            className="mobile-gradient-overlay"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [0.08, 0.2, 0.08]
              ),
            }}
          />
        )}
      </motion.div>

      {/* Scroll measurement container */}
      <div ref={containerRef} className="scroll-container" aria-hidden="true" />
    </>
  );
}
