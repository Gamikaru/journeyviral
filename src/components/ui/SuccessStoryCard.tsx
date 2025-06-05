// File: src/components/ui/SuccessStoryCard.tsx

"use client";

import { motion } from "framer-motion";

interface SuccessStoryCardProps {
  title: string;
  content: string;
  index: number;
}

export default function SuccessStoryCard({
  title,
  content,
  index,
}: SuccessStoryCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl"
        animate={{
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card content */}
      <div className="relative bg-primary border-2 border-white/80 rounded-lg p-8 md:p-10 backdrop-blur-sm">
        {/* Success number */}
        <motion.div
          className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-white text-lg"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {index + 1}
        </motion.div>

        {/* Title */}
        <h3 className="font-interphases text-2xl font-bold mb-4 text-gradient">
          {title}
        </h3>

        {/* Content with animated highlight */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-white/90"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {content.split(/(\d+ Million|\d+X|\d+%)/).map((part, i) => {
            if (/\d+ Million|\d+X|\d+%/.test(part)) {
              return (
                <motion.span
                  key={i}
                  className="font-bold text-accent text-2xl"
                  whileHover={{ scale: 1.1 }}
                  style={{ display: "inline-block" }}
                >
                  {part}
                </motion.span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </motion.p>

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-pink-500"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2 + 0.5,
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}
