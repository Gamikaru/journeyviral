// File: src/components/sections/ViralExpertise.tsx

"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedBlob from "@/components/common/AnimatedBlob";
import SectionWrapper from "@/components/common/SectionWrapper";
import ContentBox from "@/components/common/ContentBox";

// Animated counter component
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-bold text-accent-neon">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function ViralExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeMetric, setActiveMetric] = useState(0);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const rotateBlob = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Text reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Viral metrics data
  const viralMetrics = [
    {
      label: "Algorithm Mastery",
      value: 98,
      suffix: "%",
      description: "We've reverse-engineered every major platform's algorithm"
    },
    {
      label: "Viral Hit Rate",
      value: 87,
      suffix: "%",
      description: "Nearly 9 out of 10 pieces of content go viral"
    },
    {
      label: "Average Views",
      value: 2.5,
      suffix: "M+",
      description: "Per piece of content within 48 hours"
    },
    {
      label: "ROI Increase",
      value: 420,
      suffix: "%",
      description: "Average return on investment for our clients"
    },
  ];

  return (
    <SectionWrapper
      ref={sectionRef}
      id="viral-expertise"
      className="relative overflow-hidden"
      variant="mesh"
      parallax
    >
      <div className="relative z-10 text-center py-20">
        {/* Animated Blob with enhanced effects */}
        <motion.div
          className="relative mx-auto mb-16"
          style={{
            width: 507,
            height: 583,
            scale,
            rotate: rotateBlob,
          }}
        >
          <AnimatedBlob
            src="/images/blobs/blob_2.gif"
            width={507}
            height={583}
            animationType="magnetic"
            className="mx-auto"
            interactive
            glowColor="rgba(255, 0, 255, 0.6)"
            speed={1.2}
          />

          {/* Orbiting elements around blob */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-accent-electric rounded-full"
              style={{
                top: "50%",
                left: "50%",
                filter: "blur(0.5px) drop-shadow(0 0 10px rgba(0, 255, 255, 0.8))",
              }}
              animate={{
                x: [
                  Math.cos((i * 120) * Math.PI / 180) * 250,
                  Math.cos((i * 120 + 360) * Math.PI / 180) * 250,
                ],
                y: [
                  Math.sin((i * 120) * Math.PI / 180) * 250,
                  Math.sin((i * 120 + 360) * Math.PI / 180) * 250,
                ],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Main content container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ opacity }}
        >
          {/* Headline with gradient animation */}
          <motion.h2
            className="heading-section mb-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <span className="block text-white mb-4">WE CRACKED THE</span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-accent-electric to-accent-bright text-[1.2em]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              VIRAL CODE
            </motion.span>
          </motion.h2>

          {/* Metrics Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
            variants={itemVariants}
          >
            {viralMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
                onHoverStart={() => setActiveMetric(index)}
                onHoverEnd={() => setActiveMetric(-1)}
              >
                <ContentBox
                  variant="glass"
                  className="p-6 h-full"
                  interactive
                  delay={index * 0.1}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    {metric.label}
                  </div>

                  {/* Hover tooltip */}
                  <motion.div
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48 bg-black/90 backdrop-blur-sm text-xs p-3 rounded-lg pointer-events-none"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: activeMetric === index ? 1 : 0,
                      y: activeMetric === index ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {metric.description}
                  </motion.div>
                </ContentBox>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced body text */}
          <div className="max-w-3xl mx-auto space-y-8">
            <ContentBox
              variant="holographic"
              className="p-8 md:p-10"
              animate
            >
              <motion.p
                className="text-xl md:text-2xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                While others guess, we <span className="text-accent-neon">KNOW</span>.
              </motion.p>

              <motion.p
                className="body-large text-white/90 mb-6"
                variants={itemVariants}
              >
                We don't just understand algorithms—we've
                <span className="text-accent-electric font-bold"> decoded </span>
                them. Every platform. Every update. Every hack.
              </motion.p>

              <motion.p
                className="body-large text-white/90"
                variants={itemVariants}
              >
                Our AI analyzes <AnimatedCounter target={10000} />+ viral videos daily,
                learning what makes content
                <span className="text-gradient font-bold"> explode </span>
                while your competitors are still posting and praying.
              </motion.p>
            </ContentBox>

            {/* Secret sauce reveal */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ContentBox
                variant="neon"
                className="p-8"
                glowColor="rgba(255, 0, 255, 0.8)"
              >
                <motion.div
                  className="text-2xl md:text-3xl font-bold mb-4"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 0, 255, 0.5)",
                      "0 0 40px rgba(255, 0, 255, 0.8)",
                      "0 0 20px rgba(255, 0, 255, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🧬 THE SECRET SAUCE 🧬
                </motion.div>
                <p className="text-lg text-white/90">
                  AI + Psychology + Platform Hacks =
                  <span className="text-accent-electric font-bold"> Viral Domination</span>
                </p>
              </ContentBox>
            </motion.div>
          </div>

          {/* Animated background code rain */}
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-success font-mono text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: -20,
                }}
                animate={{
                  y: ["0vh", "100vh"],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              >
                {Math.random() > 0.5 ? "01010110" : "VIRAL"}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}