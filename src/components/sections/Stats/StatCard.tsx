"use client";

import { motion } from "framer-motion";
import { memo, useState } from "react";
import {
  TrendingUp,
  BarChart3,
  Rocket,
  Clock
} from "lucide-react";
import "./styles/stat-card.css";

interface StatCardProps {
  stat: {
    number: string;
    label: string;
    color: string;
    glow: string;
    bgGlow: string;
    icon?: string;
  };
  index: number;
  shouldAnimate?: boolean;
}

const StatCard = memo(function StatCard({
  stat,
  index,
  shouldAnimate = true
}: StatCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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

  const getIcon = () => {
    switch (stat.icon) {
      case 'trending':
        return <TrendingUp className="stat-icon-svg" />;
      case 'growth':
        return <BarChart3 className="stat-icon-svg" />;
      case 'rocket':
        return <Rocket className="stat-icon-svg" />;
      case 'clock':
        return <Clock className="stat-icon-svg" />;
      default:
        return null;
    }
  };

  return (
    <motion.article
      className={`stat-card ${isHovered ? 'is-hovered' : ''}`}
      role="listitem"
      aria-label={`${stat.number} ${stat.label}`}
      variants={cardVariants}
      whileHover={shouldAnimate ? {
        scale: 1.05,
        y: -6,
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
        '--stat-color': stat.color,
        '--stat-glow': stat.glow,
        '--stat-bg-glow': stat.bgGlow,
      } as React.CSSProperties}
    >
      {/* Glass background */}
      <div className="card-bg" aria-hidden="true" />

      {/* Gradient border */}
      <div className="card-border" aria-hidden="true" />

      {/* Glow effect - only on hover */}
      {isHovered && shouldAnimate && (
        <motion.div
          className="card-glow"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Card content */}
      <div className="card-content">
        {/* Icon */}
        {stat.icon && (
          <motion.div
            className="stat-icon"
            aria-hidden="true"
            animate={isHovered ? {
              scale: 1.1,
              rotate: 5
            } : {
              scale: 1,
              rotate: 0
            }}
            transition={{ duration: 0.3 }}
          >
            {getIcon()}
          </motion.div>
        )}

        {/* Number */}
        <motion.div
          className="stat-number"
          initial={shouldAnimate ? { scale: 0.5, opacity: 0 } : {}}
          animate={{ scale: 1, opacity: 1 }}
          transition={shouldAnimate ? {
            delay: 0.3 + index * 0.1,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 15
          } : {}}
        >
          {stat.number}
        </motion.div>

        {/* Label */}
        <div className="stat-label">
          {stat.label}
        </div>

        {/* Animated accent line */}
        <motion.div
          className="stat-accent-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.4 + index * 0.1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </div>
    </motion.article>
  );
});

export default StatCard;
