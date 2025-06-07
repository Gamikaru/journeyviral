"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroLogo() {
  return (
    <>
      <motion.div
        className="relative"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15, rotate: 5 }}
      >
        <Image
          src="/images/misc/logo_circular_frame_dots.svg"
          alt="JourneyViral Logo"
          width={100}
          height={100}
          className="w-20 h-20 md:w-24 md:h-24"
          priority
        />
        <motion.div
          className="absolute inset-0 rounded-full border border-accent-neon/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.h2
        className="font-lastica text-2xl md:text-3xl font-black tracking-[0.2em] uppercase text-white"
        style={{
          textShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
        }}
        whileHover={{ scale: 1.05, letterSpacing: "0.25em" }}
        transition={{ duration: 0.3 }}
      >
        JOURNEYVIRAL
      </motion.h2>
    </>
  );
}
