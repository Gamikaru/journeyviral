"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './HeroStyleDemo.css';

export function HeroStyleDemo() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, className: string) => {
    navigator.clipboard.writeText(`<h1 className="${className}">${text}</h1>`);
    setCopiedText(className);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="demo-component hero-demo full-width">
      <div className="demo-header">
        <h3 className="demo-title">Hero Typography Styles</h3>
        <div className="demo-controls">
          <button
            className={`demo-btn ${copiedText === "hero-title-retro" ? "success" : ""}`}
            onClick={() => copyToClipboard("BREAK ALGORITHMS", "hero-title-retro")}
          >
            {copiedText === "hero-title-retro" ? <Check size={16} /> : <Copy size={16} />}
            Copy Code
          </button>
        </div>
      </div>

      <div className="demo-content hero-showcase">
        <div className="hero-sample">
          <h1 className="hero-title-retro">BREAK ALGORITHMS</h1>
          <h2 className="hero-subtitle-retro">GO VIRAL OR GO HOME.</h2>
          <div className="hero-tagline-retro">
            <span className="hero-accent">Stop making ads nobody watches</span>
            <br />
            <span className="hero-primary">Start breaking algorithms with</span>
            <br />
            <span className="hero-emphasis">content that captivates.</span>
          </div>
        </div>

        <div className="hero-variations">
          <div className="variation-item">
            <h4 className="variation-title">Retro Enhanced</h4>
            <div className="hero-title-retro-alt">YOUR CONTENT SUCKS</div>
          </div>

          <div className="variation-item">
            <h4 className="variation-title">Cyberpunk Glow</h4>
            <div className="hero-title-cyber">WE CAN FIX THAT</div>
          </div>

          <div className="variation-item">
            <h4 className="variation-title">Neon Pulse</h4>
            <div className="hero-title-neon">GO VIRAL TODAY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
