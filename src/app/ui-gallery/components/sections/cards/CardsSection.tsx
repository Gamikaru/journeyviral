"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star, Eye, Heart, ArrowRight } from 'lucide-react';

export function CardsSection() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Card Components</h2>
        <p>Modular cards with glass morphism and neon accents</p>
      </div>

      <div className="cards-showcase">
        {/* Glass Card */}
        <div className="card glass-card">
          <div className="card-header">
            <Zap className="card-icon" />
            <h3>Glass Morphism</h3>
          </div>
          <div className="card-content">
            <p>Translucent background with blur effects and subtle borders.</p>
            <div className="card-stats">
              <span className="stat">+500%</span>
              <span className="stat-label">Growth</span>
            </div>
          </div>
        </div>

        {/* Neon Card */}
        <div className="card neon-card">
          <div className="neon-border"></div>
          <div className="card-header">
            <Star className="card-icon" />
            <h3>Neon Glow</h3>
          </div>
          <div className="card-content">
            <p>Vibrant neon borders with pulsing animations.</p>
            <div className="card-stats">
              <span className="stat">10M+</span>
              <span className="stat-label">Views</span>
            </div>
          </div>
        </div>

        {/* Cyberpunk Card */}
        <div className="card cyber-card">
          <div className="cyber-grid"></div>
          <div className="card-header">
            <Eye className="card-icon" />
            <h3>Cyberpunk Grid</h3>
          </div>
          <div className="card-content">
            <p>Grid patterns with glitch effects and digital aesthetics.</p>
            <div className="card-stats">
              <span className="stat">24HR</span>
              <span className="stat-label">Guarantee</span>
            </div>
          </div>
        </div>

        {/* Interactive Card */}
        <div className="card interactive-card">
          <div className="card-header">
            <Heart className="card-icon" />
            <h3>Interactive</h3>
          </div>
          <div className="card-content">
            <p>Hover and click effects with smooth transitions.</p>
            <button className="card-button">
              Interact <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
