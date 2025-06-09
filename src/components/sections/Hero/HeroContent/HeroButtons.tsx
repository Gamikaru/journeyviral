"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import "../styles/hero-buttons.css";

interface HeroButtonsProps {
  itemVariants: any;
}

export default function HeroButtons({ itemVariants }: HeroButtonsProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <motion.div
      variants={itemVariants}
      className="relative z-30 hero-buttons-container mb-4 mt-6"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      {/* Primary Hero CTA Button */}
      <motion.button
        className="hero-cta-primary"
        onMouseEnter={() => setHoveredButton('primary')}
        onMouseLeave={() => setHoveredButton(null)}
        whileHover={{
          scale: 1.05,
          y: -4
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ultra CTA Background Effects */}
        <div className="hero-cta-bg-ultra">
          <div className="hero-cta-gradient-primary" />
          <div className="hero-cta-gradient-secondary" />
          <div className="hero-cta-shimmer-ultra" />
          <div className="hero-cta-pulse-ring-1" />
          <div className="hero-cta-pulse-ring-2" />
          <div className="hero-cta-spark-trail" />
        </div>

        {/* Enhanced CTA Content */}
        <div className="hero-cta-content-ultra">
          <span className="hero-cta-text-ultra">LET'S GO VIRAL</span>
          <div className="hero-cta-icon-ultra">
            <motion.div
              animate={hoveredButton === 'primary' ? { x: [0, 4, 0] } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </motion.div>
          </div>
        </div>
      </motion.button>

      {/* Secondary Hero CTA Button */}
      <motion.button
        className="hero-cta-secondary"
        onMouseEnter={() => setHoveredButton('secondary')}
        onMouseLeave={() => setHoveredButton(null)}
        whileHover={{
          scale: 1.05,
          y: -4
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ultra CTA Background Effects */}
        <div className="hero-cta-bg-ultra">
          <div className="hero-cta-gradient-secondary-alt" />
          <div className="hero-cta-gradient-overlay" />
          <div className="hero-cta-shimmer-secondary" />
          <div className="hero-cta-pulse-ring-secondary-1" />
          <div className="hero-cta-pulse-ring-secondary-2" />
          <div className="hero-cta-spark-trail-secondary" />
        </div>

        {/* Enhanced CTA Content */}
        <div className="hero-cta-content-ultra">
          <span className="hero-cta-text-secondary">SEE HOW IT WORKS</span>
          <div className="hero-cta-icon-ultra">
            <motion.div
              animate={hoveredButton === 'secondary' ? {
                scale: [1, 1.15, 1],
                rotate: [0, 0, 0]
              } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Play size={24} strokeWidth={2.5} fill="currentColor" />
            </motion.div>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}