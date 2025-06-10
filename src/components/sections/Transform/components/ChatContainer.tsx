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
  const [isLooping, setIsLooping] = useState(false);

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
    setShowFinalMessage(false);
  }, []);

  // Start sequence function
  const startSequence = useCallback(() => {
    if (!isInView) return;

    if (!shouldAnimate) {
      // Show all immediately if not animating
      setVisibleMessages(regularMessages.map((m) => m.id));
      setShowFinalMessage(true);
      return;
    }

    // Start animated sequence
    setIsLooping(true);
    setCurrentStep(1);
  }, [isInView, shouldAnimate, regularMessages]);

  // Enhanced sequence controller with proper loop
  useEffect(() => {
    if (!shouldAnimate || currentStep === 0 || !isLooping || !isInView) return;

    const timers: NodeJS.Timeout[] = [];

    const executeStep = () => {
      switch (currentStep) {
        case 1: // First message
          setVisibleMessages([1]);
          timers.push(setTimeout(() => setCurrentStep(2), 1500));
          break;

        case 2: // Typing indicator
          setShowTyping(true);
          timers.push(setTimeout(() => setCurrentStep(3), 1200));
          break;

        case 3: // Second message
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, 2]);
          timers.push(setTimeout(() => setCurrentStep(4), 1500));
          break;

        case 4: // Typing indicator
          setShowTyping(true);
          timers.push(setTimeout(() => setCurrentStep(5), 1000));
          break;

        case 5: // Third message
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, 3]);
          timers.push(setTimeout(() => setCurrentStep(6), 2000));
          break;

        case 6: // Fade out messages
          setVisibleMessages([]);
          timers.push(setTimeout(() => setCurrentStep(7), 800));
          break;

        case 7: // Show final message
          setShowFinalMessage(true);
          // Increased duration to account for animation time:
          // First line: 2s visible
          // Fade transition: 0.8s
          // Second line slam: 0.8s
          // Hold both lines: 4s
          // Total: ~8.6s minimum, using 10s for safety
          timers.push(setTimeout(() => setCurrentStep(8), 10000));
          break;

        case 8: // Hide final message
          setShowFinalMessage(false);
          timers.push(setTimeout(() => setCurrentStep(9), 800)); // Smooth fade out
          break;

        case 9: // Reset and restart loop
          resetSequence();
          timers.push(setTimeout(() => {
            if (isLooping && isInView) {
              setCurrentStep(1); // Restart the loop
            }
          }, 2000)); // Slightly longer pause between loops
          break;
      }
    };

    executeStep();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [currentStep, shouldAnimate, isLooping, isInView, resetSequence]);

  // Initialize sequence when component comes into view
  useEffect(() => {
    if (isInView && shouldAnimate) {
      resetSequence();
      const timer = setTimeout(() => startSequence(), 100);
      return () => clearTimeout(timer);
    } else if (!isInView) {
      setIsLooping(false);
      resetSequence();
      setCurrentStep(0);
    }
  }, [isInView, shouldAnimate, resetSequence, startSequence]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setIsLooping(false);
      setCurrentStep(0);
    };
  }, []);

  return (
    <div className={`chat-container-modern ${showFinalMessage ? 'showing-final' : ''}`} role="log" aria-live="polite">
      {/* Messages area - fade out completely when final message shows */}
      <div className={`chat-messages-wrapper ${showFinalMessage ? 'hidden' : ''}`}>
        <div className="messages-container">
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
      </div>

      {/* Final message area - completely free floating, no container */}
      <div className={`final-message-area ${showFinalMessage ? 'active' : ''}`}>
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