"use client";

import { motion } from "framer-motion";
import { memo } from "react";

interface SimpleTextDisplayProps {
  isInView: boolean;
  shouldAnimate: boolean;
}

const SimpleTextDisplay = memo(function SimpleTextDisplay({
  isInView,
  shouldAnimate
}: SimpleTextDisplayProps) {

  const textContent = [
    {
      id: 1,
      text: "You tried everything.\nGrowth hacks. Trending audio.\nStill stuck at 200 views.",
      delay: 0
    },
    {
      id: 2,
      text: "Your competitor just hit 10M.\nWith worse content than yours.",
      delay: 0.2
    },
    {
      id: 3,
      text: "The algorithm isn't broken.\nYour strategy is.",
      delay: 0.4
    },
    {
      id: 4,
      text: "We don't chase virality.\nWe manufacture it.",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="simple-text-display">
      <motion.div
        className="text-content-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {textContent.map((item) => (
          <motion.div
            key={item.id}
            className="text-item"
            variants={itemVariants}
          >
            <p className="text-content">
              {item.text.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < item.text.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

export default SimpleTextDisplay;
