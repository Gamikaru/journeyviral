"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IsolatedHeroTitle.css';

interface IsolatedHeroTitleProps {
  primaryText?: string;
  subtitleText?: string;
  enableScramble?: boolean;
  mousePosition?: { x: number; y: number };
  className?: string;
}

const IsolatedHeroTitle: React.FC<IsolatedHeroTitleProps> = ({
  primaryText = "#YOUR CONTENT SUCKS.",
  subtitleText = "WE CAN FIX THAT.",
  enableScramble = true,
  mousePosition = { x: 0, y: 0 },
  className = ''
}) => {
  const [isScrambling, setIsScrambling] = useState(false);
  const [scrambledPrimary, setScrambledPrimary] = useState(primaryText);
  const [scrambledSubtitle, setScrambledSubtitle] = useState(subtitleText);

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const scrambleText = (text: string): string => {
    return text
      .split("")
      .map((char) => {
        if (char === " " || char === "#" || char === ".") return char;
        return Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char;
      })
      .join("");
  };

  const triggerScramble = () => {
    if (!enableScramble) return;

    setIsScrambling(true);
    let iterations = 0;
    const maxIterations = 20;

    const interval = setInterval(() => {
      setScrambledPrimary(scrambleText(primaryText));
      setScrambledSubtitle(scrambleText(subtitleText));
      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setScrambledPrimary(primaryText);
        setScrambledSubtitle(subtitleText);
        setIsScrambling(false);
      }
    }, 50);
  };

  // Auto-scramble every 8 seconds
  useEffect(() => {
    if (!enableScramble) return;

    const autoScramble = setInterval(() => {
      triggerScramble();
    }, 8000);

    return () => clearInterval(autoScramble);
  }, [enableScramble, primaryText, subtitleText]);

  return (
    <div className={`isolated-hero-title-container ${className}`}>
      <motion.h1
        className={`isolated-hero-title-primary retro-enhanced ${isScrambling ? 'scrambling' : ''}`}
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 1.5,
        }}
        transition={{
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
        onClick={triggerScramble}
        style={{ cursor: enableScramble ? 'pointer' : 'default' }}
      >
        {scrambledPrimary}
      </motion.h1>

      <motion.h2
        className={`isolated-hero-subtitle-primary retro-enhanced ${isScrambling ? 'scrambling' : ''}`}
        animate={{
          x: mousePosition.x * 1.5,
          y: mousePosition.y * 1,
        }}
        transition={{
          x: { duration: 0.4, ease: "easeOut" },
          y: { duration: 0.4, ease: "easeOut" },
        }}
      >
        {scrambledSubtitle}
      </motion.h2>

      {enableScramble && (
        <div className="scramble-hint">
          <small>Click title to scramble</small>
        </div>
      )}
    </div>
  );
};

export default IsolatedHeroTitle;
