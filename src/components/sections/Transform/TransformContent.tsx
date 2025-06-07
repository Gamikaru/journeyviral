"use client";

import { motion } from "framer-motion";
import UiverseCard from "./UiverseCard";

export default function TransformContent() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="transform-content-container w-full max-w-2xl">
      {/* Main headline - pixel perfect match */}
      <motion.div
        className="transform-headline-wrapper mb-8"
        variants={itemVariants}
      >
        <h2 className="transform-main-headline">
          <span className="transform-headline-line transform-line-pink">WE TRANSFORM</span>
          <span className="transform-headline-line transform-line-pink">CORPORATE</span>
          <motion.span
            className="transform-headline-line transform-line-gradient"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            SOCIAL MEDIA
          </motion.span>
          <span className="transform-headline-line transform-line-pink">INTO VIRAL SUCCESS</span>
        </h2>
      </motion.div>

      {/* Uiverse glowing card */}
      <motion.div
        className="transform-card-wrapper"
        variants={itemVariants}
      >
        <UiverseCard>
          <p className="transform-card-text">
            You&apos;ve thrown boatloads of cash at influencers and social media &apos;gurus&apos;
            with nothing to show for it.
            <br /><br />
            <span className="transform-card-highlight">
              We&apos;re here to break the cycle and get you results.
            </span>
          </p>
        </UiverseCard>
      </motion.div>

      <style jsx>{`
        .transform-content-container {
          padding: 0;
          margin: 0;
        }

        .transform-headline-wrapper {
          margin-bottom: 2rem;
        }

        .transform-main-headline {
          font-family: var(--font-lastica), 'Bebas Neue', Impact, Arial, sans-serif;
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 0.75;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .transform-headline-line {
          display: block;
          margin: 0;
          padding: 0;
          line-height: 0.75;
        }

        .transform-line-pink {
          color: #ff6ec7;
          text-shadow: 0 0 30px rgba(255, 110, 199, 0.6);
          filter: drop-shadow(0 0 20px rgba(255, 110, 199, 0.4));
        }

        .transform-line-gradient {
          background: linear-gradient(45deg, #ff006e 0%, #8e00ff 50%, #00ffff 100%);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(255, 0, 255, 0.4));
        }

        .transform-card-wrapper {
          width: 100%; /* Match the title width */
        }

        .transform-card-text {
          font-family: var(--font-anonymous), 'JetBrains Mono', monospace;
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 400;
          text-align: left;
        }

        .transform-card-highlight {
          font-weight: 600;
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
          filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.2));
        }

        @media (max-width: 768px) {
          .transform-main-headline {
            font-size: clamp(2.5rem, 10vw, 4rem);
            line-height: 0.8;
          }

          .transform-card-text {
            font-size: 0.9rem;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .transform-main-headline {
            font-size: clamp(2rem, 12vw, 3rem);
            line-height: 0.85;
          }

          .transform-card-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
