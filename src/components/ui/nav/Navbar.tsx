"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NavLogo from "./NavLogo";
import HamburgerButton from "./HamburgerButton";
import NavigationOverlay from "./NavigationOverlay";
import "./styles/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <motion.nav
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="navbar-surface">
          <div className="navbar-container">
            <div className="navbar-content">
              {/* Logo */}
              <div className="navbar-logo-section">
                <NavLogo />
              </div>

              {/* Hamburger */}
              <div className="navbar-controls-section">
                <HamburgerButton
                  aria-expanded={isMenuOpen}
                  isOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Navigation Overlay */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}