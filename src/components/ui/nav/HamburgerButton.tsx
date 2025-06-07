"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect, useRef } from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const StyledWrapper = styled.div`
  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 32px;
    cursor: pointer;
    margin: auto;
    display: block;
    height: calc(3px * 3 + 8px * 2);
  }

  .bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: calc(3px / 2);
    background: #ffffff;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 110, 199, 0.4);
    color: inherit;
    opacity: 1;
    transition: none 0.35s cubic-bezier(.5,-0.35,.35,1.5) 0s;
  }

  /***** Tornado Animation *****/

  .bar--top {
    bottom: calc(50% + 8px + 3px/ 2);
    transition-property: bottom,transform;
    transition-delay: calc(0s + 0.35s) * .6;
  }

  .bar--middle {
    top: calc(50% - 3px/ 2);
    transition-property: opacity,transform;
    transition-delay: calc(0s + 0.35s * .3);
  }

  .bar--bottom {
    top: calc(50% + 8px + 3px/ 2);
    transition-property: top,transform;
    transition-delay: 0s;
  }

  #checkbox:checked + .toggle .bar--top {
    transform: rotate(-135deg);
    transition-delay: 0s;
    bottom: calc(50% - 3px/ 2);
  }

  #checkbox:checked + .toggle .bar--middle {
    opacity: 0;
    transform: rotate(-135deg);
    transition-delay: calc(0s + 0.35s * .3);
  }

  #checkbox:checked + .toggle .bar--bottom {
    top: calc(50% - 3px/ 2);
    transform: rotate(-225deg);
    transition-delay: calc(0s + 0.35s * .6);
  }
`;

export default function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);

  // Sync the checkbox state with the isOpen prop
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = isOpen;
    }
  }, [isOpen]);

  const handleChange = () => {
    onClick();
  };

  return (
    <motion.div
      className="relative flex items-center justify-center transition-colors cursor-pointer"
      style={{
        background: 'transparent',
        border: 'none',
        zIndex: 60,
        width: '48px',
        height: '48px',
        padding: '8px',
        marginRight: '0.5rem',
        minWidth: 'fit-content'
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
    >
      <StyledWrapper>
        <div id="menuToggle">
          <input
            ref={checkboxRef}
            id="checkbox"
            type="checkbox"
            checked={isOpen}
            onChange={handleChange}
            aria-label="Toggle menu"
          />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top" />
            <div className="bar bar--middle" />
            <div className="bar bar--bottom" />
          </label>
        </div>
      </StyledWrapper>
    </motion.div>
  );
}
