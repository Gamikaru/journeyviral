// Path: components/navigation/NavigationOverlay.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { CTAButton } from "../buttons";
import "./styles/navigation-overlay.css";

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
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

export default function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [glitchText, setGlitchText] = useState("");
  const [scanlineY, setScanlineY] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  // Glitch text effect
  useEffect(() => {
    if (hoveredIndex !== null) {
      const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
      const originalText = navigationLinks[hoveredIndex].label;
      let iterations = 0;

      const interval = setInterval(() => {
        setGlitchText(
          originalText
            .split("")
            .map((char, index) => {
              if (index < iterations) {
                return originalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iterations >= originalText.length) {
          clearInterval(interval);
        }

        iterations += 1;
      }, 30);

      return () => clearInterval(interval);
    } else {
      setGlitchText("");
    }
  }, [hoveredIndex]);

  // Scanline animation
  useEffect(() => {
    if (isOpen) {
      const scanInterval = setInterval(() => {
        setScanlineY((prev) => (prev + 2) % 100);
      }, 50);
      return () => clearInterval(scanInterval);
    }
  }, [isOpen]);

  // Handle link click
  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }, 300);
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
            ref={overlayRef}
            className="nav-panel-cyber"
            initial={{
              opacity: 0,
              x: 400,
              rotateY: -30
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotateY: 0
            }}
            exit={{
              opacity: 0,
              x: 400,
              rotateY: -30
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
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

            {/* Content Container */}
            <div className="nav-content-cyber">
              {/* Header */}
              <motion.div
                className="nav-header-cyber"
                initial={{ opacity: 0, y: -20 }}
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
                      staggerChildren: 0.08,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={{
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
                    }}
                  >
                    <motion.button
                      className={`nav-link-cyber ${hoveredIndex === index ? 'is-active' : ''}`}
                      onClick={() => handleLinkClick(link.href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        '--link-color': link.color,
                      } as React.CSSProperties}
                    >
                      {/* Glitch Background */}
                      <div className="link-glitch-bg">
                        <div className="glitch-slice glitch-slice-1" />
                        <div className="glitch-slice glitch-slice-2" />
                        <div className="glitch-slice glitch-slice-3" />
                      </div>

                      {/* ASCII Art */}
                      <div className="link-ascii">{link.ascii}</div>

                      {/* Main Content */}
                      <div className="link-main">
                        <span className="link-label-cyber">
                          {hoveredIndex === index ? glitchText || link.label : link.label}
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
                    </motion.button>
                  </motion.div>
                ))}
              </motion.nav>

              {/* CTA Section */}
              <motion.div
                className="nav-cta-cyber"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="cta-warning">
                  <span className="warning-icon">⚠</span>
                  <span className="warning-text">WARNING: VIRAL CONTENT AHEAD</span>
                </div>

                <CTAButton
                  onClick={() => handleLinkClick("#contact")}
                  size="lg"
                  variant="primary"
                >
                  INITIATE_VIRAL_SEQUENCE
                </CTAButton>
              </motion.div>

              {/* Footer Matrix */}
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
            </div>

            {/* Side Decorations */}
            <div className="panel-side-deco">
              <div className="deco-line deco-line-1" />
              <div className="deco-line deco-line-2" />
              <div className="deco-text">VIRAL_OVERFLOW_V2.0</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}