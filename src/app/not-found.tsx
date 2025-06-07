// File: src/app/not-found.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      {/* Floating Blob GIF */}
      <motion.img
        src="/images/blobs/blob_1.gif"
        alt="Animated blob"
        width={400}
        height={400}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-8xl md:text-9xl font-lastica font-bold text-accent mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-interphases text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Oops! This page went viral and disappeared
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-accent to-pink-500 text-white font-bold rounded-full text-lg shadow-lg"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 30px rgba(215, 60, 190, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Homepage
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
