"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import VideoBackground from "@/components/common/VideoBackground";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <SectionWrapper id="hero" minHeight="min-h-screen" hasVideo>
      <VideoBackground
        src="/videos/video_version_of_Homepage_hero_bg.mp4"
        opacity={0.8}
        overlay
      />

      <motion.div
        className="relative z-10 text-center py-20"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Logo and Company Name */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/misc/logo_circular_frame_dots.svg"
              alt="Journeyviral Logo"
              width={83}
              height={83}
              className="w-20 h-20 md:w-24 md:h-24"
              priority
            />
          </motion.div>
          <h2 className="font-lastica text-3xl md:text-4xl font-bold tracking-wider">
            JOURNEYVIRAL
          </h2>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="heading-hero mb-12 leading-tight"
          variants={fadeInUp}
        >
          <span className="block">WE TRANSFORM</span>
          <span className="block text-gradient">CORPORATE</span>
          <span className="block">SOCIAL MEDIA INTO</span>
          <span className="block">VIRAL SUCCESS</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.div className="max-w-2xl mx-auto space-y-4" variants={fadeInUp}>
          <p className="text-xl md:text-2xl font-interphases text-white/90">
            You've hired a half dozen influencers
            <br />
            and social media companies already.
          </p>
          <p className="text-xl md:text-2xl font-interphases font-bold text-accent">
            Break the cycle and start to get results.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
