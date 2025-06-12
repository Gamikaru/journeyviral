"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './IsolatedNavLogo.css';

interface IsolatedNavLogoProps {
  logoText?: string;
  subtitleText?: string;
  enableGlitch?: boolean;
  enableHover?: boolean;
  enableParticles?: boolean;
  enableLink?: boolean;
  className?: string;
  onClick?: () => void;
}

const IsolatedNavLogo: React.FC<IsolatedNavLogoProps> = ({
  logoText = "JOURNEYVIRAL",
  subtitleText = "#BREAK_THE_INTERNET",
  enableGlitch = true,
  enableHover = true,
  enableParticles = true,
  enableLink = false,
  className = '',
  onClick
}) => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Random glitch effect
  useEffect(() => {
    if (!enableGlitch) return;

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
  }, [isHovered, enableGlitch]);

  // Split logo text into parts for styling
  const getTextParts = () => {
    if (logoText === "JOURNEYVIRAL") {
      return {
        firstLetter: "J",
        firstWord: "OURNEY",
        secondLetter: "V",
        secondWord: "IRAL"
      };
    }

    // For custom text, split at first space or halfway point
    const spaceIndex = logoText.indexOf(' ');
    if (spaceIndex > 0) {
      const firstPart = logoText.substring(0, spaceIndex);
      const secondPart = logoText.substring(spaceIndex + 1);
      return {
        firstLetter: firstPart.charAt(0),
        firstWord: firstPart.substring(1),
        secondLetter: secondPart.charAt(0),
        secondWord: secondPart.substring(1)
      };
    }

    // No space, split halfway
    const halfway = Math.ceil(logoText.length / 2);
    const firstPart = logoText.substring(0, halfway);
    const secondPart = logoText.substring(halfway);
    return {
      firstLetter: firstPart.charAt(0),
      firstWord: firstPart.substring(1),
      secondLetter: secondPart.charAt(0),
      secondWord: secondPart.substring(1)
    };
  };

  const textParts = getTextParts();

  const logoElement = (
    <div
      className={`isolated-nav-logo nav-logo-cyberpunk ${className}`}
      onMouseEnter={() => enableHover && setIsHovered(true)}
      onMouseLeave={() => enableHover && setIsHovered(false)}
      onClick={onClick}
      style={{ cursor: enableLink || onClick ? 'pointer' : 'default' }}
    >
      {/* Dynamic Background Glow */}
      <div className="logo-dynamic-bg" />

      {/* Enhanced Text Container */}
      <motion.div
        className="nav-logo-text-wrapper"
        whileHover={enableHover ? { x: 3 } : {}}
      >
        {/* Main Text with Split Styling */}
        <div
          className={`nav-logo-text-split ${glitchActive ? "text-glitch" : ""} ${isHovered ? "text-hovered" : ""}`}
        >
          {/* First part */}
          <span className="text-journey">
            <span className="letter-j">{textParts.firstLetter}</span>
            <span className="text-ourney">{textParts.firstWord}</span>
          </span>

          {/* Second part */}
          <span className="text-viral">
            <span className="letter-v">{textParts.secondLetter}</span>
            <span className="text-iral">{textParts.secondWord}</span>
          </span>

          {/* Glitch Layers */}
          {enableGlitch && (
            <>
              <div className="text-glitch-layer layer-1" aria-hidden="true">
                <span className="text-journey">
                  <span className="letter-j">{textParts.firstLetter}</span>
                  <span className="text-ourney">{textParts.firstWord}</span>
                </span>
                <span className="text-viral">
                  <span className="letter-v">{textParts.secondLetter}</span>
                  <span className="text-iral">{textParts.secondWord}</span>
                </span>
              </div>
              <div className="text-glitch-layer layer-2" aria-hidden="true">
                <span className="text-journey">
                  <span className="letter-j">{textParts.firstLetter}</span>
                  <span className="text-ourney">{textParts.firstWord}</span>
                </span>
                <span className="text-viral">
                  <span className="letter-v">{textParts.secondLetter}</span>
                  <span className="text-iral">{textParts.secondWord}</span>
                </span>
              </div>
            </>
          )}
        </div>

        {/* Enhanced Subtitle */}
        {subtitleText && (
          <motion.span
            className="nav-logo-subtitle"
            animate={
              isHovered && enableHover
                ? {
                    opacity: [0.6, 1, 0.6],
                    letterSpacing: ["0.2em", "0.3em", "0.2em"],
                  }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          >
            {subtitleText}
          </motion.span>
        )}
      </motion.div>

      {/* Hover Effect Particles */}
      {isHovered && enableParticles && (
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
    </div>
  );

  return logoElement;
};

export default IsolatedNavLogo;
