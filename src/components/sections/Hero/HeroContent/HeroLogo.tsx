"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styled from 'styled-components';

const StyledLogoWrapper = styled.div`
  .logo-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background: rgba(8, 5, 20, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 60px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .logo-container::before {
    content: "";
    position: absolute;
    height: 200px;
    aspect-ratio: 1.5/1;
    box-shadow: -15px -17px 15px #9e30a9;
    background-image: conic-gradient(#9e30a9, transparent, transparent, transparent, transparent, transparent, transparent, #9e30a9);
    animation: logoRotate 6s linear infinite -3s;
    z-index: -1;
  }

  .logo-container::after {
    content: "";
    position: absolute;
    height: 200px;
    aspect-ratio: 1.5/1;
    box-shadow: -15px -17px 10px #4090b5;
    background-image: conic-gradient(#4090b5, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #4090b5);
    animation: logoRotate 6s linear infinite;
    z-index: -1;
  }

  .logo-container:hover {
    border-color: rgba(0, 255, 255, 0.4);
    background: rgba(8, 5, 20, 0.6);
    transform: scale(1.02);
  }

  .logo-container:hover::before {
    animation-duration: 3s;
  }

  .logo-container:hover::after {
    animation-duration: 3s;
  }

  .logo-image-wrapper {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-text {
    position: relative;
    z-index: 2;
    font-family: var(--font-lastica);
    font-size: 1.75rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #ffffff;
    text-shadow:
      0 0 10px rgba(255, 255, 255, 0.6),
      0 0 20px rgba(64, 144, 181, 0.4),
      0 0 30px rgba(158, 48, 169, 0.3),
      2px 2px 4px rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .logo-container:hover .logo-text {
    color: #00ffff;
    text-shadow:
      0 0 15px rgba(0, 255, 255, 0.8),
      0 0 25px rgba(64, 144, 181, 0.6),
      0 0 35px rgba(158, 48, 169, 0.4),
      2px 2px 6px rgba(0, 0, 0, 0.9);
    transform: scale(1.05);
    letter-spacing: 0.15em;
  }

  .logo-glow {
    position: absolute;
    inset: -20px;
    background: radial-gradient(
      circle at center,
      rgba(158, 48, 169, 0.3) 0%,
      rgba(64, 144, 181, 0.2) 50%,
      transparent 70%
    );
    opacity: 0;
    filter: blur(20px);
    transition: opacity 0.3s ease;
    z-index: -2;
  }

  .logo-container:hover .logo-glow {
    opacity: 1;
  }

  .logo-shimmer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 20%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 80%
    );
    border-radius: 60px;
    transition: left 1s ease;
    z-index: 1;
  }

  .logo-container:hover .logo-shimmer {
    left: 100%;
  }

  @keyframes logoRotate {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .logo-container {
      padding: 0.875rem 1.5rem;
      gap: 1rem;
    }

    .logo-text {
      font-size: 1.5rem;
      letter-spacing: 0.1em;
    }

    .logo-container:hover .logo-text {
      letter-spacing: 0.12em;
    }
  }

  @media (max-width: 640px) {
    .logo-container {
      padding: 0.75rem 1.25rem;
      gap: 0.875rem;
    }

    .logo-text {
      font-size: 1.25rem;
      letter-spacing: 0.08em;
    }

    .logo-container:hover .logo-text {
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 480px) {
    .logo-container {
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      border-radius: 40px;
    }

    .logo-text {
      font-size: 1.125rem;
      text-align: center;
    }
  }

  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .logo-container::before,
    .logo-container::after {
      animation: none !important;
    }

    .logo-shimmer {
      transition: none;
      display: none;
    }

    .logo-container {
      transition: transform 0.2s ease;
    }
  }
`;

export default function HeroLogo() {
  return (
    <StyledLogoWrapper>
      <motion.div
        className="logo-container"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {/* Background glow effect */}
        <div className="logo-glow" />

        {/* Shimmer effect */}
        <div className="logo-shimmer" />

        {/* Logo image */}
        <div className="logo-image-wrapper">
          <Image
            src="/images/misc/logo_circular_frame_dots.svg"
            alt="JourneyViral Logo"
            width={60}
            height={60}
            className="w-12 h-12 md:w-15 md:h-15"
            priority
          />
        </div>

        {/* Logo text */}
        <h2 className="logo-text">
          JOURNEYVIRAL
        </h2>
      </motion.div>
    </StyledLogoWrapper>
  );
}
