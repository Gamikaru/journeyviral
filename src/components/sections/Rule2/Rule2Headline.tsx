// File: src/components/sections/Rule2/Rule2Headline.tsx
import React from 'react';
import './styles/typography/base.css';
import './styles/typography/headline.css';

const Rule2Headline: React.FC = () => {
  return (
    <div className="rule2-headline-wrapper">
      <h2 className="rule2-label">
        <span className="rule2-label-text">RULE #2</span>
        <span className="rule2-label-glow" aria-hidden="true">RULE #2</span>
      </h2>
      <h3 className="rule2-main-headline">
        <span className="rule2-headline-line rule2-headline-white">YOUR AUDIENCE</span>
        <span className="rule2-headline-line rule2-headline-gradient">DOESN'T WANT TO SEE</span>
        <span className="rule2-headline-line rule2-headline-strike">ADS.</span>
      </h3>
    </div>
  );
};

export default Rule2Headline;