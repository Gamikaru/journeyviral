// File: src/components/sections/RuleFour.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ContentBox from "@/components/common/ContentBox";
import SectionWrapper from "@/components/common/SectionWrapper";

// Platform data with strategies
const platformData = {
  instagram: {
    name: "Instagram",
    color: "#E4405F",
    gradient:
      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    stats: { users: "2.4B", avgEngagement: "3.96%", bestTime: "11am-1pm" },
    strategies: [
      "Reels > Posts (20x more reach)",
      "Stories drive 70% of engagement",
      "Carousel posts get 3x more engagement",
      "User-generated content performs 4.5x better",
    ],
    viralTip: "Hook in first 3 seconds + trending audio = 🚀",
  },
  tiktok: {
    name: "TikTok",
    color: "#000000",
    gradient: "linear-gradient(45deg, #000000 0%, #333333 100%)",
    stats: { users: "1.7B", avgEngagement: "5.96%", bestTime: "6am-10am" },
    strategies: [
      "Post 3-5x daily for maximum reach",
      "Comments boost algorithm ranking",
      "Duets & stitches = free virality",
      "Native content only (no reposts)",
    ],
    viralTip: "Controversial takes + fast cuts = millions of views",
  },
  youtube: {
    name: "YouTube",
    color: "#FF0000",
    gradient: "linear-gradient(45deg, #FF0000 0%, #CC0000 100%)",
    stats: { users: "2.7B", avgEngagement: "2.84%", bestTime: "2pm-4pm" },
    strategies: [
      "Thumbnails = 90% of success",
      "First 15 seconds determine watch time",
      "End screens boost channel growth 25%",
      "Playlists increase session duration",
    ],
    viralTip: "Clickbait title + delivery = subscriber explosion",
  },
  facebook: {
    name: "Facebook",
    color: "#1877F2",
    gradient: "linear-gradient(45deg, #1877F2 0%, #0C5FCD 100%)",
    stats: { users: "3.0B", avgEngagement: "0.86%", bestTime: "9am-10am" },
    strategies: [
      "Video gets 135% more organic reach",
      "Live videos get 6x more engagement",
      "Groups > Pages for organic reach",
      "Native uploads > shared links",
    ],
    viralTip: "Emotional content + share incentive = viral gold",
  },
  linkedin: {
    name: "LinkedIn",
    color: "#0A66C2",
    gradient: "linear-gradient(45deg, #0A66C2 0%, #004182 100%)",
    stats: { users: "900M", avgEngagement: "2.12%", bestTime: "7am-9am" },
    strategies: [
      "Personal stories > corporate posts",
      "Native video gets 5x more engagement",
      "Polls boost reach by 2.5x",
      "Document posts = thought leadership",
    ],
    viralTip: "Vulnerability + business lesson = viral LinkedIn post",
  },
};

// Enhanced Social Media Icons with animations
const SocialIcon = ({ platform, isActive, onClick }: any) => {
  const icons = {
    instagram: (
      <svg
        viewBox="0 0 24 24"
        fill="url(#instagram-gradient)"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="instagram-gradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.37 6.37 0 00-1-.05A6.34 6.34 0 005 15.69a6.34 6.34 0 0011.69 2.47v-6.8a8.16 8.16 0 004.91 1.64V9.49a4.85 4.85 0 01-1.97-.8z" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill="#FF0000" className="w-full h-full">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="#1877F2" className="w-full h-full">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-full h-full">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${isActive ? "z-20" : "z-10"}`}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
        animate={{
          filter: isActive
            ? `drop-shadow(0 0 30px ${platformData[platform].color})`
            : "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
        }}
      >
        {icons[platform]}
      </motion.div>

      {/* Orbiting particles when active */}
      {isActive && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: platformData[platform].gradient,
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [
                  Math.cos((i * 120 * Math.PI) / 180) * 60,
                  Math.cos(((i * 120 + 360) * Math.PI) / 180) * 60,
                ],
                y: [
                  Math.sin((i * 120 * Math.PI) / 180) * 60,
                  Math.sin(((i * 120 + 360) * Math.PI) / 180) * 60,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

// Platform Strategy Display
const PlatformStrategy = ({
  platform,
}: {
  platform: keyof typeof platformData;
}) => {
  const data = platformData[platform];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <ContentBox variant="holographic" className="p-8 max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h3
            className="text-3xl font-bold mb-2"
            style={{
              background: data.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {data.name} Domination Strategy
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-neon">
              {data.stats.users}
            </div>
            <div className="text-sm text-white/60">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-electric">
              {data.stats.avgEngagement}
            </div>
            <div className="text-sm text-white/60">Avg Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">
              {data.stats.bestTime}
            </div>
            <div className="text-sm text-white/60">Best Post Time</div>
          </div>
        </div>

        {/* Strategies */}
        <div className="space-y-3 mb-8">
          {data.strategies.map((strategy, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-accent-neon">✓</span>
              <span className="text-white/90">{strategy}</span>
            </motion.div>
          ))}
        </div>

        {/* Viral Tip */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-accent/50">
          <p className="text-lg font-bold text-accent-electric mb-1">
            🎯 VIRAL FORMULA:
          </p>
          <p className="text-white/90">{data.viralTip}</p>
        </div>
      </ContentBox>
    </motion.div>
  );
};

export default function RuleFourSection() {
  const [activePlatform, setActivePlatform] =
    useState<keyof typeof platformData>("instagram");
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate platforms
  useEffect(() => {
    const platforms = Object.keys(platformData) as Array<
      keyof typeof platformData
    >;
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActivePlatform((prev) => {
          const currentIndex = platforms.indexOf(prev);
          return platforms[(currentIndex + 1) % platforms.length];
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <SectionWrapper id="rule-4" className="relative" variant="space">
      <div className="relative z-10 py-20 text-center">
        {/* Rule Badge */}
        <motion.div
          className="inline-flex items-center justify-center mb-12"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-accent-neon via-accent-electric to-success rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">#4</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff00ff, #00ffff, #00ff88, #ff00ff)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Social Media Icons Circle */}
        <motion.div
          className="relative w-96 h-96 mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Center text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              ALL PLATFORMS
            </h3>
            <p className="text-accent-electric">ONE STRATEGY</p>
          </div>

          {/* Platform icons in circle */}
          {Object.keys(platformData).map((platform, index) => {
            const angle = (index * 360) / Object.keys(platformData).length;
            const isActive = activePlatform === platform;

            return (
              <motion.div
                key={platform}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translateX(150px)
                    rotate(-${angle}deg)
                  `,
                }}
                animate={{
                  scale: isActive ? 1.2 : 1,
                }}
              >
                <SocialIcon
                  platform={platform}
                  isActive={isActive}
                  onClick={() => {
                    setActivePlatform(platform as keyof typeof platformData);
                    setIsAnimating(true);
                    setTimeout(() => setIsAnimating(false), 1000);
                  }}
                />
              </motion.div>
            );
          })}

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.circle
              cx="50%"
              cy="50%"
              r="150"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="5 5"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#ff00ff" />
                <stop offset="50%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#ff00ff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Rule Statement */}
        <ContentBox variant="neon" className="max-w-5xl mx-auto mb-12 p-10">
          <motion.h2
            className="font-lastica text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-white">RULE #4: RULES ARE RULES.</span>
            <span className="block text-gradient-holographic mt-4">
              OUR RULES WORK FOR
            </span>
            <span className="block text-accent-electric">
              ALL MAJOR SOCIAL MEDIA
            </span>
            <span className="block text-white">PLATFORMS.</span>
          </motion.h2>
        </ContentBox>

        {/* Platform Strategy Display */}
        <AnimatePresence mode="wait">
          <PlatformStrategy key={activePlatform} platform={activePlatform} />
        </AnimatePresence>

        {/* Universal Truth */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <ContentBox variant="electric" className="max-w-3xl mx-auto p-8">
            <p className="text-xl font-bold mb-4">🌐 THE UNIVERSAL TRUTH:</p>
            <p className="body-large text-white/90">
              Great content transcends platforms. Master our system, and you'll
              dominate
              <span className="text-accent-electric font-bold">
                {" "}
                everywhere
              </span>
              .
            </p>
            <p className="text-lg text-white/80 mt-4">
              From TikTok's Gen Z to LinkedIn's CEOs—we speak every platform's
              language.
            </p>
          </ContentBox>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
