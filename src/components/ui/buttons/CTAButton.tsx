"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './styles/cta-button.css';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  size = 'md',
  icon,
  loading = false,
  variant = 'primary',
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <motion.button
      className={`cta-btn cta-btn-${size} cta-btn-${variant} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={disabled || loading ? undefined : onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled || loading}
      whileHover={disabled || loading ? {} : { scale: 1.05, y: -4 }}
      whileTap={disabled || loading ? {} : { scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Ultra CTA Background Effects */}
      <div className="cta-bg-ultra">
        <div className="cta-gradient-primary" />
        <div className="cta-gradient-secondary" />
        <div className="cta-shimmer-ultra" />
        <div className="cta-pulse-ring-1" />
        <div className="cta-pulse-ring-2" />
        <div className="cta-spark-trail" />
      </div>

      {/* Enhanced CTA Content */}
      <div className="cta-content-ultra">
        {loading && <div className="cta-spinner" />}
        {!loading && (
          <>
            <span className="cta-text-ultra">{children}</span>
            {icon && (
              <div className="cta-icon-ultra">
                {icon}
              </div>
            )}
          </>
        )}
      </div>
    </motion.button>
  );
};

export default CTAButton;
