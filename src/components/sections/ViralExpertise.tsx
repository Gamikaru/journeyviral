// File: src/components/sections/ViralExpertise.tsx

"use client";

import { motion } from "framer-motion";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function ViralExpertiseSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <SectionWrapper id="viral-expertise" className="relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(215, 60, 190, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(215, 60, 190, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(215, 60, 190, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center py-20">
        {/* Animated Blob */}
        <div
          className="relative mx-auto mb-16"
          style={{ width: 507, height: 583 }}
        >
          <AnimatedBlob
            src="/images/blobs/blob_2.gif"
            width={507}
            height={583}
            animationType="float"
            className="mx-auto"
          />
        </div>

        {/* Headline */}
        <motion.h2
          className="heading-section mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          WE KNOW HOW TO MAKE
          <br />
          <span className="text-gradient">CONTENT GO VIRAL</span>
        </motion.h2>

        {/* Body Text */}
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.p
            className="body-large text-white/90"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            We understand how social media platforms
            <br />
            evaluate and promote content.
          </motion.p>

          <motion.p
            className="body-large text-white/90"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            So, while others rely on guesswork, we
            <br />
            show you how to consistently create
            <br />
            videos that get views and engagement.
          </motion.p>
        </div>

        {/* Note */}
        <motion.p
          className="mt-16 text-lg text-white/60 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          (This is important and that is why it's here)
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
