import { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, ShoppingBag, LineChart, Heart, Coins } from "lucide-react";
import lightRoseMesh from "@/assets/light-rose-mesh-gradient.png";
import benefitRevenueGrowth from "@/assets/benefit-revenue-growth.jpg";
import benefitRoas from "@/assets/benefit-roas.jpg";
import benefitCartRecovery from "@/assets/benefit-cart-recovery.jpg";
import benefitPredictable from "@/assets/benefit-predictable.jpg";
import benefitLtv from "@/assets/benefit-ltv.jpg";
import benefitBudget from "@/assets/benefit-budget.jpg";

const benefits = [
  {
    icon: TrendingUp,
    metric: "3×",
    title: "Revenue Growth",
    description: "From existing traffic — no viral stunts needed",
    image: benefitRevenueGrowth,
  },
  {
    icon: Target,
    metric: "65%",
    title: "Better ROAS",
    description: "Through launch timing vs. always-on waste",
    image: benefitRoas,
  },
  {
    icon: ShoppingBag,
    metric: "45%",
    title: "Cart Recovery",
    description: "Triple the industry average of 8-12%",
    image: benefitCartRecovery,
  },
  {
    icon: LineChart,
    metric: "100%",
    title: "Predictable Revenue",
    description: "Know your numbers before you launch",
    image: benefitPredictable,
  },
  {
    icon: Heart,
    metric: "2.5×",
    title: "Higher LTV",
    description: "Strategic upsell sequences post-purchase",
    image: benefitLtv,
  },
  {
    icon: Coins,
    metric: "$0",
    title: "Wasted Budget",
    description: "Every dollar timed for peak conversion",
    image: benefitBudget,
  },
];

export const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
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
          WHAT BEAUTY BRANDS SEE IN 60-90 DAYS
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`reveal-card group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 card-gradient-hover ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="h-36 overflow-hidden relative z-10">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 relative z-10">
                {/* Title Left - Metric Right */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold text-foreground text-left transition-colors duration-500">
                    {benefit.title}
                  </h3>
                  <span className="font-display text-3xl font-bold text-accent text-right transition-colors duration-500">
                    {benefit.metric}
                  </span>
                </div>
                
                {/* Description */}
                <p className="font-body text-muted-foreground text-sm leading-relaxed text-left transition-colors duration-500">
                  {benefit.description}
                </p>
                
                {/* Subtle accent line on hover */}
                <div className="mt-4 h-[2px] w-12 bg-primary/30 group-hover:w-full group-hover:bg-primary-foreground transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <p className={`reveal-headline font-display text-2xl md:text-3xl font-bold text-foreground text-center ${
          isVisible ? "is-visible" : ""
        }`} style={{ transitionDelay: '800ms' }}>
          This isn't viral marketing. This is{" "}
          <span className="text-primary">revenue engineering.</span>
        </p>
      </div>
    </section>
  );
};
