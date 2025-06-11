"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './styles/primary-button.css';

interface PrimaryButtonProps {
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

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
      className={`primary-btn primary-btn-${size} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={disabled || loading ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || loading}
      whileHover={disabled || loading ? {} : { scale: 1.03, y: -2 }}
      whileTap={disabled || loading ? {} : { scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Effects */}
      <div className="primary-btn-bg">
        <div className="primary-gradient-main" />
        <div className="primary-gradient-secondary" />
        <div className="primary-shimmer" />
        <div className="primary-glow" />
      </div>

      {/* Content */}
      <div className="primary-btn-content">
        {loading && <div className="primary-spinner" />}
        {!loading && icon && <div className="primary-icon">{icon}</div>}
        <span className="primary-text">{children}</span>
      </div>

      {/* Hover Effects */}
      <div className="primary-hover-effects">
        <div className="primary-spark-trail" />
        <div className="primary-pulse-ring" />
      </div>
    </motion.button>
  );
};

export default PrimaryButton;
