"use client";

import { motion } from "framer-motion";

interface HeroStatsProps {
  itemVariants: any;
  opacityFade: any;
}

export default function HeroStats({ itemVariants, opacityFade }: HeroStatsProps) {
  // Primary button styles
  const primaryButtonStyles = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    padding: '0.875rem 2rem',
    background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 50%, #06b6d4 100%)',
    color: '#000000',
    fontFamily: 'var(--font-anonymous)',
    fontWeight: 900,
    fontSize: '1.1rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    borderRadius: '9999px',
    border: '2px solid transparent',
    boxShadow: '0 10px 40px rgba(34, 211, 238, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    minWidth: '200px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    transformStyle: 'preserve-3d' as const,
    backdropFilter: 'none',
    textDecoration: 'none',
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  };

  // Secondary button styles
  const secondaryButtonStyles = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    padding: '0.875rem 2rem',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    fontFamily: 'var(--font-anonymous)',
    fontWeight: 900,
    fontSize: '1.1rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    borderRadius: '9999px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    minWidth: '200px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    transformStyle: 'preserve-3d' as const,
    textDecoration: 'none',
    display: 'inline-flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  };

  const buttonContainerStyles = {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
    flexWrap: 'wrap' as const,
  };

  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .hero-primary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
          z-index: 1;
        }
        
        .hero-primary-btn:hover::before {
          left: 100%;
        }
        
        .hero-secondary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }
        
        .hero-secondary-btn:hover::before {
          left: 100%;
        }
        
        .shimmer-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          animation: shimmer 3s ease-in-out infinite;
          animation-delay: 2s;
          z-index: 1;
        }
        
        @media (max-width: 640px) {
          .hero-buttons-container {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
        
        @media (max-height: 700px) {
          .hero-buttons-container {
            gap: 0.75rem;
          }
        }
      `}</style>

      {/* Stats Grid - Minimal layout for viewport efficiency */}
      <motion.div
        className="relative z-30 flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-3 mt-1"
        variants={itemVariants}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {[
          {
            number: "10M+",
            label: "Views Generated",
            color: "#00ffff",
            glow: "rgba(0, 255, 255, 0.8)",
            bgGlow: "rgba(0, 255, 255, 0.15)"
          },
          {
            number: "500%",
            label: "Avg. Growth",
            color: "#00ff88",
            glow: "rgba(0, 255, 136, 0.8)",
            bgGlow: "rgba(0, 255, 136, 0.15)"
          },
          {
            number: "24HR",
            label: "Viral Guarantee",
            color: "#ff00ff",
            glow: "rgba(255, 0, 255, 0.8)",
            bgGlow: "rgba(255, 0, 255, 0.15)"
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="relative text-center group cursor-default min-w-[120px] h-auto"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.2 + index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            {/* Enhanced background - minimal size */}
            <motion.div
              className="absolute inset-0 rounded-xl backdrop-blur-xl border border-white/30"
              style={{
                background: `linear-gradient(135deg, ${stat.bgGlow} 0%, rgba(0, 0, 0, 0.4) 50%, ${stat.bgGlow} 100%)`,
                boxShadow: `0 10px 20px ${stat.glow}, 0 0 40px ${stat.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
              }}
              animate={{
                boxShadow: [
                  `0 10px 20px ${stat.glow}, 0 0 40px ${stat.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                  `0 15px 30px ${stat.glow}, 0 0 60px ${stat.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.4)`,
                  `0 10px 20px ${stat.glow}, 0 0 40px ${stat.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.3)`,
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Content container - minimal padding */}
            <div className="relative p-2 md:p-3 flex flex-col items-center justify-center">
              {/* Number with minimal sizing */}
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl font-black mb-1 font-lastica"
                style={{
                  color: stat.color,
                  filter: `drop-shadow(0 0 15px ${stat.glow}) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))`,
                  letterSpacing: "-0.02em",
                  lineHeight: "0.8",
                  textShadow: `0 0 20px ${stat.glow}`
                }}
                animate={{
                  filter: [
                    `drop-shadow(0 0 15px ${stat.glow}) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))`,
                    `drop-shadow(0 0 20px ${stat.glow}) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))`,
                    `drop-shadow(0 0 15px ${stat.glow}) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))`,
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {stat.number}
              </motion.div>

              {/* Label with minimal sizing */}
              <div
                className="text-xs font-anonymous font-bold uppercase tracking-[0.1em] leading-tight text-center"
                style={{
                  color: '#ffffff',
                  textShadow: `0 0 10px ${stat.glow}, 0 2px 4px rgba(0, 0, 0, 0.9)`,
                  filter: `drop-shadow(0 0 6px ${stat.glow})`
                }}
              >
                {stat.label.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block"
                    animate={{ y: [0, -0.5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: wordIndex * 0.1
                    }}
                  >
                    {word}
                    {wordIndex < stat.label.split(' ').length - 1 && <br />}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons - Properly styled with inline styles */}
      <motion.div
        variants={itemVariants}
        className="relative z-30 hero-buttons-container mb-4 mt-2"
        style={buttonContainerStyles}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        {/* Primary CTA */}
        <motion.button
          className="hero-primary-btn shimmer-effect"
          style={primaryButtonStyles}
          whileHover={{
            scale: 1.05,
            y: -3,
            boxShadow: '0 15px 50px rgba(34, 211, 238, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
          }}
          whileTap={{ scale: 0.98, y: -1 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <span style={{ position: 'relative', zIndex: 10, fontWeight: 900 }}>
            LET'S GO VIRAL
          </span>
        </motion.button>

        {/* Secondary CTA */}
        <motion.button
          className="hero-secondary-btn"
          style={secondaryButtonStyles}
          whileHover={{
            scale: 1.05,
            y: -3,
            background: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
            boxShadow: '0 15px 50px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
          whileTap={{ scale: 0.98, y: -1 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <span style={{ position: 'relative', zIndex: 10, fontWeight: 900 }}>
            SEE HOW IT WORKS
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll Indicator - Minimal positioning */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: opacityFade }}
      >
        <div className="w-4 h-6 border-2 border-white/30 rounded-full flex justify-center relative">
          <motion.div
            className="w-1 h-1.5 bg-white/50 rounded-full mt-1"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </>
  );
}