"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './IsolatedVHSBadge.css';

interface IsolatedVHSBadgeProps {
  mainText?: string;
  recText?: string;
  enableScanline?: boolean;
  className?: string;
}

const IsolatedVHSBadge: React.FC<IsolatedVHSBadgeProps> = ({
  mainText = "VIRAL_PROTOCOL_2.0",
  recText = "●REC",
  enableScanline = true,
  className = ''
}) => {
  return (
    <div className={`isolated-vhs-badge ${className}`}>
      <div className="vhs-badge-content">
        <span className="vhs-badge-rec">{recText}</span>
        <span className="vhs-badge-text">{mainText}</span>
      </div>
      {enableScanline && <div className="vhs-badge-scanline"></div>}
    </div>
  );
};

export default IsolatedVHSBadge;
