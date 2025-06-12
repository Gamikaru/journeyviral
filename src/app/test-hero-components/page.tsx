"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import IsolatedNeonButton from '../ui-gallery/components/isolated/hero/IsolatedNeonButton';
import IsolatedHeroTitle from '../ui-gallery/components/isolated/hero/IsolatedHeroTitle';
import IsolatedHeroTagline from '../ui-gallery/components/isolated/hero/IsolatedHeroTagline';
import IsolatedHeroLogo from '../ui-gallery/components/isolated/hero/IsolatedHeroLogo';
import IsolatedGlassCard from '../ui-gallery/components/isolated/hero/IsolatedGlassCard';
import IsolatedVHSBadge from '../ui-gallery/components/isolated/hero/IsolatedVHSBadge';
import IsolatedShimmerEffect from '../ui-gallery/components/isolated/hero/IsolatedShimmerEffect';
import '../ui-gallery/components/isolated/hero/isolated-hero.css';

export default function TestHeroComponents() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <div
      className="min-h-screen bg-black text-white p-8"
      onMouseMove={handleMouseMove}
      style={{
        background: 'linear-gradient(135deg, #050208 0%, #111118 50%, #050208 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          🎨 Hero Components Test Page
        </h1>

        {/* Hero Title Test */}
        <section className="text-center p-8 bg-black/50 rounded-lg">
          <h2 className="text-2xl mb-6 text-cyan-400">Interactive Hero Title</h2>
          <IsolatedHeroTitle
            primaryText="#BREAK ALGORITHMS"
            subtitleText="GO VIRAL OR GO HOME"
            enableScramble={true}
            mousePosition={mousePosition}
          />
        </section>

        {/* Buttons Test */}
        <section className="text-center p-8 bg-black/50 rounded-lg">
          <h2 className="text-2xl mb-6 text-cyan-400">Neon Buttons</h2>
          <div className="flex flex-col items-center gap-4">
            <IsolatedNeonButton
              variant="primary"
              onClick={() => alert('Primary clicked!')}
            >
              LET'S GO VIRAL
            </IsolatedNeonButton>
            <IsolatedNeonButton
              variant="secondary"
              onClick={() => alert('Secondary clicked!')}
            >
              WATCH FREE LESSON
            </IsolatedNeonButton>
          </div>
        </section>

        {/* Tagline Test */}
        <section className="text-center p-8 bg-black/50 rounded-lg">
          <h2 className="text-2xl mb-6 text-cyan-400">Animated Tagline</h2>
          <IsolatedHeroTagline
            lines={[
              "Stop making ads nobody watches",
              "Start breaking algorithms with",
              "content that captivates."
            ]}
            colors={['#ff6ec7', '#00ffff', '#ffffff']}
            enableAnimation={true}
          />
        </section>

        {/* Logo Test */}
        <section className="text-center p-8 bg-black/50 rounded-lg">
          <h2 className="text-2xl mb-6 text-cyan-400">Premium Logo</h2>
          <IsolatedHeroLogo
            logoText="JOURNEYVIRAL"
            enableFloating={true}
          />
        </section>

        {/* Glass Card Test */}
        <section className="text-center p-8 bg-black/50 rounded-lg">
          <h2 className="text-2xl mb-6 text-cyan-400">Glass Card</h2>
          <div className="max-w-md mx-auto">
            <IsolatedGlassCard
              title="Premium Content"
              description="Translucent background with premium blur effects and animated borders."
              statNumber="10M+"
              statLabel="Views Generated"
              buttonText="Watch Now"
              icon={<Play size={24} />}
              onButtonClick={() => alert('Glass card clicked!')}
            />
          </div>
        </section>

        {/* VHS Badge Test */}
        <section className="text-center p-8 bg-black/50 rounded-lg">
          <h2 className="text-2xl mb-6 text-cyan-400">VHS Badges</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <IsolatedVHSBadge
              mainText="VIRAL_PROTOCOL_2.0"
              recText="●REC"
              enableScanline={true}
            />
            <IsolatedVHSBadge
              mainText="ALGORITHM_HACK"
              recText="●LIVE"
              enableScanline={true}
            />
          </div>
        </section>

        {/* Effects Test */}
        <section className="text-center p-8 bg-black/50 rounded-lg">
          <h2 className="text-2xl mb-6 text-cyan-400">Visual Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <IsolatedShimmerEffect variant="shimmer" enableHover={true}>
              <div className="p-4">
                <h5 className="font-bold mb-2">Shimmer Effect</h5>
                <p>Hover to see shimmer</p>
              </div>
            </IsolatedShimmerEffect>

            <IsolatedShimmerEffect variant="glow" enableHover={true}>
              <div className="p-4">
                <h5 className="font-bold mb-2">Rotating Glow</h5>
                <p>Animated border glow</p>
              </div>
            </IsolatedShimmerEffect>

            <IsolatedShimmerEffect variant="pulse" enableHover={true}>
              <div className="p-4">
                <h5 className="font-bold mb-2">Pulse Rings</h5>
                <p>Expanding pulse animation</p>
              </div>
            </IsolatedShimmerEffect>
          </div>
        </section>
      </div>
    </div>
  );
}
