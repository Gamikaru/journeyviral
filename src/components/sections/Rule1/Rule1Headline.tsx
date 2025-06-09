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
        <span className="rule1-headline-line rule1-headline-glow">YOUR AUDIENCE</span>
        <span className="rule1-headline-line rule1-headline-glow">ISN'T ON YOUR</span>
        <span className="rule1-headline-line">
          <span className="rule1-headline-glow">PAGE,</span> <span className="rule1-headline-italic">YOU'RE ON</span>
        </span>
        <span className="rule1-headline-line rule1-headline-italic">THEIR FEED.</span>
      </h3>
    </div>
  );
};

export default Rule1Headline;