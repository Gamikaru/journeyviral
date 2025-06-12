// File: src/app/ui-gallery/components/isolated/hero/IsolatedNeonButton.tsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './IsolatedNeonButton.css';



interface IsolatedNeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
}

const IsolatedNeonButton: React.FC<IsolatedNeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  onMouseEnter,
  onMouseLeave,
  disabled = false
}) => {
  return (
    <motion.button
      className={`isolated-neon-btn ${variant} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ duration: 0.3 }}
    >
      <span className="btn-span" />
      <span className="btn-txt">{children}</span>
    </motion.button>
  );
};

export default IsolatedNeonButton;