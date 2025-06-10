'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/typography/supporting-text.css';

const Rule3SupportingText: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const supportingPoints = [
    "The average attention span is 8 seconds",
    "First impressions form in 50 milliseconds",
    "Value must be immediately apparent"
  ];

  return (
    <div
      ref={textRef}
      className={`rule3-supporting-text ${isVisible ? 'rule3-text-visible' : ''}`}
    >
      <motion.p
        className="rule3-text-main"
        custom={0}
        variants={textVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        In a world of infinite scroll and endless options, your content has mere moments
        to prove its worth. The hook isn't just important—it's everything.
      </motion.p>

      <div className="rule3-text-points">
        {supportingPoints.map((point, index) => (
          <motion.div
            key={index}
            className="rule3-text-point"
            custom={index + 1}
            variants={textVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <span className="rule3-point-bullet" />
            {point}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="rule3-text-emphasis"
        custom={4}
        variants={textVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        Make every second count.
      </motion.div>
    </div>
  );
};

export default Rule3SupportingText;
