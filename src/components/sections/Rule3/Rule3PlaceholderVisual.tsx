'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/visual/placeholder.css';

const Rule3PlaceholderVisual: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (visualRef.current) {
      observer.observe(visualRef.current);
    }

    return () => {
      if (visualRef.current) {
        observer.unobserve(visualRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={visualRef}
      className={`rule3-placeholder-visual ${isVisible ? 'rule3-visual-visible' : ''}`}
    >
      <motion.div
        className="rule3-placeholder-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="rule3-placeholder-box">
          <div className="rule3-placeholder-content">
            <div className="rule3-placeholder-header">
              <div className="rule3-placeholder-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="rule3-placeholder-body">
              <div className="rule3-placeholder-title">Content Placeholder</div>
              <div className="rule3-placeholder-subtitle">Future Video/Image Here</div>

              <div className="rule3-placeholder-lines">
                <div className="rule3-placeholder-line rule3-line-long"></div>
                <div className="rule3-placeholder-line rule3-line-medium"></div>
                <div className="rule3-placeholder-line rule3-line-short"></div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            className="rule3-floating-element rule3-element-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="rule3-floating-element rule3-element-2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Background effects */}
        <div className="rule3-visual-backdrop" />
        <div className="rule3-visual-glow-effect" />
      </motion.div>

      <motion.p
        className="rule3-placeholder-caption"
        initial={{ opacity: 0, y: 10 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Interactive content visualization coming soon
      </motion.p>
    </div>
  );
};

export default Rule3PlaceholderVisual;
