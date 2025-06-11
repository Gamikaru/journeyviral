// Path: components/navigation/NavLogo.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./styles/nav-logo.css";

export default function NavLogo() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(
      () => {
        if (!isHovered) {
          setGlitchActive(true);
          setTimeout(() => setGlitchActive(false), 200);
        }
      },
      3000 + Math.random() * 4000
    );

    return () => clearInterval(glitchInterval);
  }, [isHovered]);

  return (
    <Link
      href="/"
      className="nav-logo-cyberpunk"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background Glow */}
      <div className="logo-dynamic-bg" />

      {/* Enhanced Text Container */}
      <motion.div className="nav-logo-text-wrapper" whileHover={{ x: 3 }}>
        {/* Main Text with Split Styling */}
        <div
          className={`nav-logo-text-split ${glitchActive ? "text-glitch" : ""} ${isHovered ? "text-hovered" : ""}`}
        >
          {/* JOURNEY part */}
          <span className="text-journey">
            <span className="letter-j">J</span>
            <span className="text-ourney">OURNEY</span>
          </span>
          {/* VIRAL part */}
          <span className="text-viral">
            <span className="letter-v">V</span>
            <span className="text-iral">IRAL</span>
          </span>

          {/* Glitch Layers */}
          <div className="text-glitch-layer layer-1" aria-hidden="true">
            <span className="text-journey">
              <span className="letter-j">J</span>
              <span className="text-ourney">OURNEY</span>
            </span>
            <span className="text-viral">
              <span className="letter-v">V</span>
              <span className="text-iral">IRAL</span>
            </span>
          </div>
          <div className="text-glitch-layer layer-2" aria-hidden="true">
            <span className="text-journey">
              <span className="letter-j">J</span>
              <span className="text-ourney">OURNEY</span>
            </span>
            <span className="text-viral">
              <span className="letter-v">V</span>
              <span className="text-iral">IRAL</span>
            </span>
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <motion.span
          className="nav-logo-subtitle"
          animate={
            isHovered
              ? {
                  opacity: [0.6, 1, 0.6],
                  letterSpacing: ["0.2em", "0.3em", "0.2em"],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        >
          #BREAK_THE_INTERNET
        </motion.span>
      </motion.div>

      {/* Hover Effect Particles */}
      {isHovered && (
        <div className="logo-particles">
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * 60 - 30,
                y: Math.random() * 60 - 30,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>
      )}
    </Link>
  );
}
