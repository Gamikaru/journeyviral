'use client'

import React, { useEffect, useRef, useState } from 'react';
import Rule3Headline from './Rule3Headline';
import Rule3PlaceholderVisual from './Rule3PlaceholderVisual';
import Rule3SupportingText from './Rule3SupportingText';
import './styles/section/layout.css';
import './styles/section/animations.css';
import './styles/section/responsive.css';

const Rule3Section: React.FC = () => {
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
      id="rule3"
      className={`rule3-section rule3-section-unified ${isVisible ? 'rule3-visible' : ''}`}
      aria-label="Rule 3 - Your content must provide instant value"
      style={{
        '--scroll-progress': scrollProgress,
      } as React.CSSProperties}
    >
      {/* Content wrapper with glass effect */}
      <div className="rule3-content-wrapper">
        <div
          ref={contentRef}
          className="rule3-content"
        >
          <div className="rule3-text-content">
            <div className="rule3-text-inner">
              <Rule3Headline />
              <Rule3SupportingText />
            </div>

            {/* Decorative elements */}
            <div className="rule3-text-accent rule3-accent-1" />
            <div className="rule3-text-accent rule3-accent-2" />
          </div>

          <div className="rule3-visual-content">
            <div className="rule3-visual-inner">
              <Rule3PlaceholderVisual />
            </div>

            {/* Visual effects */}
            <div className="rule3-visual-glow" />
            <div className="rule3-visual-particles" />
          </div>
        </div>
      </div>

      {/* Section progress indicator */}
      <div className="rule3-progress-indicator">
        <div className="rule3-progress-bar" />
      </div>

      {/* Noise overlay */}
      <div className="rule3-section-noise" />
    </section>
  );
};

export default Rule3Section;
