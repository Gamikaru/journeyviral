"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './LoadingButton.css';

interface LoadingButtonProps {
  children?: React.ReactNode;
  loadingText?: string;
  variant?: 'cyber' | 'orbital' | 'quantum';
  color?: 'purple' | 'cyan' | 'green';
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children = 'PROCESSING',
  loadingText = 'PROCESSING...',
  variant = 'cyber',
  color = 'purple'
}) => {
  return (
    <motion.button
      className={`loading-button ${variant} ${color}`}
      disabled
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {variant === 'cyber' && (
        <>
          <span className="loading-spinner"></span>
          <span className="loading-text">{loadingText}</span>
        </>
      )}

      {variant === 'orbital' && (
        <>
          <span className="orbital-container">
            <span className="orbital-core"></span>
            <span className="orbital-ring"></span>
            <span className="orbital-particle"></span>
          </span>
          <span className="loading-text">{loadingText}</span>
        </>
      )}

      {variant === 'quantum' && (
        <>
          <span className="quantum-field">
            {[...Array(3)].map((_, i) => (
              <span key={i} className={`quantum-dot dot-${i + 1}`}></span>
            ))}
          </span>
          <span className="loading-text">{loadingText}</span>
        </>
      )}
    </motion.button>
  );
};

export default LoadingButton;