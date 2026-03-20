import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <PainSection />
        <section id="solution">
          <SolutionSection />
        </section>
        <BenefitsSection />
        <section id="results">
          <CaseStudiesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <WhyUsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
