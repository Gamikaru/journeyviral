'use client'

import React, { useEffect, useRef, useState } from 'react';
import Rule1Background from './Rule1Background';
import Rule1Headline from './Rule1Headline';
import Rule1SupportingText from './Rule1SupportingText';
import Rule1PhoneMockup from './Rule1PhoneMockup';
import './styles/section/layout.css';
import './styles/section/animations.css';
import './styles/section/responsive.css';

const Rule1Section: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

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

      // Calculate how much of the section has been scrolled through
      const scrolled = Math.max(0, Math.min(1,
        (windowHeight - rect.top) / (windowHeight + sectionHeight)
      ));

      setScrollProgress(scrolled);
    };

    const throttledScroll = throttle(handleScroll, 16); // ~60fps
    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y))
      });
    };

    const throttledMouseMove = throttle(handleMouseMove, 32);
    window.addEventListener('mousemove', throttledMouseMove);

    return () => window.removeEventListener('mousemove', throttledMouseMove);
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
      id="rule1"
      className={`rule1-section ${isVisible ? 'rule1-visible' : ''}`}
      aria-label="Rule 1 - Your audience isn't on your page"
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
        '--scroll-progress': scrollProgress,
      } as React.CSSProperties}
    >
      <Rule1Background />

      {/* Dynamic gradient overlay */}
      <div className="rule1-dynamic-gradient" />

      {/* Content wrapper with glass effect */}
      <div className="rule1-content-wrapper">
        <div
          ref={contentRef}
          className="rule1-content"
        >
          <div className="rule1-text-content">
            <div className="rule1-text-inner">
              <Rule1Headline />
              <Rule1SupportingText />
            </div>

            {/* Decorative elements */}
            <div className="rule1-text-accent rule1-accent-1" />
            <div className="rule1-text-accent rule1-accent-2" />
          </div>

          <div className="rule1-visual-content">
            <div className="rule1-visual-inner">
              <Rule1PhoneMockup />
            </div>

            {/* Visual effects */}
            <div className="rule1-visual-glow" />
            <div className="rule1-visual-particles" />
          </div>
        </div>
      </div>

      {/* Section progress indicator */}
      <div className="rule1-progress-indicator">
        <div className="rule1-progress-bar" />
      </div>

      {/* Noise overlay */}
      <div className="rule1-section-noise" />
    </section>
  );
};

export default Rule1Section;