'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './styles/footer-logo.css';

const FooterLogo: React.FC = () => {
  return (
    <div className="footer-logo-section">
      <motion.div
        className="footer-logo-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-logo">
          <Image
            src="/images/misc/logo_circular_frame_dots.svg"
            alt="JourneyViral"
            width={60}
            height={60}
            className="footer-logo-icon"
          />
          <span className="footer-logo-text">JOURNEYVIRAL</span>
        </div>

        <p className="footer-tagline">
          <span className="tagline-gradient">Breaking the internet</span>
          <span className="tagline-white"> since 2024.</span>
        </p>

        <p className="footer-description">
          We don't just make content. We engineer virality using AI,
          psychology, and platform hacks that actually work.
        </p>
      </motion.div>
    </div>
  );
};

export default FooterLogo;