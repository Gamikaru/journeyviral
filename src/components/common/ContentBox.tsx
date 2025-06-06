// File: src/components/common/ContentBox.tsx

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface ContentBoxProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glow" | "gradient" | "glass" | "neon" | "holographic" | "matrix" | "electric";
  animate?: boolean;
  interactive?: boolean;
  delay?: number;
  glowColor?: string;
  onClick?: () => void;
}

export default function ContentBox({
  children,
  className = "",
  variant = "default",
  animate = true,
  interactive = true,
  delay = 0,
  glowColor,
  onClick,
}: ContentBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const boxRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  // Spring config for smooth animations
  const springConfig = { damping: 30, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  // Handle mouse movement for 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !boxRef.current) return;

    const rect = boxRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / (rect.width / 2) * 100);
    mouseY.set((e.clientY - centerY) / (rect.height / 2) * 100);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // Matrix rain effect
  useEffect(() => {
    if (variant === "matrix") {
      const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const charArray = Array.from({ length: 100 }, () =>
        chars[Math.floor(Math.random() * chars.length)]
      );
      setMatrixChars(charArray);

      const interval = setInterval(() => {
        setMatrixChars(prev =>
          prev.map(() => chars[Math.floor(Math.random() * chars.length)])
        );
      }, 100);

      return () => clearInterval(interval);
    }
  }, [variant]);

  // Variant styles
  const variantStyles = {
    default: `
      border-2 border-white/20
      bg-primary/20 backdrop-blur-sm
      shadow-[0_0_30px_rgba(255,255,255,0.05)]
      hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]
      hover:border-white/30
    `,
    glow: `
      border-2 border-accent
      bg-gradient-to-br from-accent/10 to-accent/5
      shadow-[0_0_40px_rgba(215,60,190,0.3),inset_0_0_30px_rgba(215,60,190,0.1)]
      hover:shadow-[0_0_60px_rgba(215,60,190,0.5),inset_0_0_40px_rgba(215,60,190,0.2)]
      hover:border-accent-bright
    `,
    gradient: `
      bg-gradient-to-br from-white/10 via-white/5 to-transparent
      backdrop-blur-md
      border border-white/20
      shadow-[0_0_40px_rgba(255,255,255,0.05),inset_0_0_30px_rgba(255,255,255,0.02)]
      hover:shadow-[0_0_60px_rgba(255,255,255,0.1),inset_0_0_40px_rgba(255,255,255,0.05)]
      hover:border-white/30
    `,
    glass: `
      bg-white/[0.02] backdrop-blur-xl
      border border-white/10
      shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]
      hover:bg-white/[0.05]
      hover:border-white/20
      hover:shadow-[0_8px_40px_0_rgba(31,38,135,0.3)]
    `,
    neon: `
      relative
      border-2 border-accent-neon
      bg-black/50 backdrop-blur-sm
      shadow-[0_0_20px_#ff00ff,0_0_40px_#ff00ff,0_0_60px_#ff00ff,inset_0_0_20px_rgba(255,0,255,0.2)]
      hover:shadow-[0_0_30px_#ff00ff,0_0_60px_#ff00ff,0_0_90px_#ff00ff,inset_0_0_30px_rgba(255,0,255,0.3)]
      hover:border-accent-electric
      ${isHovered ? 'animate-neon-flicker' : ''}
    `,
    holographic: `
      relative overflow-hidden
      border-2 border-transparent
      bg-gradient-to-br from-accent-neon/20 via-accent-electric/20 to-accent/20
      before:absolute before:inset-0
      before:bg-gradient-holographic before:opacity-50
      before:bg-[length:400%_400%] before:animate-gradient-shift
      hover:border-white/30
      ${isHovered ? 'shadow-[0_0_50px_rgba(255,0,255,0.4),0_0_100px_rgba(0,255,255,0.3)]' : 'shadow-[0_0_30px_rgba(255,0,255,0.2)]'}
    `,
    matrix: `
      relative overflow-hidden
      border border-success/50
      bg-black/80 backdrop-blur-sm
      shadow-[0_0_30px_rgba(0,255,136,0.3),inset_0_0_30px_rgba(0,255,136,0.1)]
      hover:shadow-[0_0_50px_rgba(0,255,136,0.5),inset_0_0_40px_rgba(0,255,136,0.2)]
      hover:border-success
    `,
    electric: `
      relative
      border-2 border-accent-electric
      bg-gradient-to-br from-accent-electric/10 to-accent-neon/10
      shadow-[0_0_30px_rgba(0,255,255,0.4),inset_0_0_20px_rgba(0,255,255,0.1)]
      hover:shadow-[0_0_50px_rgba(0,255,255,0.6),inset_0_0_30px_rgba(0,255,255,0.2)]
      hover:border-accent-neon
      ${isHovered ? 'before:absolute before:inset-0 before:bg-electric before:opacity-10 before:animate-pulse' : ''}
    `,
  };

  // Get custom glow color based on variant
  const getGlowColor = () => {
    if (glowColor) return glowColor;
    switch (variant) {
      case "neon": return "#ff00ff";
      case "electric": return "#00ffff";
      case "matrix": return "#00ff88";
      case "holographic": return "#ff6ec7";
      default: return "rgba(215, 60, 190, 0.5)";
    }
  };

  const boxContent = (
    <motion.div
      ref={boxRef}
      className={`
        relative p-8 md:p-12 lg:p-16 rounded-2xl
        transition-all duration-500 ease-out transform-gpu
        ${variantStyles[variant]}
        ${interactive ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      animate={interactive && isHovered ? {
        rotateX: springRotateX,
        rotateY: springRotateY,
      } : {}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.02 } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
    >
      {/* Corner accents for certain variants */}
      {(variant === "glow" || variant === "neon") && (
        <>
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent-bright rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent-bright rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent-bright rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent-bright rounded-br-2xl" />
        </>
      )}

      {/* Matrix rain effect */}
      {variant === "matrix" && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-20 pointer-events-none">
          {matrixChars.map((char, i) => (
            <motion.span
              key={i}
              className="absolute text-success font-mono text-xs"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 10}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 20, 40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.02,
                ease: "linear",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      )}

      {/* Holographic shimmer */}
      {variant === "holographic" && (
        <motion.div
          className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none rounded-2xl"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["200% 200%", "-200% -200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Electric lightning effect */}
      {variant === "electric" && isHovered && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
          <motion.path
            d="M 10 50 Q 50 20 90 50 T 170 50 T 250 50"
            stroke="#00ffff"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              filter: "drop-shadow(0 0 10px #00ffff)",
            }}
          />
        </svg>
      )}

      {/* Content with enhanced glow */}
      <div
        className="relative z-10"
        style={{
          filter: isHovered && interactive ? `drop-shadow(0 0 20px ${getGlowColor()})` : undefined,
        }}
      >
        {children}
      </div>

      {/* Hover particles */}
      {isHovered && interactive && (variant === "neon" || variant === "electric") && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                variant === "neon" ? "bg-accent-neon" : "bg-accent-electric"
              }`}
              initial={{
                x: "50%",
                y: "50%",
                scale: 0,
              }}
              animate={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );

  if (!animate) return boxContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
    >
      {boxContent}
    </motion.div>
  );
}