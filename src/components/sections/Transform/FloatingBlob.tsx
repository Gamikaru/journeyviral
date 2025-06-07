"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingBlob() {
  const blobVariants = {
    hidden: { opacity: 0, scale: 0.6, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="blob-container"
      variants={blobVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="blob-wrapper"
        animate={{
          y: [-10, 10, -10],
          rotate: [-2, 2, -2],
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Primary glow effect */}
        <motion.div
          className="blob-glow blob-glow-primary"
          animate={{
            scale: [1.8, 2.2, 1.8],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary glow effect */}
        <motion.div
          className="blob-glow blob-glow-secondary"
          animate={{
            scale: [1.4, 1.7, 1.4],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Main blob image */}
        <div className="blob-image-wrapper">
          <Image
            src="/images/blobs/blob_1.gif"
            alt="Transformative viral content blob"
            width={500}
            height={500}
            className="blob-image"
            unoptimized
            priority
          />
        </div>
      </motion.div>

      <style jsx>{`
        .blob-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blob-wrapper {
          position: relative;
          width: 450px;
          height: 450px;
        }

        .blob-glow {
          position: absolute;
          inset: -20%;
          border-radius: 50%;
          pointer-events: none;
        }

        .blob-glow-primary {
          background: radial-gradient(
            circle,
            rgba(255, 0, 255, 0.6) 0%,
            rgba(255, 110, 199, 0.4) 40%,
            transparent 70%
          );
          filter: blur(80px);
        }

        .blob-glow-secondary {
          background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.4) 0%,
            rgba(142, 0, 255, 0.3) 40%,
            transparent 70%
          );
          filter: blur(60px);
        }

        .blob-image-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blob-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 50px rgba(255, 0, 255, 0.5))
            drop-shadow(0 0 100px rgba(255, 0, 255, 0.3)) saturate(1.4)
            contrast(1.2) brightness(1.2);
        }

        @media (max-width: 1024px) {
          .blob-wrapper {
            width: 380px;
            height: 380px;
          }
        }

        @media (max-width: 768px) {
          .blob-wrapper {
            width: 320px;
            height: 320px;
          }
        }

        @media (max-width: 480px) {
          .blob-wrapper {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </motion.div>
  );
}
