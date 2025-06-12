"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeroStyleComponent } from './demos/HeroStyleDemo';
import { HeadlineStylesDemo } from './demos/HeadlineStylesDemo';
import { TextEffectsDemo } from './demos/TextEffectsDemo';
import { VHSRetroDemo } from './demos/VHSRetroDemo';
import { GradientCombosDemo } from './demos/GradientCombosDemo';
import { CyberpunkDemo } from './demos/CyberpunkDemo';
import './styles/typography-isolation.css';

/**
 * Typography Isolation Root - Contains all typography demos in an isolated environment
 * This ensures that demo styles cannot interfere with the main app's typography
 */
export function TypographyIsolationRoot() {
  return (
    <motion.div
      className="typography-isolation-root"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="typography-demos-container">
        <div className="section-header">
          <h2>Typography System</h2>
          <p>Viral-ready text styles with cyberpunk flair - modular and isolated</p>
        </div>

        <div className="demos-grid">
          <HeroStyleComponent />
          <HeadlineStylesDemo />
          <TextEffectsDemo />
          <VHSRetroDemo />
          <GradientCombosDemo />
          <CyberpunkDemo />
        </div>
      </div>
    </motion.div>
  );
}
