// Path: components/navigation/HamburgerButton.tsx
"use client";

import { motion } from "framer-motion";
import "./styles/hamburger.css";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  const handleChange = () => {
    onClick();
  };

  return (
    <motion.button
      className={`hamburger-button ${isOpen ? 'is-open' : ''}`}
      onClick={handleChange}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Gradient Border */}
      <div className="hamburger-border" />

      {/* Corner Accents */}
      <div className="corner-accent corner-tl" />
      <div className="corner-accent corner-br" />

      {/* Energy Field */}
      <div className="energy-field" />

      {/* Main Wrapper */}
      <div className="hamburger-wrapper">
        <div className="hamburger-bar hamburger-bar--top" />
        <div className="hamburger-bar hamburger-bar--middle" />
        <div className="hamburger-bar hamburger-bar--bottom" />

        {/* Center Glow */}
        <div className="center-glow" />
      </div>

      {/* Scan Effect */}
      <div className="scan-effect" />
    </motion.button>
  );
}