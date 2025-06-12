// src/components/sections/Expertise/ExpertiseStats.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { memo, useEffect } from "react";
import ExpertiseCard from "./ExpertiseCard";
import ConnectionFlow from "./ConnectionFlow";
import { Target, TrendingUp, Users, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./styles/expertise-stats.css";

interface ExpertiseStatsProps {
  isInView: boolean;
  isLowPerf?: boolean;
  performanceLevel?: 'high' | 'medium' | 'low';
}

interface StatItem {
  number: string;
  label: string;
  color: string;
  gradient: string;
  icon: LucideIcon;
  description: string;
  glowIntensity: number;
}

const ExpertiseStats = memo(function ExpertiseStats({
  isInView,
  isLowPerf = false,
  performanceLevel = 'high'
}: ExpertiseStatsProps) {
  const controls = useAnimation();

  const stats = [
    {
      number: "98%",
      label: "ALGORITHM MASTERY",
      color: "#00ffff",
      gradient: "cyan",
      icon: Target,
      description: "Precision targeting that hits every time",
      glowIntensity: 0.8
    },
    {
      number: "2.5M+",
      label: "AVG VIEWS /VIDEO",
      color: "#00d4ff",
      gradient: "blue",
      icon: TrendingUp,
      description: "Consistent viral reach across platforms",
      glowIntensity: 0.7
    },
    {
      number: "87%",
      label: "VIRAL HIT RATE",
      color: "#ff00ff",
      gradient: "pink",
      icon: Users,
      description: "Engagement that breaks the algorithm",
      glowIntensity: 0.9
    },
    {
      number: "420%",
      label: "ROI INCREASE",
      color: "#ff6ec7",
      gradient: "purple",
      icon: DollarSign,
      description: "Revenue growth that speaks volumes",
      glowIntensity: 0.8
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className="expertise-stats-enhanced"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Stats grid with glass morphism cards */}
      <motion.div
        className="stats-grid-enhanced"
        role="list"
        aria-label="Our expertise metrics"
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <ExpertiseCard
            key={stat.label}
            stat={stat}
            index={index}
            performanceLevel={isLowPerf ? 'low' : 'high'}
          />
        ))}
      </motion.div>

      {/* Connection flow visualization */}
      {!isLowPerf && isInView && (
        <ConnectionFlow
          stats={stats}
          performanceLevel={isLowPerf ? 'low' : 'high'}
        />
      )}

      {/* Background grid effect */}
      {!isLowPerf && (
        <div className="stats-bg-grid" aria-hidden="true">
          <div className="grid-overlay" />
        </div>
      )}
    </motion.div>
  );
});

export default ExpertiseStats;