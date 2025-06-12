// app/ui-gallery/components/sections/typography/isolated/demos/VHSRetroDemo.tsx
"use client";

import React, { useEffect, useState } from 'react';
import './VHSRetroDemo.css';

export function VHSRetroDemo() {
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const trackingInterval = setInterval(() => {
      setIsTracking(prev => !prev);
    }, 3000);

    return () => clearInterval(trackingInterval);
  }, []);

  return (
    <div className="vhs-retro-demo demo-component">
      <div className="demo-header">
        <h3 className="demo-title">VHS & Retro Styles</h3>
        <div className="demo-controls">
          <span className="demo-info">Nostalgic effects from the 80s and 90s</span>
        </div>
      </div>

      <div className="demo-content">
        <div className="retro-showcase">

          {/* VHS Style */}
          <div className="retro-item vhs-item">
            <h4 className="retro-title">VHS Recording Style</h4>
            <div className="retro-demo vhs-screen">
              <div className="vhs-overlay"></div>
              <div className="vhs-tracking" data-tracking={isTracking}></div>
              <div className="vhs-text">
                <span className="rec-indicator">●REC</span>
                <span className="vhs-title">VIRAL_PROTOCOL_2.0</span>
              </div>
              <div className="vhs-timestamp">{currentTime}</div>
              <div className="vhs-play">▶ PLAY</div>
            </div>
            <p className="retro-description">
              Classic VHS recording interface with tracking lines and timestamp
            </p>
          </div>

          {/* Chrome Metal Effect */}
          <div className="retro-item chrome-item">
            <h4 className="retro-title">Chrome Metal</h4>
            <div className="retro-demo chrome-demo">
              <div className="chrome-reflection"></div>
              <div className="retro-metal" data-text="CHROME EFFECT">CHROME EFFECT</div>
            </div>
            <p className="retro-description">
              Reflective metallic chrome text with dynamic shine effect
            </p>
          </div>

          {/* Scanlines Effect */}
          <div className="retro-item crt-item">
            <h4 className="retro-title">CRT Scanlines</h4>
            <div className="retro-demo crt-monitor">
              <div className="crt-frame"></div>
              <div className="scanlines-text">SCANLINE OVERLAY</div>
              <div className="crt-flicker"></div>
              <div className="phosphor-burn"></div>
            </div>
            <p className="retro-description">
              Old CRT monitor with phosphor burn and flicker effects
            </p>
          </div>

          {/* Neon Sign */}
          <div className="retro-item neon-item">
            <h4 className="retro-title">80s Neon Sign</h4>
            <div className="retro-demo neon-demo">
              <div className="neon-sign" data-text="NEON NIGHTS">
                <span>NEON</span>
                <span>NIGHTS</span>
              </div>
              <div className="neon-reflection"></div>
            </div>
            <p className="retro-description">
              Classic 80s neon sign with realistic glow and reflection
            </p>
          </div>

          {/* Digital Clock */}
          <div className="retro-item digital-item">
            <h4 className="retro-title">Digital Display</h4>
            <div className="retro-demo digital-demo">
              <div className="digital-frame">
                <div className="digital-clock" data-time={currentTime}>
                  {currentTime}
                </div>
                <div className="digital-label">TIME CODE</div>
              </div>
              <div className="led-dots"></div>
            </div>
            <p className="retro-description">
              LED digital clock display with authentic segment styling
            </p>
          </div>

          {/* Retro Wave */}
          <div className="retro-item synthwave-item">
            <h4 className="retro-title">Synthwave Style</h4>
            <div className="retro-demo synthwave-demo">
              <div className="synthwave-grid"></div>
              <div className="synthwave-text">
                <span className="synth-main">SYNTHWAVE</span>
                <span className="synth-year">1984</span>
              </div>
              <div className="synthwave-sun"></div>
            </div>
            <p className="retro-description">
              Outrun aesthetic with animated grid and sunset
            </p>
          </div>

          {/* Arcade Game */}
          <div className="retro-item arcade-item">
            <h4 className="retro-title">Arcade Game</h4>
            <div className="retro-demo arcade-demo">
              <div className="arcade-screen">
                <div className="arcade-text">GAME OVER</div>
                <div className="arcade-score">SCORE: 999999</div>
                <div className="arcade-credits">CREDITS: 00</div>
              </div>
              <div className="arcade-scanlines"></div>
            </div>
            <p className="retro-description">
              Classic arcade cabinet display with pixel perfect rendering
            </p>
          </div>

          {/* Terminal Green */}
          <div className="retro-item terminal-item">
            <h4 className="retro-title">Terminal Green</h4>
            <div className="retro-demo terminal-demo">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-green">system --status</span>
                </div>
                <div className="terminal-line">
                  <span className="terminal-output">SYSTEM READY_</span>
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </div>
            <p className="retro-description">
              Retro terminal with authentic phosphor glow
            </p>
          </div>

        </div>

        {/* Era Collections */}
        <div className="era-collections">
          <h4 className="collections-title">Style Collections by Era</h4>

          <div className="era-grid">
            <div className="era-card era-80s">
              <div className="era-background"></div>
              <h5 className="era-name">1980s</h5>
              <div className="era-samples">
                <span className="sample-80s-1">NEON NIGHTS</span>
                <span className="sample-80s-2">LASER GRID</span>
                <span className="sample-80s-3">CHROME WAVE</span>
              </div>
              <div className="era-decoration"></div>
            </div>

            <div className="era-card era-90s">
              <div className="era-background"></div>
              <h5 className="era-name">1990s</h5>
              <div className="era-samples">
                <span className="sample-90s-1">●REC VHS</span>
                <span className="sample-90s-2">DIGITAL TV</span>
                <span className="sample-90s-3">CD-ROM</span>
              </div>
              <div className="era-decoration"></div>
            </div>

            <div className="era-card era-00s">
              <div className="era-background"></div>
              <h5 className="era-name">2000s</h5>
              <div className="era-samples">
                <span className="sample-00s-1">MATRIX.EXE</span>
                <span className="sample-00s-2">Y2K SYSTEM</span>
                <span className="sample-00s-3">TECH NOIR</span>
              </div>
              <div className="era-decoration"></div>
            </div>
          </div>
        </div>

        {/* Implementation Examples */}
        <div className="implementation-guide">
          <h4 className="guide-title">CSS Implementation</h4>
          <div className="css-examples">
            <div className="css-example">
              <div className="css-label">VHS Text Effect</div>
              <pre className="css-code">
                <code>{`.vhs-text {
  font-family: 'Courier New', monospace;
  color: #ff0000;
  text-shadow:
    0 0 10px #ff0000,
    2px 2px 0 rgba(0, 255, 255, 0.5);
  animation: vhs-glitch 0.5s infinite;
  filter: blur(0.3px);
}`}</code>
              </pre>
            </div>
            <div className="css-example">
              <div className="css-label">Chrome Gradient</div>
              <pre className="css-code">
                <code>{`.chrome-text {
  background: linear-gradient(
    45deg,
    #c0c0c0 0%,
    #ffffff 45%,
    #c0c0c0 50%,
    #808080 55%,
    #c0c0c0 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.5));
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}