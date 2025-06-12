"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const categories = [
    { id: 'hero-elements', label: 'Hero Elements', count: 7 },
    { id: 'nav', label: 'Navigation', count: 6 },
    { id: 'buttons', label: 'Buttons', count: 8 },
    { id: 'typography', label: 'Typography', count: 5 },
    { id: 'cards', label: 'Cards', count: 4 },
    { id: 'dividers', label: 'Dividers', count: 3 },
    { id: 'forms', label: 'Forms', count: 6 },
    { id: 'effects', label: 'Effects', count: 9 }
  ];
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sidebar-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle sidebar"
      >
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
        <span className="toggle-line"></span>
      </button>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="sidebar-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`gallery-sidebar ${mobileMenuOpen ? 'is-open' : ''}`}
        initial={{ x: -280 }}
        animate={{ x: mobileMenuOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-text">UI</span>
            <span className="logo-accent">GALLERY</span>
          </div>
          <div className="sidebar-version">v2.0</div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-section-title">Categories</h3>
            <ul className="nav-list">
              {categories.map((category) => (
                <li key={category.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === category.id ? 'is-active' : ''}`}
                    onClick={() => setActiveSection(category.id)}
                  >
                    <span className="nav-label">{category.label}</span>
                    <span className="nav-count">{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-section">
            <h3 className="nav-section-title">Tools</h3>
            <ul className="nav-list">
              <li className="nav-item">
                <button className="nav-link">
                  <span className="nav-label">Export Code</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <span className="nav-label">Copy Components</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <span className="nav-label">Download Assets</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <div className="footer-info">
            <p className="footer-text">
              Cyberpunk UI Components
            </p>
            <p className="footer-subtext">
              Built for viral marketing
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
