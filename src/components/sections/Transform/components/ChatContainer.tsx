// src/components/sections/Transform/components/ChatContainer.tsx
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { Message } from "../types";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import FloatingText from "./FloatingText";
import "../styles/containers.css";
import "../styles/animations.css";

interface ChatContainerProps {
  isInView: boolean;
  shouldAnimate: boolean;
  messages: Message[];
}

const useChatSequence = (isInView: boolean, shouldAnimate: boolean) => {
  const [phase, setPhase] = useState<'idle' | 'messages' | 'final'>('idle');
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);

  const resetSequence = useCallback(() => {
    setPhase('idle');
    setVisibleMessages([]);
    setShowTyping(false);
  }, []);

  useEffect(() => {
    if (!isInView) {
      resetSequence();
      return;
    }

    if (!shouldAnimate) {
      setVisibleMessages([1, 2, 3]);
      setPhase('final');
      return;
    }

    setPhase('messages');

    const sequence = [
      { delay: 100, action: () => setVisibleMessages([1]) },
      { delay: 1500, action: () => setShowTyping(true) },
      { delay: 1200, action: () => { setShowTyping(false); setVisibleMessages([1, 2]); }},
      { delay: 1500, action: () => setShowTyping(true) },
      { delay: 1000, action: () => { setShowTyping(false); setVisibleMessages([1, 2, 3]); }},
      { delay: 1200, action: () => setPhase('final') }, // Reduced delay for smoother transition
    ];

    let totalDelay = 0;
    const timeouts: NodeJS.Timeout[] = [];

    sequence.forEach(({ delay, action }) => {
      totalDelay += delay;
      timeouts.push(setTimeout(action, totalDelay));
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };

  }, [isInView, shouldAnimate, resetSequence]);

  return {
    visibleMessages,
    showTyping,
    showFinalMessage: phase === 'final',
    phase
  };
};

export default function ChatContainer({
  isInView,
  shouldAnimate,
  messages,
}: ChatContainerProps) {
  const { regularMessages, finalMessage } = useMemo(() => {
    const regular = messages.filter(m => m.type !== "final");
    const final = messages.find(m => m.type === "final");
    return { regularMessages: regular, finalMessage: final };
  }, [messages]);

  const {
    visibleMessages,
    showTyping,
    showFinalMessage
  } = useChatSequence(isInView, shouldAnimate);

  return (
    <div
      className={`chat-container-modern ${showFinalMessage ? 'showing-final' : ''}`}
      role="log"
      aria-live="polite"
    >
      <div className={`chat-messages-wrapper ${showFinalMessage ? 'hidden' : ''}`}>
        <div className="messages-container">
          <AnimatePresence mode="popLayout">
            {regularMessages.map(message => (
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
      </div>

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