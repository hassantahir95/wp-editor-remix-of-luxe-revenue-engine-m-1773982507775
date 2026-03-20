import { useEffect, useRef, useState } from "react";
import lightRoseMesh from "@/assets/light-rose-mesh-gradient.png";

const steps = [
  {
    number: "01",
    title: "Revenue Forensics",
    timeline: "Week 1",
    description: "Complete funnel analysis: traffic flow, cart behavior, timing leaks, SKU performance, drop calendar mapping.",
  },
  {
    number: "02",
    title: "System Installation",
    timeline: "Weeks 2-3",
    description: "Drop-timed ad campaigns, behavior automation, AI concierge, recovery flows deployed across your ecosystem.",
  },
  {
    number: "03",
    title: "Launch Execution",
    timeline: "Week 4+",
    description: "First drop with real-time optimization, MER tracking, and revenue visibility. Scale what works, kill what doesn't.",
  },
];

export const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setParallaxY(scrollProgress * 50);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-section-mobile md:py-section-desktop overflow-hidden"
    >
      {/* Light Rose Mesh Gradient Background with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center parallax-bg"
        style={{ 
          backgroundImage: `url(${lightRoseMesh})`,
          transform: `translateY(${parallaxY * 0.3}px)`
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-16">
        {/* Section Label */}
        <p className={`reveal-text section-label text-center mb-4 ${
          isVisible ? "is-visible" : ""
        }`}>
          HOW THE DROP SURGE SYSTEM GETS DEPLOYED
        </p>

        {/* Headline */}
        <h2 className={`reveal-headline stagger-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 ${
          isVisible ? "is-visible" : ""
        }`}>
          From Audit to 3× Revenue in 60 Days
        </h2>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal-cinematic relative flex gap-6 md:gap-10 ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 md:w-24 h-16 md:h-24 rounded-full bg-primary flex items-center justify-center z-10">
                  <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-card rounded-xl p-6 md:p-8 border border-border card-gradient-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 relative z-10">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground transition-colors duration-500">
                      {step.title}
                    </h3>
                    <span className="font-body text-sm text-primary font-medium mt-1 md:mt-0 transition-colors duration-500">
                      {step.timeline}
                    </span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed relative z-10 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
