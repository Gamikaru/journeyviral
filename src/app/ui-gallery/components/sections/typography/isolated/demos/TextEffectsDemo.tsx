"use client";

import React, { useState } from 'react';
import { Zap, Copy, Check } from 'lucide-react';
import './TextEffectsDemo.css';

export function TextEffectsDemo() {
  const [scrambleActive, setScrambleActive] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const triggerScramble = () => {
    setScrambleActive(true);
    setTimeout(() => setScrambleActive(false), 2000);
  };

  const copyToClipboard = (text: string, className: string) => {
    navigator.clipboard.writeText(`<span className="${className}">${text}</span>`);
    setCopiedText(className);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="demo-component text-effects-demo">
      <div className="demo-header">
        <h3 className="demo-title">Interactive Text Effects</h3>
        <div className="demo-controls">
          <button
            className="demo-btn"
            onClick={triggerScramble}
          >
            <Zap size={16} />
            Trigger Effects
          </button>
          <button
            className={`demo-btn ${copiedText === "text-scramble" ? "success" : ""}`}
            onClick={() => copyToClipboard("SCRAMBLING TEXT", "text-scramble")}
          >
            {copiedText === "text-scramble" ? <Check size={16} /> : <Copy size={16} />}
            Copy
          </button>
        </div>
      </div>

      <div className="demo-content">
        <div className="effects-container">
          <div className="effects-grid">
            <div className="effect-item">
              <h4 className="effect-title">Scramble Text</h4>
              <span className={`text-scramble ${scrambleActive ? 'active' : ''}`}>
                SCRAMBLING TEXT
              </span>
            </div>

            <div className="effect-item">
              <h4 className="effect-title">Typewriter</h4>
              <span className="text-typewriter">Typewriter Effect...</span>
            </div>

            <div className="effect-item">
              <h4 className="effect-title">Matrix Code</h4>
              <span className="text-matrix">01001000 01100101 01101100</span>
            </div>

            <div className="effect-item">
              <h4 className="effect-title">Glitch Effect</h4>
              <span className="text-glitch">GLITCH EFFECT</span>
            </div>

            <div className="effect-item">
              <h4 className="effect-title">Neon Pulse</h4>
              <span className="text-neon-pulse">NEON PULSE</span>
            </div>

            <div className="effect-item">
              <h4 className="effect-title">Rainbow Flow</h4>
              <span className="text-rainbow">RAINBOW FLOW</span>
            </div>

            <div className="effect-item">
              <h4 className="effect-title">Holographic</h4>
              <span className="text-holographic">HOLOGRAPHIC</span>
            </div>

            <div className="effect-item">
              <h4 className="effect-title">Cyber Scan</h4>
              <span className="text-cyber-scan">CYBER SCAN</span>
            </div>
          </div>

          <div className="interactive-demo">
            <h4 className="effect-title">Hover for Effects</h4>
            <div className="hover-effects">
              <span className="hover-text hover-glow">Hover me</span>
              <span className="hover-text hover-shake">Shake me</span>
              <span className="hover-text hover-scale">Scale me</span>
              <span className="hover-text hover-rotate">Rotate me</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
