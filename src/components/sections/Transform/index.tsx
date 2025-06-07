"use client";

import { motion } from "framer-motion";
import TransformContent from "./TransformContent";
import FloatingBlob from "./FloatingBlob";

export default function TransformSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="transform-section">
      {/* Background layers */}
      <div className="transform-bg-base" />
      <div className="transform-bg-gradient" />
      <div className="transform-bg-overlay" />

      <div className="transform-container">
        <motion.div
          className="transform-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="transform-content-column">
            <TransformContent />
          </div>
          <div className="transform-blob-column">
            <FloatingBlob />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .transform-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 4rem 0;
          isolation: isolate;
        }

        .transform-bg-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #1a0f2e 0%, #2d0037 100%);
          z-index: 1;
        }

        .transform-bg-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 80%, rgba(215, 60, 190, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(255, 110, 199, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 40%, rgba(255, 0, 255, 0.1) 0%, transparent 50%);
          z-index: 2;
        }

        .transform-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 30% 70%, rgba(142, 0, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(0, 255, 255, 0.05) 0%, transparent 60%);
          z-index: 3;
        }

        .transform-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 100vh;
          display: flex;
          align-items: center;
        }

        .transform-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
          height: auto;
          min-height: 70vh;
        }

        .transform-content-column {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
        }

        .transform-blob-column {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        @media (max-width: 1024px) {
          .transform-grid {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .transform-section {
            padding: 3rem 0;
          }

          .transform-container {
            padding: 0 1rem;
            height: auto;
            min-height: 100vh;
          }

          .transform-grid {
            gap: 2rem;
            min-height: auto;
          }
        }

        @media (max-width: 480px) {
          .transform-section {
            padding: 2rem 0;
          }

          .transform-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            min-height: auto;
          }

          .transform-content-column,
          .transform-blob-column {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
