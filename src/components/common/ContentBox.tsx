"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentBoxProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glow" | "gradient";
  animate?: boolean;
}

export default function ContentBox({
  children,
  className = "",
  variant = "default",
  animate = true,
}: ContentBoxProps) {
  const variants = {
    default: `
      border-2 border-white/90
      shadow-[0_0_30px_rgba(255,255,255,0.1)]
      hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]
    `,
    glow: `
      border-2 border-accent
      shadow-[0_0_40px_rgba(215,60,190,0.5),inset_0_0_30px_rgba(215,60,190,0.1)]
      hover:shadow-[0_0_60px_rgba(215,60,190,0.7),inset_0_0_40px_rgba(215,60,190,0.2)]
    `,
    gradient: `
      bg-gradient-to-br from-white/10 to-white/5
      backdrop-blur-md
      border border-white/30
      shadow-[0_0_40px_rgba(255,255,255,0.1),inset_0_0_30px_rgba(255,255,255,0.05)]
      hover:shadow-[0_0_60px_rgba(255,255,255,0.15),inset_0_0_40px_rgba(255,255,255,0.08)]
    `,
  };

  const boxContent = (
    <div
      className={`
        relative p-10 md:p-14 lg:p-16 rounded-xl
        transition-all duration-500 ease-out
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-xl" />

      {/* Inner glow effect for gradient variant */}
      {variant === "gradient" && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-radial opacity-20 pointer-events-none"
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );

  if (!animate) return boxContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {boxContent}
    </motion.div>
  );
}