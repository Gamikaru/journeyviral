"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  minHeight?: string;
  hasVideo?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  backgroundColor = "",
  minHeight = "min-h-screen",
  hasVideo = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`${minHeight} relative flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      style={{
        background: hasVideo ? 'transparent' : `
          radial-gradient(ellipse at top, rgba(44, 30, 74, 0.8) 0%, transparent 50%),
          radial-gradient(ellipse at bottom, rgba(26, 15, 46, 0.9) 0%, transparent 50%),
          linear-gradient(180deg, #1a0f2e 0%, #2c1e4a 50%, #1a0f2e 100%)
        `,
      }}
    >
      {/* Enhanced background effects */}
      {!hasVideo && (
        <>
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(215, 60, 190, 0.1) 0%, transparent 70%)",
                left: "-300px",
                top: "50%",
              }}
              animate={{
                y: [-100, 100, -100],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-[800px] h-[800px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(215, 60, 190, 0.08) 0%, transparent 70%)",
                right: "-400px",
                top: "20%",
              }}
              animate={{
                y: [100, -100, 100],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
            }}
          />
        </>
      )}

      <div className="container relative z-10">
        {children}
      </div>
    </motion.section>
  );
}