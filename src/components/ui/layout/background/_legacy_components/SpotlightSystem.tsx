"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo, useCallback } from "react";
import { ErrorBoundary } from "../../ErrorBoundary";
import "./spotlight-system.css";

interface SpotlightSystemProps {
  scrollYProgress: MotionValue<number>;
  count?: number;
  onError?: (error: Error) => void;
}

export function SpotlightSystem({
  scrollYProgress,
  count = 2,
  onError
}: SpotlightSystemProps) {

  // All hooks at top level
  const spotlightPrimaryX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["10%", "60%", "20%", "80%", "40%", "90%"]);
  const spotlightPrimaryY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["80%", "20%", "70%", "30%", "85%"]);

  const spotlightSecondaryX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["90%", "30%", "85%", "15%", "70%"]);
  const spotlightSecondaryY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["20%", "85%", "30%", "75%"]);

  const primaryOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.7, 0.9, 1], [0.3, 0.8, 0.6, 0.9, 0.7, 0.3]);
  const primaryScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  const secondaryOpacity = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.8, 1], [0.4, 0.7, 0.9, 0.6, 0.4]);
  const secondaryScale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.7, 1.1, 1.3, 0.8]);

  // Memoized transforms object
  const transforms = useMemo(() => ({
    spotlightPrimaryX,
    spotlightPrimaryY,
    spotlightSecondaryX,
    spotlightSecondaryY,
    primaryOpacity,
    primaryScale,
    secondaryOpacity,
    secondaryScale
  }), [spotlightPrimaryX, spotlightPrimaryY, spotlightSecondaryX, spotlightSecondaryY, primaryOpacity, primaryScale, secondaryOpacity, secondaryScale]);

  const handleSpotlightError = useCallback((error: Error) => {
    console.warn("SpotlightSystem error:", error);
    onError?.(error);
  }, [onError]);

  return (
    <ErrorBoundary fallback={null} onError={handleSpotlightError}>
      <div className="spotlight-container" role="presentation" aria-hidden="true">
        {/* Enhanced dynamic traveling spotlights */}
        <motion.div
          className="unified-spotlight unified-spotlight-primary"
          style={{
            left: transforms.spotlightPrimaryX,
            top: transforms.spotlightPrimaryY,
            opacity: transforms.primaryOpacity,
            scale: transforms.primaryScale
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {count > 1 && (
          <motion.div
            className="unified-spotlight unified-spotlight-secondary"
            style={{
              left: transforms.spotlightSecondaryX,
              top: transforms.spotlightSecondaryY,
              opacity: transforms.secondaryOpacity,
              scale: transforms.secondaryScale
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}
