"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './MatrixButton.css';

interface MatrixButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  matrixSpeed?: 'slow' | 'normal' | 'fast';
}

const MatrixButton: React.FC<MatrixButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  matrixSpeed = 'normal'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Generate random matrix characters
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const generated = Array.from({ length: 50 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    );
    setMatrixChars(generated);
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      className={`matrix-button ${matrixSpeed} ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="matrix-bg">
        {matrixChars.map((char, i) => (
          <span
            key={i}
            className={`matrix-char ${isHovered ? 'active' : ''}`}
            style={{
              left: `${(i % 10) * 10}%`,
              animationDelay: `${i * 0.1}s`
            }}
          >
            {char}
          </span>
        ))}
      </span>
      <span className="matrix-grid"></span>
      <span className="matrix-text" data-text={children}>
        {children}
      </span>
      <span className="matrix-border"></span>
    </motion.button>
  );
};

export default MatrixButton;