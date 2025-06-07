"use client";

import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  opacityFade: any;
}

export default function ScrollIndicator({ opacityFade }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30"
      animate={{ y: [0, 4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ opacity: opacityFade }}
    >
      <div className="w-4 h-6 border-2 border-white/30 rounded-full flex justify-center relative">
        <motion.div
          className="w-1 h-1.5 bg-white/50 rounded-full mt-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
