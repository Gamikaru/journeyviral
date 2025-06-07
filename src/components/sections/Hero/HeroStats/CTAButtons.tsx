"use client";

import { motion } from "framer-motion";

interface CTAButtonsProps {
  itemVariants: any;
}

export default function CTAButtons({ itemVariants }: CTAButtonsProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative z-30 hero-buttons-container mb-4 mt-4"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <motion.button
        className="hero-primary-btn relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #00ffff 0%, #00d4ff 100%)',
          color: '#000000',
          fontFamily: 'var(--font-anonymous)',
          fontWeight: 900,
          fontSize: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderRadius: '50px',
          border: 'none',
          padding: '16px 32px',
          minWidth: '180px',
          boxShadow: '0 8px 32px rgba(0, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
        }}
        whileHover={{
          scale: 1.05,
          y: -2,
          boxShadow: '0 12px 40px rgba(0, 255, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        LET'S GO VIRAL
      </motion.button>

      <motion.button
        className="hero-secondary-btn relative overflow-hidden backdrop-blur-sm"
        style={{
          background: 'rgba(26, 15, 46, 0.6)',
          color: '#ffffff',
          fontFamily: 'var(--font-anonymous)',
          fontWeight: 900,
          fontSize: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          borderRadius: '50px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          padding: '16px 32px',
          minWidth: '180px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
        }}
        whileHover={{
          scale: 1.05,
          y: -2,
          borderColor: 'rgba(255, 255, 255, 0.4)',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        SEE HOW IT WORKS
      </motion.button>
    </motion.div>
  );
}
