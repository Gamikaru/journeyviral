"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MousePointer, Eye, Zap, Play } from 'lucide-react';
import './InteractiveTextDemo.css';

export function InteractiveTextDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(false);
  const trackingRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackingRef.current) return;

    const rect = trackingRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  const toggleTracking = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div className="interactive-text-demo demo-component">
      <div className="demo-header">
        <h3 className="demo-title">Interactive Typography</h3>
        <div className="demo-controls">
          <button
            className={`demo-btn ${isTracking ? 'active' : ''}`}
            onClick={toggleTracking}
          >
            <MousePointer size={16} />
            {isTracking ? 'Stop Tracking' : 'Enable Tracking'}
          </button>
        </div>
      </div>

      <div className="demo-content">
        <div className="interactive-showcase">

          {/* Mouse Tracking Effects */}
          <div className="interactive-group">
            <h4 className="group-title">Mouse Tracking Effects</h4>
            <div className="interactive-samples">

              <div
                className="interactive-item"
                ref={trackingRef}
                onMouseMove={handleMouseMove}
              >
                <h5 className="effect-name">3D Tilt Effect</h5>
                <div className="effect-demo">
                  <span
                    className={`text-3d-tilt ${isTracking ? 'tracking' : ''}`}
                    style={{
                      '--mouse-x': `${mousePosition.x}%`,
                      '--mouse-y': `${mousePosition.y}%`
                    } as React.CSSProperties}
                  >
                    FOLLOW CURSOR
                  </span>
                </div>
                <p className="effect-description">
                  Text tilts and shadows follow mouse movement for 3D depth
                </p>
              </div>

              <div className="interactive-item">
                <h5 className="effect-name">Magnetic Text</h5>
                <div className="effect-demo">
                  <span className="text-magnetic">MAGNETIC PULL</span>
                </div>
                <p className="effect-description">
                  Text characters are attracted to cursor position
                </p>
              </div>

              <div className="interactive-item">
                <h5 className="effect-name">Spotlight Effect</h5>
                <div className="effect-demo">
                  <span className="text-spotlight">REVEAL TEXT</span>
                </div>
                <p className="effect-description">
                  Text is revealed through a following spotlight effect
                </p>
              </div>
            </div>
          </div>

          {/* Hover Interactions */}
          <div className="interactive-group">
            <h4 className="group-title">Hover Interactions</h4>
            <div className="interactive-samples">

              <div className="interactive-item">
                <h5 className="effect-name">Character Split</h5>
                <div className="effect-demo">
                  <span className="text-char-split">BREAK APART</span>
                </div>
                <p className="effect-description">
                  Characters split and animate on hover with stagger effect
                </p>
              </div>

              <div className="interactive-item">
                <h5 className="effect-name">Wave Distortion</h5>
                <div className="effect-demo">
                  <span className="text-wave">WAVE MOTION</span>
                </div>
                <p className="effect-description">
                  Text creates wave-like distortion effect on hover
                </p>
              </div>

              <div className="interactive-item">
                <h5 className="effect-name">Color Explosion</h5>
                <div className="effect-demo">
                  <span className="text-color-burst">COLOR BURST</span>
                </div>
                <p className="effect-description">
                  Explosive color animation radiates from hover point
                </p>
              </div>
            </div>
          </div>

          {/* Click Interactions */}
          <div className="interactive-group">
            <h4 className="group-title">Click Interactions</h4>
            <div className="interactive-samples">

              <div className="interactive-item">
                <h5 className="effect-name">Shatter Effect</h5>
                <div className="effect-demo">
                  <span className="text-shatter">CLICK TO SHATTER</span>
                </div>
                <p className="effect-description">
                  Text breaks into fragments that scatter on click
                </p>
              </div>

              <div className="interactive-item">
                <h5 className="effect-name">Morph Transform</h5>
                <div className="effect-demo">
                  <span className="text-morph" data-text="SHAPE SHIFT">CLICK TO MORPH</span>
                </div>
                <p className="effect-description">
                  Text morphs between different words and styles
                </p>
              </div>

              <div className="interactive-item">
                <h5 className="effect-name">Particle Burst</h5>
                <div className="effect-demo">
                  <span className="text-particles">PARTICLE BURST</span>
                </div>
                <p className="effect-description">
                  Click generates particle explosion from text
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Interactions */}
          <div className="interactive-group">
            <h4 className="group-title">Scroll Interactions</h4>
            <div className="interactive-samples">

              <div className="interactive-item">
                <h5 className="effect-name">Parallax Text</h5>
                <div className="effect-demo scroll-demo">
                  <span className="text-parallax">SCROLL REVEAL</span>
                </div>
                <p className="effect-description">
                  Text reveals with parallax motion on scroll
                </p>
              </div>

              <div className="interactive-item">
                <h5 className="effect-name">Letter Reveal</h5>
                <div className="effect-demo scroll-demo">
                  <span className="text-letter-reveal">LETTER BY LETTER</span>
                </div>
                <p className="effect-description">
                  Individual letters animate in sequence on scroll
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Demo Section */}
        <div className="advanced-interactive">
          <h4 className="advanced-title">Advanced Interactive Demo</h4>
          <div className="advanced-demo-area">
            <div className="demo-playground">
              <span
                className="interactive-playground-text"
                onMouseMove={handleMouseMove}
              >
                INTERACTIVE PLAYGROUND
              </span>
              <div className="interaction-indicators">
                <div className="indicator">
                  <Eye size={16} />
                  <span>Hover for glow</span>
                </div>
                <div className="indicator">
                  <MousePointer size={16} />
                  <span>Move for tilt</span>
                </div>
                <div className="indicator">
                  <Zap size={16} />
                  <span>Click for burst</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="implementation-guide">
          <h4 className="guide-title">Implementation Guide</h4>
          <div className="code-examples">
            <div className="code-example">
              <div className="code-label">Mouse Tracking</div>
              <code>
{`const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setMousePos({
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100
  });
};`}
              </code>
            </div>
            <div className="code-example">
              <div className="code-label">3D Tilt CSS</div>
              <code>
{`.text-3d-tilt {
  transform: perspective(1000px)
    rotateX(calc(var(--mouse-y) * 0.2deg))
    rotateY(calc(var(--mouse-x) * 0.2deg));
  transition: transform 0.1s ease;
}`}
              </code>
            </div>
            <div className="code-example">
              <div className="code-label">Hover Effects</div>
              <code>
{`.text-char-split:hover span {
  transform: translateY(-10px) rotate(5deg);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: calc(var(--char-index) * 0.05s);
}`}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
