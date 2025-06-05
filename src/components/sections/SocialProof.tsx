// File: src/components/sections/SocialProof.tsx

"use client";

import { motion } from "framer-motion";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import SectionWrapper from "@/components/common/SectionWrapper";
import SuccessStoryCard from "@/components/ui/SuccessStoryCard";

const successStories = [
  {
    title: "Client Success #1",
    content: "Client had 2 million followers and 3 million views per month. First month working with us got to 60 Million views!",
  },
  {
    title: "Client Success #2",
    content: "Client had no social media following. First month working with us had two viral videos with over 10 million views.",
  },
  {
    title: "Client Success #3",
    content: "Multi Million Dollar Brand with 200 million views per month. First month with us, they had 6 viral videos in a row. 3X click through rates. Dramatically increased sales and went from posting daily to every other day with higher views monthly!",
  },
];

export default function SocialProofSection() {
  return (
    <SectionWrapper id="social-proof" className="relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(215, 60, 190, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(215, 60, 190, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(215, 60, 190, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Decorative Blob */}
      <AnimatedBlob
        src="/images/blobs/blob_1.gif"
        width={370}
        height={392}
        position={{ x: "90%", y: "15%" }}
        animationType="rotate"
        className="hidden lg:block opacity-50"
      />

      <div className="relative z-10 py-20">
        {/* Section Title */}
        <motion.h2
          className="heading-section text-center mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Social <span className="text-gradient">Proof</span>
        </motion.h2>

        {/* Success Stories */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {successStories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              index={index}
              {...story}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="group">
            <motion.div
              className="text-5xl md:text-6xl font-bold text-accent mb-2"
              whileHover={{ scale: 1.1 }}
            >
              20X
            </motion.div>
            <p className="text-white/80">Average View Increase</p>
          </div>

          <div className="group">
            <motion.div
              className="text-5xl md:text-6xl font-bold text-accent mb-2"
              whileHover={{ scale: 1.1 }}
            >
              300%
            </motion.div>
            <p className="text-white/80">Engagement Boost</p>
          </div>

          <div className="group">
            <motion.div
              className="text-5xl md:text-6xl font-bold text-accent mb-2"
              whileHover={{ scale: 1.1 }}
            >
              100+
            </motion.div>
            <p className="text-white/80">Viral Videos Created</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}