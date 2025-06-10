// File: src/components/sections/Rule1/Rule1Background.tsx
import React from 'react';
import './styles/background/gradients.css';
import './styles/background/effects.css';
import './styles/background/animations.css';

const Rule1Background: React.FC = () => {
  return (
    <div className="rule1-background">
      {/* Base gradient layer */}
      <div className="rule1-base-gradient" />

      {/* Gradient orbs with neon glow */}
      <div className="rule1-gradient rule1-gradient-1" />
      <div className="rule1-gradient rule1-gradient-2" />
      <div className="rule1-gradient rule1-gradient-3" />
      <div className="rule1-gradient rule1-gradient-4" />
      <div className="rule1-gradient rule1-gradient-5" />

      {/* Neon glow layers */}
      <div className="rule1-neon-layer rule1-neon-cyan" />
      <div className="rule1-neon-layer rule1-neon-purple" />

      {/* Mesh gradient overlay */}
      <div className="rule1-mesh-gradient" />

      {/* Grid pattern overlay with gradient */}
      <div className="rule1-grid-overlay" />

      {/* Animated scanlines */}
      <div className="rule1-scanlines" />

      {/* Vignette effect */}
      <div className="rule1-vignette" />

      {/* Noise texture */}
      <div className="rule1-noise" />
    </div>
  );
};

export default Rule1Background;