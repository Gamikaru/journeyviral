// src/components/sections/Transform/components/FloatingText.tsx
"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { memo, useEffect, useState } from "react";
import "../styles/floating-text.css";

interface FloatingTextProps {
  text: string;
  isVisible: boolean;
  shouldAnimate: boolean;
}

const FloatingText = memo(function FloatingText({
  text,
  isVisible,
  shouldAnimate,
}: FloatingTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldUseAnimation = shouldAnimate && !prefersReducedMotion;

  // State to control animation stages
  const [animationStage, setAnimationStage] = useState<'hidden' | 'firstLine' | 'fadeUp' | 'secondLine' | 'both'>('hidden');
  const [hasStarted, setHasStarted] = useState(false);

  // Control animation sequence
  useEffect(() => {
    if (!isVisible) {
      // Don't immediately hide - let exit animations play
      const hideTimer = setTimeout(() => {
        setAnimationStage('hidden');
        setHasStarted(false);
      }, 300); // Give time for exit animation
      return () => clearTimeout(hideTimer);
    }

    if (!shouldUseAnimation) {
      setAnimationStage('both'); // Show both lines immediately
      return;
    }

    // Prevent re-triggering if already started
    if (hasStarted) return;

    setHasStarted(true);
    const timers: NodeJS.Timeout[] = [];

    // Stage 1: Show first line
    setAnimationStage('firstLine');

    // Stage 2: After 2 seconds, fade up first line
    timers.push(setTimeout(() => {
      setAnimationStage('fadeUp');
    }, 2000));

    // Stage 3: After fade up completes (0.8s), slam down second line
    timers.push(setTimeout(() => {
      setAnimationStage('secondLine');
    }, 2800));

    // Stage 4: Keep both lines visible
    timers.push(setTimeout(() => {
      setAnimationStage('both');
    }, 3600));

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible, shouldUseAnimation, hasStarted]);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  // Split text into two lines for the specific message
  const lines = text.includes("manufacture")
    ? ["We don't chase virality.", "We manufacture it."]
    : text.split("\n");

  if (!shouldUseAnimation) {
    return isVisible ? (
      <div className="floating-text-modern">
        <div className="floating-message-card static">
          {lines.map((line, index) => (
            <p
              key={index}
              className={`floating-message-line ${index === 0 ? "line-setup" : "line-punch"}`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    ) : null;
  }

  return (
    <motion.div
      className="floating-text-modern"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit="exit"
      role="article"
      aria-label={`Final message: ${text}`}
    >
      <div className={`floating-message-card ${animationStage !== 'hidden' ? 'animating' : ''}`}>
        <AnimatePresence mode="wait">
          {/* First line - controlled by animation stages */}
          {(animationStage === 'firstLine' || animationStage === 'fadeUp') && (
            <motion.p
              key="first-line"
              className="floating-message-line line-setup animated"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 0.95,
                transition: { duration: 0.8, ease: "easeIn" }
              }}
            >
              {lines[0]}
            </motion.p>
          )}

          {/* Second line - only shows after first line fades */}
          {(animationStage === 'secondLine' || animationStage === 'both') && (
            <motion.p
              key="second-line"
              className="floating-message-line line-punch animated"
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.7,
                rotateX: -15
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }
              }}
              style={{ perspective: "1000px" }}
            >
              {lines[1]}
            </motion.p>
          )}

          {/* Both lines visible in final stage */}
          {animationStage === 'both' && (
            <motion.p
              key="first-line-static"
              className="floating-message-line line-setup static"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {lines[0]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced floating particles triggered after slam */}
      {shouldUseAnimation && (animationStage === 'secondLine' || animationStage === 'both') && (
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 2, 0],
                x: [0, (Math.random() - 0.5) * 200],
                y: [0, -120 - (Math.random() * 80)],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2.5,
                delay: 0.5 + i * 0.08, // Start shortly after slam
                repeat: 0,
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
});

export default FloatingText;