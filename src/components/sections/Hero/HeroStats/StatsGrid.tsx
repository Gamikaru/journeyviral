"use client";

import { motion } from "framer-motion";
import StatCard from "./StatCard";

interface StatsGridProps {
  itemVariants: any;
}

export default function StatsGrid({ itemVariants }: StatsGridProps) {
  const stats = [
    {
      number: "10M+",
      label: "VIRAL VIEWS",
      color: "#00ffff",
      glow: "rgba(0, 255, 255, 0.8)",
      bgGlow: "rgba(0, 255, 255, 0.15)"
    },
    {
      number: "500%",
      label: "AVG GROWTH",
      color: "#00ff88",
      glow: "rgba(0, 255, 136, 0.8)",
      bgGlow: "rgba(0, 255, 136, 0.15)"
    },
    {
      number: "24HR",
      label: "VIRAL GUARANTEE",
      color: "#ff00ff",
      glow: "rgba(255, 0, 255, 0.8)",
      bgGlow: "rgba(255, 0, 255, 0.15)"
    },
  ];

  return (
    <motion.div
      className="relative z-30 mb-8 mt-4"
      variants={itemVariants}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <ul
        role="list"
        className="flex gap-4 justify-center items-center flex-wrap"
      >
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </ul>
    </motion.div>
  );
}
