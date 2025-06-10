// src/components/sections/Transform/components/ChatContainer.tsx
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import FloatingText from "./FloatingText";
import "../styles/chat-container.css";

interface Message {
  id: number;
  text: string;
  type: "setup" | "problem" | "bridge" | "final";
  delay: number;
}

interface ChatContainerProps {
  isInView: boolean;
  shouldAnimate: boolean;
  messages: Message[];
}

export default function ChatContainer({
  isInView,
  shouldAnimate,
  messages,
}: ChatContainerProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  // Separate regular and final messages
  const { regularMessages, finalMessage } = useMemo(() => {
    const regular = messages.filter((m) => m.type !== "final");
    const final = messages.find((m) => m.type === "final");
    return { regularMessages: regular, finalMessage: final };
  }, [messages]);

  // Reset function
  const resetSequence = useCallback(() => {
    setVisibleMessages([]);
    setShowTyping(false);
    setCurrentStep(0);
    setShowFinalMessage(false);
  }, []);

  // Start sequence function
  const startSequence = useCallback(() => {
    if (!isInView || !shouldAnimate) {
      // Show all immediately if not animating
      setVisibleMessages(regularMessages.map((m) => m.id));
      setShowFinalMessage(true);
      return;
    }

    // Start animated sequence
    setTimeout(() => {
      setCurrentStep(1);
    }, 200);
  }, [isInView, shouldAnimate, regularMessages]);

  // Sequence controller
  useEffect(() => {
    if (!shouldAnimate || currentStep === 0) return;

    const timers: NodeJS.Timeout[] = [];

    const executeStep = () => {
      switch (currentStep) {
        case 1: // First message
          setVisibleMessages([1]);
          timers.push(setTimeout(() => setCurrentStep(2), 1200));
          break;

        case 2: // Typing indicator
          setShowTyping(true);
          timers.push(setTimeout(() => setCurrentStep(3), 1000));
          break;

        case 3: // Second message
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, 2]);
          timers.push(setTimeout(() => setCurrentStep(4), 1200));
          break;

        case 4: // Typing indicator
          setShowTyping(true);
          timers.push(setTimeout(() => setCurrentStep(5), 800));
          break;

        case 5: // Third message
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, 3]);
          timers.push(setTimeout(() => setCurrentStep(6), 1500));
          break;

        case 6: // Transition to final
          // Fade out messages
          setVisibleMessages([]);
          timers.push(setTimeout(() => setCurrentStep(7), 600));
          break;

        case 7: // Show final message
          setShowFinalMessage(true);
          timers.push(setTimeout(() => setCurrentStep(8), 5000));
          break;

        case 8: // Reset and loop
          setShowFinalMessage(false);
          timers.push(
            setTimeout(() => {
              resetSequence();
              timers.push(setTimeout(() => startSequence(), 1000));
            }, 500)
          );
          break;
      }
    };

    executeStep();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [currentStep, shouldAnimate, resetSequence, startSequence]);

  // Initialize sequence
  useEffect(() => {
    if (isInView) {
      resetSequence();
      const timer = setTimeout(() => startSequence(), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, resetSequence, startSequence]);

  return (
    <div className="chat-container-modern" role="log" aria-live="polite">
      {/* Messages area */}
      <div className="chat-messages-wrapper">
        <AnimatePresence mode="popLayout">
          {regularMessages.map((message) => (
            <ChatBubble
              key={message.id}
              text={message.text}
              type={message.type}
              isVisible={visibleMessages.includes(message.id)}
              shouldAnimate={shouldAnimate}
            />
          ))}
        </AnimatePresence>

        <TypingIndicator isVisible={showTyping} shouldAnimate={shouldAnimate} />
      </div>

      {/* Final message area - integrated into flow */}
      <div className="final-message-area">
        <AnimatePresence>
          {finalMessage && showFinalMessage && (
            <FloatingText
              text={finalMessage.text}
              isVisible={showFinalMessage}
              shouldAnimate={shouldAnimate}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
