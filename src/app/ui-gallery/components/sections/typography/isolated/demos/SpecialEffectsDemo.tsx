"use client";

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Zap } from 'lucide-react';
import './SpecialEffectsDemo.css';

export function SpecialEffectsDemo() {
  const [scrambleActive, setScrambleActive] = useState(false);
  const [typewriterActive, setTypewriterActive] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);

  const triggerScramble = () => {
    setScrambleActive(true);
    setTimeout(() => setScrambleActive(false), 2000);
  };

  const toggleTypewriter = () => {
    setTypewriterActive(!typewriterActive);
  };

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 1000);
  };

  const toggleMatrix = () => {
    setMatrixActive(!matrixActive);
  };

  useEffect(() => {
    // Auto-cycle effects every 5 seconds
    const interval = setInterval(() => {
      if (!scrambleActive && !glitchActive) {
        const random = Math.random();
        if (random < 0.3) triggerScramble();
        else if (random < 0.6) triggerGlitch();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [scrambleActive, glitchActive]);

  return (
    <div className="special-effects-demo demo-component">
      <div className="demo-header">
        <h3 className="demo-title">Text Effects</h3>
        <div className="demo-controls">
          <button className="demo-btn" onClick={triggerScramble}>
            <Zap size={16} />
            Scramble
          </button>
          <button className="demo-btn" onClick={toggleTypewriter}>
            {typewriterActive ? <Pause size={16} /> : <Play size={16} />}
            Typewriter
          </button>
          <button className="demo-btn" onClick={triggerGlitch}>
            <RotateCcw size={16} />
            Glitch
          </button>
        </div>
      </div>

      <div className="demo-content">
        <div className="effects-showcase">

          {/* Scramble Effect */}
          <div className="effect-item">
            <h4 className="effect-title">Text Scramble</h4>
            <div className="effect-demo">
              <span className={`text-scramble ${scrambleActive ? 'active' : ''}`}>
                SCRAMBLING TEXT EFFECT
              </span>
            </div>
            <p className="effect-description">
              Randomly replaces characters with symbols before revealing the final text
            </p>
          </div>

          {/* Typewriter Effect */}
          <div className="effect-item">
            <h4 className="effect-title">Typewriter Animation</h4>
            <div className="effect-demo">
              <span className={`text-typewriter ${typewriterActive ? 'active' : ''}`}>
                Typing animation with cursor...
              </span>
            </div>
            <p className="effect-description">
              Classic typewriter effect with blinking cursor animation
            </p>
          </div>

          {/* Matrix Code Effect */}
          <div className="effect-item">
            <h4 className="effect-title">Matrix Code</h4>
            <div className="effect-demo">
              <span className={`text-matrix ${matrixActive ? 'active' : ''}`}>
                01001000 01100101 01101100 01101100 01101111
              </span>
            </div>
            <p className="effect-description">
              Binary code animation with green terminal styling
            </p>
          </div>

          {/* Glitch Effect */}
          <div className="effect-item">
            <h4 className="effect-title">Glitch Distortion</h4>
            <div className="effect-demo">
              <span className={`text-glitch ${glitchActive ? 'active' : ''}`}>
                GLITCH EFFECT
              </span>
            </div>
            <p className="effect-description">
              Digital glitch with color displacement and position shifting
            </p>
          </div>

          {/* Neon Pulse */}
          <div className="effect-item">
            <h4 className="effect-title">Neon Pulse</h4>
            <div className="effect-demo">
              <span className="text-neon-pulse">
                NEON PULSE EFFECT
              </span>
            </div>
            <p className="effect-description">
              Continuous neon glow animation with brightness variations
            </p>
          </div>

          {/* Rainbow Flow */}
          <div className="effect-item">
            <h4 className="effect-title">Rainbow Flow</h4>
            <div className="effect-demo">
              <span className="text-rainbow">
                RAINBOW GRADIENT FLOW
              </span>
            </div>
            <p className="effect-description">
              Flowing rainbow gradient animation across text
            </p>
          </div>

          {/* Holographic */}
          <div className="effect-item">
            <h4 className="effect-title">Holographic Shift</h4>
            <div className="effect-demo">
              <span className="text-holographic">
                HOLOGRAPHIC TEXT
              </span>
            </div>
            <p className="effect-description">
              Iridescent color shifting effect like holographic foil
            </p>
          </div>

          {/* Cyberpunk Scan */}
          <div className="effect-item">
            <h4 className="effect-title">Cyberpunk Scan</h4>
            <div className="effect-demo">
              <span className="text-cyber-scan">
                CYBERPUNK SCANNING
              </span>
            </div>
            <p className="effect-description">
              Horizontal scan lines with futuristic glow effects
            </p>
          </div>

        </div>

        {/* Usage Guide */}
        <div className="usage-guide">
          <h4 className="guide-title">Implementation Guide</h4>
          <div className="code-examples">
            <div className="code-example">
              <div className="code-label">Scramble Effect</div>
              <code>
                {`<span className="text-scramble active">Text</span>`}
              </code>
            </div>
            <div className="code-example">
              <div className="code-label">Typewriter Effect</div>
              <code>
                {`<span className="text-typewriter">Typing...</span>`}
              </code>
            </div>
            <div className="code-example">
              <div className="code-label">Glitch Effect</div>
              <code>
                {`<span className="text-glitch active">Glitch</span>`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
