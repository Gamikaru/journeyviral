// File: src/components/sections/Services.tsx

"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    label: "CONTENT CREATION",
    title: "AI-Powered Content Creation Engine",
    description: "– soon to be released: an innovative app that generates branded content and posts it automatically across multiple accounts, expanding your reach and amplifying brand awareness effortlessly.",
  },
  {
    label: "MASTERCLASS",
    title: "Masterclass",
    description: "– our live webinar Masterclass will train your team to craft attention-grabbing hooks, maintain high audience retention, and deliver impactful payoffs that drive sharing and engagement.",
  },
  {
    label: "CONTENT CONSULTING",
    title: "Content Consulting",
    description: "– from script advice to copywriting, editing, content QA, or full-service content creation, we tailor our services to meet your needs.",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" className="relative">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(215, 60, 190, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 py-20">
        {/* Section Title */}
        <motion.h2
          className="heading-section text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          HOW WE CAN <span className="text-gradient">HELP</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              {...service}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.p
            className="text-xl text-white/80 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Ready to transform your social media presence?
          </motion.p>

          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-accent to-pink-500 text-white font-bold rounded-full text-lg shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(215, 60, 190, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}