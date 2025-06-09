import HeroSection from "@/components/sections/Hero";
import TransformSection from "@/components/sections/Transform";
import StatsSection from "@/components/sections/Stats";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import ExpertiseSection from "@/components/sections/Expertise";


export default function Home() {
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

      </main>
    </>
  );
}
