"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-5 group py-2"
      style={{
        paddingLeft: '0.5rem',
        minWidth: 'fit-content'
      }}
    >
      <motion.div
        className="relative flex-shrink-0"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        style={{
          filter: 'drop-shadow(0 0 15px #ff6ec7) drop-shadow(0 0 25px #d73cbe)',
        }}
      >
        <Image
          src="/images/misc/logo_circular_frame_dots.svg"
          alt="JourneyViral Logo"
          width={44}
          height={44}
          className="w-11 h-11"
          priority
          style={{
            filter: 'brightness(0) saturate(100%) invert(65%) sepia(95%) saturate(3207%) hue-rotate(300deg) brightness(101%) contrast(101%)',
          }}
        />
      </motion.div>

      <motion.span
        className="font-black tracking-wider uppercase block whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-lastica)',
          fontSize: '1.2rem',
          color: '#ffffff',
          textShadow: "0 0 15px rgba(255, 110, 199, 0.4), 0 2px 6px rgba(0, 0, 0, 0.8)",
          zIndex: 100
        }}
        whileHover={{
          scale: 1.02,
          textShadow: "0 0 20px rgba(255, 110, 199, 0.8), 0 2px 6px rgba(0, 0, 0, 0.8)"
        }}
        transition={{ duration: 0.3 }}
      >
        JOURNEYVIRAL
      </motion.span>
    </Link>
  );
}
