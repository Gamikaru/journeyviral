"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useMemo } from "react";
import { cn } from "../../../../lib/utils";

interface BackgroundColorManagerProps {
  scrollYProgress: MotionValue<number>;
  children: ReactNode;
  className?: string;
  colorScheme?: "default" | "warm" | "cool" | "monochrome";
}

export function BackgroundColorManager({
  scrollYProgress,
  children,
  className,
  colorScheme = "default"
}: BackgroundColorManagerProps) {

  // Enhanced color schemes for different themes
  const colorSchemes = useMemo(() => ({
    default: [
      "rgb(10, 6, 22)",      // Hero - deep purple
      "rgb(12, 4, 24)",      // Early transition
      "rgb(8, 8, 28)",       // Transform - creative purple with blue hints
      "rgb(5, 12, 18)",      // Stats - data blue-teal
      "rgb(8, 6, 20)",       // Expertise - professional purple-blue
      "rgb(2, 2, 8)",        // Rule1 - dramatic dark
      "rgb(4, 2, 12)",       // Rule2 - comparison contrast
      "rgb(8, 6, 12)",       // Rule3 - value warmth
      "rgb(0, 0, 0)"         // Footer - pure black
    ],
    warm: [
      "rgb(22, 12, 6)",      // Hero - warm dark
      "rgb(24, 8, 4)",       // Early transition
      "rgb(28, 14, 8)",      // Transform - warm creative
      "rgb(18, 10, 5)",      // Stats - warm data
      "rgb(20, 12, 6)",      // Expertise - warm professional
      "rgb(8, 4, 2)",        // Rule1 - warm dramatic
      "rgb(12, 6, 4)",       // Rule2 - warm contrast
      "rgb(16, 10, 8)",      // Rule3 - golden warmth
      "rgb(0, 0, 0)"         // Footer - pure black
    ],
    cool: [
      "rgb(6, 12, 22)",      // Hero - cool deep
      "rgb(4, 8, 24)",       // Early transition
      "rgb(8, 14, 28)",      // Transform - cool creative
      "rgb(5, 18, 12)",      // Stats - cool data
      "rgb(6, 12, 20)",      // Expertise - cool professional
      "rgb(2, 4, 8)",        // Rule1 - cool dramatic
      "rgb(4, 6, 12)",       // Rule2 - cool contrast
      "rgb(8, 12, 16)",      // Rule3 - cool value
      "rgb(0, 0, 0)"         // Footer - pure black
    ],
    monochrome: [
      "rgb(12, 12, 12)",     // Hero - neutral dark
      "rgb(8, 8, 8)",        // Early transition
      "rgb(16, 16, 16)",     // Transform - lighter neutral
      "rgb(10, 10, 10)",     // Stats - data neutral
      "rgb(14, 14, 14)",     // Expertise - professional neutral
      "rgb(4, 4, 4)",        // Rule1 - dramatic dark
      "rgb(6, 6, 6)",        // Rule2 - contrast neutral
      "rgb(12, 12, 12)",     // Rule3 - value neutral
      "rgb(0, 0, 0)"         // Footer - pure black
    ]
  }), []);

  // Enhanced color transitions with more character and smoother blending
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.08, 0.18, 0.32, 0.48, 0.64, 0.78, 0.88, 1],
    colorSchemes[colorScheme]
  );

  // Subtle gradient overlay for depth
  const gradientOverlay = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "radial-gradient(ellipse at top, rgba(255,255,255,0.02) 0%, transparent 50%)",
      "radial-gradient(ellipse at center, rgba(255,255,255,0.01) 0%, transparent 60%)",
      "radial-gradient(ellipse at bottom, rgba(255,255,255,0.005) 0%, transparent 40%)"
    ]
  );

  return (
    <motion.div
      className={cn("unified-background", className)}
      style={{
        backgroundColor,
        backgroundImage: gradientOverlay
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      role="presentation"
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
