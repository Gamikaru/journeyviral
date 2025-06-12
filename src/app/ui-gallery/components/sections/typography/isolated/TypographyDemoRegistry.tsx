"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all demo components
import { HeadlineStylesDemo } from './demos/HeadlineStylesDemo';
import { HeroStyleDemo } from './demos/HeroStyleDemo';
import { BodyTextDemo } from './demos/BodyTextDemo';
import { SpecialEffectsDemo } from './demos/SpecialEffectsDemo';
import { VHSRetroDemo } from './demos/VHSRetroDemo';
import { GradientTextDemo } from './demos/GradientTextDemo';
import { InteractiveTextDemo } from './demos/InteractiveTextDemo';

// Import isolated styles
import './styles/typography-isolation.css';

export interface TypographyDemo {
  id: string;
  name: string;
  description: string;
  category: 'headline' | 'hero' | 'body' | 'effects' | 'retro' | 'gradient' | 'interactive';
  component: React.ComponentType;
  featured?: boolean;
}

const demoRegistry: TypographyDemo[] = [
  {
    id: 'hero-styles',
    name: 'Hero Typography',
    description: 'Large-scale hero section typography with layered shadows and retro effects',
    category: 'hero',
    component: HeroStyleDemo,
    featured: true
  },
  {
    id: 'headline-styles',
    name: 'Headline Variations',
    description: 'H1-H4 headline styles with neon, gradient, and cyberpunk effects',
    category: 'headline',
    component: HeadlineStylesDemo,
    featured: true
  },
  {
    id: 'body-text',
    name: 'Body Text System',
    description: 'Primary, secondary, and accent body text styles with readability focus',
    category: 'body',
    component: BodyTextDemo
  },
  {
    id: 'special-effects',
    name: 'Text Effects',
    description: 'Animated text effects: scramble, typewriter, matrix, glitch',
    category: 'effects',
    component: SpecialEffectsDemo,
    featured: true
  },
  {
    id: 'vhs-retro',
    name: 'VHS & Retro Styles',
    description: 'Vintage VHS, scanlines, chrome, and retro metal text effects',
    category: 'retro',
    component: VHSRetroDemo
  },
  {
    id: 'gradient-text',
    name: 'Gradient Typography',
    description: 'Cyberpunk gradients, neon flows, and holographic text effects',
    category: 'gradient',
    component: GradientTextDemo
  },
  {
    id: 'interactive-text',
    name: 'Interactive Elements',
    description: 'Hover effects, mouse tracking, and user-triggered animations',
    category: 'interactive',
    component: InteractiveTextDemo
  }
];

interface TypographyDemoRegistryProps {
  selectedDemo?: string;
  onDemoChange?: (demoId: string) => void;
}

export function TypographyDemoRegistry({
  selectedDemo = 'hero-styles',
  onDemoChange
}: TypographyDemoRegistryProps) {
  const [activeDemo, setActiveDemo] = React.useState(selectedDemo);
  const [filter, setFilter] = React.useState<string>('all');

  const handleDemoChange = (demoId: string) => {
    setActiveDemo(demoId);
    onDemoChange?.(demoId);
  };

  const filteredDemos = demoRegistry.filter(demo =>
    filter === 'all' || demo.category === filter || (filter === 'featured' && demo.featured)
  );

  const activeDemoData = demoRegistry.find(demo => demo.id === activeDemo);
  const ActiveComponent = activeDemoData?.component;

  return (
    <div className="typography-isolation-root">
      <div className="typography-demos-container">
        {/* Demo Navigation */}
        <div className="demo-navigation">
          <div className="demo-filters">
            <button
              className={`demo-filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Demos
            </button>
            <button
              className={`demo-filter-btn ${filter === 'featured' ? 'active' : ''}`}
              onClick={() => setFilter('featured')}
            >
              Featured
            </button>
            <button
              className={`demo-filter-btn ${filter === 'hero' ? 'active' : ''}`}
              onClick={() => setFilter('hero')}
            >
              Hero
            </button>
            <button
              className={`demo-filter-btn ${filter === 'headline' ? 'active' : ''}`}
              onClick={() => setFilter('headline')}
            >
              Headlines
            </button>
            <button
              className={`demo-filter-btn ${filter === 'effects' ? 'active' : ''}`}
              onClick={() => setFilter('effects')}
            >
              Effects
            </button>
          </div>

          <div className="demo-grid">
            {filteredDemos.map(demo => (
              <motion.button
                key={demo.id}
                className={`demo-card ${activeDemo === demo.id ? 'active' : ''} ${demo.featured ? 'featured' : ''}`}
                onClick={() => handleDemoChange(demo.id)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <div className="demo-card-header">
                  <h3 className="demo-card-title">{demo.name}</h3>
                  <span className="demo-card-category">{demo.category}</span>
                </div>
                <p className="demo-card-description">{demo.description}</p>
                {demo.featured && <div className="demo-card-badge">Featured</div>}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active Demo Display */}
        <div className="demo-display">
          <AnimatePresence mode="wait">
            {ActiveComponent && (
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="demo-content-wrapper"
              >
                <div className="demo-header-info">
                  <h2 className="demo-title">{activeDemoData.name}</h2>
                  <p className="demo-description">{activeDemoData.description}</p>
                </div>

                <div className="demo-component-container">
                  <ActiveComponent />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export { demoRegistry };
export default TypographyDemoRegistry;
