"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './IsolatedHeroTagline.css';

interface IsolatedHeroTaglineProps {
  lines?: string[];
  colors?: string[];
  className?: string;
  enableAnimation?: boolean;
}

const IsolatedHeroTagline: React.FC<IsolatedHeroTaglineProps> = ({
  lines = [
    "Stop making ads nobody watches",
    "Start breaking algorithms with",
    "content that captivates."
  ],
  colors = ['#ff6ec7', '#00ffff', '#ffffff'],
  className = '',
  enableAnimation = true
}) => {
  return (
    <div className={`isolated-hero-tagline-container ${className}`}>
      <motion.div
        className="tagline-content"
        initial={enableAnimation ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.div
          className="tagline-backdrop"
          animate={enableAnimation ? {
            borderColor: [
              'rgba(255, 255, 255, 0.2)',
              'rgba(215, 60, 190, 0.4)',
              'rgba(255, 255, 255, 0.2)',
            ]
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="tagline-text">
            {lines.map((line, index) => (
              <span key={index}>
                <span style={{ color: colors[index] || '#ffffff' }}>
                  {line}
                </span>
                {index < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IsolatedHeroTagline;
