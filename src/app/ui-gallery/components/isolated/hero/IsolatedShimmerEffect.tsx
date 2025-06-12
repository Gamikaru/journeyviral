"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './IsolatedShimmerEffect.css';

interface IsolatedShimmerEffectProps {
  children: React.ReactNode;
  variant?: 'shimmer' | 'glow' | 'pulse';
  enableHover?: boolean;
  className?: string;
}

const IsolatedShimmerEffect: React.FC<IsolatedShimmerEffectProps> = ({
  children,
  variant = 'shimmer',
  enableHover = true,
  className = ''
}) => {
  const getEffectClasses = () => {
    switch (variant) {
      case 'glow':
        return 'isolated-glow-effect';
      case 'pulse':
        return 'isolated-pulse-effect';
      default:
        return 'isolated-shimmer-effect';
    }
  };

  return (
    <motion.div
      className={`isolated-effect-container ${getEffectClasses()} ${className}`}
      whileHover={enableHover ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {variant === 'shimmer' && <div className="shimmer-overlay"></div>}
      {variant === 'glow' && <div className="glow-border"></div>}
      {variant === 'pulse' && (
        <>
          <div className="pulse-ring"></div>
          <div className="pulse-ring-2"></div>
        </>
      )}
      <div className="effect-content">
        {children}
      </div>
    </motion.div>
  );
};

export default IsolatedShimmerEffect;
