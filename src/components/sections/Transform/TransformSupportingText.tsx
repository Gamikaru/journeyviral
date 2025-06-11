// src/components/sections/Transform/TransformSupportingText.tsx
"use client";

import { useReducedMotion } from "framer-motion";
import { memo } from "react";
import SimpleTextDisplay from "./components/SimpleTextDisplay";
import "./styles/simple-text-display.css";

interface TransformSupportingTextProps {
  isInView: boolean;
  isLowPerf?: boolean;
}

const TransformSupportingText = memo(function TransformSupportingText({
  isInView,
  isLowPerf = false
}: TransformSupportingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;

  return (
    <div
      className="transform-supporting-wrapper"
      role="region"
      aria-label="Viral content transformation insights"
    >
      <div className="supporting-content">
        <SimpleTextDisplay
          isInView={isInView}
          shouldAnimate={shouldAnimate}
        />
      </div>
    </div>
  );
});

export default TransformSupportingText;