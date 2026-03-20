import { useEffect, useRef, useState } from "react";
import { Sparkles, Rocket, Activity } from "lucide-react";
import bgWhyUs from "@/assets/bg-why-us.jpg";
import whyBeautySpecialist from "@/assets/why-beauty-specialist.jpg";
import whyLaunchFirst from "@/assets/why-launch-first.jpg";
import whyBehaviorSync from "@/assets/why-behavior-sync.jpg";

const differentiators = [
  {
    icon: Sparkles,
    title: "Beauty Brand Specialists",
    description: 'We understand DTC beauty economics, not just "e-commerce"',
    image: whyBeautySpecialist,
  },
  {
    icon: Rocket,
    title: "Launch-First Architecture",
    description: 'Revenue timed to drops, not wasted on "always-on" campaigns',
    image: whyLaunchFirst,
  },
  {
    icon: Activity,
    title: "Behavior Sync",
    description: "Automation triggered by real buying signals, not guesses",
    image: whyBehaviorSync,
  },
];

export const WhyUsSection = () => {
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
      { threshold: 0.15 }
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
          backgroundImage: `url(${bgWhyUs})`,
          transform: `translateY(${parallaxY * 0.4}px) scale(1.1)`,
        }}
      />
      
      {/* Rose-tinted Overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/85 via-accent/80 to-accent/90 z-[1]" />
      
      {/* Black Overlay at 20% Opacity */}
      <div className="absolute inset-0 bg-black/20 z-[2]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16">
        {/* Headline */}
        <h2 className={`reveal-headline font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-2xl mb-4 ${
          isVisible ? "is-visible" : ""
        }`}>
          We Engineer Drop Revenue,
        </h2>
        <p className={`reveal-text stagger-1 font-display text-2xl md:text-3xl text-secondary mb-12 ${
          isVisible ? "is-visible" : ""
        }`}>
          Not Viral Moments
        </p>

        {/* Differentiator Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => (
            <div
              key={diff.title}
              className={`group bg-accent/30 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-foreground/20 card-glow-hover ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              <div className="h-32 overflow-hidden">
                <img 
                  src={diff.image} 
                  alt={diff.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/15 flex items-center justify-center mb-4">
                  <diff.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {diff.title}
                </h3>
                <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
