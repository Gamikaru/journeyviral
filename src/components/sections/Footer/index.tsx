'use client'

import React, { useEffect, useRef, useState } from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterNewsletter from './FooterNewsLetter';
import FooterBottom from './FooterBottom';
import './styles/footer-section.css';
import './styles/footer-animations.css';

const FooterSection: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer-section ${isVisible ? 'footer-visible' : ''}`}
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
      } as React.CSSProperties}
    >
      {/* Background Effects */}
      <div className="footer-bg-wrapper">
        <div className="footer-bg-gradient" />
        <div className="footer-bg-mesh" />
        <div className="footer-bg-orb footer-orb-1" />
        <div className="footer-bg-orb footer-orb-2" />
        <div className="footer-bg-particles" />
      </div>

      {/* Main Content */}
      <div className="footer-content">
        <div className="footer-main">
          {/* Top Section */}
          <div className="footer-top">
            <FooterLogo />
            <FooterNewsletter />
          </div>

          {/* Middle Section */}
          <div className="footer-middle">
            <FooterLinks />
            <FooterSocial />
          </div>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>

      {/* Noise Overlay */}
      <div className="footer-noise" />
    </footer>
  );
};

export default FooterSection;