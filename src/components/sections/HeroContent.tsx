"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Fixed-duration text scramble effect - always takes exactly 1000ms regardless of text length
const useTextScramble = (text: string, isActive: boolean) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    if (!isActive) {
      setDisplayText(text);
      return;
    }

    const TOTAL_SCRAMBLE_TIME = 1000; // Fixed 1000ms duration for all texts
    const FRAME_RATE = 60; // 60fps for smooth animation
    const FRAME_INTERVAL = 1000 / FRAME_RATE; // ~16.67ms per frame
    const TOTAL_FRAMES = TOTAL_SCRAMBLE_TIME / FRAME_INTERVAL; // ~60 frames total

    let currentFrame = 0;

    const interval = setInterval(() => {
      const progress = currentFrame / TOTAL_FRAMES; // 0 to 1

      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            // Calculate when this character should be "locked in"
            const charLockPoint = (index + 1) / text.length; // Stagger character reveals

            if (progress >= charLockPoint) {
              return text[index]; // Character is locked to final value
            } else {
              return chars[Math.floor(Math.random() * chars.length)]; // Still scrambling
            }
          })
          .join("")
      );

      currentFrame++;

      if (currentFrame > TOTAL_FRAMES) {
        clearInterval(interval);
        setDisplayText(text); // Ensure final text is correct
      }
    }, FRAME_INTERVAL);

    return () => clearInterval(interval);
  }, [text, chars, isActive]);

  return displayText;
};

interface HeroContentProps {
  mousePosition: { x: number; y: number };
  itemVariants: any;
}

export default function HeroContent({ mousePosition, itemVariants }: HeroContentProps) {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Update the title pairs to include the correct subtitle
  const titleSubtitlePairs = [
    {
      title: "YOUR CONTENT SUCKS.",
      subtitle: "WE CAN FIX THAT."
    },
    {
      title: "GO VIRAL",
      subtitle: "OR GO HOME."
    },
    {
      title: "BREAK ALGORITHMS.",
      subtitle: "NOT THE BANK."
    }
  ];

  const currentPair = titleSubtitlePairs[currentPairIndex];
  const titleText = useTextScramble(currentPair.title, isScrambling);
  const subtitleText = useTextScramble(currentPair.subtitle, isScrambling);

  // Initial load effect - mark when initial animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitiallyLoaded(true);
      setIsFirstRender(false);
    }, 1500); // Wait for initial upward animations to complete

    return () => clearTimeout(timer);
  }, []);

  // Cycle content with proper timing - seamless scramble transitions
  useEffect(() => {
    if (!hasInitiallyLoaded) return;

    // First transition happens 4 seconds after initial load completes
    const firstTransitionDelay = 4000;

    const startCycling = setTimeout(() => {
      const cycleContent = () => {
        // Start scrambling the current text
        setIsScrambling(true);

        // Change to next pair immediately when scrambling starts
        // This makes the scramble "become" the new text instead of being a separate animation
        setCurrentPairIndex((prev) => (prev + 1) % titleSubtitlePairs.length);

        // Stop scrambling after exactly 1000ms (matching our fixed scramble duration)
        setTimeout(() => {
          setIsScrambling(false);
        }, 1000);
      };

      // First transition
      cycleContent();

      // Subsequent transitions every 5 seconds (4 seconds display + 1 second scramble)
      const interval = setInterval(cycleContent, 5000);

      return () => clearInterval(interval);
    }, firstTransitionDelay);

    return () => clearTimeout(startCycling);
  }, [hasInitiallyLoaded, titleSubtitlePairs.length]);

  return (
    <div className="max-w-6xl mx-auto" style={{ padding: 0, margin: '0 auto' }}>
      {/* Logo and Brand - Minimal spacing */}
      <motion.div
        className="flex items-center justify-center gap-6"
        style={{ marginBottom: '1.5rem', padding: 0 }}
        variants={itemVariants}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, rotate: 5 }}
        >
          <Image
            src="/images/misc/logo_circular_frame_dots.svg"
            alt="JourneyViral Logo"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24"
            priority
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-accent-neon/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h2
          className="font-lastica text-2xl md:text-3xl font-black tracking-[0.2em] uppercase text-white"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
          }}
          whileHover={{ scale: 1.05, letterSpacing: "0.25em" }}
          transition={{ duration: 0.3 }}
        >
          JOURNEYVIRAL
        </motion.h2>
      </motion.div>

      {/* Main Headlines - Minimal spacing */}
      <motion.div
        className="text-center space-y-4"
        style={{
          marginBottom: '2rem',
          padding: 0,
          transform: `perspective(1000px) rotateX(${mousePosition.y * 1.5}deg) rotateY(${mousePosition.x * 1.5}deg)`,
        }}
        variants={itemVariants}
      >
        {/* Main Title - Only animate upward on first render, no re-mount animations */}
        <motion.h1
          className="heading-hero-primary-xl text-white"
          initial={isFirstRender ? { opacity: 0, y: 50, scale: 0.9 } : false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={isFirstRender ? { duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
        >
          {titleText}
        </motion.h1>

        {/* Subtitle - Only animate upward on first render, no re-mount animations */}
        <motion.h2
          className="heading-hero-subtitle-xl text-gradient-holographic"
          style={{
            filter: "drop-shadow(0 0 50px rgba(255, 0, 255, 0.5))",
            background: "linear-gradient(45deg, #ff006e, #8e00ff, #00ffff, #00ff88, #ff006e)",
            backgroundSize: "400% 400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginTop: '1.5rem' // Increased from 0.5rem to prevent clipping
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
        >
          {subtitleText}
        </motion.h2>
      </motion.div>

      {/* Description - Minimal spacing for maximum viewport efficiency */}
      <motion.div
        className="max-w-6xl mx-auto text-center px-4 md:px-8"
        style={{ marginBottom: '1.5rem', padding: '0 1rem 0 1rem' }}
        variants={itemVariants}
      >
        {/* Primary taglines - Minimal spacing */}
        <motion.div
          className="space-y-4"
          style={{ paddingTop: '0.5rem', paddingBottom: '1rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="relative group"
            style={{ marginBottom: '0.75rem' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-600/30 to-red-500/20 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative" style={{ padding: '1rem 1.5rem' }}>
              <p className="hero-tagline-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-lastica font-black leading-tight tracking-tight uppercase">
                <span className="text-red-400">Stop making ads</span>{" "}
                <span className="text-white/90">nobody watches.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            style={{ marginBottom: '0.75rem' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-500/30 to-green-400/20 rounded-3xl blur-2xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            <div className="relative" style={{ padding: '1rem 1.5rem' }}>
              <p className="hero-tagline-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-lastica font-black leading-tight tracking-tight uppercase">
                <span className="text-emerald-400">Start making content</span>{" "}
                <span className="text-white/90">that breaks algorithms.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
