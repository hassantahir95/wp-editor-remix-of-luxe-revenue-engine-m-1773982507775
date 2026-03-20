import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import ctaGradientOverlay from "@/assets/cta-gradient-overlay.png";
import ctaModel from "@/assets/cta-model.png";

export const FinalCTASection = () => {
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
        setParallaxY(scrollProgress * 60);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Gradient overlay as background with Parallax, flipped horizontally */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `url(${ctaGradientOverlay})`,
          transform: `scaleX(-1) translateY(${parallaxY * 0.3}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-xl">
          {/* Headline */}
          <h2 className={`reveal-headline font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 ${
            isVisible ? "is-visible" : ""
          }`}>
            Getting Engagement But Not Sales?
          </h2>

          {/* Body */}
          <p className={`reveal-text stagger-1 font-body text-white/90 max-w-md mb-8 text-sm md:text-base leading-relaxed ${
            isVisible ? "is-visible" : ""
          }`}>
            Let's analyze your drop revenue potential. No pitch. Just data.
            <br className="hidden md:block" />
            We'll show you your conversion funnel, cart abandonment losses, and expected ROI timeline.
          </p>

          {/* CTA Button */}
          <div className={`reveal-cinematic stagger-2 mb-8 ${
            isVisible ? "is-visible" : ""
          }`}>
            <button className="btn-cta-ghost inline-flex items-center gap-3 text-lg px-12 py-5">
              Book Your Revenue Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Line */}
          <p className={`reveal-text stagger-3 font-body text-sm text-white/75 ${
            isVisible ? "is-visible" : ""
          }`}>
            Best fit for beauty brands doing $30K+ monthly with product drops or seasonal campaigns
          </p>
        </div>
      </div>

      {/* Model image - positioned at section level, aligned to bottom */}
      <div className={`reveal-image hidden lg:block absolute right-0 bottom-0 z-10 ${
        isVisible ? "is-visible" : ""
      }`} style={{ transitionDelay: '400ms' }}>
        <img 
          src={ctaModel} 
          alt="Beauty model" 
          className="h-[70vh] w-auto object-contain object-bottom"
        />
      </div>
    </section>
  );
};
