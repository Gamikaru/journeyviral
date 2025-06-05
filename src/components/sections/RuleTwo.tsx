// File: src/components/sections/RuleTwo.tsx

"use client";

import { motion } from "framer-motion";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function RuleTwoSection() {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <SectionWrapper id="rule-2" className="relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 0%, rgba(215, 60, 190, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 100%, rgba(215, 60, 190, 0.1) 0%, transparent 60%)",
            "radial-gradient(circle at 50% 0%, rgba(215, 60, 190, 0.1) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center py-20">
        {/* Animated Blob */}
        <motion.div
          className="relative mx-auto mb-16"
          style={{ width: 507, height: 583 }}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AnimatedBlob
            src="/images/blobs/blob_5.gif"
            width={507}
            height={583}
            animationType="pulse"
            className="mx-auto"
          />
        </motion.div>

        {/* Rule Statement */}
        <motion.h2
          className="font-lastica text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
        >
          <span className="block">Rule #2: YOUR</span>
          <span className="block text-gradient">AUDIENCE DOESN'T</span>
          <span className="block">WANT TO SEE ADS.</span>
        </motion.h2>

        {/* Body Text */}
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.p
            className="body-large text-white/90"
            variants={textAnimation}
          >
            Tired of watching teenagers with
            <br />
            phones outperform your professional
            <br />
            content team? We'll show you why that
            <br />
            kid with zero budget is getting
            <br />
            millions of views while your carefully
            <br />
            planned campaigns struggle.
          </motion.p>

          <motion.p
            className="text-2xl md:text-3xl font-bold text-accent"
            variants={textAnimation}
          >
            We don't do ads, we make content
            <br />
            people want to watch.
          </motion.p>
        </motion.div>

        {/* Note */}
        <motion.p
          className="mt-16 text-lg text-white/60 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          (inside this blob is the secret)
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
