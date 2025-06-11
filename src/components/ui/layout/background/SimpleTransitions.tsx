"use client";

import { MotionValue } from "framer-motion";
import "./simple-transitions.css";

interface SimpleTransitionsProps {
  scrollYProgress: MotionValue<number>;
  disabled?: boolean;
}

export function SimpleTransitions({
  scrollYProgress,
  disabled = false
}: SimpleTransitionsProps) {

  if (disabled) return null;

  // Return empty container - section-specific effects are now handled by the pattern system
  return (
    <div className="simple-transitions-container">
      {/* All section theming now handled by CSS custom properties and pattern system */}
    </div>
  );
}
