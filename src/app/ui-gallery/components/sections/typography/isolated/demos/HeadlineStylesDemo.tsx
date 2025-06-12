// app/ui-gallery/components/sections/typography/isolated/demos/HeadlineStylesDemo.tsx
"use client";

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import './HeadlineStylesDemo.css';

export function HeadlineStylesDemo() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, className: string) => {
    const htmlCode = `<h1 className="${className}">${text}</h1>`;
    navigator.clipboard.writeText(htmlCode);
    setCopiedText(className);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="headlines-demo demo-component">
      <div className="demo-header">
        <h3 className="demo-title">Headline Typography</h3>
        <div className="demo-controls">
          <span className="demo-info">
            <Sparkles size={12} />
            Click any headline to copy HTML
          </span>
        </div>
      </div>

      <div className="demo-content">
        <div className="headline-group">
          <h4 className="group-title">H1 - Primary Headlines</h4>
          <div className="headline-showcase">
            <div className="headline-samples">
              <div
                className={`headline-item ${hoveredItem === 'h1-gradient' ? 'active' : ''}`}
                onClick={() => copyToClipboard("BREAK ALGORITHMS", "h1-gradient")}
                onMouseEnter={() => setHoveredItem('h1-gradient')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h1 className="h1-gradient">BREAK ALGORITHMS</h1>
                  <div className="headline-shadow"></div>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h1-gradient" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h1-glitch' ? 'active' : ''}`}
                onClick={() => copyToClipboard("GO VIRAL", "h1-glitch")}
                onMouseEnter={() => setHoveredItem('h1-glitch')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h1 className="h1-glitch" data-text="GO VIRAL">GO VIRAL</h1>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h1-glitch" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h1-neon' ? 'active' : ''}`}
                onClick={() => copyToClipboard("NEON DREAMS", "h1-neon")}
                onMouseEnter={() => setHoveredItem('h1-neon')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h1 className="h1-neon">NEON DREAMS</h1>
                  <div className="neon-glow"></div>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h1-neon" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h1-layered' ? 'active' : ''}`}
                onClick={() => copyToClipboard("PREMIUM QUALITY", "h1-layered-shadow")}
                onMouseEnter={() => setHoveredItem('h1-layered')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h1 className="h1-layered-shadow">PREMIUM QUALITY</h1>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h1-layered-shadow" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="headline-group">
          <h4 className="group-title">H2 - Section Headers</h4>
          <div className="headline-showcase">
            <div className="headline-samples h2-samples">
              <div
                className={`headline-item ${hoveredItem === 'h2-cyber' ? 'active' : ''}`}
                onClick={() => copyToClipboard("CYBER PROTOCOL", "h2-cyber")}
                onMouseEnter={() => setHoveredItem('h2-cyber')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h2 className="h2-cyber">CYBER PROTOCOL</h2>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h2-cyber" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h2-glass' ? 'active' : ''}`}
                onClick={() => copyToClipboard("GLASS MORPHISM", "h2-glass")}
                onMouseEnter={() => setHoveredItem('h2-glass')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h2 className="h2-glass">GLASS MORPHISM</h2>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h2-glass" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h2-gradient-flow' ? 'active' : ''}`}
                onClick={() => copyToClipboard("GRADIENT FLOW", "h2-gradient-flow")}
                onMouseEnter={() => setHoveredItem('h2-gradient-flow')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h2 className="h2-gradient-flow">GRADIENT FLOW</h2>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h2-gradient-flow" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h2-hologram' ? 'active' : ''}`}
                onClick={() => copyToClipboard("HOLOGRAPHIC", "h2-hologram")}
                onMouseEnter={() => setHoveredItem('h2-hologram')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="headline-wrapper">
                  <h2 className="h2-hologram">HOLOGRAPHIC</h2>
                </div>
                <button className="copy-indicator">
                  {copiedText === "h2-hologram" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="headline-group">
          <h4 className="group-title">H3 - Sub Headers</h4>
          <div className="headline-showcase">
            <div className="headline-samples h3-samples">
              <div
                className={`headline-item ${hoveredItem === 'h3-accent' ? 'active' : ''}`}
                onClick={() => copyToClipboard("Accent Style", "h3-accent")}
                onMouseEnter={() => setHoveredItem('h3-accent')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <h3 className="h3-accent">Accent Style</h3>
                <button className="copy-indicator">
                  {copiedText === "h3-accent" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h3-outline' ? 'active' : ''}`}
                onClick={() => copyToClipboard("Outline Effect", "h3-outline")}
                onMouseEnter={() => setHoveredItem('h3-outline')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <h3 className="h3-outline">Outline Effect</h3>
                <button className="copy-indicator">
                  {copiedText === "h3-outline" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h3-glow' ? 'active' : ''}`}
                onClick={() => copyToClipboard("Glow Animation", "h3-glow")}
                onMouseEnter={() => setHoveredItem('h3-glow')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <h3 className="h3-glow">Glow Animation</h3>
                <button className="copy-indicator">
                  {copiedText === "h3-glow" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>

              <div
                className={`headline-item ${hoveredItem === 'h3-split' ? 'active' : ''}`}
                onClick={() => copyToClipboard("Split Color", "h3-split")}
                onMouseEnter={() => setHoveredItem('h3-split')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <h3 className="h3-split">Split Color</h3>
                <button className="copy-indicator">
                  {copiedText === "h3-split" ? <Check size={16} /> : <Copy size={16} />}
                  <span className="copy-tooltip">Copy HTML</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="headline-group">
          <h4 className="group-title">Special Effects</h4>
          <div className="effects-showcase">
            <div className="effect-item">
              <h2 className="h2-matrix">MATRIX RAIN</h2>
              <div className="matrix-rain"></div>
            </div>

            <div className="effect-item">
              <h2 className="h2-wave">WAVE MOTION</h2>
            </div>

            <div className="effect-item">
              <h2 className="h2-3d">3D DEPTH</h2>
            </div>
          </div>
        </div>

        <div className="headline-group">
          <h4 className="group-title">Body Text Variations</h4>
          <div className="body-showcase">
            <div className="body-content">
              <h4 className="h4-enhanced">Enhanced Performance Metrics</h4>
              <p className="body-primary">
                This is primary body text that's optimized for readability while maintaining the cyberpunk aesthetic.
                Perfect for main content and descriptions that need to capture attention.
              </p>
              <p className="body-secondary">
                Secondary text provides supporting information with reduced visual prominence.
                It's ideal for detailed descriptions, metadata, and supplementary content.
              </p>
              <p className="body-accent">
                Accent text highlights critical information with neon effects and enhanced visibility.
                Use sparingly for maximum impact on key messages.
              </p>
              <blockquote className="body-quote">
                "Great typography is not just about choosing fonts—it's about creating an emotional
                connection through every character, every word, every line."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}