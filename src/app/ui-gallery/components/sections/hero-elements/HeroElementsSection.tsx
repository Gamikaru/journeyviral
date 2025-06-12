"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import IsolatedNeonButton from '../../isolated/hero/IsolatedNeonButton';
import IsolatedHeroTitle from '../../isolated/hero/IsolatedHeroTitle';
import IsolatedHeroTagline from '../../isolated/hero/IsolatedHeroTagline';
import IsolatedHeroLogo from '../../isolated/hero/IsolatedHeroLogo';
import IsolatedGlassCard from '../../isolated/hero/IsolatedGlassCard';
import IsolatedVHSBadge from '../../isolated/hero/IsolatedVHSBadge';
import IsolatedShimmerEffect from '../../isolated/hero/IsolatedShimmerEffect';

export function HeroElementsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="section-header">
        <h2>Hero Elements</h2>
        <p>Premium components extracted from the main hero section</p>
      </div>

      <div className="component-grid">
        {/* Hero Neon Buttons - Exact Match from Hero Section */}
        <div className="component-item full-width">
          <h4>Hero CTA Buttons - Primary & Secondary</h4>
          <div className="hero-buttons-showcase">
            <IsolatedNeonButton
              variant="primary"
              onClick={() => console.log('Primary clicked')}
              onMouseEnter={() => setHoveredButton('primary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              LET'S GO VIRAL
            </IsolatedNeonButton>

            <IsolatedNeonButton
              variant="secondary"
              onClick={() => console.log('Secondary clicked')}
              onMouseEnter={() => setHoveredButton('secondary')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              WATCH FREE LESSON
            </IsolatedNeonButton>
          </div>
          <p className="component-description">
            {hoveredButton === 'primary'
              ? "Primary CTA with vibrant gradient and rotating conic effects"
              : hoveredButton === 'secondary'
              ? "Secondary button with glass morphism and subtle animations"
              : "Exact replicas of the hero section CTAs with rotating gradient borders"}
          </p>
        </div>

        {/* Hero Title with Scramble Effect */}
        <div className="component-item full-width">
          <h4>Interactive Hero Title</h4>
          <IsolatedHeroTitle
            primaryText="#YOUR CONTENT SUCKS."
            subtitleText="WE CAN FIX THAT."
            enableScramble={true}
            mousePosition={mousePosition}
          />
        </div>

        {/* Hero Tagline */}
        <div className="component-item">
          <h4>Animated Tagline</h4>
          <IsolatedHeroTagline
            lines={[
              "Stop making ads nobody watches",
              "Start breaking algorithms with",
              "content that captivates."
            ]}
            colors={['#ff6ec7', '#00ffff', '#ffffff']}
          />
        </div>

        {/* Hero Logo */}
        <div className="component-item">
          <h4>Floating Logo</h4>
          <IsolatedHeroLogo
            logoText="JOURNEYVIRAL"
            enableFloating={true}
          />
        </div>

        {/* Glass Card */}
        <div className="component-item">
          <h4>Glass Morphism Card</h4>
          <IsolatedGlassCard
            title="Premium Content"
            description="Translucent background with premium blur effects and animated borders."
            statNumber="10M+"
            statLabel="Views Generated"
            buttonText="Watch Now"
            icon={<Play size={24} />}
          />
        </div>

        {/* VHS Badge */}
        <div className="component-item">
          <h4>VHS Style Badge</h4>
          <IsolatedVHSBadge
            mainText="VIRAL_PROTOCOL_2.0"
            recText="●REC"
            enableScanline={true}
          />
        </div>

        {/* Shimmer Effects */}
        <div className="component-item full-width">
          <h4>Visual Effects</h4>
          <div className="effects-grid">
            <IsolatedShimmerEffect variant="shimmer">
              <p>Shimmer Effect</p>
            </IsolatedShimmerEffect>
            <IsolatedShimmerEffect variant="glow">
              <p>Glow Border</p>
            </IsolatedShimmerEffect>
            <IsolatedShimmerEffect variant="pulse">
              <p>Pulse Rings</p>
            </IsolatedShimmerEffect>
          </div>
        </div>
      </div>
    </motion.div>
  );
}