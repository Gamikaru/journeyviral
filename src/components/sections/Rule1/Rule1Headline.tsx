// File: src/components/sections/Rule1/Rule1Headline.tsx
import React from 'react';
import './styles/typography/base.css';
import './styles/typography/headline.css';

const Rule1Headline: React.FC = () => {
  return (
    <div className="rule1-headline-wrapper">
      <h2 className="rule1-label">
        <span className="rule1-label-text">RULE #1</span>
        <span className="rule1-label-glow" aria-hidden="true">RULE #1</span>
      </h2>
      <h3 className="rule1-main-headline">
        <span className="rule1-headline-line rule1-headline-glow">YOUR AUDIENCE ISN'T ON YOUR PAGE.</span>
        <span className="rule1-headline-line rule1-headline-white">YOU'RE ON THEIR FEED.</span>
      </h3>
    </div>
  );
};

export default Rule1Headline;