"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './NeonOutlineButton.css';

interface NeonOutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  color?: 'pink' | 'cyan' | 'purple' | 'green';
  pulseSpeed?: 'slow' | 'normal' | 'fast';
}

const NeonOutlineButton: React.FC<NeonOutlineButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  color = 'pink',
  pulseSpeed = 'normal'
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 1000);

    if (onClick) onClick();
  };

  return (
    <motion.button
      className={`neon-outline-button ${color} pulse-${pulseSpeed} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="neon-border"></span>
      <span className="neon-glow"></span>
      <span className="neon-text">{children}</span>
      <span className="neon-reflection"></span>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="neon-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </motion.button>
  );
};

export default NeonOutlineButton;