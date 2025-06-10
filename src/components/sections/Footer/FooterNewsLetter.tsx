'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import './styles/footer-newsletter.css';

const FooterNewsLetter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      className="footer-newsletter"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <h3 className="newsletter-title">
        <Zap className="newsletter-icon" />
        Get Viral Insights Weekly
      </h3>

      <p className="newsletter-description">
        The strategies that made our clients millions. In your inbox. Free.
      </p>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="form-wrapper">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="newsletter-input"
            disabled={status === 'loading' || status === 'success'}
          />

          <button
            type="submit"
            className={`newsletter-button ${status}`}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'idle' && 'Subscribe'}
            {status === 'loading' && 'Subscribing...'}
            {status === 'success' && (
              <>
                <CheckCircle size={18} />
                Subscribed!
              </>
            )}
            {status === 'error' && 'Try Again'}
          </button>
        </div>

        {status === 'success' && (
          <motion.p
            className="newsletter-success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to the viral revolution! Check your inbox.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default FooterNewsLetter;