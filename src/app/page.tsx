import HeroSection from "@/components/sections/Hero";
import TransformSection from "@/components/sections/Transform";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

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
      </main>
    </>
  );
}
