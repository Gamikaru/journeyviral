"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './styles/secondary-button.css';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  size = 'md',
  icon,
  loading = false,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <motion.button
      className={`secondary-btn secondary-btn-${size} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={disabled || loading ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || loading}
      whileHover={disabled || loading ? {} : { scale: 1.03, y: -2 }}
      whileTap={disabled || loading ? {} : { scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glass Background */}
      <div className="secondary-btn-bg">
        <div className="glass-surface" />
        <div className="glass-border" />
        <div className="glass-glow" />
      </div>

      {/* Animated Border Effect */}
      <div className="secondary-border-effect">
        <div className="rotating-border" />
        <div className="rotating-border-secondary" />
      </div>

      {/* Content */}
      <div className="secondary-btn-content">
        {loading && <div className="secondary-spinner" />}
        {!loading && icon && <div className="secondary-icon">{icon}</div>}
        <span className="secondary-text">{children}</span>
      </div>

      {/* Hover Effects */}
      <div className="secondary-hover-effects">
        <div className="secondary-shimmer" />
        <div className="secondary-ripple" />
      </div>
    </motion.button>
  );
};

export default SecondaryButton;
