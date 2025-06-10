'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/typography/headline.css';

const Rule3Headline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      className={`rule3-headline-container ${isVisible ? 'rule3-headline-visible' : ''}`}
    >
      <motion.div
        className="rule3-headline-number"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        03
      </motion.div>

      <motion.h2
        className="rule3-headline-main"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Your content must provide{' '}
        <span className="rule3-headline-accent">instant value</span>
      </motion.h2>

      <motion.p
        className="rule3-headline-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Hook them in the first 3 seconds or lose them forever
      </motion.p>

      {/* Animated underline */}
      <motion.div
        className="rule3-headline-underline"
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </div>
  );
};

export default Rule3Headline;
