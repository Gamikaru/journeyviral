"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import './PlasmaButton.css';

interface PlasmaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: LucideIcon;
  variant?: 'energy' | 'storm' | 'aurora';
}

const PlasmaButton: React.FC<PlasmaButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  icon: Icon,
  variant = 'energy'
}) => {
  const [isCharging, setIsCharging] = useState(false);

  const handleClick = () => {
    if (disabled || isCharging) return;

    setIsCharging(true);
    setTimeout(() => {
      setIsCharging(false);
      if (onClick) onClick();
    }, 1000);
  };

  return (
    <motion.button
      className={`plasma-button ${variant} ${isCharging ? 'charging' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="plasma-core"></span>
      <span className="plasma-field"></span>
      <span className="plasma-particles">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`particle particle-${i + 1}`}></span>
        ))}
      </span>
      <span className="plasma-content">
        {Icon && <Icon className="plasma-icon" size={20} />}
        <span className="plasma-text">{children}</span>
      </span>
      {isCharging && <span className="charge-indicator"></span>}
    </motion.button>
  );
};

export default PlasmaButton;