// File: src/components/common/AnimatedBlob.tsx

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AnimatedBlobProps {
  src: string;
  width: number;
  height: number;
  rotation?: number;
  position?: { x?: string | number; y?: string | number };
  animationType?:
    | "float"
    | "pulse"
    | "rotate"
    | "morph"
    | "magnetic"
    | "glitch";
  className?: string;
  delay?: number;
  interactive?: boolean;
  glowColor?: string;
  speed?: number;
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
  interactive = true,
  glowColor = "rgba(215, 60, 190, 0.6)",
  speed = 1,
}: AnimatedBlobProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform mouse position to rotation
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Handle mouse movement for magnetic effect
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || animationType !== "magnetic") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((event.clientX - centerX) * 0.5);
    mouseY.set((event.clientY - centerY) * 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants
  const animations = {
    float: {
      y: [-20 * speed, 20 * speed, -20 * speed],
      x: [-10 * speed, 10 * speed, -10 * speed],
      rotate: [rotation - 10, rotation + 10, rotation - 10],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8 / speed,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      filter: [
        "brightness(1) blur(0px) saturate(1)",
        "brightness(1.3) blur(2px) saturate(1.5)",
        "brightness(1) blur(0px) saturate(1)",
      ],
      transition: {
        duration: 4 / speed,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    rotate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
      transition: {
        duration: 20 / speed,
        repeat: Infinity,
        ease: "linear",
        delay,
      },
    },
    morph: {
      scale: [1, 1.2, 0.9, 1.1, 1],
      rotate: [0, 90, 180, 270, 360],
      borderRadius: ["20%", "50%", "30%", "40%", "20%"],
      transition: {
        duration: 12 / speed,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    magnetic: {
      x,
      y,
      rotateX: interactive ? rotateX : 0,
      rotateY: interactive ? rotateY : 0,
      scale: isHovered ? 1.2 : 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    glitch: {
      x: [0, -5, 5, -5, 5, 0],
      y: [0, 5, -5, 5, -5, 0],
      filter: [
        "hue-rotate(0deg) contrast(1)",
        "hue-rotate(90deg) contrast(1.5)",
        "hue-rotate(-90deg) contrast(1.5)",
        "hue-rotate(180deg) contrast(2)",
        "hue-rotate(-180deg) contrast(1.5)",
        "hue-rotate(0deg) contrast(1)",
      ],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
        delay,
      },
    },
  };

  // Glow effect intensity based on hover
  const glowIntensity = isHovered ? 1.5 : 1;

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        left: position?.x || "auto",
        top: position?.y || "auto",
        width,
        height,
        zIndex: 1,
        perspective: 1000,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={animations[animationType]}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full transform-gpu">
        {/* Main blob image */}
        <motion.div
          className="relative w-full h-full"
          whileHover={
            interactive
              ? {
                  scale: 1.1,
                  filter: "brightness(1.2) saturate(1.2)",
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="w-full h-full object-contain select-none"
            style={{
              filter: `drop-shadow(0 0 ${20 * glowIntensity}px ${glowColor})
                       drop-shadow(0 0 ${40 * glowIntensity}px ${glowColor})`,
            }}
            loading="lazy"
            unoptimized={src.endsWith(".gif")}
            draggable={false}
          />
        </motion.div>

        {/* Enhanced glow layers */}
        <div className="absolute inset-0 blur-2xl opacity-50 pointer-events-none">
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            className="w-full h-full object-contain"
            loading="lazy"
            unoptimized={src.endsWith(".gif")}
            draggable={false}
          />
        </div>

        {/* Extra glow for hover state */}
        {isHovered && interactive && (
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={src}
              alt=""
              width={width}
              height={height}
              className="w-full h-full object-contain"
              style={{
                filter: "brightness(1.5) saturate(2)",
              }}
              loading="lazy"
              unoptimized={src.endsWith(".gif")}
              draggable={false}
            />
          </motion.div>
        )}

        {/* Particle effects on hover */}
        {isHovered && interactive && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-neon rounded-full"
                initial={{
                  x: "50%",
                  y: "50%",
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            ))}
          </div>
        )}

        {/* Holographic overlay for specific animation types */}
        {(animationType === "morph" || animationType === "rotate") && (
          <div
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
            style={{
              background: "var(--gradient-holographic)",
              backgroundSize: "400% 400%",
              animation: "gradientShift 8s ease-in-out infinite",
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
