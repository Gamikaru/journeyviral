// src/components/sections/Rule3/Rule3Visual.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './styles/visual/visual.css';

const Rule3Visual: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const selectedImage = '/images/blobs/blob_3.gif';

  // Preload image
  useEffect(() => {
    const img = new window.Image();
    img.src = selectedImage;
    img.onload = () => setImageLoaded(true);
  }, [selectedImage]);

  return (
    <div className="rule3-visual-container">
      {/* Main visual content */}
      <div className={`rule3-visual-content ${imageLoaded ? 'loaded' : ''}`}>
        <div className="rule3-visual-image-wrapper">
          <Image
            src={selectedImage}
            alt="Dynamic content visualization"
            width={600}
            height={375}
            className="rule3-visual-image"
            priority
            onLoad={() => setImageLoaded(true)}
          />

          {/* Simple loading state */}
          {!imageLoaded && (
            <div className="rule3-visual-loading" aria-hidden="true">
              <div className="loading-pulse" />
            </div>
          )}
        </div>
      </div>

      {/* Minimal floating particles */}
      <div className="rule3-visual-particles" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`particle particle-${i + 1}`}
            style={{
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Static glow effect */}
      <div className="rule3-visual-glow" aria-hidden="true" />
    </div>
  );
};

export default Rule3Visual;