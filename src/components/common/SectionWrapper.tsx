// File: src/components/common/SectionWrapper.tsx

"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundColor?: string;
  minHeight?: string;
  hasVideo?: boolean;
  variant?: "default" | "gradient" | "mesh" | "particles" | "waves" | "matrix" | "space";
  parallax?: boolean;
  fadeIn?: boolean;
  particleCount?: number;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  backgroundColor = "",
  minHeight = "min-h-screen",
  hasVideo = false,
  variant = "default",
  parallax = true,
  fadeIn = true,
  particleCount = 20,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", parallax ? "20%" : "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30 };
  const springY = useSpring(y, springConfig);
  const springOpacity = useSpring(opacity, springConfig);
  const springScale = useSpring(scale, springConfig);

  // Generate particles for particle variant
  useEffect(() => {
    if (variant === "particles" || variant === "space") {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
      }));
      setParticles(newParticles);
    }
  }, [variant, particleCount]);

  // Intersection observer for fade-in effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Background patterns based on variant
  const getBackgroundStyle = () => {
    switch (variant) {
      case "gradient":
        return {
          background: `
            radial-gradient(ellipse at top left, rgba(255, 0, 255, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse at top right, rgba(0, 255, 255, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse at bottom, rgba(255, 110, 199, 0.15) 0%, transparent 40%),
            linear-gradient(180deg, var(--color-primary-ultra-dark) 0%, var(--color-primary-dark) 50%, var(--color-primary-ultra-dark) 100%)
          `,
        };

      case "mesh":
        return {
          background: `
            radial-gradient(at 20% 80%, rgba(215, 60, 190, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(0, 255, 255, 0.2) 0px, transparent 50%),
            radial-gradient(at 40% 40%, rgba(255, 0, 255, 0.2) 0px, transparent 50%),
            radial-gradient(at 90% 70%, rgba(255, 110, 199, 0.2) 0px, transparent 50%),
            var(--gradient-dark)
          `,
        };

      case "waves":
        return {
          background: `
            repeating-radial-gradient(circle at 0% 0%, transparent 0, var(--color-primary) 40px),
            repeating-radial-gradient(circle at 100% 100%, transparent 0, var(--color-primary-dark) 40px),
            linear-gradient(180deg, var(--color-primary-ultra-dark) 0%, var(--color-primary) 100%)
          `,
        };

      case "matrix":
        return {
          background: `
            linear-gradient(0deg, transparent 24%, rgba(0, 255, 136, 0.05) 25%, rgba(0, 255, 136, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, 0.05) 75%, rgba(0, 255, 136, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(0, 255, 136, 0.05) 25%, rgba(0, 255, 136, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 136, 0.05) 75%, rgba(0, 255, 136, 0.05) 76%, transparent 77%, transparent),
            var(--gradient-dark)
          `,
          backgroundSize: "50px 50px",
        };

      case "space":
        return {
          background: `
            radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 40px),
            radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
            radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
            radial-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1) 2px, transparent 30px),
            var(--gradient-dark)
          `,
          backgroundSize: "550px 550px, 350px 350px, 250px 250px, 150px 150px",
          backgroundPosition: "0 0, 40px 60px, 130px 270px, 70px 100px",
        };

      default:
        return hasVideo ? {} : {
          background: `
            radial-gradient(ellipse at top, rgba(44, 30, 74, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at bottom, rgba(26, 15, 46, 0.9) 0%, transparent 50%),
            linear-gradient(180deg, var(--color-primary-ultra-dark) 0%, var(--color-primary) 50%, var(--color-primary-ultra-dark) 100%)
          `,
        };
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={`${minHeight} relative flex items-center justify-center overflow-hidden ${className}`}
      initial={fadeIn ? { opacity: 0 } : {}}
      animate={fadeIn ? { opacity: isInView ? 1 : 0.8 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        ...getBackgroundStyle(),
        backgroundColor: backgroundColor || undefined,
        position: 'relative',
        zIndex: className.includes('z-') ? undefined : 10,
        isolation: 'isolate',
      }}
    >
      {/* Animated background effects based on variant */}
      {!hasVideo && variant !== "default" && (
        <>
          {/* Gradient animation overlay */}
          {(variant === "gradient" || variant === "mesh") && (
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: "var(--gradient-mesh)",
                filter: "blur(100px)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          )}

          {/* Particles */}
          {(variant === "particles" || variant === "space") && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className={`absolute rounded-full ${
                    variant === "space" ? "bg-white" : "bg-accent-neon"
                  }`}
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                    filter: variant === "space"
                      ? "blur(0.5px) drop-shadow(0 0 3px rgba(255,255,255,0.8))"
                      : "blur(0px) drop-shadow(0 0 10px rgba(255,0,255,0.8))",
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: particle.size * 3,
                    repeat: Infinity,
                    delay: particle.id * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}

          {/* Wave animation */}
          {variant === "waves" && (
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <motion.div
                className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%]"
                style={{
                  background: `
                    repeating-radial-gradient(circle at center,
                      transparent 0,
                      transparent 20px,
                      rgba(215, 60, 190, 0.1) 20px,
                      rgba(215, 60, 190, 0.1) 40px
                    )
                  `,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          )}

          {/* Matrix grid lines */}
          {variant === "matrix" && (
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                }}
                animate={{
                  y: [0, 20],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          )}
        </>
      )}

      {/* Parallax wrapper */}
      <motion.div
        className="relative z-20 w-full flex items-center justify-center"
        style={{
          ...(parallax ? {
            y: springY,
            opacity: springOpacity,
            scale: springScale,
          } : {}),
          minHeight: minHeight === "min-h-screen" ? "100vh" : "auto",
        }}
      >
        {/* Content container */}
        <div className="container relative z-30 w-full">
          {children}
        </div>
      </motion.div>

      {/* Enhanced section transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-ultraDark to-transparent pointer-events-none z-40" />

      {/* Top section separator */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary-ultraDark/30 to-transparent pointer-events-none z-40" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.section>
  );
}