import React from 'react';
import './styles/rule1-typography.css';

const Rule1SupportingText: React.FC = () => {
  return (
    <div className="rule1-supporting-wrapper">
      <p className="rule1-supporting-paragraph">
        Most creators—especially brands—make content like people are binge-watching
        their feed. <span className="rule1-highlight">They're not.</span>
      </p>

      <p className="rule1-detail-paragraph">
        Your vid's crammed between memes, hot takes, and a cat doing backflips.
        <strong>So... how are you standing out?</strong>
      </p>
    </div>
  );
};

export default Rule1SupportingText;