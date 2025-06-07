"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  stat: {
    number: string;
    label: string;
    color: string;
    glow: string;
    bgGlow: string;
  };
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.li
      className="hero-stat-card relative flex flex-col items-center justify-center cursor-default"
      style={{
        minWidth: '200px',
        minHeight: '120px',
        width: '200px',
        height: '120px',
      }}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2 + index * 0.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -4,
        scale: 1.05,
        filter: 'brightness(1.1)'
      }}
    >
      {/* Gradient border wrapper */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #00ffff 0%, #d73cbe 50%, #8e00ff 100%)',
          padding: '2px',
          borderRadius: '1rem',
        }}
        animate={{
          background: [
            'linear-gradient(135deg, #00ffff 0%, #d73cbe 50%, #8e00ff 100%)',
            'linear-gradient(135deg, #8e00ff 0%, #00ffff 50%, #d73cbe 100%)',
            'linear-gradient(135deg, #d73cbe 0%, #8e00ff 50%, #00ffff 100%)',
            'linear-gradient(135deg, #00ffff 0%, #d73cbe 50%, #8e00ff 100%)',
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative backdrop-blur-sm w-full h-full flex flex-col items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '0.9rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            padding: '1rem',
          }}
        >
          <motion.p
            className="font-black mb-1"
            style={{
              fontFamily: 'var(--font-lastica)',
              fontSize: '3rem',
              color: stat.color,
              textShadow: `0 0 20px ${stat.glow}, 0 0 40px ${stat.glow}`,
              letterSpacing: '-0.02em',
              lineHeight: '1',
            }}
            animate={{
              textShadow: [
                `0 0 20px ${stat.glow}, 0 0 40px ${stat.glow}`,
                `0 0 30px ${stat.glow}, 0 0 60px ${stat.glow}`,
                `0 0 20px ${stat.glow}, 0 0 40px ${stat.glow}`,
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {stat.number}
          </motion.p>

          <p
            className="text-sm text-white/90 uppercase tracking-wide text-center font-bold"
            style={{
              fontFamily: 'var(--font-anonymous)',
              lineHeight: '1.2',
              maxWidth: '160px',
            }}
          >
            {stat.label}
          </p>
        </motion.div>
      </motion.div>
    </motion.li>
  );
}
