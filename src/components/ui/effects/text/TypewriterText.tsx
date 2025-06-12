// Path: src/components/ui/effects/text/TypewriterText.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextEffectConfig } from '../types';
import { prefersReducedMotion } from '../utils/effectHelpers';

interface TypewriterTextProps extends Omit<TextEffectConfig, 'text'> {
  children: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  loop?: boolean;
  startDelay?: number;
  cursorBlink?: boolean;
  onComplete?: () => void;
}

export default function TypewriterText({
  children,
  typeSpeed = 50,
  deleteSpeed = 30,
  loop = false,
  startDelay = 0,
  cursorChar = '|',
  cursorBlink = true,
  disabled = false,
  respectReducedMotion = true,
  className = '',
  onComplete
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<'waiting' | 'typing' | 'complete' | 'deleting'>('waiting');

  const shouldAnimate = !disabled && (!respectReducedMotion || !prefersReducedMotion());
  const text = children || '';

  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayText(text);
      setPhase('complete');
      return;
    }

    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      setPhase('typing');
      setIsTyping(true);
    };

    // Initial delay
    if (phase === 'waiting') {
      timeout = setTimeout(startTyping, startDelay);
    }

    return () => clearTimeout(timeout);
  }, [shouldAnimate, startDelay, phase]);

  // Typing logic
  useEffect(() => {
    if (!shouldAnimate || phase !== 'typing') return;

    let timeout: NodeJS.Timeout;

    if (displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typeSpeed);
    } else {
      setIsTyping(false);
      setPhase('complete');
      onComplete?.();

      if (loop) {
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, text, typeSpeed, phase, shouldAnimate, loop, onComplete]);

  // Deleting logic (for loop mode)
  useEffect(() => {
    if (!shouldAnimate || phase !== 'deleting') return;

    let timeout: NodeJS.Timeout;

    if (displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setPhase('typing');
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, deleteSpeed, phase, shouldAnimate]);

  // Cursor blinking
  useEffect(() => {
    if (!cursorBlink) {
      setShowCursor(true);
      return;
    }

    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [cursorBlink]);

  return (
    <span className={`typewriter-text ${className}`}>
      <span className="typewriter-content">
        {displayText}
      </span>

      {shouldAnimate && (
        <motion.span
          className="typewriter-cursor"
          animate={{
            opacity: showCursor ? 1 : 0
          }}
          transition={{
            duration: 0.1,
            ease: 'easeInOut'
          }}
          style={{
            color: 'currentColor',
            fontWeight: 'normal',
            marginLeft: '2px'
          }}
        >
          {cursorChar}
        </motion.span>
      )}

      <style jsx>{`
        .typewriter-text {
          display: inline-block;
          position: relative;
        }

        .typewriter-content {
          white-space: pre-wrap;
        }

        .typewriter-cursor {
          display: inline-block;
          vertical-align: top;
          line-height: inherit;
        }

        @media (prefers-reduced-motion: reduce) {
          .typewriter-cursor {
            opacity: 1 !important;
            animation: none !important;
          }
        }
      `}</style>
    </span>
  );
}
