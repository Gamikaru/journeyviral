"use client";

import { motion } from "framer-motion";
import StatsGrid from "./StatsGrid";
import CTAButtons from "./CTAButtons";
import "../styles/hero-animations.css";

interface HeroStatsProps {
  itemVariants: any;
  opacityFade: any;
}

export default function HeroStats({ itemVariants, opacityFade }: HeroStatsProps) {
  return (
    <>
      <StatsGrid itemVariants={itemVariants} />
      <CTAButtons itemVariants={itemVariants} />
    </>
  );
}
