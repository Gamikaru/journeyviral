"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, Download, Play, Zap } from 'lucide-react';
import IsolatedNeonButton from '../../isolated/hero/IsolatedNeonButton';
import {
  GlitchButton,
  HolographicButton,
  CyberFrameButton,
  NeonOutlineButton,
  MatrixButton,
  PlasmaButton,
  IconButton,
  LoadingButton
} from './components';
import './buttons.css';

export function ButtonsSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Button Components</h2>
        <p>Interactive buttons with cyberpunk aesthetics and viral energy</p>
      </div>

      <div className="component-grid">
        {/* Hero Neon Buttons - Exact Match */}
        <div className="component-item full-width">
          <h4>Hero Neon Buttons</h4>
          <div className="button-showcase">
            <IsolatedNeonButton
              variant="primary"
              onClick={() => console.log('Primary action')}
              onMouseEnter={() => setHoveredButton('hero-primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              LET'S GO VIRAL
            </IsolatedNeonButton>

            <IsolatedNeonButton
              variant="secondary"
              onClick={() => console.log('Secondary action')}
              onMouseEnter={() => setHoveredButton('hero-secondary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              WATCH FREE LESSON
            </IsolatedNeonButton>
          </div>
          <p className="button-description">
            {hoveredButton === 'hero-primary'
              ? "Primary CTA with vibrant gradient and rotating conic effects"
              : hoveredButton === 'hero-secondary'
              ? "Secondary button with glass morphism and subtle animations"
              : "Premium neon buttons with rotating gradient borders"}
          </p>
        </div>

        {/* Glitch Button */}
        <div className="component-item">
          <h4>Glitch Effect</h4>
          <GlitchButton
            onClick={() => console.log('Glitch clicked')}
            variant="default"
          >
            HACK THE SYSTEM
          </GlitchButton>
        </div>

        {/* Holographic Button */}
        <div className="component-item">
          <h4>Holographic</h4>
          <HolographicButton
            onClick={() => console.log('Holographic clicked')}
            variant="rainbow"
          >
            FUTURE VISION
          </HolographicButton>
        </div>

        {/* Cyber Frame Button */}
        <div className="component-item">
          <h4>Cyber Frame</h4>
          <CyberFrameButton
            onClick={() => console.log('Cyber frame clicked')}
            variant="default"
          >
            ACCESS GRANTED
          </CyberFrameButton>
        </div>

        {/* Neon Outline Button */}
        <div className="component-item">
          <h4>Neon Outline</h4>
          <NeonOutlineButton
            onClick={() => console.log('Neon outline clicked')}
            color="pink"
            pulseSpeed="normal"
          >
            GLOW MODE
          </NeonOutlineButton>
        </div>

        {/* Matrix Button */}
        <div className="component-item">
          <h4>Matrix Rain</h4>
          <MatrixButton
            onClick={() => console.log('Matrix clicked')}
            matrixSpeed="normal"
          >
            ENTER MATRIX
          </MatrixButton>
        </div>

        {/* Plasma Button */}
        <div className="component-item">
          <h4>Plasma Energy</h4>
          <PlasmaButton
            onClick={() => console.log('Plasma clicked')}
            variant="energy"
            icon={Zap}
          >
            CHARGE UP
          </PlasmaButton>
        </div>

        {/* Icon Button Group */}
        <div className="component-item">
          <h4>Icon Actions</h4>
          <div className="icon-button-group">
            <IconButton icon={Heart} variant="neon" color="pink" />
            <IconButton icon={Share2} variant="glass" color="cyan" />
            <IconButton icon={Download} variant="minimal" color="green" />
            <IconButton icon={Play} variant="neon" color="purple" />
          </div>
        </div>

        {/* Loading States */}
        <div className="component-item full-width">
          <h4>Loading States</h4>
          <div className="loading-button-group">
            <LoadingButton variant="cyber" color="purple" />
            <LoadingButton variant="orbital" color="cyan" loadingText="LOADING..." />
            <LoadingButton variant="quantum" color="green" loadingText="SYNCING..." />
          </div>
        </div>
      </div>
    </motion.div>
  );
}