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

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <div className="transform-content-container">
      {/* Main headline with staggered animation */}
      <motion.div
        className="transform-headline-wrapper"
        variants={itemVariants}
      >
        <h2 className="transform-main-headline">
          <motion.span
            className="transform-headline-line"
            variants={lineVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            WE TRANSFORM
          </motion.span>
          <motion.span
            className="transform-headline-line"
            variants={lineVariants}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            CORPORATE
          </motion.span>
          <motion.span
            className="transform-headline-line transform-line-gradient"
            variants={lineVariants}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              backgroundPosition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            SOCIAL MEDIA
          </motion.span>
          <motion.span
            className="transform-headline-line"
            variants={lineVariants}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            INTO VIRAL SUCCESS
          </motion.span>
        </h2>
      </motion.div>

      {/* Glowing card with content */}
      <motion.div
        className="transform-card-wrapper"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <UiverseCard>
          <p className="transform-card-text">
            You've thrown boatloads of cash at influencers and social media
            'gurus' with nothing to show for it.
            <br />
            <br />
            <span className="transform-card-highlight">
              We're here to break the cycle and get you results.
            </span>
          </p>
        </UiverseCard>
      </motion.div>

      <style jsx>{`
        .transform-content-container {
          width: 100%;
        }

        .transform-headline-wrapper {
          margin-bottom: 3rem;
        }

        .transform-main-headline {
          font-family:
            var(--font-lastica), "Bebas Neue", Impact, Arial, sans-serif;
          font-weight: 900;
          font-size: clamp(3.5rem, 7vw, 6rem);
          line-height: 0.85;
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
          line-height: 0.85;
          color: #ff6ec7;
          text-shadow:
            0 0 30px rgba(255, 110, 199, 0.6),
            0 0 60px rgba(255, 110, 199, 0.3),
            0 0 90px rgba(255, 110, 199, 0.2);
          filter: drop-shadow(0 0 20px rgba(255, 110, 199, 0.4));
        }

        .transform-line-gradient {
          background: linear-gradient(
            45deg,
            #ff006e 0%,
            #8e00ff 25%,
            #00ffff 50%,
            #8e00ff 75%,
            #ff006e 100%
          );
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(255, 0, 255, 0.4));
        }

        .transform-card-wrapper {
          width: 100%;
          max-width: 600px;
        }

        .transform-card-text {
          font-family: var(--font-anonymous), "JetBrains Mono", monospace;
          font-size: 1.125rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 400;
          text-align: left;
        }

        .transform-card-highlight {
          font-weight: 700;
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
          filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.2));
          display: inline-block;
        }

        @media (max-width: 1024px) {
          .transform-main-headline {
            font-size: clamp(3rem, 6vw, 5rem);
          }

          .transform-card-text {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 768px) {
          .transform-content-container {
            text-align: center;
          }

          .transform-main-headline {
            font-size: clamp(2.5rem, 8vw, 4rem);
            line-height: 0.9;
            align-items: center;
          }

          .transform-card-wrapper {
            margin: 0 auto;
          }

          .transform-card-text {
            font-size: 1rem;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .transform-main-headline {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .transform-headline-wrapper {
            margin-bottom: 2rem;
          }

          .transform-card-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
