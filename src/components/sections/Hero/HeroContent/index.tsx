"use client";

import { Variants } from "framer-motion";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";

interface HeroContentProps {
  mousePosition: { x: number; y: number };
  itemVariants: Variants;
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
    <div className="relative z-40">
      <HeroTitle mousePosition={mousePosition} itemVariants={itemVariants} />
      <HeroButtons itemVariants={itemVariants} />
      {showStats && statsComponent}
    </div>
  );
}