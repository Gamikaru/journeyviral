"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypographyDemoRegistry } from './isolated/TypographyDemoRegistry';

export function TypographySection() {
  const [selectedDemo, setSelectedDemo] = useState('hero-styles');

  const handleDemoChange = (demoId: string) => {
    setSelectedDemo(demoId);
  };

  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <TypographyDemoRegistry
        selectedDemo={selectedDemo}
        onDemoChange={handleDemoChange}
      />
    </motion.div>
  );
}
