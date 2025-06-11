"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
import "./transition-zones.css";

interface TransitionZonesProps {
  scrollYProgress: MotionValue<number>;
  isEnabled?: boolean;
  onError?: (error: Error) => void;
}

export function TransitionZones({
  scrollYProgress,
  isEnabled = true,
  onError
}: TransitionZonesProps) {

  // Performance-optimized transforms - hooks at top level
  const transformTransitionOpacity = useTransform(scrollYProgress, [0.08, 0.12, 0.16], [0, 1, 0]);
  const transformTransitionScale = useTransform(scrollYProgress, [0.08, 0.12, 0.16], [0.8, 1.1, 0.9]);

  const statsTransitionOpacity = useTransform(scrollYProgress, [0.25, 0.28, 0.32], [0, 1, 0]);
  const statsTransitionScale = useTransform(scrollYProgress, [0.25, 0.28, 0.32], [0.9, 1.2, 0.8]);

  const expertiseTransitionOpacity = useTransform(scrollYProgress, [0.42, 0.45, 0.48], [0, 1, 0]);
  const expertiseTransitionScale = useTransform(scrollYProgress, [0.42, 0.45, 0.48], [0.7, 1.3, 0.9]);

  const rule1TransitionOpacity = useTransform(scrollYProgress, [0.65, 0.68, 0.72], [0, 1, 0]);
  const rule1TransitionScale = useTransform(scrollYProgress, [0.65, 0.68, 0.72], [0.8, 1.1, 0.8]);

  // Memoized transforms object
  const transforms = useMemo(() => ({
    transformTransition: {
      opacity: transformTransitionOpacity,
      scale: transformTransitionScale
    },
    statsTransition: {
      opacity: statsTransitionOpacity,
      scale: statsTransitionScale
    },
    expertiseTransition: {
      opacity: expertiseTransitionOpacity,
      scale: expertiseTransitionScale
    },
    rule1Transition: {
      opacity: rule1TransitionOpacity,
      scale: rule1TransitionScale
    }
  }), [transformTransitionOpacity, transformTransitionScale, statsTransitionOpacity, statsTransitionScale, expertiseTransitionOpacity, expertiseTransitionScale, rule1TransitionOpacity, rule1TransitionScale]);

  const handleTransitionsError = useCallback((error: Error) => {
    console.warn("TransitionZones error:", error);
    onError?.(error);
  }, [onError]);

  if (!isEnabled) {
    return null;
  }

  return (
    <ErrorBoundary fallback={null} onError={handleTransitionsError}>
      <div className="transitions-container" role="presentation" aria-hidden="true">
        {/* Enhanced section transition zones with more dynamic effects */}
        <motion.div
          className="unified-transition-zone transition-to-transform"
          style={{
            opacity: transforms.transformTransition.opacity,
            scale: transforms.transformTransition.scale
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="unified-transition-zone transition-to-stats"
          style={{
            opacity: transforms.statsTransition.opacity,
            scale: transforms.statsTransition.scale
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="unified-transition-zone transition-to-expertise"
          style={{
            opacity: transforms.expertiseTransition.opacity,
            scale: transforms.expertiseTransition.scale
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="unified-transition-zone transition-to-rule1"
          style={{
            opacity: transforms.rule1Transition.opacity,
            scale: transforms.rule1Transition.scale
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </ErrorBoundary>
  );
}
