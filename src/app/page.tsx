import HeroSection from "@/components/sections/Hero";
import ViralExpertiseSection from "@/components/sections/ViralExpertise";
import RuleOneSection from "@/components/sections/RuleOne";
import RuleTwoSection from "@/components/sections/RuleTwo";
import RuleThreeSection from "@/components/sections/RuleThree";
import RuleFourSection from "@/components/sections/RuleFour";
import ServicesSection from "@/components/sections/Services";
import SocialProofSection from "@/components/sections/SocialProof";
import ContactSection from "@/components/sections/Contact";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollIndicator />

      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Viral Expertise Section */}
        <ViralExpertiseSection />

        {/* Rule #1 Section */}
        <RuleOneSection />

        {/* Rule #2 Section */}
        <RuleTwoSection />

        {/* Rule #3 Section */}
        <RuleThreeSection />

        {/* Rule #4 Section */}
        <RuleFourSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}
