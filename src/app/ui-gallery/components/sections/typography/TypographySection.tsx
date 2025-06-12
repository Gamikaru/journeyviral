"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Copy, Check } from 'lucide-react';

export function TypographySection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [scrambleActive, setScrambleActive] = useState(false);

  const copyToClipboard = (text: string, className: string) => {
    navigator.clipboard.writeText(`<h1 className="${className}">${text}</h1>`);
    setCopiedText(className);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const triggerScramble = () => {
    setScrambleActive(true);
    setTimeout(() => setScrambleActive(false), 2000);
  };

  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Typography System</h2>
        <p>Viral-ready text styles with cyberpunk flair - extracted from Hero section</p>
      </div>

      <div className="typography-showcase">
        {/* Hero-Style Headlines */}
        <div className="type-sample hero-typography">
          <div className="sample-header">
            <h4>Hero Headlines - Retro Enhanced</h4>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard("BREAK ALGORITHMS", "hero-title-retro")}
            >
              {copiedText === "hero-title-retro" ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <h1 className="hero-title-retro">BREAK ALGORITHMS</h1>
          <h2 className="hero-subtitle-retro">GO VIRAL OR GO HOME.</h2>
          <div className="hero-tagline-retro">
            <span className="accent">Stop making ads nobody watches</span>
            <br />
            <span className="primary">Start breaking algorithms with</span>
            <br />
            <span className="emphasis">content that captivates.</span>
          </div>
        </div>

        {/* H1 Styles - Enhanced */}
        <div className="type-sample">
          <div className="sample-header">
            <h4>H1 - Hero Headlines</h4>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard("YOUR CONTENT SUCKS.", "h1-gradient")}
            >
              {copiedText === "h1-gradient" ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <h1 className="h1-gradient">YOUR CONTENT SUCKS.</h1>
          <h1 className="h1-glitch">WE CAN FIX THAT.</h1>
          <h1 className="h1-neon">GO VIRAL OR GO HOME</h1>
          <h1 className="h1-layered-shadow">PREMIUM QUALITY</h1>
        </div>

        {/* H2 Styles - Enhanced */}
        <div className="type-sample">
          <div className="sample-header">
            <h4>H2 - Section Headers</h4>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard("BREAK ALGORITHMS", "h2-cyber")}
            >
              {copiedText === "h2-cyber" ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <h2 className="h2-cyber">BREAK ALGORITHMS</h2>
          <h2 className="h2-glass">NOT THE BANK</h2>
          <h2 className="h2-gradient-flow">VIRAL CONTENT</h2>
        </div>

        {/* H3 Styles */}
        <div className="type-sample">
          <h4>H3 - Sub Headers</h4>
          <h3 className="h3-accent">The Secret Formula</h3>
          <h3 className="h3-outline">Viral Methodology</h3>
          <h3 className="h3-glow">Premium Strategy</h3>
        </div>

        {/* H4 & Body Text */}
        <div className="type-sample">
          <h4>H4 & Body Text</h4>
          <h4 className="h4-standard">Enhanced Performance</h4>
          <p className="body-primary">This is primary body text that's optimized for readability while maintaining the cyberpunk aesthetic.</p>
          <p className="body-secondary">Secondary text for supporting information and detailed descriptions.</p>
          <p className="body-accent">Accent text for highlighting important information with neon effects.</p>
        </div>

        {/* Special Effects Text - Enhanced */}
        <div className="type-sample effects-demo">
          <div className="sample-header">
            <h4>Text Effects - Interactive</h4>
            <button
              className="trigger-btn"
              onClick={triggerScramble}
            >
              <Zap size={16} />
              Trigger Effects
            </button>
          </div>
          <div className="effects-grid">
            <span className={`text-scramble ${scrambleActive ? 'active' : ''}`}>SCRAMBLING TEXT</span>
            <span className="text-typewriter">Typewriter Effect...</span>
            <span className="text-matrix">01001000 01100101 01101100</span>
            <span className="text-glitch">GLITCH EFFECT</span>
            <span className="text-neon-pulse">NEON PULSE</span>
            <span className="text-rainbow">RAINBOW FLOW</span>
          </div>
        </div>

        {/* VHS & Retro Effects */}
        <div className="type-sample">
          <h4>VHS & Retro Styles</h4>
          <div className="vhs-text">●REC VIRAL_PROTOCOL_2.0</div>
          <div className="retro-metal">CHROME EFFECT</div>
          <div className="scanlines-text">SCANLINE OVERLAY</div>
        </div>

        {/* Gradient Combinations */}
        <div className="type-sample">
          <h4>Gradient Combinations</h4>
          <div className="gradient-cyber">CYBER GRADIENT</div>
          <div className="gradient-neon">NEON GRADIENT</div>
          <div className="gradient-holographic">HOLOGRAPHIC</div>
        </div>
      </div>
    </motion.div>
  );
}
