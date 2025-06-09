"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Zap, TrendingUp, Sparkles } from 'lucide-react';
import './styles/rule1-typography.css';

const Rule1Headline: React.FC = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={headlineRef}
      className={`rule1-headline-wrapper ${isVisible ? 'rule1-headline-visible' : ''}`}
    >
      {/* Decorative icons */}
      <div className="rule1-icon-decoration">
        <Sparkles className="rule1-sparkle rule1-sparkle-1" />
        <Zap className="rule1-sparkle rule1-sparkle-2" />
      </div>

      {/* RULE #1 with enhanced neon */}
      <div className="rule1-label-container">
        <h2 className="rule1-label" data-text="RULE #1">
          <span className="rule1-label-text">RULE #1</span>
          <span className="rule1-label-glow" aria-hidden="true">RULE #1</span>
          <span className="rule1-label-blur" aria-hidden="true">RULE #1</span>
        </h2>

        {/* Animated underline */}
        <div className="rule1-label-underline">
          <div className="rule1-underline-glow"></div>
        </div>
      </div>

      {/* Main headline with split text animation */}
      <h3 className="rule1-main-headline">
        <span className="rule1-headline-line rule1-line-1">
          <span className="rule1-word" style={{ '--word-index': 0 } as React.CSSProperties}>YOUR</span>{' '}
          <span className="rule1-word" style={{ '--word-index': 1 } as React.CSSProperties}>AUDIENCE</span>
        </span>

        <span className="rule1-headline-line rule1-line-2">
          <span className="rule1-word" style={{ '--word-index': 2 } as React.CSSProperties}>ISN'T</span>{' '}
          <span className="rule1-word" style={{ '--word-index': 3 } as React.CSSProperties}>ON</span>{' '}
          <span className="rule1-word" style={{ '--word-index': 4 } as React.CSSProperties}>YOUR</span>
        </span>

        <span className="rule1-headline-line rule1-line-3">
          <span className="rule1-word" style={{ '--word-index': 5 } as React.CSSProperties}>PAGE,</span>{' '}
          <span className="rule1-word rule1-headline-italic rule1-white-text" style={{ '--word-index': 6 } as React.CSSProperties}>
            YOU'RE
          </span>{' '}
          <span className="rule1-word rule1-headline-italic rule1-white-text" style={{ '--word-index': 7 } as React.CSSProperties}>
            ON
          </span>
        </span>

        <span className="rule1-headline-line rule1-line-4">
          <span className="rule1-word rule1-headline-italic rule1-white-text" style={{ '--word-index': 8 } as React.CSSProperties}>
            THEIR
          </span>{' '}
          <span className="rule1-word rule1-headline-italic rule1-white-text" style={{ '--word-index': 9 } as React.CSSProperties}>
            FEED.
          </span>
        </span>
      </h3>

      {/* Animated feed icon */}
      <div className="rule1-feed-icon-container">
        <div className="rule1-feed-icon-wrapper">
          <Smartphone className="rule1-feed-icon" />
          <div className="rule1-feed-scroll">
            <TrendingUp className="rule1-scroll-indicator" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rule1Headline;