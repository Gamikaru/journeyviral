// File: src/components/sections/Hero.tsx

"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import VideoBackground from "@/components/common/VideoBackground";

// Text scramble effect for dynamic text
const useTextScramble = (text: string) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?アイウエオカキクケコサシスセソ";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const scramble = () => {
      let iteration = 0;

      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 2;
      }, 30);
    };

    // Initial scramble
    scramble();

    // Periodic re-scramble
    timeout = setTimeout(() => {
      const periodicScramble = setInterval(() => {
        scramble();
      }, 8000);

      return () => clearInterval(periodicScramble);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, chars]);

  return displayText;
};

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-based animations
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -150]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  // Dynamic text with scramble effect
  const taglineText = useTextScramble("YOUR CONTENT SUCKS.");
  const sublineText = useTextScramble("WE'LL FIX THAT.");

  // Mouse tracking for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Fallback background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/misc/purple_gradient_bg_static_image.jpg")',
        }}
      />

      {/* Video Background - Enhanced test with better browser support */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => {
          console.error("Video error:", e);
          console.error("Video error details:", e.currentTarget.error);
          // Hide video on error to show fallback background
          e.currentTarget.style.display = 'none';
        }}
        onLoadedData={() => console.log("Video loaded successfully")}
        onCanPlay={() => console.log("Video can play")}
        onLoadStart={() => console.log("Video load started")}
      >
        <source src="/videos/video_version_of_Homepage_hero_bg.mp4" type="video/mp4" />
        <p className="absolute inset-0 flex items-center justify-center text-white bg-red-500/50">
          Your browser does not support the video tag. Video path: /videos/video_version_of_Homepage_hero_bg.mp4
        </p>
      </video>

      <div ref={sectionRef} className="relative z-10 text-center py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          style={{ opacity: opacityFade }}
        >
          {/* Animated Logo */}
          <motion.div
            className="flex items-center justify-center gap-6 mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate={floatingAnimation}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                filter: "drop-shadow(0 0 30px rgba(255, 0, 255, 0.8))",
              }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/misc/logo_circular_frame_dots.svg"
                alt="JourneyViral Logo"
                width={100}
                height={100}
                className="w-24 h-24 md:w-32 md:h-32"
                priority
              />
              {/* Pulsing ring around logo */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-neon"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            <motion.h2
              className="font-lastica text-4xl md:text-5xl font-bold tracking-wider"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 30px rgba(255, 0, 255, 0.8)",
              }}
            >
              JOURNEYVIRAL
            </motion.h2>
          </motion.div>

          {/* Main Headlines with 3D effect */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg)`,
            }}
          >
            <motion.h1
              className="heading-hero mb-8 leading-[0.85] relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="block text-white"
                whileHover={{ scale: 1.05 }}
              >
                {taglineText}
              </motion.span>
              <motion.span
                className="block text-gradient-holographic text-[1.2em] mt-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {sublineText}
              </motion.span>
            </motion.h1>

            {/* Glitch text effect */}
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl md:text-3xl font-bold text-accent-neon text-glitch" data-text="🚀 BREAK THE INTERNET 🚀">
                🚀 BREAK THE INTERNET 🚀
              </span>
            </motion.div>
          </motion.div>

          {/* Subheadlines with typewriter effect */}
          <motion.div
            className="max-w-3xl mx-auto space-y-6 mb-16"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key="line1"
                className="text-xl md:text-2xl font-interphases text-white/90"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                Stop making ads nobody watches.
              </motion.p>

              <motion.p
                key="line2"
                className="text-xl md:text-2xl font-interphases text-white/90"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Start making content that breaks algorithms.
              </motion.p>

              <motion.p
                key="line3"
                className="text-2xl md:text-3xl font-interphases font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-neon to-accent-electric"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We turn corporate cringe into viral gold.
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="relative group px-12 py-6 bg-gradient-to-r from-accent-neon to-accent-electric text-white font-bold text-lg md:text-xl rounded-full overflow-hidden"
              whileHover={{
                boxShadow: "0 0 50px rgba(255, 0, 255, 0.8), 0 0 100px rgba(0, 255, 255, 0.6)",
              }}
            >
              {/* Button shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />

              {/* Button text */}
              <span className="relative z-10 flex items-center gap-3">
                LET'S GO VIRAL
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Stats ticker */}
          <motion.div
            className="mt-16 flex justify-center items-center gap-8 flex-wrap"
            variants={itemVariants}
          >
            {[
              { number: "10M+", label: "Views Generated" },
              { number: "500%", label: "Avg. Growth" },
              { number: "24hr", label: "Viral Guarantee" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-accent-bright"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: opacityFade }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-accent-neon to-accent-electric rounded-full mt-2"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}