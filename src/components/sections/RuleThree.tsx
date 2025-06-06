// File: src/components/sections/RuleThree.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import ContentBox from "@/components/common/ContentBox";
import SectionWrapper from "@/components/common/SectionWrapper";

// Viral Factors Wheel Component
const ViralFactorsWheel = () => {
  const [selectedFactor, setSelectedFactor] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const viralFactors = [
    {
      name: "Hook",
      icon: "🪝",
      description: "First 0.8 seconds that stop the scroll",
    },
    {
      name: "Payoff",
      icon: "💰",
      description: "The satisfying conclusion they waited for",
    },
    {
      name: "Relatability",
      icon: "🤝",
      description: "Content that screams 'THIS IS SO ME!'",
    },
    {
      name: "Emotion",
      icon: "😭",
      description: "Make them feel something DEEP",
    },
    {
      name: "Timing",
      icon: "⏰",
      description: "Posted when your audience is most active",
    },
    {
      name: "Trend-jacking",
      icon: "📈",
      description: "Riding the wave of what's hot NOW",
    },
    {
      name: "Sound",
      icon: "🎵",
      description: "Audio that gets stuck in their head",
    },
    {
      name: "Visual Hook",
      icon: "👁️",
      description: "Thumbnail that demands attention",
    },
    {
      name: "Pacing",
      icon: "⚡",
      description: "Fast cuts that match shrinking attention spans",
    },
    {
      name: "Shareability",
      icon: "📤",
      description: "Content they NEED to show friends",
    },
    {
      name: "Loop-ability",
      icon: "🔄",
      description: "Videos they watch 10x without realizing",
    },
    {
      name: "Comments Bait",
      icon: "💬",
      description: "Controversial takes that spark debates",
    },
    {
      name: "Algorithm Hack",
      icon: "🤖",
      description: "Technical optimization for max reach",
    },
    {
      name: "Authenticity",
      icon: "💯",
      description: "Raw, real, unfiltered truth",
    },
    {
      name: "FOMO",
      icon: "😰",
      description: "Fear of missing out on the conversation",
    },
  ];

  const spinWheel = () => {
    setIsSpinning(true);
    const randomFactor = Math.floor(Math.random() * viralFactors.length);

    // Simulate spinning
    let currentIndex = 0;
    const spinInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % viralFactors.length;
      setSelectedFactor(currentIndex);
    }, 100);

    // Stop at random factor
    setTimeout(
      () => {
        clearInterval(spinInterval);
        setSelectedFactor(randomFactor);
        setIsSpinning(false);
      },
      2000 + Math.random() * 1000
    );
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Wheel Container */}
      <div className="relative w-96 h-96 mx-auto">
        {/* Center button */}
        <motion.button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          onClick={spinWheel}
          disabled={isSpinning}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-accent-neon to-accent-electric rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,0,255,0.8)]">
            <span className="text-4xl mb-2">{isSpinning ? "🎰" : "🎯"}</span>
            <span className="text-white font-bold text-sm">
              {isSpinning ? "SPINNING..." : "SPIN ME!"}
            </span>
          </div>
        </motion.button>

        {/* Factors arranged in circle */}
        {viralFactors.map((factor, index) => {
          const angle = (index * 360) / viralFactors.length;
          const isSelected = selectedFactor === index;

          return (
            <motion.div
              key={index}
              className={`absolute w-20 h-20 cursor-pointer ${
                isSelected ? "z-10" : "z-0"
              }`}
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
                scale: isSelected ? 1.3 : 1,
                filter: isSelected
                  ? "drop-shadow(0 0 20px rgba(255, 0, 255, 0.8))"
                  : "drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))",
              }}
              onClick={() => setSelectedFactor(index)}
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`
                w-full h-full rounded-full flex items-center justify-center
                ${
                  isSelected
                    ? "bg-gradient-to-br from-accent-neon to-accent-electric"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                }
              `}
              >
                <span className="text-2xl">{factor.icon}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Factor Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedFactor}
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-2xl font-bold text-accent-neon mb-2">
            {viralFactors[selectedFactor].name}
          </h4>
          <p className="text-white/80">
            {viralFactors[selectedFactor].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Enhanced Video Player
const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm border-2 border-accent/50"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video iframe */}
      <iframe
        src={`https://player.vimeo.com/video/957946763?h=0&badge=0&autopause=0&player_id=0&app_id=58479${isPlaying ? "&autoplay=1" : ""}`}
        className="absolute inset-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Viral Content - HOOKS"
      />

      {/* Custom overlay controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Top bar */}
            <div className="absolute top-0 left-0 right-0 p-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 inline-flex items-center gap-2">
                <span className="text-accent-neon font-bold">FREE LESSON</span>
                <span className="text-white/60">•</span>
                <span className="text-white">Master the Hook</span>
              </div>
            </div>

            {/* Center play button */}
            {!isPlaying && (
              <motion.button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={() => setIsPlaying(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group">
                  <div className="w-0 h-0 border-l-[30px] border-l-white border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent ml-2 group-hover:border-l-accent-neon transition-colors" />
                </div>
              </motion.button>
            )}

            {/* Bottom progress bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent-neon to-accent-electric"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function RuleThreeSection() {
  const [revealCount, setRevealCount] = useState(0);

  return (
    <SectionWrapper
      id="rule-3"
      className="relative"
      variant="particles"
      particleCount={30}
    >
      {/* Decorative Blob */}
      <AnimatedBlob
        src="/images/blobs/blob_1.gif"
        width={370}
        height={392}
        position={{ x: "80%", y: "10%" }}
        animationType="rotate"
        className="hidden lg:block"
        glowColor="rgba(0, 255, 255, 0.6)"
      />

      <div className="relative z-10 py-20">
        {/* Rule Badge */}
        <motion.div
          className="inline-flex items-center justify-center mb-8"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-success to-accent-electric rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">#3</span>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-success"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Column - Rule Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-lastica text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] mb-8">
              <span className="block text-white">RULE #3:</span>
              <span className="block text-gradient-holographic mt-4">
                'HOOK' AND 'PAYOFF'
              </span>
              <span className="block text-success mt-2">ARE VITAL—</span>
              <span className="block text-white mt-4">BUT ONLY</span>
              <span className="block text-accent-electric text-[1.5em]">
                1 OF 15
              </span>
              <span className="block text-white mt-2">THINGS THAT MAKE</span>
              <span className="block text-accent-neon mt-2">
                A VIDEO GO VIRAL.
              </span>
            </h2>

            {/* Truth Bomb */}
            <ContentBox variant="glass" className="p-8 mb-8">
              <p className="text-xl font-bold text-accent-electric mb-4">
                🤯 REALITY CHECK:
              </p>
              <p className="text-lg text-white/90">
                Everyone obsesses over hooks. But we've identified
                <span className="text-success font-bold">
                  {" "}
                  15 critical factors{" "}
                </span>
                that determine if your content explodes or flops.
              </p>
            </ContentBox>

            {/* Interactive Counter */}
            <motion.button
              className="w-full"
              onClick={() =>
                setRevealCount((prev) => (prev < 15 ? prev + 1 : 0))
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ContentBox variant="electric" className="p-6">
                <p className="text-lg mb-2">Factors you're probably missing:</p>
                <div className="text-4xl font-bold text-accent-electric">
                  {14 - revealCount} / 14
                </div>
                <p className="text-sm text-white/60 mt-2">
                  Click to reveal more →
                </p>
              </ContentBox>
            </motion.button>
          </motion.div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-8">
            {/* Quote Box */}
            <ContentBox variant="neon" className="p-8">
              <p className="text-2xl font-bold mb-4">
                <span className="text-6xl text-accent-neon">"</span>
              </p>
              <p className="text-xl text-white/90 font-medium">
                Make content people{" "}
                <span className="text-accent-neon">WANT</span> to watch.
              </p>
              <p className="text-lg text-white/80 mt-4">
                Simple right? So why does everyone mess it up?
              </p>
              <p className="text-lg text-white/80 mt-2">
                When you scroll TikTok, don't you mostly just swipe?
              </p>
              <p className="text-xl font-bold text-accent-electric mt-6">
                So does your audience. You need ALL 15 FACTORS!
              </p>
            </ContentBox>

            {/* Video Section */}
            <div>
              <p className="text-center text-white/80 mb-4">
                Watch this free lesson on mastering hooks:
              </p>
              <VideoPlayer />
            </div>
          </div>
        </div>

        {/* Viral Factors Wheel */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">THE COMPLETE </span>
            <span className="text-gradient">VIRAL FORMULA</span>
            <span className="text-white"> WHEEL</span>
          </h3>

          <ViralFactorsWheel />
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          className="mt-16 text-lg text-white/60 italic text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          (ok, we were kidding – the blob isn't the secret. But these 15 factors
          are.)
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
