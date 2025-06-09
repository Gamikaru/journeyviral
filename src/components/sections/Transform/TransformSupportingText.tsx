"use client";

import { useReducedMotion } from "framer-motion";
import { memo } from "react";
import ChatContainer from "./components/ChatContainer";
import "./styles/transform-supporting-text.css";

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

  const messages = [
    {
      id: 1,
      text: "You paid for growth hacks.\nYou jumped on trends.\nYou followed the playbook.",
      type: "setup" as const,
      delay: 0
    },
    {
      id: 2,
      text: "Still stuck at 83 views. And... your mom's in the comments?",
      type: "problem" as const,
      delay: 1.5
    },
    {
      id: 3,
      text: "That's why you're here now.",
      type: "bridge" as const,
      delay: 1.5
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
      className="transform-supporting-text"
      aria-label="Chat conversation about content transformation"
    >
      <ChatContainer
        isInView={isInView}
        shouldAnimate={shouldAnimate}
        messages={messages}
      />
    </div>
  );
});

export default TransformSupportingText;
