// src/components/sections/Expertise/ExpertiseCard.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { memo, useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import "./styles/expertise-card.css";

interface ExpertiseCardProps {
  stat: {
    number: string;
    label: string;
    color: string;
    gradient: string;
    icon: LucideIcon;
    description: string;
    glowIntensity?: number;
  };
  index: number;
  performanceLevel?: 'high' | 'medium' | 'low';
}

// Counter animation hook
const useCountAnimation = (endValue: string, duration: number = 2000, isInView: boolean) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric value
    const numericEnd = parseFloat(endValue.replace(/[^0-9.]/g, ''));
    const suffix = endValue.replace(/[0-9.]/g, '');
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (ease-out-expo)
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const current = numericEnd * easeOutExpo;

      // Format based on suffix
      if (suffix.includes('M')) {
        setDisplayValue(`${(current / 1000000).toFixed(1)}M+`);
      } else if (suffix.includes('%')) {
        setDisplayValue(`${Math.floor(current)}%`);
      } else {
        setDisplayValue(`${Math.floor(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    animate();
  }, [endValue, duration, isInView]);

  return displayValue;
};

const ExpertiseCard = memo(function ExpertiseCard({
  stat,
  index,
  performanceLevel = 'high'
}: ExpertiseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();
  const Icon = stat.icon;

  const animatedNumber = useCountAnimation(stat.number, 2000, isInView);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const glowIntensity = stat.glowIntensity || 0.8;

  return (
    <motion.article
      className={`expertise-card-enhanced expertise-card-${stat.gradient}`}
      role="listitem"
      aria-label={`${stat.number} ${stat.label}`}
      variants={cardVariants}
      whileHover={performanceLevel !== 'low' ? {
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onViewportEnter={() => setIsInView(true)}
      style={{
        '--card-color': stat.color,
        '--glow-intensity': glowIntensity,
      } as React.CSSProperties}
    >
      {/* Neon glow background */}
      <div className="card-glow-bg" aria-hidden="true">
        <div className="glow-inner" />
        {performanceLevel === 'high' && (
          <div className="glow-pulse" />
        )}
      </div>

      {/* Glass border effect */}
      <div className="card-border-enhanced" aria-hidden="true">
        <div className="border-gradient" />
        <div className="border-corner border-corner-tl" />
        <div className="border-corner border-corner-tr" />
        <div className="border-corner border-corner-bl" />
        <div className="border-corner border-corner-br" />
      </div>

      {/* Card content */}
      <div className="card-content-enhanced">
        {/* DEBUG: Simple test content */}
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          TEST CARD {index + 1}
        </div>
        <div style={{ color: 'cyan', fontSize: '48px', fontWeight: 'bold' }}>
          {stat.number}
        </div>
        <div style={{ color: 'white', fontSize: '14px' }}>
          {stat.label}
        </div>

        {/* Icon with enhanced glow */}
        <motion.div
          className="icon-container-enhanced"
          animate={isHovered && performanceLevel !== 'low' ? {
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{ duration: 0.6 }}
        >
          <Icon className="card-icon-enhanced" size={28} />
          <div className="icon-glow-enhanced" />
          {performanceLevel === 'high' && (
            <motion.div
              className="icon-orbit"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
        </motion.div>

        {/* Animated number display */}
        <motion.div
          className="number-display-enhanced"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.3 + index * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }}
        >
          <span className="number-value">{animatedNumber}</span>
          {performanceLevel !== 'low' && (
            <span className="number-shadow" aria-hidden="true">
              {animatedNumber}
            </span>
          )}
        </motion.div>

        {/* Label with glow */}
        <div className="label-enhanced">
          {stat.label}
        </div>

        {/* Description tooltip on hover */}
        <motion.div
          className="description-tooltip"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 10
          }}
          transition={{ duration: 0.2 }}
        >
          {stat.description}
        </motion.div>

        {/* Data visualization bars */}
        {performanceLevel !== 'low' && (
          <div className="data-bars" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="data-bar"
                initial={{ scaleY: 0 }}
                animate={isInView ? {
                  scaleY: 0.3 + Math.random() * 0.7,
                  opacity: [0.3, 0.8, 0.3]
                } : {}}
                transition={{
                  scaleY: { delay: 0.5 + i * 0.1, duration: 0.6 },
                  opacity: {
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.2
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Hover state particles */}
      {performanceLevel === 'high' && isHovered && (
        <div className="hover-particles" aria-hidden="true">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="particle-enhanced"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: -50 - Math.random() * 50,
                x: (Math.random() - 0.5) * 100
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.article>
  );
});

export default ExpertiseCard;