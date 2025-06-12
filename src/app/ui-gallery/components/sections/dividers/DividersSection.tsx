"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function DividersSection() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Dividers & Separators</h2>
        <p>Section breaks with animated and static designs</p>
      </div>

      <div className="dividers-showcase">
        <div className="divider-item">
          <h4>Gradient Line</h4>
          <div className="divider gradient-divider"></div>
        </div>

        <div className="divider-item">
          <h4>Neon Pulse</h4>
          <div className="divider neon-divider"></div>
        </div>

        <div className="divider-item">
          <h4>Circuit Pattern</h4>
          <div className="divider circuit-divider">
            <div className="circuit-nodes"></div>
          </div>
        </div>

        <div className="divider-item">
          <h4>Matrix Rain</h4>
          <div className="divider matrix-divider">
            <span className="matrix-char">01</span>
            <span className="matrix-char">10</span>
            <span className="matrix-char">11</span>
          </div>
        </div>

        <div className="divider-item">
          <h4>Glitch Break</h4>
          <div className="divider glitch-divider">
            <span className="glitch-line"></span>
            <span className="glitch-line"></span>
            <span className="glitch-line"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
