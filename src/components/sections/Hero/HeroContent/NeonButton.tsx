"use client";

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <StyledWrapper className={className}>
      <motion.button
        className={`neon-btn ${variant}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.3 }}
      >
        <span className="span" />
        <span className="txt">{children}</span>
      </motion.button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Base Button Styling - Oval Shape */
  .neon-btn {
    width: 300px;
    height: 70px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 2em;
    text-align: center;
    background: transparent;
    border: none;
    border-radius: 35px; /* Oval shape */
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .neon-btn .span {
    display: flex;
    position: absolute;
    inset: 1px;
    background-color: #212121;
    z-index: 1;
    transition: all 0.3s ease;
    border-radius: 34px; /* Oval shape */
  }

  .neon-btn .txt {
    text-align: center;
    position: relative;
    z-index: 2;
    color: aliceblue;
    font-family: var(--font-lastica);
    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transition: all 0.3s ease;
    text-shadow: 0px 0px 1px #4090b5, 0px 0px 1px #9e30a9, 0 0 1px white;
    white-space: nowrap;
  }

  /* Primary Button (Option 1) - Bright Gradient Active Style */
  .neon-btn.primary {
    background: linear-gradient(135deg, #ff006e 0%, #8e00ff 50%, #00ffff 100%);
  }

  .neon-btn.primary .span {
    background: linear-gradient(135deg, #ff006e 0%, #8e00ff 50%, #00ffff 100%);
  }

  .neon-btn.primary .txt {
    color: #000000;
    text-shadow: 2px 4px 1px #ff006e, 2px 2px 1px #00ffff, 0 0 1px white;
  }

  .neon-btn.primary::before {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 20px #ff006e;
    background-image: conic-gradient(#ff006e, transparent, transparent, transparent, transparent, transparent, transparent, #ff006e);
    animation: rotate 4s linear infinite -2s;
  }

  .neon-btn.primary::after {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 10px #00ffff;
    background-image: conic-gradient(#00ffff, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #00ffff);
    animation: rotate 4s linear infinite;
  }

  /* Primary Button Hover Effects */
  .neon-btn.primary:hover .span {
    inset: 2px;
    background: linear-gradient(135deg, #ff3d8b 0%, #a020f0 50%, #1ae5ff 100%);
    box-shadow: inset 0 40px 20px rgba(255, 0, 110, 0.3);
  }

  .neon-btn.primary:hover .txt {
    text-shadow: 2px 4px 1px #ff006e, 2px 2px 1px #00ffff, 0 0 25px rgba(255, 255, 255, 0.9);
    color: #000000;
    animation: colorchange 0.3s ease;
  }

  /* Secondary Button (Option 2) - Glass Effect with Hover Activation */
  .neon-btn.secondary {
    background: transparent;
  }

  .neon-btn.secondary .span {
    background-color: #212121;
  }

  .neon-btn.secondary .txt {
    color: aliceblue;
    text-shadow: 0px 0px 1px #4090b5, 0px 0px 1px #9e30a9, 0 0 1px white;
  }

  .neon-btn.secondary::before {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 20px #9e30a9;
    background-image: conic-gradient(#9e30a9, transparent, transparent, transparent, transparent, transparent, transparent, #9e30a9);
    animation: rotate 4s linear infinite -2s;
  }

  .neon-btn.secondary::after {
    content: "";
    position: absolute;
    height: 300px;
    aspect-ratio: 1.5/1;
    box-shadow: -17px -19px 10px #4090b5;
    background-image: conic-gradient(#4090b5, transparent, transparent, transparent, transparent, transparent, transparent, transparent, #4090b5);
    animation: rotate 4s linear infinite;
  }

  /* Secondary Button Hover Effects - Activate Option 2 Style */
  .neon-btn.secondary:hover .span {
    inset: 2px;
    background-color: #4090b5;
    background: repeating-linear-gradient(to bottom, transparent 0%, #4090b5 1px, #4090b5 3px, #4090b5 5px, #4090b5 4px, transparent 0.5%), repeating-linear-gradient(to left, hsl(295, 60%, 12%) 100%, hsl(295, 60%, 12%) 100%);
    box-shadow: inset 0 40px 20px hsl(296, 59%, 10%);
  }

  .neon-btn.secondary:hover .txt {
    text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);
    color: rgb(255, 255, 255);
    animation: colorchange 0.3s ease;
  }

  .neon-btn.secondary:hover::before {
    animation-duration: 0.6s;
  }

  .neon-btn.secondary:hover::after {
    animation-duration: 0.6s;
  }

  /* Animations */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes colorchange {
    0% {
      text-shadow: 0px 0px 0px #9e30a9, 0px 0px 0px #4090b5, 0 0 0px rgba(255, 255, 255, 0.616);
    }
    50% {
      text-shadow: -6px 5px 1px #9e30a9, 5px 11px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);
    }
    to {
      text-shadow: 2px 4px 1px #9e30a9, 2px 2px 1px #4090b5, 0 0 20px rgba(255, 255, 255, 0.616);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .neon-btn {
      width: 280px;
      height: 65px;
    }

    .neon-btn .txt {
      font-size: 1.2rem;
      letter-spacing: 0.12em;
    }
  }

  @media (max-width: 640px) {
    .neon-btn {
      width: 260px;
      height: 60px;
      padding: 0.5em 1.5em;
    }

    .neon-btn .txt {
      font-size: 1.1rem;
      letter-spacing: 0.1em;
    }
  }

  @media (max-width: 480px) {
    .neon-btn {
      width: 240px;
      height: 56px;
    }

    .neon-btn .txt {
      font-size: 1rem;
      letter-spacing: 0.08em;
    }
  }

  /* Performance optimizations */
  @media (prefers-reduced-motion: reduce) {
    .neon-btn::before,
    .neon-btn::after {
      animation: none !important;
    }

    .neon-btn {
      transition: transform 0.2s ease;
    }
  }
`;

export default NeonButton;
