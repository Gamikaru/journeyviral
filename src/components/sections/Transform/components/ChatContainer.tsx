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
  type: 'setup' | 'problem' | 'bridge' | 'final';
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
  messages
}: ChatContainerProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [showFloatingText, setShowFloatingText] = useState(false);

  // Memoize message arrays to prevent unnecessary re-renders
  const { regularMessages, finalMessage } = useMemo(() => {
    const regular = messages.filter(m => m.type !== 'final');
    const final = messages.find(m => m.type === 'final');
    return { regularMessages: regular, finalMessage: final };
  }, [messages]);

  const resetSequence = useCallback(() => {
    setVisibleMessages([]);
    setShowTyping(false);
    setCurrentStep(0);
    setIsLooping(false);
    setShowFloatingText(false);
  }, []);

  const startSequence = useCallback(() => {
    if (!isInView || !shouldAnimate) {
      // Show all messages immediately if not animating
      setVisibleMessages(regularMessages.map(m => m.id));
      setShowFloatingText(true);
      return;
    }

    // Optimized timing - start faster
    setTimeout(() => {
      setCurrentStep(1);
    }, 300);
  }, [isInView, shouldAnimate, regularMessages]);

  // Optimized sequence timing
  useEffect(() => {
    if (!shouldAnimate || currentStep === 0) return;

    const timers: NodeJS.Timeout[] = [];

    const executeStep = () => {
      switch (currentStep) {
        case 1: // Show first message
          setVisibleMessages([1]);
          timers.push(setTimeout(() => setCurrentStep(2), 1500)); // Faster
          break;

        case 2: // Show typing for second message
          setShowTyping(true);
          timers.push(setTimeout(() => setCurrentStep(3), 1200)); // Faster
          break;

        case 3: // Show second message
          setShowTyping(false);
          setVisibleMessages(prev => [...prev, 2]);
          timers.push(setTimeout(() => setCurrentStep(4), 1500));
          break;

        case 4: // Show typing for third message
          setShowTyping(true);
          timers.push(setTimeout(() => setCurrentStep(5), 1000)); // Faster
          break;

        case 5: // Show third message
          setShowTyping(false);
          setVisibleMessages(prev => [...prev, 3]);
          timers.push(setTimeout(() => setCurrentStep(6), 1200));
          break;

        case 6: // Hold, then start disappearing
          timers.push(setTimeout(() => setCurrentStep(7), 1000)); // Faster
          break;

        case 7: // Optimized staggered disappearance
          timers.push(setTimeout(() => {
            setVisibleMessages(prev => prev.filter(id => id !== 1));
          }, 0));

          timers.push(setTimeout(() => {
            setVisibleMessages(prev => prev.filter(id => id !== 2));
          }, 100)); // Faster stagger

          timers.push(setTimeout(() => {
            setVisibleMessages(prev => prev.filter(id => id !== 3));
          }, 200));

          timers.push(setTimeout(() => setCurrentStep(8), 600));
          break;

        case 8: // Show floating text
          setShowFloatingText(true);
          timers.push(setTimeout(() => setCurrentStep(9), 4000)); // Shorter hold
          break;

        case 9: // Loop back
          setShowFloatingText(false);
          timers.push(setTimeout(() => {
            setIsLooping(true);
            timers.push(setTimeout(() => {
              resetSequence();
              timers.push(setTimeout(() => startSequence(), 800)); // Faster loop
            }, 400));
          }, 600));
          break;
      }
    };

    executeStep();

    // Cleanup function to prevent memory leaks
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [currentStep, shouldAnimate, resetSequence, startSequence]);

  // Initialize sequence
  useEffect(() => {
    if (isInView && !isLooping) {
      resetSequence();
      const timer = setTimeout(() => startSequence(), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, isLooping, resetSequence, startSequence]);

  return (
    <div className="chat-container" role="log" aria-live="polite">
      <div className="chat-messages-area">
        <AnimatePresence mode="wait">
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

        <TypingIndicator
          isVisible={showTyping}
          shouldAnimate={shouldAnimate}
        />
      </div>

      <div className="final-message-container">
        <AnimatePresence>
          {finalMessage && showFloatingText && (
            <FloatingText
              text={finalMessage.text}
              isVisible={showFloatingText}
              shouldAnimate={shouldAnimate}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
