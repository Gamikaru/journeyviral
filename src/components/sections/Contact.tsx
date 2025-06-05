// File: src/components/sections/Contact.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VideoBackground from "@/components/common/VideoBackground";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function ContactSection() {
  const contactInfo = [
    {
      label: "PHONE",
      value: "(727) 335-1355",
      href: "tel:7273351355",
    },
    {
      label: "EMAIL",
      value: "hello@journeyviral.com",
      href: "mailto:hello@journeyviral.com",
    },
  ];

  return (
    <SectionWrapper id="contact" minHeight="min-h-screen" hasVideo>
      <VideoBackground
        src="/videos/video_version_of_Homepage_hero_bg.mp4"
        opacity={0.6}
        overlay
      />

      <div className="relative z-10 text-center py-20">
        {/* Logo */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <Image
              src="/images/misc/logo_circular_frame_dots.svg"
              alt="Journeyviral Logo"
              width={120}
              height={120}
              className="w-28 h-28 md:w-36 md:h-36"
            />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className="relative inline-block group mb-20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-6xl md:text-7xl lg:text-8xl font-lastica font-bold text-white uppercase tracking-wide">
              Call to Action
            </span>

            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            {/* Hover glow */}
            <motion.div className="absolute -inset-4 bg-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl font-interphases mb-2 text-white/80">
                {item.label}
              </p>
              <motion.a
                href={item.href}
                className="text-2xl md:text-3xl font-anonymous text-white hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item.value}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
