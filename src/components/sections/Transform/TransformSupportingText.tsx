// src/components/sections/Transform/TransformSupportingText.tsx
"use client";

import { useReducedMotion } from "framer-motion";
import { memo } from "react";
import ChatContainer from "./components/ChatContainer";
import "./styles/supporting-text/base.css";
import "./styles/supporting-text/layout.css";
import "./styles/supporting-text/responsive.css";
import "./styles/supporting-text/effects.css";
import "./styles/supporting-text/accessibility.css";
import "./styles/containers.css";
import "./styles/animations.css";

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

  // Refined messages with better flow and formatting
  const messages = [
    {
      id: 1,
      text: "You tried everything.\nGrowth hacks. Trending audio.\nStill stuck at 200 views.",
      type: "setup" as const,
      delay: 0
    },
    {
      id: 2,
      text: "Your competitor just hit 10M.\nWith worse content than yours.",
      type: "problem" as const,
      delay: 1.2
    },
    {
      id: 3,
      text: "The algorithm isn't broken.\nYour strategy is.",
      type: "bridge" as const,
      delay: 1.2
    },
    {
      id: 4,
      text: "We don't chase virality.\nWe manufacture it.",
      type: "final" as const,
      delay: 1.5
    }
  ];

  return (
    <div
      className="transform-supporting-wrapper"
      role="region"
      aria-label="Viral content transformation conversation"
    >
      <div className="supporting-content">
        <ChatContainer
          isInView={isInView}
          shouldAnimate={shouldAnimate}
          messages={messages}
        />
      </div>

      {/* Subtle accent elements */}
      {shouldAnimate && (
        <div className="supporting-accents" aria-hidden="true">
          <div className="accent-dot accent-top" />
          <div className="accent-dot accent-bottom" />
        </div>
      )}
    </div>
  );
});

export default TransformSupportingText;