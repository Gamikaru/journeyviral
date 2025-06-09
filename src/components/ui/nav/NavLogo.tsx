"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./styles/nav-logo.css";

export default function NavLogo() {
  return (
    <Link href="/" className="nav-logo-link">
      <motion.div
        className="nav-logo-icon"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/images/misc/logo_circular_frame_dots.svg"
          alt="JourneyViral Logo"
          width={44}
          height={44}
          priority
        />
      </motion.div>

      <motion.span
        className="nav-logo-text"
        whileHover={{
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
      >
        JOURNEYVIRAL
      </motion.span>
    </Link>
  );
}
