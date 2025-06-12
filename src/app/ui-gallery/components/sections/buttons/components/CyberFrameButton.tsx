"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CyberFrameButton.css';

interface CyberFrameButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'default' | 'alert' | 'success';
  showScan?: boolean;
}

const CyberFrameButton: React.FC<CyberFrameButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  variant = 'default',
  showScan = true
}) => {
  const [isScanning, setIsScanning] = useState(false);

  const handleClick = () => {
    if (disabled) return;

    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1000);

    if (onClick) onClick();
  };

  return (
    <motion.button
      className={`cyber-frame-button ${variant} ${isScanning ? 'scanning' : ''} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="cyber-frame"></span>
      <span className="cyber-corners">
        <span className="corner corner-tl"></span>
        <span className="corner corner-tr"></span>
        <span className="corner corner-bl"></span>
        <span className="corner corner-br"></span>
      </span>
      <span className="cyber-text">{children}</span>
      {showScan && <span className="cyber-scan"></span>}
      {isScanning && <span className="scan-line"></span>}
      <span className="cyber-grid"></span>
    </motion.button>
  );
};

export default CyberFrameButton;