"use client";

import { motion } from "framer-motion";

export default function HeroTaglines() {
  return (
    <motion.div
      className="space-y-4"
      style={{ paddingTop: '1rem', paddingBottom: '1.5rem' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <motion.div
        className="relative group max-w-4xl mx-auto"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="relative backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(215, 60, 190, 0.2) 0%, rgba(138, 43, 226, 0.2) 50%, rgba(75, 0, 130, 0.2) 100%)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            padding: '20px 40px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
          animate={{
            borderColor: [
              'rgba(255, 255, 255, 0.2)',
              'rgba(215, 60, 190, 0.4)',
              'rgba(255, 255, 255, 0.2)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p
            className="font-black uppercase text-center"
            style={{
              fontFamily: 'var(--font-lastica)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
  >
            <span style={{ color: '#ff6ec7' }}>Stop making ads nobody watches</span>
            <br />
            <span style={{ color: '#00ffff' }}>Start breaking algorithms with</span>
            <br />
            <span style={{ color: '#ffffff' }}>content that captivates.</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
