"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IsolatedNavLogo,
  IsolatedHamburgerButton,
  IsolatedHamburger,
  IsolatedNavOverlay,
  IsolatedNavigationOverlay,
  IsolatedNavbar
} from '../../isolated/nav';

export function NavSection() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Navigation Elements</h2>
        <p>Premium navigation components with cyberpunk aesthetics</p>
      </div>

      <div className="component-grid">
        {/* Navigation Logo */}
        <div className="component-item">
          <h4>Navigation Logo</h4>
          <div className="component-demo">
            <IsolatedNavLogo
              logoText="JOURNEYVIRAL"
              subtitleText="#BREAK_THE_INTERNET"
              enableGlitch={true}
              enableHover={true}
              enableParticles={true}
            />
          </div>
          <p className="component-description">
            Interactive logo with glitch effects, hover animations, and particle systems
          </p>
        </div>

        {/* Hamburger Button */}
        <div className="component-item">
          <h4>Hamburger Button</h4>
          <div className="component-demo">
            <IsolatedHamburgerButton
              isOpen={hamburgerOpen}
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              enableEffects={true}
              enableHover={true}
              enableAnimation={true}
              size="medium"
            />
          </div>
          <p className="component-description">
            Cyberpunk hamburger with gradient borders, energy fields, and smooth animations
          </p>
        </div>

        {/* Enhanced Hamburger */}
        <div className="component-item">
          <h4>Enhanced Hamburger</h4>
          <div className="component-demo">
            <IsolatedHamburger
              isOpen={hamburgerOpen}
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              variant="default"
              enableEffects={true}
              enableAnimation={true}
            />
          </div>
          <p className="component-description">
            Advanced hamburger with multiple variants and enhanced visual effects
          </p>
        </div>

        {/* Navigation Overlay */}
        <div className="component-item full-width">
          <h4>Navigation Overlay</h4>
          <div className="component-demo overlay-demo">
            <button
              className="demo-trigger-btn"
              onClick={() => setOverlayOpen(true)}
            >
              Open Navigation Overlay
            </button>
            <IsolatedNavOverlay
              isOpen={overlayOpen}
              onClose={() => setOverlayOpen(false)}
              enableEffects={true}
              enableAnimations={true}
              variant="full"
            />
          </div>
          <p className="component-description">
            Full-screen navigation with VHS effects, cyberpunk styling, and smooth transitions
          </p>
        </div>

        {/* Enhanced Navigation Overlay */}
        <div className="component-item full-width">
          <h4>VHS Navigation Overlay</h4>
          <div className="component-demo overlay-demo">
            <button
              className="demo-trigger-btn"
              onClick={() => setOverlayOpen(true)}
            >
              Open VHS Navigation
            </button>
            <IsolatedNavigationOverlay
              isOpen={overlayOpen}
              onClose={() => setOverlayOpen(false)}
              enableVHS={true}
              enableGlitch={true}
              enableMatrix={true}
            />
          </div>
          <p className="component-description">
            Premium navigation overlay with VHS scanlines, glitch effects, and matrix animations
          </p>
        </div>

        {/* Complete Navbar */}
        <div className="component-item full-width">
          <h4>Complete Navbar</h4>
          <div className="component-demo navbar-demo">
            <IsolatedNavbar
              logoText="DEMO BRAND"
              subtitleText="#UI_GALLERY"
              enableFloating={true}
              enableBlur={true}
              showOverlay={true}
              transparentBg={false}
              size="normal"
            />
          </div>
          <p className="component-description">
            Complete navbar solution combining logo, hamburger, and overlay components
          </p>
        </div>

        {/* Navbar Variants */}
        <div className="component-item full-width">
          <h4>Navbar Variants</h4>
          <div className="component-demo variants-demo">
            <div className="variant-item">
              <h5>Compact</h5>
              <IsolatedNavbar
                logoText="COMPACT"
                subtitleText="#SMALL"
                enableFloating={false}
                enableBlur={false}
                showOverlay={false}
                size="compact"
              />
            </div>
            <div className="variant-item">
              <h5>Large</h5>
              <IsolatedNavbar
                logoText="LARGE MODE"
                subtitleText="#BIG_ENERGY"
                enableFloating={true}
                enableBlur={true}
                showOverlay={true}
                size="large"
              />
            </div>
          </div>
          <p className="component-description">
            Different navbar sizes and configurations for various use cases
          </p>
        </div>
      </div>
    </motion.div>
  );
}
