import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import bgCaseStudies from "@/assets/bg-case-studies.jpg";
import caseSkincareRose from "@/assets/case-skincare-rose.jpg";
import caseCosmeticsRose from "@/assets/case-cosmetics-rose.jpg";
import casePersonalcareRose from "@/assets/case-personalcare-rose.jpg";
import caseLuxuryRose from "@/assets/case-luxury-rose.jpg";

const caseStudies = [
  {
    title: "Emerging Skincare Brand",
    challenge: "2.1% conversion, high engagement",
    solution: "Drop Surge System™",
    result: "287% revenue increase, 5.8% conversion",
    image: caseSkincareRose,
  },
  {
    title: "Cosmetics DTC Brand",
    challenge: "73% cart abandonment",
    solution: "Behavior automation",
    result: "$47K monthly recovered, 38% recovery rate",
    image: caseCosmeticsRose,
  },
  {
    title: "Personal Care Startup",
    challenge: "1.8× ROAS, wasted ad budget",
    solution: "Launch-timed sequencing",
    result: "4.8× ROAS, $120K annual savings",
    image: casePersonalcareRose,
  },
  {
    title: "Luxury Skincare Line",
    challenge: "Unpredictable drop performance",
    solution: "Complete system deployment",
    result: "$180K+ per drop, 62% repeat rate",
    image: caseLuxuryRose,
  },
];

export const CaseStudiesSection = () => {
  const [parallaxY, setParallaxY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setParallaxY(scrollProgress * 80);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-section-mobile md:py-section-desktop overflow-hidden">
      {/* Premium Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{
          backgroundImage: `url(${bgCaseStudies})`,
          transform: `translateY(${parallaxY * 0.4}px) scale(1.1)`,
        }}
      />
      
      {/* Rose-tinted Overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/75 to-accent/85 z-[1]" />
      
      {/* Black Overlay at 20% Opacity */}
      <div className="absolute inset-0 bg-black/20 z-[2]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16">
        {/* Section Label */}
        <p className={`reveal-text section-label text-primary-foreground/90 text-center mb-4 ${
          isVisible ? "is-visible" : ""
        }`}>
          BEAUTY BRAND RESULTS
        </p>

        {/* Headline */}
        <h2 className={`reveal-headline stagger-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-12 ${
          isVisible ? "is-visible" : ""
        }`}>
          Real Drops. Real Revenue. Real ROI.
        </h2>

        {/* Case Study Cards - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`group bg-card rounded-2xl overflow-hidden card-glow-hover ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-display text-xl font-bold text-foreground mb-5">
                  {study.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                      Challenge
                    </p>
                    <p className="font-body text-sm text-foreground">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-1">
                      Solution
                    </p>
                    <p className="font-body text-sm text-foreground">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                      Result
                    </p>
                    <p className="font-body text-sm font-semibold text-foreground">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
