// Path: src/components/sections/Transform/index.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePerformanceMode } from "../../../hooks/usePerformanceMode";
import { TransformSectionProps, ANIMATION_CONSTANTS } from "./types";
import TransformHeadline from "./TransformHeadline";
import TransformSupportingText from "./TransformSupportingText";
import TransformCTA from "./TransformCTA";
import { ArrowRight, Zap, AlertTriangle } from "lucide-react";

// Import all styles
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/animations.css";
import "./styles/vhs-effects.css";
import "./styles/cyberpunk-ui.css";

export default function TransformSection({
  className = "",
  "aria-label": ariaLabel = "Transform your corporate content into viral success"
}: TransformSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [particleConfigs, setParticleConfigs] = useState<Array<{
    x: number;
    y: number;
    duration: number;
    delay: number;
    repeatDelay: number;
    left: number;
  }>>([]);
  const [matrixConfigs, setMatrixConfigs] = useState<Array<{
    left: string;
    animationDelay: string;
    animationDuration: string;
    chars: string[];
  }>>([]);
  const { isLowPerf } = usePerformanceMode();
  const router = useRouter();

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-10%",
    amount: 0.2
  });

  // Initialize animations
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, isLowPerf ? 100 : 300);

      return () => clearTimeout(timer);
    }
  }, [isInView, isLowPerf]);

  // Random glitch effect
  useEffect(() => {
    if (!isLowPerf && shouldAnimate) {
      const glitchInterval = setInterval(() => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 200);
      }, 4000 + Math.random() * 6000);

      return () => clearInterval(glitchInterval);
    }
  }, [shouldAnimate, isLowPerf]);

  // Scanline animation
  useEffect(() => {
    if (!isLowPerf && shouldAnimate) {
      const scanInterval = setInterval(() => {
        setScanlinePosition((prev) => (prev + 1) % 100);
      }, 50);

      return () => clearInterval(scanInterval);
    }
  }, [shouldAnimate, isLowPerf]);

  // Generate static data for animations on client side only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const generateParticleConfigs = () => {
        return Array.from({ length: 15 }, () => ({
          x: (Math.random() - 0.5) * 200,
          y: -Math.random() * 300 - 100,
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 2,
          repeatDelay: Math.random() * 3,
          left: Math.random() * 100
        }));
      };

      const generateMatrixConfigs = () => {
        return Array.from({ length: 20 }, (_, i) => ({
          left: `${i * 5}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${10 + Math.random() * 10}s`,
          chars: Array.from({ length: 10 }, () =>
            String.fromCharCode(33 + Math.floor(Math.random() * 94))
          )
        }));
      };

      setParticleConfigs(generateParticleConfigs());
      setMatrixConfigs(generateMatrixConfigs());
    }
  }, []);

  const sectionClasses = [
    "transform-section",
    "transform-section-cyberpunk",
    glitchActive && "glitch-active",
    isLowPerf && "performance-mode",
    shouldAnimate && "animate-in",
    className
  ].filter(Boolean).join(" ");

  return (
    <section
      ref={sectionRef}
      id="transform"
      data-theme="cyberpunk"
      className={sectionClasses}
      aria-label={ariaLabel}
    >
      {/* VHS Effects Layer */}
      <div className="vhs-effects-layer" aria-hidden="true">
        <div className="vhs-scanlines" />
        <div
          className="vhs-scanline-moving"
          style={{ top: `${scanlinePosition}%` }}
        />
        <div className="vhs-noise" />
        <div className="vhs-tracking" />
      </div>

      {/* RGB Distortion Layer */}
      <div className="rgb-distortion-layer" aria-hidden="true">
        <div className="rgb-shift rgb-r" />
        <div className="rgb-shift rgb-g" />
        <div className="rgb-shift rgb-b" />
      </div>

      {/* Cyberpunk Grid Background */}
      <div className="cyber-grid-bg" aria-hidden="true">
        <div className="grid-perspective" />
        <div className="grid-glow" />
      </div>

      {/* Energy Field Effects */}
      <div className="energy-field" aria-hidden="true">
        <div className="energy-wave energy-wave-1" />
        <div className="energy-wave energy-wave-2" />
        <div className="energy-wave energy-wave-3" />
      </div>

      {/* Main Content */}
      <div className="transform-content">
        <motion.div
          className="transform-container"
          initial={{ opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Content Grid with Perspective */}
          <div className="transform-content-grid">
            <motion.div
              className="transform-left-column"
              initial={{ opacity: 0, x: -50 }}
              animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="headline-wrapper">
                <div className="headline-glitch-container">
                  <TransformHeadline
                    isInView={shouldAnimate}
                    isLowPerf={isLowPerf}
                    glitchActive={glitchActive}
                  />
                </div>

                {/* Warning Badge */}
                <motion.div
                  className="warning-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <AlertTriangle size={16} />
                  <span>VIRAL TRANSFORMATION IN PROGRESS</span>
                </motion.div>
              </div>

              {/* CTA with enhanced styling */}
              <motion.div
                className="transform-cta-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <TransformCTA
                  isInView={shouldAnimate}
                  onClick={() => {
                    console.log("Transform CTA clicked - Navigating to UI Gallery!");
                    router.push('/ui-gallery');
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="transform-right-column"
              initial={{ opacity: 0, x: 50 }}
              animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <TransformSupportingText
                isInView={shouldAnimate}
                isLowPerf={isLowPerf}
                glitchActive={glitchActive}
              />
            </motion.div>
          </div>

          {/* Floating Particles */}
          {!isLowPerf && shouldAnimate && particleConfigs.length > 0 && (
            <div className="particle-system" aria-hidden="true">
              {particleConfigs.map((config, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, config.x],
                    y: [0, config.y]
                  }}
                  transition={{
                    duration: config.duration,
                    delay: config.delay,
                    repeat: Infinity,
                    repeatDelay: config.repeatDelay
                  }}
                  style={{
                    left: `${config.left}%`,
                    bottom: 0
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Matrix Rain Effect */}
      {!isLowPerf && matrixConfigs.length > 0 && (
        <div className="matrix-rain" aria-hidden="true">
          {matrixConfigs.map((config, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{
                left: config.left,
                animationDelay: config.animationDelay,
                animationDuration: config.animationDuration
              }}
            >
              {config.chars.map((char, j) => (
                <span key={j} className="matrix-char">
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}