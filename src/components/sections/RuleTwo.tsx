// File: src/components/sections/RuleTwo.tsx

"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import ContentBox from "@/components/common/ContentBox";
import SectionWrapper from "@/components/common/SectionWrapper";

// Ad vs Content comparison component
const AdVsContent = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [activeView, setActiveView] = useState<"ad" | "content">("ad");

  const adStats = {
    skipRate: 94,
    engagement: 0.3,
    shares: 12,
    comments: "Turn off comments",
    sentiment: "😴"
  };

  const contentStats = {
    watchTime: 87,
    engagement: 12.5,
    shares: "48.2K",
    comments: "Can't stop watching!",
    sentiment: "🔥"
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Traditional Ad Side */}
        <motion.div
          className={`relative cursor-pointer ${activeView === "ad" ? "z-10" : "z-0"}`}
          onClick={() => setActiveView("ad")}
          whileHover={{ scale: 1.02 }}
        >
          <ContentBox
            variant={activeView === "ad" ? "glass" : "default"}
            className="p-6 h-full"
            glowColor="rgba(255, 0, 0, 0.5)"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-red-500">Traditional Ad</h3>
              <div className="text-6xl mb-4">📺</div>
            </div>

            {/* Mock ad content */}
            <div className="bg-black/50 rounded-lg p-4 mb-6">
              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded inline-block mb-2">
                SPONSORED
              </div>
              <p className="text-white/50 text-sm">
                "Buy our product! It's amazing! Click here! Limited time offer!
                Don't miss out! Best deal ever! Revolutionary technology!"
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Skip Rate</span>
                <span className="text-red-500 font-bold">{adStats.skipRate}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Engagement</span>
                <span className="text-red-500 font-bold">{adStats.engagement}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Shares</span>
                <span className="text-red-500 font-bold">{adStats.shares}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Top Comment</span>
                <span className="text-white/40 text-sm">{adStats.comments}</span>
              </div>
              <div className="text-center text-4xl mt-4">{adStats.sentiment}</div>
            </div>
          </ContentBox>
        </motion.div>

        {/* Viral Content Side */}
        <motion.div
          className={`relative cursor-pointer ${activeView === "content" ? "z-10" : "z-0"}`}
          onClick={() => setActiveView("content")}
          whileHover={{ scale: 1.02 }}
        >
          <ContentBox
            variant={activeView === "content" ? "neon" : "default"}
            className="p-6 h-full"
            glowColor="rgba(0, 255, 136, 0.5)"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-success">Viral Content</h3>
              <div className="text-6xl mb-4">🚀</div>
            </div>

            {/* Mock viral content */}
            <div className="bg-gradient-to-br from-accent-neon/20 to-accent-electric/20 rounded-lg p-4 mb-6 border border-accent/50">
              <p className="text-white text-sm">
                "POV: When your boss says 'quick meeting' at 4:59pm...
                *chaos ensues* 😂 WHO CAN RELATE?!
                Tag that coworker who always does this! 👇"
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60">Watch Time</span>
                <span className="text-success font-bold">{contentStats.watchTime}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Engagement</span>
                <span className="text-success font-bold">{contentStats.engagement}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Shares</span>
                <span className="text-success font-bold">{contentStats.shares}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60">Top Comment</span>
                <span className="text-white/80 text-sm">{contentStats.comments}</span>
              </div>
              <div className="text-center text-4xl mt-4">{contentStats.sentiment}</div>
            </div>
          </ContentBox>
        </motion.div>
      </div>

      {/* VS Badge */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-accent-neon to-accent-electric rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,0,255,0.8)]">
          <span className="text-2xl font-bold text-white">VS</span>
        </div>
      </motion.div>
    </div>
  );
};

// Teen creator animation
const TeenCreator = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setViews(prev => prev < 2500000 ? prev + Math.floor(Math.random() * 50000) : 2500000);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 border border-accent-electric/50">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-neon to-accent-electric rounded-full animate-pulse" />
          <div>
            <p className="text-white font-bold">@randomkid123</p>
            <p className="text-white/60 text-sm">Posted 2 hours ago</p>
          </div>
        </div>

        <div className="text-center mb-4">
          <motion.div
            className="text-5xl font-bold text-accent-electric"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {views.toLocaleString()}
          </motion.div>
          <p className="text-white/60">views and counting...</p>
        </div>

        <p className="text-white/80 text-sm italic">
          "literally filmed this on my phone in my bedroom lol"
        </p>
      </div>
    </motion.div>
  );
};

export default function RuleTwoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const blobRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="rule-2"
      className="relative overflow-hidden"
      variant="waves"
    >
      <div className="relative z-10 text-center py-20">
        {/* Animated Blob */}
        <motion.div
          className="relative mx-auto mb-16"
          style={{
            width: 507,
            height: 583,
            rotate: blobRotation,
          }}
        >
          <AnimatedBlob
            src="/images/blobs/blob_5.gif"
            width={507}
            height={583}
            animationType="pulse"
            className="mx-auto"
            glowColor="rgba(255, 0, 255, 0.8)"
            speed={1.5}
          />

          {/* Secret message in blob */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-white/50 text-lg font-bold">
              {isRevealed ? "YOU GET IT NOW" : "THE SECRET"}
            </p>
          </motion.div>
        </motion.div>

        {/* Rule Statement */}
        <motion.div
          style={{ scale }}
          className="mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-accent-electric to-accent-neon rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">#2</span>
            </div>
          </motion.div>

          <motion.h2
            className="font-lastica text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="block text-white">RULE #2:</span>
            <span className="block text-gradient-holographic mt-4">YOUR AUDIENCE</span>
            <span className="block text-accent-electric mt-2">DOESN'T WANT</span>
            <span className="block text-white mt-2 text-[1.2em]">TO SEE ADS.</span>
          </motion.h2>
        </motion.div>

        {/* The Truth Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ContentBox variant="matrix" className="p-10">
            <p className="text-2xl md:text-3xl font-bold mb-6 text-success">
              💊 HARD PILL TO SWALLOW:
            </p>

            <div className="space-y-6 text-lg md:text-xl">
              <motion.p
                className="text-white/90"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                That teenager with a ring light? They're destroying your
                <span className="text-red-500 font-bold"> million-dollar campaign</span>.
              </motion.p>

              <TeenCreator />

              <motion.p
                className="text-white/90"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Why? Because they make <span className="text-success font-bold">CONTENT</span>,
                not <span className="text-red-500 line-through">commercials</span>.
              </motion.p>
            </div>
          </ContentBox>
        </motion.div>

        {/* Interactive Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-white">
            SEE THE DIFFERENCE 👇
          </h3>
          <AdVsContent />
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <ContentBox variant="holographic" className="max-w-3xl mx-auto p-10">
            <motion.p
              className="text-2xl md:text-3xl font-bold"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #ff00ff, #00ffff, #ff6ec7, #ff00ff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              We don't do ads. We make content people WANT to watch.
            </motion.p>

            <p className="text-xl text-white/80 mt-6">
              (inside this blob is the secret to making millions without looking desperate)
            </p>
          </ContentBox>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}