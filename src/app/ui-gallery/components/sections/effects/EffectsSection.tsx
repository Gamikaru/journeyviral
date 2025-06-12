"use client";

import React from 'react';
import { motion } from 'framer-motion';
import './effects.css';

export function EffectsSection() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Visual Effects</h2>
        <p>Premium futuristic animations, transitions, and special effects inspired by cyberpunk and retro-futurism</p>
      </div>

      <div className="effects-showcase">
        {/* Loading Animations */}
        <div className="effect-item">
          <h4>Loading Animations</h4>
          <div className="loaders-grid">
            <div className="loader-cyber"></div>
            <div className="loader-neon"></div>
            <div className="loader-matrix"></div>
            <div className="loader-pulse"></div>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="effect-item">
          <h4>Interactive Hover Effects</h4>
          <div className="hover-demos">
            <div className="hover-card glow-hover">Cyber Glow</div>
            <div className="hover-card lift-hover">Lift & Scale</div>
            <div className="hover-card glitch-hover">Glitch Effect</div>
            <div className="hover-card neon-hover">Neon Pulse</div>
          </div>
        </div>

        {/* Text Effects */}
        <div className="effect-item">
          <h4>Text & Typography Effects</h4>
          <div className="text-effects-grid">
            <div className="text-effect glow-text">Glowing Text</div>
            <div className="text-effect typewriter-text">
              <span>Typewriter Effect</span>
            </div>
            <div className="text-effect hologram-text">Hologram Style</div>
            <div className="text-effect glitch-text" data-text="Glitch Text">Glitch Text</div>
          </div>
        </div>

        {/* Particles */}
        <div className="effect-item">
          <h4>Particle Systems</h4>
          <div className="particles-container">
            <div className="floating-particles">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="particle" style={{
                  animationDelay: `${i * 0.2}s`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}></div>
              ))}
            </div>
            <div className="particles-overlay">Floating Particles</div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="effect-item">
          <h4>Background Effects</h4>
          <div className="bg-effects-grid">
            <div className="bg-effect grid-bg">Cyber Grid</div>
            <div className="bg-effect noise-bg">VHS Noise</div>
            <div className="bg-effect wave-bg">Wave Flow</div>
            <div className="bg-effect gradient-bg">Color Shift</div>
          </div>
        </div>

        {/* Border & Frame Effects */}
        <div className="effect-item">
          <h4>Border & Frame Effects</h4>
          <div className="border-effects-grid">
            <div className="border-effect neon-border">Neon Border</div>
            <div className="border-effect scan-border">Scan Lines</div>
            <div className="border-effect pulse-border">Pulse Frame</div>
            <div className="border-effect corner-border">Corner Accents</div>
          </div>
        </div>

        {/* Advanced Animations */}
        <div className="effect-item">
          <h4>Advanced Animations</h4>
          <div className="advanced-animations">
            <div className="animation-demo matrix-rain">
              <div className="matrix-column">
                <span>0</span><span>1</span><span>0</span><span>1</span><span>0</span>
              </div>
              <div className="matrix-column">
                <span>1</span><span>0</span><span>1</span><span>0</span><span>1</span>
              </div>
              <div className="matrix-column">
                <span>0</span><span>1</span><span>0</span><span>1</span><span>0</span>
              </div>
              <span className="matrix-label">Matrix Rain</span>
            </div>

            <div className="animation-demo hologram-effect">
              <div className="hologram-lines"></div>
              <span>Hologram</span>
            </div>

            <div className="animation-demo data-stream">
              <div className="stream-line"></div>
              <div className="stream-line"></div>
              <div className="stream-line"></div>
              <span>Data Stream</span>
            </div>

            <div className="animation-demo energy-pulse">
              <div className="pulse-ring"></div>
              <div className="pulse-ring"></div>
              <span>Energy Pulse</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
