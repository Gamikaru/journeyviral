// File: src/components/sections/Rule2/Rule2SupportingText.tsx
import React, { useEffect, useRef, useState } from 'react';
import './styles/typography/base.css';
import './styles/typography/supporting-text.css';

const Rule2SupportingText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div ref={textRef} className="rule2-supporting-wrapper">
      {/* Main content */}
      <div className="rule2-supporting-content">
        <p className="rule2-supporting-paragraph">
          <span className="rule2-word-highlight">Tired of watching teenagers with phones</span>{' '}
          outperform your professional content team? We'll show you why that{' '}
          <span className="rule2-word-emphasis">kid with zero budget</span> is getting{' '}
          <span className="rule2-word-impact">millions of views</span> while your carefully
          planned campaigns struggle.
        </p>

        <p className="rule2-detail-paragraph">
          <span className="rule2-word-strong">We don't do ads,</span>{' '}
          <span className="rule2-word-gradient">we make content people want to watch.</span>
        </p>

        {/* Interactive hint */}
        <div className={`rule2-interaction-hint ${isVisible ? 'rule2-hint-visible' : ''}`}>
          <span className="rule2-hint-text">The difference? Authenticity beats budget. Every. Single. Time.</span>
          <span className="rule2-hint-arrow">→</span>
        </div>
      </div>

      {/* Background text effect */}
      <div className="rule2-bg-text" aria-hidden="true">
        CONTENT
      </div>
    </div>
  );
};

export default Rule2SupportingText;