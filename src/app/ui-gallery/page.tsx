"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/header/Header';
import Sidebar from './components/layout/sidebar/Sidebar';
import { HeroElementsSection } from './components/sections/hero-elements/HeroElementsSection';
import { NavSection } from './components/sections/nav/NavSection';
import { ButtonsSection } from './components/sections/buttons/ButtonsSection';
import { TypographySection } from './components/sections/typography/TypographySection';
import { CardsSection } from './components/sections/cards/CardsSection';
import { DividersSection } from './components/sections/dividers/DividersSection';
import { FormsSection } from './components/sections/forms/FormsSection';
import { EffectsSection } from './components/sections/effects/EffectsSection';

// Import all styles
import './components/shared/shared.css';
import './components/layout/layout.css';
import './components/layout/header/header.css';
import './components/layout/sidebar/sidebar.css';
import './components/sections/hero-elements/hero-elements.css';
import './components/sections/nav/nav.css';
import './components/sections/buttons/buttons.css';
import './components/sections/cards/cards.css';
import './components/sections/dividers/dividers.css';
import './components/sections/forms/forms.css';
import './components/sections/typography/typography.css';

export default function UIGalleryPage() {
  const [activeSection, setActiveSection] = useState('hero-elements');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`ui-gallery ${darkMode ? 'dark' : 'light'}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="gallery-container">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        <main className="gallery-main">
          <AnimatePresence mode="wait">
            {activeSection === 'hero-elements' && <HeroElementsSection key="hero-elements" />}
            {activeSection === 'nav' && <NavSection key="nav" />}
            {activeSection === 'buttons' && <ButtonsSection key="buttons" />}
            {activeSection === 'typography' && <TypographySection key="typography" />}
            {activeSection === 'cards' && <CardsSection key="cards" />}
            {activeSection === 'dividers' && <DividersSection key="dividers" />}
            {activeSection === 'forms' && <FormsSection key="forms" />}
            {activeSection === 'effects' && <EffectsSection key="effects" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}