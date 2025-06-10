'use client'

import React, { useEffect, useRef, useState } from 'react';
import Rule2Headline from './Rule2Headline';
import Rule2ComparisonVisual from './Rule2ComparisonVisual';
import Rule2SupportingText from './Rule2SupportingText';
import './styles/section/layout.css';
import './styles/section/animations.css';
import './styles/section/responsive.css';

const Rule2Section: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const scrolled = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ));

      setScrollProgress(scrolled);
    };

    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Throttle helper function
  function throttle<T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): T {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;

    return ((...args) => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    }) as T;
  }

  return (
    <section
      ref={sectionRef}
      id="rule2"
      className={`rule2-section rule2-section-unified ${isVisible ? 'rule2-visible' : ''}`}
      aria-label="Rule 2 - Your audience doesn't want to see ads"
      style={{
        '--scroll-progress': scrollProgress,
      } as React.CSSProperties}
    >
      {/* Content wrapper with glass effect */}
      <div className="rule2-content-wrapper">
        <div
          ref={contentRef}
          className="rule2-content"
        >
          <div className="rule2-text-content">
            <div className="rule2-text-inner">
              <Rule2Headline />
              <Rule2SupportingText />
            </div>

            {/* Decorative elements */}
            <div className="rule2-text-accent rule2-accent-1" />
            <div className="rule2-text-accent rule2-accent-2" />
          </div>

          <div className="rule2-visual-content">
            <div className="rule2-visual-inner">
              <Rule2ComparisonVisual />
            </div>

            {/* Visual effects */}
            <div className="rule2-visual-glow" />
            <div className="rule2-visual-particles" />
          </div>
        </div>
      </div>

      {/* Section progress indicator */}
      <div className="rule2-progress-indicator">
        <div className="rule2-progress-bar" />
      </div>

      {/* Noise overlay */}
      <div className="rule2-section-noise" />
    </section>
  );
};

export default Rule2Section;