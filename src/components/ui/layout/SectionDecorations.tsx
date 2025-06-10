"use client";

import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import "./section-decorations.css";

interface SectionDecorationsProps {
  section: 'transform' | 'stats' | 'expertise' | 'rule1' | 'rule2' | 'rule3';
  isVisible: boolean;
  isLowPerf?: boolean;
}

export default function SectionDecorations({ section, isVisible, isLowPerf = false }: SectionDecorationsProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Memoized transforms for performance
  const transforms = useMemo(() => ({
    y: useTransform(scrollYProgress, [0, 1], [50, -50]),
    yReverse: useTransform(scrollYProgress, [0, 1], [-30, 30]),
    opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
    scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 0.9])
  }), [scrollYProgress]);

  const decorations = {
    transform: (
      <div className="section-decorations-transform">
        <motion.div
          className="creative-orb-1"
          style={{ y: transforms.y, opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="creative-orb-2"
          style={{ y: transforms.yReverse, opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [1.1, 0.9, 1.1],
            x: [0, 30, 0]
          } : {}}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="creative-grid-overlay" />
      </div>
    ),

    stats: (
      <div className="section-decorations-stats">
        <motion.div
          className="stats-chart-bars"
          style={{ opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scaleY: [0.6, 1, 0.8, 1],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="stats-metrics-dots"
          style={{ y: transforms.y, opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            opacity: [0.5, 1, 0.7, 1],
          } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="stats-graph-lines"
          style={{ opacity: transforms.opacity }}
        />
      </div>
    ),

    expertise: (
      <div className="section-decorations-expertise">
        <motion.div
          className="tech-circuit-nodes"
          style={{ opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            opacity: [0.5, 1, 0.7, 1],
          } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="tech-connection-lines"
          style={{ y: transforms.y, opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          } : {}}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
    ),

    rule1: (
      <div className="section-decorations-rule1">
        <motion.div
          className="rule-spotlight-1"
          style={{ opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          } : {}}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="rule-spotlight-2"
          style={{ y: transforms.yReverse, opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [0.9, 1.2, 0.9],
          } : {}}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="rule-neon-accents" />
      </div>
    ),

    rule2: (
      <div className="section-decorations-rule2">
        <motion.div
          className="rule2-contrast-orb-1"
          style={{ opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [1, 1.1, 1],
            x: [0, -15, 0]
          } : {}}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="rule2-contrast-orb-2"
          style={{ y: transforms.y, opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [0.9, 1.2, 0.9],
          } : {}}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <div className="rule2-comparison-lines" />
      </div>
    ),

    rule3: (
      <div className="section-decorations-rule3">
        <motion.div
          className="rule3-value-orb-1"
          style={{ opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [1, 1.3, 1],
            rotate: [0, 45, 0]
          } : {}}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div
          className="rule3-value-orb-2"
          style={{ y: transforms.yReverse, opacity: transforms.opacity }}
          animate={isVisible && !isLowPerf ? {
            scale: [0.8, 1.1, 0.8],
          } : {}}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <div className="rule3-impact-rays" />
        <div className="rule3-value-indicators" />
      </div>
    )
  };

  return (
    <div ref={ref} className={`section-decorations section-decorations-${section}`}>
      {decorations[section]}
    </div>
  );
}