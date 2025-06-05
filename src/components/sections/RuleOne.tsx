// File: src/components/sections/RuleOne.tsx

"use client";

import { motion } from "framer-motion";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import ContentBox from "@/components/common/ContentBox";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function RuleOneSection() {
  return (
    <SectionWrapper id="rule-1" className="relative">
      {/* Decorative Blobs */}
      <AnimatedBlob
        src="/images/blobs/blob_1.gif"
        width={170}
        height={385}
        position={{ x: "5%", y: "10%" }}
        animationType="float"
        className="hidden lg:block opacity-70"
      />

      <AnimatedBlob
        src="/images/blobs/blob_2.gif"
        width={360}
        height={380}
        position={{ x: "70%", y: "50%" }}
        animationType="float"
        delay={2}
        className="hidden lg:block opacity-70"
      />

      <div className="relative z-10 py-20">
        {/* Rule Statement */}
        <motion.h2
          className="font-lastica text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-tight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block">Rule #1: YOUR</span>
          <span className="block text-gradient">AUDIENCE ISN'T</span>
          <span className="block">ON YOUR PAGE,</span>
          <span className="block">YOU'RE ON</span>
          <span className="block">THEIR FEED.</span>
        </motion.h2>

        {/* Content Box */}
        <ContentBox variant="glow" className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="body-large mb-8 text-white/90">
              Most creators, (especially companies) create content thinking that someone
              is watching their content back to back; that's not what's happening.
            </p>

            <p className="body-large text-accent font-bold">
              Your videos are showing up amidst a plethora of
              other content. How do you get yours to stand out?
            </p>
          </motion.div>
        </ContentBox>

        {/* Note */}
        <motion.p
          className="mt-12 text-lg text-white/60 italic text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          (You will understand the significance soon)
        </motion.p>
      </div>
    </SectionWrapper>
  );
}