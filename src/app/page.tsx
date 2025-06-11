"use client";

import { useSectionObserver } from "@/hooks/useSectionObserver";
import HeroSection from "@/components/sections/Hero";
import TransformSection from "@/components/sections/Transform";
import StatsSection from "@/components/sections/Stats";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ExpertiseSection from "@/components/sections/Expertise";
import Rule1Section from "@/components/sections/Rule1";
import Rule2Section from "@/components/sections/Rule2";
import Rule3Section from "@/components/sections/Rule3";
import FooterSection from "@/components/sections/Footer";

export default function Home() {
  // Initialize section observer
  useSectionObserver();

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollIndicator />

      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Transform Section */}
        <TransformSection />

        {/* Stats Section */}
        <StatsSection />

        <ExpertiseSection />

        {/* Rule 1 Section */}
        <Rule1Section />

        {/* Rule 2 Section */}
        <Rule2Section />

        {/* Rule 3 Section */}
        <Rule3Section />

        {/* Footer Section */}
        <FooterSection />
        {/* Add more sections as needed */}
      </main>
    </>
  );
}
