"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette, Menu, Sun, Moon } from 'lucide-react';
import './header.css';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

export function Header({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="gallery-header">
      <div className="header-content">
        <div className="header-left">
          <Link href="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Main</span>
          </Link>
          <div className="header-title">
            <Palette size={24} />
            <h1>UI Component Gallery</h1>
            <span className="subtitle">Test & Perfect Every Element</span>
          </div>
        </div>

        <div className="header-controls">
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} />
          </button>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
