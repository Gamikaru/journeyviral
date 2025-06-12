"use client";

import React, { useState } from 'react';
import { Copy, Check, Palette } from 'lucide-react';
import './GradientTextDemo.css';

export function GradientTextDemo() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, className: string) => {
    const htmlCode = `<span className="${className}">${text}</span>`;
    navigator.clipboard.writeText(htmlCode);
    setCopiedText(className);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="gradient-text-demo demo-component">
      <div className="demo-header">
        <h3 className="demo-title">Gradient Typography</h3>
        <div className="demo-controls">
          <button className="demo-btn">
            <Palette size={16} />
            Preview All
          </button>
        </div>
      </div>

      <div className="demo-content">
        <div className="gradient-showcase">

          {/* Cyberpunk Gradients */}
          <div className="gradient-group">
            <h4 className="group-title">Cyberpunk Gradients</h4>
            <div className="gradient-samples">
              <div className="gradient-item" onClick={() => copyToClipboard("NEON FUTURE", "gradient-cyber-pink")}>
                <span className="gradient-cyber-pink">NEON FUTURE</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-cyber-pink" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("DIGITAL REALM", "gradient-cyber-blue")}>
                <span className="gradient-cyber-blue">DIGITAL REALM</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-cyber-blue" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("MATRIX CODE", "gradient-cyber-green")}>
                <span className="gradient-cyber-green">MATRIX CODE</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-cyber-green" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Holographic Effects */}
          <div className="gradient-group">
            <h4 className="group-title">Holographic Effects</h4>
            <div className="gradient-samples">
              <div className="gradient-item" onClick={() => copyToClipboard("HOLOGRAM", "gradient-holographic")}>
                <span className="gradient-holographic">HOLOGRAM</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-holographic" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("IRIDESCENT", "gradient-iridescent")}>
                <span className="gradient-iridescent">IRIDESCENT</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-iridescent" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("RAINBOW PRISM", "gradient-prism")}>
                <span className="gradient-prism">RAINBOW PRISM</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-prism" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Neon Flow Effects */}
          <div className="gradient-group">
            <h4 className="group-title">Neon Flow</h4>
            <div className="gradient-samples">
              <div className="gradient-item" onClick={() => copyToClipboard("ELECTRIC FLOW", "gradient-electric")}>
                <span className="gradient-electric">ELECTRIC FLOW</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-electric" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("PLASMA WAVE", "gradient-plasma")}>
                <span className="gradient-plasma">PLASMA WAVE</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-plasma" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("ENERGY BURST", "gradient-energy")}>
                <span className="gradient-energy">ENERGY BURST</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-energy" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Sunset & Vintage */}
          <div className="gradient-group">
            <h4 className="group-title">Sunset & Vintage</h4>
            <div className="gradient-samples">
              <div className="gradient-item" onClick={() => copyToClipboard("SUNSET GLOW", "gradient-sunset")}>
                <span className="gradient-sunset">SUNSET GLOW</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-sunset" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("VINTAGE GOLD", "gradient-vintage")}>
                <span className="gradient-vintage">VINTAGE GOLD</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-vintage" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="gradient-item" onClick={() => copyToClipboard("OCEAN DEPTHS", "gradient-ocean")}>
                <span className="gradient-ocean">OCEAN DEPTHS</span>
                <button className="copy-indicator">
                  {copiedText === "gradient-ocean" ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="advanced-examples">
          <h4 className="examples-title">Advanced Gradient Combinations</h4>
          <div className="examples-grid">
            <div className="example-card">
              <h5 className="example-name">Multi-Layer Gradient</h5>
              <div className="example-demo">
                <span className="gradient-multi-layer">LAYERED EFFECT</span>
              </div>
              <p className="example-description">
                Multiple gradient layers with blend modes for complex effects
              </p>
            </div>

            <div className="example-card">
              <h5 className="example-name">Animated Gradient</h5>
              <div className="example-demo">
                <span className="gradient-animated">FLOWING COLORS</span>
              </div>
              <p className="example-description">
                Continuous color flow animation with seamless transitions
              </p>
            </div>

            <div className="example-card">
              <h5 className="example-name">Textured Gradient</h5>
              <div className="example-demo">
                <span className="gradient-textured">TEXTURED STYLE</span>
              </div>
              <p className="example-description">
                Gradient combined with noise texture for organic feel
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="implementation-guide">
          <h4 className="guide-title">CSS Implementation</h4>
          <div className="code-examples">
            <div className="code-example">
              <div className="code-label">Basic Gradient</div>
              <code>
{`.gradient-cyber-pink {
  background: linear-gradient(135deg, #ff006e, #8338ec);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`}
              </code>
            </div>
            <div className="code-example">
              <div className="code-label">Animated Gradient</div>
              <code>
{`.gradient-animated {
  background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff);
  background-size: 300% 300%;
  animation: gradient-flow 3s ease infinite;
}`}
              </code>
            </div>
            <div className="code-example">
              <div className="code-label">Holographic Effect</div>
              <code>
{`.gradient-holographic {
  background: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5);
  filter: drop-shadow(0 0 10px rgba(255, 0, 110, 0.5));
  animation: holo-shift 4s ease infinite;
}`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
