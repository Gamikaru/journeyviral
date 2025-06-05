// File: src/components/ui/ServiceCard.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  label: string;
  title: string;
  description: string;
  imageSrc?: string;
  index: number;
}

export default function ServiceCard({
  label,
  title,
  description,
  imageSrc,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ y: -10 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary to-black/50 overflow-hidden">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-accent/20 animate-pulse" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Label */}
        <motion.span
          className="inline-block text-sm font-bold text-accent uppercase tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          {label}
        </motion.span>

        {/* Title */}
        <h3 className="font-interphases text-xl md:text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/80 leading-relaxed">{description}</p>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
