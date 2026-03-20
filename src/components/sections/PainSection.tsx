import { useEffect, useRef, useState } from "react";
import { TrendingDown, ShoppingCart, Flame } from "lucide-react";
import lightRoseMesh from "@/assets/light-rose-mesh-gradient.png";

const painPoints = [
  {
    icon: TrendingDown,
    title: "The Timing Leak",
    description: "Buzz peaks before product is ready or fades before checkout, costing $24K+ per major drop",
  },
  {
    icon: ShoppingCart,
    title: "Cart Abandonment",
    description: "70% cart abandonment = $50K-$150K annually walking away at final click",
  },
  {
    icon: Flame,
    title: "Mistimed Ad Spend",
    description: '"Always-on" campaigns waste 40-60% of budget outside peak buying windows',
  },
];

export const PainSection = () => {
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
        {/* Headline */}
        <h2 className={`reveal-headline font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 ${
          isVisible ? "is-visible" : ""
        }`}>
          High Engagement ≠ High Revenue
        </h2>
        
        <p className={`reveal-text stagger-1 font-display text-xl md:text-2xl text-primary text-center mb-8 ${
          isVisible ? "is-visible" : ""
        }`}>
          (And It's Costing You $50K-$200K Annually)
        </p>

        {/* Body Copy */}
        <p className={`reveal-text stagger-2 font-body text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-base md:text-lg leading-relaxed ${
          isVisible ? "is-visible" : ""
        }`}>
          Strong engagement, weak conversion — 70% of carts abandoned, 2-3% checkout rates.
        </p>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={`reveal-card bg-card rounded-xl p-8 border border-border card-gradient-hover ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              <div className="icon-wrapper w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10 transition-colors duration-500">
                <point.icon className="w-7 h-7 text-primary transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 relative z-10 transition-colors duration-500">
                {point.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed relative z-10 transition-colors duration-500">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
