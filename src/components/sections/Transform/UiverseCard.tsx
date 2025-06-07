"use client";

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface UiverseCardProps {
  children: React.ReactNode;
  className?: string;
}

const UiverseCard = ({ children, className = "" }: UiverseCardProps) => {
  return (
    <StyledWrapper className={className}>
      <motion.div
        className="card"
        whileHover={{
          filter: "drop-shadow(0px 0px 30px rgba(209, 38, 197, 1))",
          scale: 1.02
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-content">
          {children}
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* glowing hover card made by: csozi | Website: english.csozi.hu*/
  width: 100%;
  max-width: none; /* Match title width instead of fixed width */

  .card {
    position: relative;
    width: 100%;
    min-height: 280px;
    background: rgb(255, 0, 179);
    background: linear-gradient(137deg, rgb(255, 0, 179) 0%, rgba(0, 212, 255, 1) 100%);
    transition: 0.3s ease;
    border-radius: 30px;
    filter: drop-shadow(0px 0px 30px rgba(209, 38, 197, 0.5));
  }

  .card::after {
    content: '';
    background-color: transparent; /* Make background transparent */
    position: absolute;
    z-index: 1;
    transition: 0.3s ease;
    height: 98%;
    width: 98%;
    top: 1%;
    left: 1%;
    border-radius: 28px;
  }

  .card:hover {
    filter: drop-shadow(0px 0px 30px rgba(209, 38, 197, 1));
  }

  .card-content {
    position: relative;
    z-index: 2;
    padding: 2rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .card {
      min-height: 250px;
    }

    .card-content {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      min-height: 220px;
    }

    .card-content {
      padding: 1.25rem;
    }
  }
`;

export default UiverseCard;
