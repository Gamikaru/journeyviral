"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useMemo, useCallback } from "react";
import { BackgroundColorManager } from "./BackgroundColorManager";
import { FloatingOrbs } from "./FloatingOrbs";
import { StaticOrbs } from "./StaticOrbs";
import { SpotlightSystem } from "./SpotlightSystem";
import { MeshGradient } from "./MeshGradient";
import { FloatingParticles } from "./FloatingParticles";
import { SectionOverlays } from "./SectionOverlays";
import { TransitionZones } from "./TransitionZones";
import { EnhancedVignette } from "./EnhancedVignette";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePerformancePreference } from "@/hooks/usePerformancePreference";
import "./unified-background.css";

interface UnifiedBackgroundProps {
  className?: string;
  reducedMotion?: boolean;
}

export default function UnifiedBackground({
  className,
  reducedMotion = false
}: UnifiedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Performance and accessibility hooks
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const performanceMode = usePerformancePreference();

  // Track scroll progress through entire page with optimized config
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false, // Optimize for performance
  });

  // Memoized performance settings
  const shouldRenderEffects = useMemo(() => ({
    particles: !isMobile && performanceMode !== "low",
    spotlights: performanceMode !== "low",
    mesh: true,
    transitions: !prefersReducedMotion && !reducedMotion,
    floatingOrbs: true,
    staticOrbs: true,
    overlays: performanceMode !== "minimal",
    vignette: true
  }), [isMobile, performanceMode, prefersReducedMotion, reducedMotion]);

  // Error boundary fallback
  const handleError = useCallback((error: Error) => {
    console.warn("Background effect error:", error);
  }, []);

  return (
    <>
      {/* Fixed background that covers entire viewport */}
      <BackgroundColorManager
        scrollYProgress={scrollYProgress}
        className={className}
      >
        {/* Core visual elements - always render */}
        <FloatingOrbs
          scrollYProgress={scrollYProgress}
          isEnabled={shouldRenderEffects.floatingOrbs}
          isMobile={isMobile}
          onError={handleError}
        />

        <StaticOrbs
          scrollYProgress={scrollYProgress}
          isEnabled={shouldRenderEffects.staticOrbs}
          performanceMode={performanceMode}
          onError={handleError}
        />

        {/* Enhanced mesh gradient */}
        {shouldRenderEffects.mesh && (
          <MeshGradient
            scrollYProgress={scrollYProgress}
            intensity={isMobile ? "low" : isTablet ? "medium" : "high"}
            onError={handleError}
          />
        )}

        {/* Performance-conditional effects */}
        {shouldRenderEffects.spotlights && (
          <SpotlightSystem
            scrollYProgress={scrollYProgress}
            count={isMobile ? 1 : 2}
            onError={handleError}
          />
        )}

        {shouldRenderEffects.particles && (
          <FloatingParticles
            scrollYProgress={scrollYProgress}
            density={performanceMode === "high" ? "high" : "medium"}
            onError={handleError}
          />
        )}

        {/* Section-specific overlays */}
        {shouldRenderEffects.overlays && (
          <SectionOverlays
            scrollYProgress={scrollYProgress}
            intensity={performanceMode}
            onError={handleError}
          />
        )}

        {/* Section transition zones */}
        {shouldRenderEffects.transitions && (
          <TransitionZones
            scrollYProgress={scrollYProgress}
            isEnabled={!prefersReducedMotion}
            onError={handleError}
          />
        )}

        {/* Enhanced vignette */}
        {shouldRenderEffects.vignette && (
          <EnhancedVignette
            scrollYProgress={scrollYProgress}
            intensity={isMobile ? "subtle" : "normal"}
            onError={handleError}
          />
        )}
      </BackgroundColorManager>

      {/* Container to measure scroll */}
      <div
        ref={containerRef}
        className="unified-scroll-container"
        aria-hidden="true"
      />
    </>
  );
}
