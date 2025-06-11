"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { useTextScramble } from "../hooks/useTextScramble";
import "../styles/hero-typography.css";

interface HeroTitleProps {
  mousePosition: { x: number; y: number };
  itemVariants: Variants;
}

export default function HeroTitle({ mousePosition, itemVariants }: HeroTitleProps) {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const titleSubtitlePairs = [
    {
      title: "#YOUR CONTENT SUCKS.",
      subtitle: "WE CAN FIX THAT."
    },
    {
      title: "#GO VIRAL",
      subtitle: "OR GO HOME."
    },
    {
      title: "#BREAK ALGORITHMS.",
      subtitle: "NOT THE BANK."
    }
  ];

  const currentPair = titleSubtitlePairs[currentPairIndex];
  const titleText = useTextScramble(currentPair.title, isScrambling);
  const subtitleText = useTextScramble(currentPair.subtitle, isScrambling);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitiallyLoaded(true);
      setIsFirstRender(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasInitiallyLoaded) return;

    const firstTransitionDelay = 4000;

    const startCycling = setTimeout(() => {
      const cycleContent = () => {
        setIsScrambling(true);
        setCurrentPairIndex((prev) => (prev + 1) % titleSubtitlePairs.length);

        setTimeout(() => {
          setIsScrambling(false);
        }, 1000);
      };

      cycleContent();
      const interval = setInterval(cycleContent, 5000);
      return () => clearInterval(interval);
    }, firstTransitionDelay);

    return () => clearTimeout(startCycling);
  }, [hasInitiallyLoaded, titleSubtitlePairs.length]);

  return (
    <>
      <motion.h1
        className="hero-title-primary retro-enhanced text-white"
        style={{
          // Let CSS handle the layered shadow effect
        }}
        initial={isFirstRender ? { opacity: 0, y: 50, scale: 0.9 } : false}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          // Add subtle mouse parallax that works with skew
          x: mousePosition.x * 2,
          y: mousePosition.y * 1.5,
        }}
        transition={isFirstRender ? {
          duration: 1,
          delay: 0.3,
          ease: [0.4, 0, 0.2, 1]
        } : {
          x: { duration: 0.3, ease: "easeOut" },
          y: { duration: 0.3, ease: "easeOut" },
        }}
        variants={itemVariants}
      >
        <span>{titleText}</span>
      </motion.h1>

      <motion.h2
        className="hero-subtitle-primary retro-enhanced"
        style={{
          marginTop: '2rem',
          // Let CSS handle the gradient and skew effect
        }}
        initial={isFirstRender ? { opacity: 0, y: 30, scale: 0.95 } : false}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          // Subtle mouse parallax that works with gradient
          x: mousePosition.x * 1.5,
          y: mousePosition.y * 1,
        }}
        transition={isFirstRender ? {
          opacity: { duration: 1.2, delay: 0.7, ease: [0.4, 0, 0.2, 1] },
          y: { duration: 1.2, delay: 0.7, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 1.2, delay: 0.7, ease: [0.4, 0, 0.2, 1] },
        } : {
          x: { duration: 0.4, ease: "easeOut" },
          y: { duration: 0.4, ease: "easeOut" },
        }}
        variants={itemVariants}
      >
        <span>{subtitleText}</span>
      </motion.h2>
    </>
  );
}
