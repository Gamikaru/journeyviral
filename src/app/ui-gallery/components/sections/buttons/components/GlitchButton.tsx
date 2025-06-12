"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GlitchButton.css';

interface GlitchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  glitchText?: string;
  variant?: 'default' | 'danger' | 'success';
}

const GlitchButton: React.FC<GlitchButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  glitchText,
  variant = 'default'
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleMouseEnter = () => {
    setIsGlitching(true);
    // Add random glitch intervals
    const interval = setInterval(() => {
      setIsGlitching(prev => !prev);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setIsGlitching(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    setIsGlitching(false);
  };

  return (
    <motion.button
      className={`glitch-button ${variant} ${isGlitching ? 'glitching' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="glitch-text" data-text={glitchText || children}>
        {children}
      </span>
      <span className="glitch-bg"></span>
      {isGlitching && (
        <>
          <span className="glitch-clone glitch-clone-1" aria-hidden="true">
            {children}
          </span>
          <span className="glitch-clone glitch-clone-2" aria-hidden="true">
            {children}
          </span>
        </>
      )}
    </motion.button>
  );
};

export default GlitchButton;