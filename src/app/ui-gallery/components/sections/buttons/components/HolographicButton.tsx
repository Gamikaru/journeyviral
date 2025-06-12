"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HolographicButton.css';

interface HolographicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'rainbow' | 'cosmic' | 'neon';
}

const HolographicButton: React.FC<HolographicButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  variant = 'rainbow'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`holographic-button ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      } as React.CSSProperties}
    >
      <span className="holo-bg"></span>
      <span className="holo-shine"></span>
      <span className="holo-text">{children}</span>
      <span className="holo-particles">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`particle particle-${i + 1}`}></span>
        ))}
      </span>
    </motion.button>
  );
};

export default HolographicButton;