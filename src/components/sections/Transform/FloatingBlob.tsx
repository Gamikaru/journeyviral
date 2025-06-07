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
    <div className="blob-container">
      <motion.div
        className="blob-wrapper"
        variants={blobVariants}
        animate={{
          y: [-10, 10, -10],
          rotate: [-2, 2, -2],
        }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* Primary glow */}
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

        {/* Secondary glow */}
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

        {/* Main blob */}
        <div className="blob-image-wrapper">
          <Image
            src="/images/blobs/blob_1.gif"
            alt="Transformative viral content blob"
            width={450}
            height={450}
            className="blob-image"
            unoptimized
            priority
          />
        </div>
      </motion.div>

      <style jsx>{`
        .blob-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          position: relative;
          min-height: 400px;
        }

        .blob-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        .blob-glow {
          position: absolute;
          inset: 0;
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
          transform: scale(1.8);
        }

        .blob-glow-secondary {
          background: radial-gradient(
            circle,
            rgba(0, 255, 255, 0.4) 0%,
            rgba(142, 0, 255, 0.3) 40%,
            transparent 70%
          );
          filter: blur(60px);
          transform: scale(1.4);
        }

        .blob-image-wrapper {
          position: relative;
          z-index: 10;
          width: 400px;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .blob-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter:
            drop-shadow(0 0 50px rgba(255, 0, 255, 0.4))
            saturate(1.3)
            contrast(1.1)
            brightness(1.1);
        }

        @media (max-width: 1024px) {
          .blob-image-wrapper {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .blob-container {
            min-height: 300px;
          }

          .blob-image-wrapper {
            width: 280px;
            height: 280px;
          }
        }

        @media (max-width: 480px) {
          .blob-container {
            min-height: 250px;
          }

          .blob-image-wrapper {
            width: 240px;
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
