"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import IsolatedNavLogo from './IsolatedNavLogo';
import IsolatedHamburgerButton from './IsolatedHamburgerButton';
import IsolatedNavigationOverlay from './IsolatedNavigationOverlay';
import './IsolatedNavbar.css';

interface IsolatedNavbarProps {
  enableFloating?: boolean;
  enableBlur?: boolean;
  showOverlay?: boolean;
  logoText?: string;
  subtitleText?: string;
  transparentBg?: boolean;
  size?: 'compact' | 'normal' | 'large';
  className?: string;
}

const IsolatedNavbar: React.FC<IsolatedNavbarProps> = ({
  enableFloating = false,
  enableBlur = false,
  showOverlay = true,
  logoText = "JOURNEYVIRAL",
  subtitleText = "#BREAK_THE_INTERNET",
  transparentBg = false,
  size = 'normal',
  className = ''
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sizeClasses = {
    compact: 'isolated-navbar--compact',
    normal: 'isolated-navbar--normal',
    large: 'isolated-navbar--large'
  };

  return (
    <div className={`isolated-navbar-container ${className}`}>
      {/* Demo Navbar */}
      <motion.nav
        className={`
          isolated-navbar
          navbar
          ${sizeClasses[size]}
          ${enableFloating ? 'floating' : ''}
          ${enableBlur ? 'blur-enabled' : ''}
          ${transparentBg ? 'transparent-bg' : ''}
        `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="navbar-surface">
          <div className="navbar-container">
            <div className="navbar-content">
              {/* Logo */}
              <div className="navbar-logo-section">
                <IsolatedNavLogo
                  logoText={logoText}
                  subtitleText={subtitleText}
                  enableGlitch={true}
                  enableHover={true}
                  enableParticles={true}
                />
              </div>

              {/* Hamburger */}
              <div className="navbar-controls-section">
                <IsolatedHamburgerButton
                  isOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  enableEffects={true}
                  enableHover={true}
                  enableAnimation={true}
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Navigation Overlay */}
      {showOverlay && (
        <IsolatedNavigationOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          enableVHS={true}
          enableGlitch={true}
          enableMatrix={true}
        />
      )}
    </div>
  );
};

export default IsolatedNavbar;
