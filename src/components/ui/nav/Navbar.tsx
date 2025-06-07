"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import NavLogo from "./NavLogo";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md"
      style={{
        zIndex: 50,
        width: '100vw',
        minWidth: '100%',
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="w-full px-8 sm:px-12 lg:px-16">
        <div
          className="flex items-center justify-between w-full"
          style={{
            height: '4.3rem'
          }}
        >
          {/* Logo - Left side */}
          <div
            className="flex-shrink-0 z-10"
            style={{
              marginLeft: '1rem'
            }}
          >
            <NavLogo />
          </div>

          {/* Hamburger Menu - Right side */}
          <div
            className="flex-shrink-0 z-10 flex items-center"
            style={{
              marginRight: '1rem',
              marginTop: '0.25rem'
            }}
          >
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

    </motion.nav>
  );
}
