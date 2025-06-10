'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './styles/footer-links.css';

const FooterLinks: React.FC = () => {
  const linkGroups = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Viral Strategy', href: '/services/strategy' },
        { label: 'Content Creation', href: '/services/content' },
        { label: 'Platform Hacking', href: '/services/hacking' },
        { label: 'AI Solutions', href: '/services/ai' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Viral Playbook', href: '/playbook' },
        { label: 'Tools', href: '/tools' },
        { label: 'API Docs', href: '/api' },
        { label: 'Support', href: '/support' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="footer-links-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {linkGroups.map((group) => (
        <motion.div
          key={group.title}
          className="footer-link-group"
          variants={itemVariants}
        >
          <h4 className="footer-link-title">{group.title}</h4>
          <ul className="footer-link-list">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="footer-link">
                  <span className="link-text">{link.label}</span>
                  <span className="link-arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FooterLinks;