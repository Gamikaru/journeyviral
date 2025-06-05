"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedBlobProps {
  src: string;
  width: number;
  height: number;
  rotation?: number;
  position?: { x?: string | number; y?: string | number };
  animationType?: "float" | "pulse" | "rotate";
  className?: string;
  delay?: number;
}

export default function AnimatedBlob({
  src,
  width,
  height,
  rotation = 0,
  position,
  animationType = "float",
  className = "",
  delay = 0,
}: AnimatedBlobProps) {
  const animations = {
    float: {
      y: [-20, 20, -20],
      rotate: [rotation - 10, rotation + 10, rotation - 10],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      filter: [
        "brightness(1) blur(0px)",
        "brightness(1.3) blur(2px)",
        "brightness(1) blur(0px)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    rotate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay,
      },
    },
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        left: position?.x || "auto",
        top: position?.y || "auto",
        width,
        height,
        zIndex: 1,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={animations[animationType]}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className="w-full h-full object-contain blob-glow"
          loading="lazy"
          unoptimized={src.endsWith('.gif')}
        />
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 blur-3xl opacity-40">
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="w-full h-full object-contain"
            loading="lazy"
            unoptimized={src.endsWith('.gif')}
          />
        </div>
      </div>
    </motion.div>
  );
}