import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { ChallengesSection } from "@/components/ui/challenges-section";
import { SolutionsSection } from "@/components/ui/solutions-section";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { WhyChooseSection } from "@/components/ui/why-choose-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="tw-min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ChallengesSection />
        <SolutionsSection />
        <BenefitsSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;