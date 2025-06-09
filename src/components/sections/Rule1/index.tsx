import React from 'react';
import Rule1Background from './Rule1Background';
import Rule1Headline from './Rule1Headline';
import Rule1SupportingText from './Rule1SupportingText';
import Rule1PhoneMockup from './Rule1PhoneMockup';
import './styles/rule1-section.css';

const Rule1Section: React.FC = () => {
  return (
    <section
      id="rule1"
      className="rule1-section"
      aria-label="Rule 1 - Your audience isn't on your page"
    >
      <Rule1Background />

      <div className="rule1-content">
        <div className="rule1-text-content">
          <Rule1Headline />
          <Rule1SupportingText />
        </div>

        <div className="rule1-visual-content">
          <Rule1PhoneMockup />
        </div>
      </div>
    </section>
  );
};

export default Rule1Section;