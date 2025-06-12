"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './IsolatedHamburgerButton.css';

interface IsolatedHamburgerButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
  enableEffects?: boolean;
  enableHover?: boolean;
  enableAnimation?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const IsolatedHamburgerButton: React.FC<IsolatedHamburgerButtonProps> = ({
  isOpen = false,
  onClick,
  enableEffects = true,
  enableHover = true,
  enableAnimation = true,
  size = 'medium',
  className = ''
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const actualIsOpen = isOpen || internalOpen;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const sizeClasses = {
    small: 'isolated-hamburger--small',
    medium: 'isolated-hamburger--medium',
    large: 'isolated-hamburger--large'
  };

  return (
    <motion.button
      className={`
        isolated-hamburger-button
        hamburger-button
        ${actualIsOpen ? 'is-open' : ''}
        ${sizeClasses[size]}
        ${!enableEffects ? 'no-effects' : ''}
        ${!enableHover ? 'no-hover' : ''}
        ${className}
      `}
      onClick={handleClick}
      aria-label="Toggle menu"
      aria-expanded={actualIsOpen}
      whileHover={enableAnimation && enableHover ? {
        scale: 1.05,
      } : {}}
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

export default IsolatedHamburgerButton;
