"use client";

import { useState } from "react";
import { Variants } from "framer-motion";
import NeonButton from "./NeonButton";

interface HeroButtonsProps {
  itemVariants: Variants;
}

export default function HeroButtons({ itemVariants }: HeroButtonsProps) {
  const [, setHoveredButton] = useState<string | null>(null);

  const handlePrimaryClick = () => {
    // Scroll to transform section or handle primary action
    const transformSection = document.getElementById('transform');
    if (transformSection) {
      transformSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryClick = () => {
    // Handle secondary action (e.g., contact form)
    console.log('Secondary button clicked');
  };

  return (
    <div
      className="flex flex-row gap-6 justify-center items-center mt-12 flex-wrap"
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        flexWrap: 'wrap'
      }}
    >
      <NeonButton
        variant="primary"
        onClick={handlePrimaryClick}
        onMouseEnter={() => setHoveredButton('primary')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        LET&apos;S GO VIRAL
      </NeonButton>

      <NeonButton
        variant="secondary"
        onClick={handleSecondaryClick}
        onMouseEnter={() => setHoveredButton('secondary')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        WATCH FREE LESSON
      </NeonButton>
    </div>
  );
}