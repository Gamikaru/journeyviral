// File: src/components/sections/RuleThree.tsx

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import ContentBox from "@/components/common/ContentBox";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function RuleThreeSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <SectionWrapper id="rule-3" className="relative">
      {/* Decorative Blob */}
      <AnimatedBlob
        src="/images/blobs/blob_1.gif"
        width={370}
        height={392}
        position={{ x: "80%", y: "10%" }}
        animationType="rotate"
        className="hidden lg:block"
      />

      <div className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Rule Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-lastica text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Rule #3: 'HOOK' AND</span>
              <span className="block text-gradient">'PAYOFF' ARE VITAL –</span>
              <span className="block">BUT ONLY 1 OF 15</span>
              <span className="block">THINGS THAT MAKE</span>
              <span className="block">A VIDEO GO VIRAL.</span>
            </h2>
          </motion.div>

          {/* Right Column - Content Box and Video */}
          <div className="space-y-8">
            <ContentBox variant="gradient">
              <p className="body-large mb-6">
                <span className="text-2xl text-accent">"</span>
                Make content people WANT to watch.
                <span className="text-2xl text-accent">"</span> Simple right?
                So, why does everyone mess it up? When you scroll TikTok or
                Instagram, don't you mostly just swipe?
              </p>

              <p className="body-large font-bold text-accent">
                So does your audience. You need a HOOK!
                <br />
                Watch this video. Go ahead, its free.
              </p>
            </ContentBox>

            {/* Video Embed */}
            <motion.div
              className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {!videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse text-white/60">
                    Loading video...
                  </div>
                </div>
              )}

              <iframe
                src="https://player.vimeo.com/video/957946763?h=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Viral Content - HOOKS"
                onLoad={() => setVideoLoaded(true)}
              />
            </motion.div>
          </div>
        </div>

        {/* Note */}
        <motion.p
          className="mt-12 text-lg text-white/60 italic text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          (ok, we were kidding – its just a blob)
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
