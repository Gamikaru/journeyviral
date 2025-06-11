"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './styles/ghost-button.css';

interface GhostButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
  variant?: 'default' | 'accent';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const GhostButton: React.FC<GhostButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  size = 'md',
  icon,
  loading = false,
  variant = 'default',
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <motion.button
      className={`ghost-btn ghost-btn-${size} ghost-btn-${variant} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={disabled || loading ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || loading}
      whileHover={disabled || loading ? {} : { scale: 1.02, y: -1 }}
      whileTap={disabled || loading ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Subtle Background */}
      <div className="ghost-btn-bg">
        <div className="ghost-surface" />
        <div className="ghost-border" />
        <div className="ghost-glow" />
      </div>

      {/* Content */}
      <div className="ghost-btn-content">
        {loading && <div className="ghost-spinner" />}
        {!loading && icon && <div className="ghost-icon">{icon}</div>}
        <span className="ghost-text">{children}</span>
      </div>

      {/* Hover Effects */}
      <div className="ghost-hover-effects">
        <div className="ghost-highlight" />
        <div className="ghost-ripple" />
      </div>
    </motion.button>
  );
};

export default GhostButton;
