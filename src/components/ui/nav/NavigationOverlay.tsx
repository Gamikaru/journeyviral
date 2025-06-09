"use client";

import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "./styles/navigation-overlay.css";

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationLinks = [
  {
    href: "#hero",
    label: "HOME",
    description: "Where magic begins",
    color: "#ff00ff",
    glow: "rgba(255, 0, 255, 0.8)",
    glowLight: "rgba(255, 0, 255, 0.3)",
    icon: "⌂"
  },
  {
    href: "#transform",
    label: "LEARN",
    description: "Transform your content",
    color: "#00ffff",
    glow: "rgba(0, 255, 255, 0.8)",
    glowLight: "rgba(0, 255, 255, 0.3)",
    icon: "⚡"
  },
  {
    href: "#viral-expertise",
    label: "PROOF",
    description: "See our results",
    color: "#ffd700",
    glow: "rgba(255, 215, 0, 0.8)",
    glowLight: "rgba(255, 215, 0, 0.3)",
    icon: "⚙"
  },
  {
    href: "#contact",
    label: "CONTACT",
    description: "Let's talk viral",
    color: "#ff6ec7",
    glow: "rgba(255, 110, 199, 0.8)",
    glowLight: "rgba(255, 110, 199, 0.3)",
    icon: "✉"
  },
];

export default function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const overlayRef = useRef<HTMLDivElement>(null);

  // Motion values for advanced interactions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transform mouse position for lighting effects
  const lightingX = useTransform(mouseX, [0, 320], [0, 100]);
  const lightingY = useTransform(mouseY, [0, 480], [0, 100]);

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

  // Track mouse movement for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (overlayRef.current) {
        const rect = overlayRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setCursorPosition({ x, y });
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    if (isOpen) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isOpen, mouseX, mouseY]);

  // Handle link click
  const handleLinkClick = (href: string) => {
    onClose();

    // Smooth scroll to section
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

  // Set loaded state for enhanced animations
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Enhanced Backdrop with Dynamic Blur */}
          <motion.div
            className="nav-backdrop-enhanced"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(12px)"
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)"
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            onClick={onClose}
          />

          {/* Navigation Dropdown - Ultra Enhanced */}
          <motion.div
            ref={overlayRef}
            className={`nav-dropdown-ultra ${isLoaded ? 'loaded' : ''}`}
            initial={{
              opacity: 0,
              y: -60,
              scale: 0.85,
              rotateX: -25,
              rotateY: 5
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0
            }}
            exit={{
              opacity: 0,
              y: -60,
              scale: 0.85,
              rotateX: -25,
              rotateY: 5
            }}
            transition={{
              duration: 0.6,
              ease: [0.34, 1.26, 0.64, 1],
              type: "spring",
              damping: 20,
              stiffness: 280
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            style={{
              "--cursor-x": `${cursorPosition.x}px`,
              "--cursor-y": `${cursorPosition.y}px`,
              "--lighting-x": `${lightingX.get()}%`,
              "--lighting-y": `${lightingY.get()}%`,
            } as React.CSSProperties}
          >
            {/* Ultra Enhanced Background Elements */}
            <div className="nav-bg-ultra">
              {/* Multi-layer animated borders */}
              <div className="nav-border-primary" />
              <div className="nav-border-secondary" />
              <div className="nav-border-accent" />

              {/* Advanced noise texture */}
              <div className="nav-noise-advanced" />

              {/* Dynamic cursor lighting */}
              <motion.div
                className="nav-cursor-light"
                style={{
                  x: lightingX,
                  y: lightingY,
                }}
              />

              {/* Enhanced particle system */}
              <div className="nav-particles-advanced">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`particle-advanced particle-type-${(i % 4) + 1}`}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      x: Math.random() * 320,
                      y: Math.random() * 480
                    }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      scale: [0, 1, 0],
                      x: Math.random() * 320,
                      y: Math.random() * 480
                    }}
                    transition={{
                      duration: Math.random() * 4 + 6,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>

              {/* Ambient glow layers */}
              <div className="nav-ambient-ultra">
                <div className="ambient-layer-1" />
                <div className="ambient-layer-2" />
                <div className="ambient-layer-3" />
              </div>
            </div>

            {/* Enhanced Content Container */}
            <div className="nav-content-ultra">
              {/* Enhanced Header Section */}
              <motion.div
                className="nav-header-ultra"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="nav-logo-enhanced">
                  <motion.div
                    className="logo-ring"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="logo-text">JV</span>
                </div>
                <h2 className="nav-title">NAVIGATION</h2>
              </motion.div>

              {/* Ultra Enhanced Navigation Links */}
              <motion.nav
                className="nav-links-ultra"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
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
                        x: 40,
                        y: 20,
                        scale: 0.9
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        transition: {
                          duration: 0.7,
                          ease: [0.34, 1.26, 0.64, 1],
                          type: "spring",
                          damping: 20,
                          stiffness: 300
                        }
                      },
                    }}
                  >
                    <motion.button
                      className={`nav-link-ultra ${hoveredIndex === index ? 'is-hovered' : ''}`}
                      onClick={() => handleLinkClick(link.href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{
                        scale: 1.02,
                        y: -3,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        '--link-color': link.color,
                        '--link-glow': link.glow,
                        '--link-glow-light': link.glowLight,
                      } as React.CSSProperties}
                    >
                      {/* Ultra Enhanced Background Layers */}
                      <div className="link-bg-ultra">
                        <div className="link-bg-main" />
                        <div className="link-bg-glow" />
                        <div className="link-bg-pulse" />
                        <div className="link-border-glow" />
                        <div className="link-ripple-effect" />
                      </div>

                      {/* Enhanced Content */}
                      <div className="link-content-ultra">
                        <div className="link-icon-ultra">
                          <span className="icon-glyph">{link.icon}</span>
                          <div className="icon-ring" />
                        </div>

                        <div className="link-text-ultra">
                          <span className="link-label">{link.label}</span>
                          <span className="link-desc">{link.description}</span>
                        </div>

                        <div className="link-arrow-ultra">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>

                      {/* Dynamic hover indicator */}
                      <div className="link-hover-ultra">
                        <div className="hover-trail" />
                        <div className="hover-spark" />
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Ultra Enhanced CTA Section */}
              <motion.div
                className="nav-cta-ultra"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.34, 1.26, 0.64, 1],
                  type: "spring",
                  damping: 25,
                  stiffness: 200
                }}
              >
                <motion.button
                  className="cta-ultra"
                  onClick={() => handleLinkClick("#contact")}
                  whileHover={{
                    scale: 1.05,
                    y: -4
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Ultra CTA Background Effects */}
                  <div className="cta-bg-ultra">
                    <div className="cta-gradient-primary" />
                    <div className="cta-gradient-secondary" />
                    <div className="cta-shimmer-ultra" />
                    <div className="cta-pulse-ring-1" />
                    <div className="cta-pulse-ring-2" />
                    <div className="cta-spark-trail" />
                  </div>

                  {/* Enhanced CTA Content */}
                  <div className="cta-content-ultra">
                    <span className="cta-text-ultra">LET'S GO VIRAL</span>
                    <div className="cta-icon-ultra">
                      <motion.svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path d="M13 7l5 5-5 5M6 12h12" strokeWidth="2"/>
                      </motion.svg>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            </div>

            {/* Dynamic Background Reactive Elements */}
            <div className="nav-reactive-bg">
              <motion.div
                className="reactive-orb-1"
                animate={{
                  x: cursorPosition.x * 0.1,
                  y: cursorPosition.y * 0.1,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
              />
              <motion.div
                className="reactive-orb-2"
                animate={{
                  x: cursorPosition.x * -0.05,
                  y: cursorPosition.y * -0.05,
                }}
                transition={{ type: "spring", damping: 40, stiffness: 150 }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}