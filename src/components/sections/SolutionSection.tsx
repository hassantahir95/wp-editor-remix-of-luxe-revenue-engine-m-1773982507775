import { useEffect, useRef, useState } from "react";
import { Calendar, Zap, Bot, BarChart3 } from "lucide-react";
import bgSolution from "@/assets/bg-solution.jpg";
import pillarAdSequencing from "@/assets/pillar-ad-sequencing.jpg";
import pillarAutomation from "@/assets/pillar-automation.jpg";
import pillarAiConcierge from "@/assets/pillar-ai-concierge.jpg";
import pillarDashboard from "@/assets/pillar-dashboard.jpg";

const pillars = [
  {
    icon: Calendar,
    title: "Drop-Timed Ad Sequencing",
    description: "Campaigns synchronized with product availability",
    impact: "40-65% ROAS improvement",
    image: pillarAdSequencing,
  },
  {
    icon: Zap,
    title: "Automated Recovery Flows",
    description: "Cart recovery + browse abandonment flows",
    impact: "25-45% recovery rate",
    image: pillarAutomation,
  },
  {
    icon: Bot,
    title: "AI Customer Concierge",
    description: "Real-time support during peak windows",
    impact: "18-30% conversion lift",
    image: pillarAiConcierge,
  },
  {
    icon: BarChart3,
    title: "Revenue Visibility Dashboard",
    description: "MER tracking + SKU-level performance",
    impact: "Know what prints money",
    image: pillarDashboard,
  },
];

export const SolutionSection = () => {
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
          backgroundImage: `url(${bgSolution})`,
          transform: `translateY(${parallaxY * 0.4}px) scale(1.1)`,
        }}
      />
      
      {/* Rose-tinted Overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/85 via-accent/80 to-accent/90 z-[1]" />
      
      {/* Black Overlay at 20% Opacity */}
      <div className="absolute inset-0 bg-black/20 z-[2]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16">
        {/* Section Label */}
        <p className={`reveal-text section-label text-primary-foreground/90 text-center mb-4 ${
          isVisible ? "is-visible" : ""
        }`}>
          THE DROP SURGE SYSTEM™
        </p>

        {/* Headline */}
        <h2 className={`reveal-headline stagger-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center mb-4 ${
          isVisible ? "is-visible" : ""
        }`}>
          A Launch-Timed Revenue Engine
        </h2>

        {/* Body Copy */}
        <p className={`reveal-text stagger-2 font-body text-primary-foreground/85 text-center max-w-3xl mx-auto mb-16 text-base md:text-lg leading-relaxed ${
          isVisible ? "is-visible" : ""
        }`}>
          We don't optimize for likes. We engineer drop revenue. The Drop Surge System™ syncs your product launches with precision automation that captures buyers at peak intent.
        </p>

        {/* Four Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`pillar-card card-glow-hover group flex flex-col justify-between min-h-[280px] p-6 border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur-sm ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${400 + index * 120}ms` }}
            >
              {/* Icon - Top Left */}
              <div className="w-12 h-12 rounded-xl bg-secondary/20 group-hover:bg-accent flex items-center justify-center transition-colors duration-500">
                <pillar.icon className="w-6 h-6 text-secondary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              
              {/* Content - Bottom Left */}
              <div className="mt-auto">
                <h3 className="font-display text-xl font-semibold text-primary-foreground group-hover:text-accent mb-2 leading-tight transition-colors duration-500 max-w-[180px]">
                  {pillar.title}
                </h3>
                <p className="font-body text-primary-foreground/60 group-hover:text-muted-foreground text-sm leading-relaxed transition-colors duration-500">
                  {pillar.description}
                </p>
                
                {/* Impact metric - slides in from bottom on hover */}
                <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out">
                  <p className="font-body text-accent font-semibold text-sm pt-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {pillar.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
