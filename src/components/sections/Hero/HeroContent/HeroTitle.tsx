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
        className="hero-title-primary text-white"
        style={{
          color: '#ffffff',
          textShadow: '4px 4px 0px #000000, 8px 8px 0px rgba(0, 0, 0, 0.5), 0 0 120px rgba(255, 255, 255, 0.4)',
        }}
        initial={isFirstRender ? { opacity: 0, y: 50, scale: 0.9 } : false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={isFirstRender ? { duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
        variants={itemVariants}
      >
        {titleText}
      </motion.h1>

      <motion.h2
        className="hero-subtitle-primary text-gradient-holographic"
        style={{
          filter: "drop-shadow(0 0 50px rgba(255, 0, 255, 0.5))",
          background: "linear-gradient(45deg, #ff006e, #8e00ff, #00ffff, #00ff88, #ff006e)",
          backgroundSize: "400% 400%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          marginTop: '1.5rem'
        }}
        initial={isFirstRender ? { opacity: 0, y: 50, scale: 0.9 } : false}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={isFirstRender ? {
          opacity: { duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] },
          y: { duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] },
          backgroundPosition: { duration: 8, repeat: Infinity, ease: "linear" }
        } : {
          backgroundPosition: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
        variants={itemVariants}
      >
        {subtitleText}
      </motion.h2>
    </>
  );
}
