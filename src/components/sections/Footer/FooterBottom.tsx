'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './styles/footer-bottom.css';

const FooterBottom: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      className="footer-bottom"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
    >
      <div className="footer-bottom-content">
        <div className="footer-copyright">
          <p>© {currentYear} JourneyViral. All rights reserved.</p>
          <p className="footer-slogan">
            <span className="slogan-break">Break the internet.</span>
            <span className="slogan-own">Own the algorithm.</span>
          </p>
        </div>

        <div className="footer-legal">
          <Link href="/privacy" className="legal-link">Privacy Policy</Link>
          <span className="legal-separator">•</span>
          <Link href="/terms" className="legal-link">Terms of Service</Link>
          <span className="legal-separator">•</span>
          <Link href="/cookies" className="legal-link">Cookie Policy</Link>
        </div>
      </div>

      {/* Easter Egg */}
      <motion.div
        className="footer-easter-egg"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        🚀
      </motion.div>
    </motion.div>
  );
};

export default FooterBottom;