"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './IsolatedGlassCard.css';


interface IsolatedGlassCardProps {
  title?: string;
  description?: string;
  statNumber?: string;
  statLabel?: string;
  buttonText?: string;
  icon?: React.ReactNode;
  className?: string;
  onButtonClick?: () => void;
}

const IsolatedGlassCard: React.FC<IsolatedGlassCardProps> = ({
  title = "Premium Content",
  description = "Translucent background with premium blur effects and animated borders.",
  statNumber = "10M+",
  statLabel = "Views Generated",
  buttonText = "Watch Now",
  icon,
  className = '',
  onButtonClick
}) => {
  return (
    <div className={`isolated-glass-card ${className}`}>
      <div className="glass-header">
        {icon && <div className="glass-icon">{icon}</div>}
        <h3>{title}</h3>
      </div>
      <div className="glass-content">
        <p>{description}</p>
        {statNumber && statLabel && (
          <div className="glass-stats">
            <span className="stat-number">{statNumber}</span>
            <span className="stat-label">{statLabel}</span>
          </div>
        )}
        {buttonText && (
          <motion.button
            className="glass-cta"
            onClick={onButtonClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default IsolatedGlassCard;
