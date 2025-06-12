"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './IsolatedHeroLogo.css';

interface IsolatedHeroLogoProps {
  logoText?: string;
  logoImageSrc?: string;
  enableFloating?: boolean;
  className?: string;
}

const IsolatedHeroLogo: React.FC<IsolatedHeroLogoProps> = ({
  logoText = "JOURNEYVIRAL",
  logoImageSrc = "/images/misc/logo_circular_frame_dots.svg",
  enableFloating = true,
  className = ''
}) => {
  return (
    <div className={`isolated-hero-logo-wrapper ${className}`}>
      <motion.div
        className="logo-container"
        animate={enableFloating ? { y: [0, -6, 0] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Background glow effect */}
        <div className="logo-glow" />

        {/* Shimmer effect */}
        <div className="logo-shimmer" />

        {/* Logo image */}
        <div className="logo-image-wrapper">
          <Image
            src={logoImageSrc}
            alt="Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-15 md:h-15"
            priority
          />
        </div>

        {/* Logo text */}
        <h2 className="logo-text">
          {logoText}
        </h2>
      </motion.div>
    </div>
  );
};

export default IsolatedHeroLogo;
