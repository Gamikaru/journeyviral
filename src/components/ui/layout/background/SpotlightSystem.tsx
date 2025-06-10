"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import "./spotlight-system.css";

interface SpotlightSystemProps {
  scrollYProgress: MotionValue<number>;
}

export function SpotlightSystem({ scrollYProgress }: SpotlightSystemProps) {
  // Dynamic traveling spotlights with more variation
  const spotlightPrimaryX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["10%", "60%", "20%", "80%", "40%", "90%"]);
  const spotlightPrimaryY = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["80%", "20%", "70%", "30%", "85%"]);

  const spotlightSecondaryX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["90%", "30%", "85%", "15%", "70%"]);
  const spotlightSecondaryY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["20%", "85%", "30%", "75%"]);

  return (
    <>
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
    </>
  );
}
