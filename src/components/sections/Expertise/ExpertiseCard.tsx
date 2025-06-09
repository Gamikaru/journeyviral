// src/components/sections/Expertise/ExpertiseCard.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo, useState } from "react";
import { LucideIcon } from "lucide-react";
import "./styles/expertise-card.css";

interface ExpertiseCardProps {
  stat: {
    number: string;
    label: string;
    color: string;
    gradient: string;
    icon: LucideIcon;
    description: string;
  };
  index: number;
  shouldAnimate?: boolean;
}

const ExpertiseCard = memo(function ExpertiseCard({
  stat,
  index,
  shouldAnimate = true
}: ExpertiseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const Icon = stat.icon;

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldAnimate ? 30 : 0,
      scale: shouldAnimate ? 0.9 : 1,
      rotateX: shouldAnimate ? -15 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: shouldAnimate ? {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      } : {
        duration: 0.3
      }
    }
  };

  return (
    <motion.article
      className={`expertise-card expertise-card-${stat.gradient} ${isHovered ? 'is-hovered' : ''}`}
      role="listitem"
      aria-label={`${stat.number} ${stat.label}`}
      variants={cardVariants}
      whileHover={shouldAnimate && !prefersReducedMotion ? {
        scale: 1.05,
        y: -8,
        transition: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }
      } : {}}
      whileTap={shouldAnimate ? {
        scale: 0.98
      } : {}}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        '--card-color': stat.color,
      } as React.CSSProperties}
    >
      {/* Gradient border wrapper */}
      <div className="card-border" aria-hidden="true">
        <div className="border-gradient" />
        <motion.div
          className="border-glow"
          animate={isHovered && shouldAnimate ? {
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Card inner content */}
      <div className="card-inner">
        {/* Background effects */}
        <div className="card-bg-gradient" aria-hidden="true" />
        <div className="card-bg-pattern" aria-hidden="true" />

        {/* Icon container */}
        <motion.div
          className="card-icon-container"
          animate={isHovered && shouldAnimate ? {
            rotate: [0, -10, 10, 0],
            scale: [1, 1.2, 1]
          } : {}}
          transition={{
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          <Icon className="card-icon" size={32} />
          <div className="icon-glow" />
          {shouldAnimate && (
            <motion.div
              className="icon-ring"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          )}
        </motion.div>

        {/* Number with enhanced neon effect */}
        <motion.div
          className="card-number"
          initial={shouldAnimate ? { scale: 0.5, opacity: 0 } : {}}
          animate={{ scale: 1, opacity: 1 }}
          transition={shouldAnimate ? {
            delay: 0.3 + index * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15
          } : {}}
        >
          <span className="number-text">{stat.number}</span>
          {shouldAnimate && (
            <motion.span
              className="number-glow"
              animate={{
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>

        {/* Label */}
        <div className="card-label">
          {stat.label}
        </div>

        {/* Description - shows on hover */}
        <motion.div
          className="card-description"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 10
          }}
          transition={{ duration: 0.3 }}
        >
          {stat.description}
        </motion.div>

        {/* Corner accents */}
        <div className="card-corners" aria-hidden="true">
          <div className="corner corner-tl" />
          <div className="corner corner-tr" />
          <div className="corner corner-bl" />
          <div className="corner corner-br" />
        </div>
      </div>

      {/* Hover particles effect */}
      {shouldAnimate && isHovered && !prefersReducedMotion && (
        <div className="card-particles" aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.random() * 100 - 50,
                y: -Math.random() * 100 - 20
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              style={{
                left: `${50 + (Math.random() - 0.5) * 30}%`,
                top: `${50 + (Math.random() - 0.5) * 30}%`
              }}
            />
          ))}
        </div>
      )}
    </motion.article>
  );
});

export default ExpertiseCard;