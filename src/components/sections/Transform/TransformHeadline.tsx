// Path: src/components/sections/Transform/TransformHeadline.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import "./styles/typography/headline-cyberpunk.css";

interface TransformHeadlineProps {
  isInView: boolean;
  isLowPerf?: boolean;
  glitchActive?: boolean;
}

const TransformHeadline = memo(function TransformHeadline({
  isInView,
  isLowPerf = false,
  glitchActive = false
}: TransformHeadlineProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !isLowPerf;
  const [localGlitch, setLocalGlitch] = useState(false);
  const [textScramble, setTextScramble] = useState({
    transform: false,
    corporate: false,
    cringe: false,
    viral: false
  });

  // Local glitch effect for individual words
  useEffect(() => {
    if (shouldAnimate && isInView) {
      const glitchTimer = setInterval(() => {
        const word = ['transform', 'corporate', 'cringe', 'viral'][Math.floor(Math.random() * 4)];
        setTextScramble(prev => ({ ...prev, [word]: true }));

        setTimeout(() => {
          setTextScramble(prev => ({ ...prev, [word]: false }));
        }, 150);
      }, 3000 + Math.random() * 4000);

      return () => clearInterval(glitchTimer);
    }
  }, [shouldAnimate, isInView]);

  // Sync with global glitch
  useEffect(() => {
    setLocalGlitch(glitchActive);
  }, [glitchActive]);

  const lineVariants = {
    hidden: {
      opacity: 0,
      x: shouldAnimate ? -50 : 0,
      y: shouldAnimate ? 20 : 0,
      rotateY: shouldAnimate ? -15 : 0,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: shouldAnimate ? {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1]
      } : {
        duration: 0.3
      }
    })
  };

  const renderGlitchText = (text: string, isScrambled: boolean) => {
    if (!isScrambled) return text;

    const chars = "!@#$%^&*()_+{}[]|\\:;<>?,./~`";
    return text.split('').map((char, i) => {
      if (char === ' ') return ' ';
      return Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char;
    }).join('');
  };

  return (
    <div className="headline-container-cyber">
      <motion.h2
        className={`transform-headline-cyber ${localGlitch ? 'headline-glitching' : ''}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-label="We transform your corporate cringe into viral gold"
      >
        {/* Line 1: WE TRANSFORM */}
        <motion.span
          className="headline-line-cyber"
          variants={lineVariants}
          custom={0}
        >
          <span className="headline-text-wrapper">
            <span className="headline-text headline-we">WE</span>
            <span className="headline-space"> </span>
            <span className={`headline-text headline-transform ${textScramble.transform ? 'text-scrambling' : ''}`}>
              <span className="text-main">{renderGlitchText("TRANSFORM", textScramble.transform)}</span>
              <span className="text-glitch-1" aria-hidden="true">TRANSFORM</span>
              <span className="text-glitch-2" aria-hidden="true">TRANSFORM</span>
            </span>
          </span>
        </motion.span>

        {/* Line 2: YOUR CORPORATE */}
        <motion.span
          className="headline-line-cyber"
          variants={lineVariants}
          custom={1}
        >
          <span className="headline-text-wrapper">
            <span className="headline-text headline-your">YOUR</span>
            <span className="headline-space"> </span>
            <span className={`headline-text headline-corporate ${textScramble.corporate ? 'text-scrambling' : ''}`}>
              <span className="text-main">{renderGlitchText("CORPORATE", textScramble.corporate)}</span>
              <span className="text-shadow" aria-hidden="true">CORPORATE</span>
            </span>
          </span>
        </motion.span>

        {/* Line 3: CRINGE INTO */}
        <motion.span
          className="headline-line-cyber"
          variants={lineVariants}
          custom={2}
        >
          <span className="headline-text-wrapper">
            <span className={`headline-text headline-cringe ${textScramble.cringe ? 'text-scrambling' : ''}`}>
              <span className="text-main">{renderGlitchText("CRINGE", textScramble.cringe)}</span>
              <span className="text-glitch-1" aria-hidden="true">CRINGE</span>
              <span className="text-glitch-2" aria-hidden="true">CRINGE</span>
              <span className="text-neon-glow" aria-hidden="true" />
            </span>
            <span className="headline-space"> </span>
            <span className="headline-text headline-into">INTO</span>
          </span>
        </motion.span>

        {/* Line 4: VIRAL GOLD */}
        <motion.span
          className="headline-line-cyber headline-line-final"
          variants={lineVariants}
          custom={3}
        >
          <span className="headline-text-wrapper">
            <span className={`headline-text headline-viral ${textScramble.viral ? 'text-scrambling' : ''} ${shouldAnimate ? 'with-energy' : ''}`}>
              <span className="text-main">{renderGlitchText("VIRAL", textScramble.viral)}</span>
              <span className="text-glitch-1" aria-hidden="true">VIRAL</span>
              <span className="text-glitch-2" aria-hidden="true">VIRAL</span>
              <span className="energy-burst" aria-hidden="true" />
            </span>
            <span className="headline-space"> </span>
            <span className={`headline-text headline-gold ${shouldAnimate ? 'with-shimmer' : ''}`}>
              <span className="text-main">GOLD</span>
              <span className="text-shimmer" aria-hidden="true">GOLD</span>
              <span className="gold-particles" aria-hidden="true">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="gold-particle" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </span>
            </span>
          </span>
        </motion.span>
      </motion.h2>

      {/* Holographic Badge */}
      <motion.div
        className="headline-hologram"
        initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
        animate={isInView ? {
          opacity: 1,
          scale: 1,
          rotateX: 0
        } : {}}
        transition={{
          delay: 0.8,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <div className="hologram-content">
          <span className="hologram-text">ALGORITHM HACK</span>
          <span className="hologram-version">v2.0</span>
        </div>
        <div className="hologram-scanline" />
      </motion.div>
    </div>
  );
});

export default TransformHeadline;