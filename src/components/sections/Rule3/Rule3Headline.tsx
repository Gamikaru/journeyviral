// src/components/sections/Rule3/Rule3Headline.tsx
'use client'

import React from 'react';
import './styles/typography/base.css';
import './styles/typography/headline.css';

const Rule3Headline: React.FC = () => {
  return (
    <div className="rule3-headline-wrapper">
      <h2 className="rule3-label">
        <span className="rule3-label-text">RULE #3</span>
        <span className="rule3-label-glow" aria-hidden="true">RULE #3</span>
      </h2>
      <h3 className="rule3-main-headline">
        <span className="rule3-headline-line rule3-headline-glow">YOUR CONTENT MUST</span>
        <span className="rule3-headline-line rule3-headline-white">PROVIDE INSTANT VALUE.</span>
      </h3>
    </div>
  );
};

export default Rule3Headline;