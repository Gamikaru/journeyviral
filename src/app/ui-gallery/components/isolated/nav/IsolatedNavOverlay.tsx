"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IsolatedNavOverlay.css';

interface IsolatedNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  enableEffects?: boolean;
  enableAnimations?: boolean;
  variant?: 'full' | 'simple' | 'minimal';
  className?: string;
}

const navigationLinks = [
  {
    href: "#hero",
    label: "HOME",
    tagline: "START_THE_CHAOS",
    color: "#ff00ff",
    ascii: "[ 001 ]"
  },
  {
    href: "#transform",
    label: "LEARN",
    tagline: "BREAK_THE_RULES",
    color: "#00ffff",
    ascii: "[ 002 ]"
  },
  {
    href: "#viral-expertise",
    label: "PROOF",
    tagline: "SEE_THE_DAMAGE",
    color: "#ffd700",
    ascii: "[ 003 ]"
  },
  {
    href: "#contact",
    label: "CONTACT",
    tagline: "JOIN_THE_RIOT",
    color: "#ff6ec7",
    ascii: "[ 004 ]"
  },
];

const IsolatedNavOverlay: React.FC<IsolatedNavOverlayProps> = ({
  isOpen,
  onClose,
  enableEffects = true,
  enableAnimations = true,
  variant = 'full',
  className = ''
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scanlineY, setScanlineY] = useState(0);

  // Scanline animation
  useEffect(() => {
    if (!isOpen || !enableEffects) return;

    const interval = setInterval(() => {
      setScanlineY(prev => (prev >= 100 ? 0 : prev + 2));
    }, 50);

    return () => clearInterval(interval);
  }, [isOpen, enableEffects]);

  const handleLinkClick = (href: string) => {
    console.log(`Navigating to: ${href}`);
    onClose();
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'simple':
        return 'nav-overlay-simple';
      case 'minimal':
        return 'nav-overlay-minimal';
      default:
        return '';
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* VHS Static Backdrop */}
          <motion.div
            className="nav-backdrop-vhs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Cyberpunk Navigation Panel */}
          <motion.div
            className={`isolated-nav-panel ${getVariantClasses()} ${className}`}
            initial={enableAnimations ? {
              opacity: 0,
              x: 400,
              rotateY: -30
            } : { opacity: 0 }}
            animate={enableAnimations ? {
              opacity: 1,
              x: 0,
              rotateY: 0
            } : { opacity: 1 }}
            exit={enableAnimations ? {
              opacity: 0,
              x: 400,
              rotateY: -30
            } : { opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* VHS Effects */}
            {enableEffects && (
              <>
                {/* VHS Scanlines */}
                <div className="vhs-scanlines">
                  <div
                    className="scanline-moving"
                    style={{ top: `${scanlineY}%` }}
                  />
                </div>

                {/* Static Noise */}
                <div className="vhs-noise" />

                {/* RGB Distortion */}
                <div className="rgb-distortion" />

                {/* Glitch Bands */}
                <div className="glitch-bands">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="glitch-band"
                      style={{
                        top: `${20 * i + Math.random() * 10}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Content Container */}
            <div className="nav-content-cyber">
              {/* Header */}
              <motion.div
                className="nav-header-cyber"
                initial={enableAnimations ? { opacity: 0, y: -20 } : {}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="nav-header-text">
                  <span className="header-label">SYSTEM://NAVIGATION</span>
                  <span className="header-status">STATUS: ONLINE</span>
                </div>
                <div className="header-close" onClick={onClose}>
                  <span className="close-icon">[X]</span>
                  <span className="close-label">ESC</span>
                </div>
              </motion.div>

              {/* Terminal Lines */}
              <div className="terminal-lines">
                <span className="terminal-line">{'>'} ACCESSING_VIRAL_MATRIX...</span>
                <span className="terminal-line">{'>'} ROUTES_LOADED: {navigationLinks.length}</span>
                <span className="terminal-line blink">{'>'} SELECT_DESTINATION_</span>
              </div>

              {/* Navigation Links */}
              <motion.nav
                className="nav-links-cyber"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: enableAnimations ? 0.08 : 0,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={enableAnimations ? {
                      hidden: {
                        opacity: 0,
                        x: 50,
                        scale: 0.8
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      },
                    } : {}}
                  >
                    <motion.button
                      className={`nav-link-cyber ${hoveredIndex === index ? 'is-active' : ''}`}
                      onClick={() => handleLinkClick(link.href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={enableAnimations ? { x: 10 } : {}}
                      whileTap={enableAnimations ? { scale: 0.98 } : {}}
                      style={{
                        '--link-color': link.color,
                      } as React.CSSProperties}
                    >
                      {/* Glitch Background */}
                      {enableEffects && (
                        <div className="link-glitch-bg">
                          <div className="glitch-slice glitch-slice-1" />
                          <div className="glitch-slice glitch-slice-2" />
                          <div className="glitch-slice glitch-slice-3" />
                        </div>
                      )}

                      {/* ASCII Art */}
                      <div className="link-ascii">{link.ascii}</div>

                      {/* Main Content */}
                      <div className="link-main">
                        <span className="link-label-cyber">
                          {link.label}
                        </span>
                        <span className="link-tagline">{link.tagline}</span>
                      </div>

                      {/* Power Level */}
                      <div className="link-power">
                        <div className="power-bar">
                          <div className="power-fill" />
                        </div>
                        <span className="power-text">PWR</span>
                      </div>

                      {/* Hover Effects */}
                      {enableEffects && (
                        <div className="link-hover-effects">
                          <div className="hover-line hover-line-top" />
                          <div className="hover-line hover-line-bottom" />
                          <div className="hover-corners">
                            <span className="corner corner-tl" />
                            <span className="corner corner-tr" />
                            <span className="corner corner-bl" />
                            <span className="corner corner-br" />
                          </div>
                        </div>
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </motion.nav>

              {/* CTA Section */}
              <motion.div
                className="nav-cta-cyber"
                initial={enableAnimations ? { opacity: 0, y: 20 } : {}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="cta-warning">
                  <span className="warning-icon">⚠</span>
                  <span className="warning-text">WARNING: VIRAL CONTENT AHEAD</span>
                </div>

                <button
                  className="cta-button-cyber"
                  onClick={() => handleLinkClick("#contact")}
                >
                  <div className="cta-bg" />
                  <span className="cta-text">INITIATE_VIRAL_SEQUENCE</span>
                  {enableEffects && <div className="cta-scan-line" />}
                </button>
              </motion.div>

              {/* Footer Matrix */}
              {enableEffects && variant === 'full' && (
                <div className="nav-footer-matrix">
                  <div className="matrix-rain">
                    {[...Array(15)].map((_, i) => (
                      <span
                        key={i}
                        className="matrix-char"
                        style={{
                          left: `${i * 6.66}%`,
                          animationDelay: `${Math.random() * 5}s`,
                          animationDuration: `${3 + Math.random() * 2}s`
                        }}
                      >
                        {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Side Decorations */}
            {enableEffects && variant === 'full' && (
              <div className="panel-side-deco">
                <div className="deco-line deco-line-1" />
                <div className="deco-line deco-line-2" />
                <div className="deco-text">VIRAL_OVERFLOW_V2.0</div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default IsolatedNavOverlay;
