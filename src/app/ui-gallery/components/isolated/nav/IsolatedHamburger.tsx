"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './IsolatedHamburger.css';

interface IsolatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  variant?: 'default' | 'compact' | 'minimal';
  enableEffects?: boolean;
  enableAnimation?: boolean;
  className?: string;
}

const IsolatedHamburger: React.FC<IsolatedHamburgerProps> = ({
  isOpen,
  onClick,
  variant = 'default',
  enableEffects = true,
  enableAnimation = true,
  className = ''
}) => {
  const handleChange = () => {
    onClick();
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'compact':
        return 'hamburger-compact';
      case 'minimal':
        return 'hamburger-minimal';
      default:
        return '';
    }
  };

  return (
    <motion.button
      className={`isolated-hamburger ${getVariantClasses()} ${isOpen ? 'is-open' : ''} ${className}`}
      onClick={handleChange}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      whileHover={enableAnimation ? { scale: 1.05 } : {}}
      whileTap={enableAnimation ? { scale: 0.95 } : {}}
    >
      {/* Gradient Border */}
      {enableEffects && <div className="hamburger-border" />}

      {/* Corner Accents */}
      {enableEffects && (
        <>
          <div className="corner-accent corner-tl" />
          <div className="corner-accent corner-br" />
        </>
      )}

      {/* Energy Field */}
      {enableEffects && <div className="energy-field" />}

      {/* Main Wrapper */}
      <div className="hamburger-wrapper">
        <div className="hamburger-bar hamburger-bar--top" />
        <div className="hamburger-bar hamburger-bar--middle" />
        <div className="hamburger-bar hamburger-bar--bottom" />

        {/* Center Glow */}
        {enableEffects && <div className="center-glow" />}
      </div>

      {/* Scan Effect */}
      {enableEffects && <div className="scan-effect" />}
    </motion.button>
  );
};

export default IsolatedHamburger;
