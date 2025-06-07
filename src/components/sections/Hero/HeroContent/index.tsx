"use client";

import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";

interface HeroContentProps {
  mousePosition: { x: number; y: number };
  itemVariants: any;
  showStats?: boolean;
  statsComponent?: React.ReactNode;
}

export default function HeroContent({
  mousePosition,
  itemVariants,
  showStats = false,
  statsComponent
}: HeroContentProps) {
  return (
    <div className="max-w-6xl mx-auto" style={{ padding: 0, margin: '0 auto' }}>
      <motion.div
        className="text-center space-y-4"
        style={{
          marginBottom: '2rem',
          padding: 0,
          transform: `perspective(1000px) rotateX(${mousePosition.y * 1.5}deg) rotateY(${mousePosition.x * 1.5}deg)`,
        }}
        variants={itemVariants}
      >
        <HeroTitle />
      </motion.div>

      {/* Stats appear here - right after title */}
      {showStats && statsComponent && (
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          {statsComponent}
        </motion.div>
      )}

      {/* Buttons component */}
      <HeroButtons itemVariants={itemVariants} />
    </div>
  );
}
