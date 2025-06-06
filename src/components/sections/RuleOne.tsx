// File: src/components/sections/RuleOne.tsx

"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import ContentBox from "@/components/common/ContentBox";
import SectionWrapper from "@/components/common/SectionWrapper";

// Interactive feed simulation component
const FeedSimulation = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const feedItems = [
    { type: "competitor", content: "Another boring product shot 📸", engagement: "2.1K" },
    { type: "yours", content: "YOUR VIRAL CONTENT 🚀", engagement: "2.5M" },
    { type: "random", content: "Cat doing backflips 🐱", engagement: "890K" },
    { type: "random", content: "Recipe nobody asked for 🥗", engagement: "5.2K" },
    { type: "competitor", content: "Corporate cringe post 💼", engagement: "342" },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Phone mockup */}
      <div className="relative bg-black/50 backdrop-blur-sm border-2 border-white/20 rounded-[3rem] p-4 shadow-2xl">
        <div className="bg-black rounded-[2.5rem] p-2 overflow-hidden">
          {/* Status bar */}
          <div className="bg-black h-6 rounded-t-[2rem] flex items-center justify-between px-6 text-xs text-white/60">
            <span>9:41</span>
            <span>⚡ 🔋</span>
          </div>

          {/* Feed items */}
          <div className="relative h-96 overflow-hidden bg-gradient-to-b from-primary-dark to-primary">
            {feedItems.map((item, index) => (
              <motion.div
                key={index}
                className={`absolute w-full p-4 ${
                  index === activeIndex ? 'z-10' : 'z-0'
                }`}
                initial={{ y: index * 400 }}
                animate={{
                  y: (index - activeIndex) * 400,
                  scale: index === activeIndex ? 1 : 0.9,
                  opacity: Math.abs(index - activeIndex) > 1 ? 0 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div
                  className={`
                    p-6 rounded-2xl h-80 flex flex-col justify-between
                    ${item.type === 'yours'
                      ? 'bg-gradient-to-br from-accent-neon/20 to-accent-electric/20 border-2 border-accent shadow-[0_0_30px_rgba(255,0,255,0.5)]'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                    }
                  `}
                >
                  <div className="flex-1 flex items-center justify-center">
                    <p className={`text-lg font-bold text-center ${
                      item.type === 'yours' ? 'text-white text-2xl' : 'text-white/70'
                    }`}>
                      {item.content}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <span className="text-white/60">❤️</span>
                      <span className="text-white/60">💬</span>
                      <span className="text-white/60">📤</span>
                    </div>
                    <span className={`font-bold ${
                      item.type === 'yours' ? 'text-accent-neon text-xl' : 'text-white/50'
                    }`}>
                      {item.engagement}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 py-4">
            {feedItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-accent-neon w-6'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Swipe indicator */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Swipe to see the difference ↕️
      </motion.div>
    </div>
  );
};

export default function RuleOneSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <SectionWrapper
      ref={sectionRef}
      id="rule-1"
      className="relative"
      variant="gradient"
    >
      {/* Decorative Blobs */}
      <AnimatedBlob
        src="/images/blobs/blob_1.gif"
        width={200}
        height={400}
        position={{ x: "5%", y: "10%" }}
        animationType="glitch"
        className="hidden lg:block opacity-50"
        interactive
      />

      <AnimatedBlob
        src="/images/blobs/blob_2.gif"
        width={300}
        height={350}
        position={{ x: "85%", y: "60%" }}
        animationType="morph"
        delay={2}
        className="hidden lg:block opacity-50"
        interactive
      />

      <div className="relative z-10 py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          style={{ scale: springScale, opacity }}
        >
          {/* Rule Number Badge */}
          <motion.div
            className="inline-flex items-center justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-accent-neon to-accent-electric rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-white">#1</span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-neon"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Rule statement */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-lastica text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-[0.9]">
                <motion.span
                  className="block text-white"
                  whileHover={{ x: 10 }}
                >
                  RULE #1:
                </motion.span>
                <motion.span
                  className="block mt-4"
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <span className="text-gradient-holographic">YOUR AUDIENCE</span>
                </motion.span>
                <motion.span
                  className="block text-white mt-2"
                  whileHover={{ x: -10 }}
                >
                  ISN'T ON YOUR PAGE.
                </motion.span>
                <motion.span
                  className="block text-accent-electric mt-4 text-[0.8em]"
                  animate={{
                    textShadow: isHovered
                      ? "0 0 30px rgba(0, 255, 255, 0.8)"
                      : "0 0 10px rgba(0, 255, 255, 0.4)"
                  }}
                >
                  YOU'RE ON THEIR FEED.
                </motion.span>
              </h2>

              {/* Insight box */}
              <ContentBox
                variant="electric"
                className="p-8"
                animate
                interactive
              >
                <motion.p
                  className="text-lg md:text-xl text-white/90 font-medium leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Your competition? It's not other brands.
                  <br />
                  <span className="text-accent-electric font-bold">
                    It's literally everything else in their feed.
                  </span>
                </motion.p>
              </ContentBox>
            </motion.div>

            {/* Right column - Interactive demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <FeedSimulation />

              {/* Floating stats around the phone */}
              <motion.div
                className="absolute -top-8 -left-8 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-accent-neon font-bold">0.8 sec</span>
                <span className="text-white/60 text-sm ml-2">to capture attention</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <span className="text-accent-electric font-bold">3 sec</span>
                <span className="text-white/60 text-sm ml-2">before they swipe</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom insight */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <ContentBox
              variant="neon"
              className="max-w-3xl mx-auto p-10"
              glowColor="rgba(255, 0, 255, 0.6)"
            >
              <p className="text-2xl md:text-3xl font-bold mb-4">
                THE HARSH TRUTH:
              </p>
              <p className="text-xl text-white/90">
                If your content looks like an ad, you've already lost.
                <br />
                <span className="text-accent-neon">
                  Be the content they stop scrolling for.
                </span>
              </p>
            </ContentBox>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}