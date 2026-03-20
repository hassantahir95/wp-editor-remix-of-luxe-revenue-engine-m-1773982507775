import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import meshGradient from "@/assets/rose-mesh-gradient.png";
import heroModel from "@/assets/hero-model.png";

import beauty1 from "@/assets/carousel/beauty-1.jpg";
import beauty2 from "@/assets/carousel/beauty-2.jpg";
import beauty3 from "@/assets/carousel/beauty-3.jpg";
import beauty4 from "@/assets/carousel/beauty-4.jpg";
import beauty5 from "@/assets/carousel/beauty-5.jpg";

const carouselImages = [beauty1, beauty2, beauty3, beauty4, beauty5];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex flex-col">
      {/* Image Carousel Background */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            animation: index === currentIndex ? "kenburns 12s ease-out forwards" : "none",
          }}
        >
          <img
            src={image}
            alt={`Beauty brand showcase ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Mesh Gradient Overlay at 80% Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 z-[1]"
        style={{
          backgroundImage: `url(${meshGradient})`,
        }}
      />

      {/* Black Overlay at 20% Opacity */}
      <div className="absolute inset-0 bg-black/20 z-[2]" />

      {/* Animated Side Elements - Left */}
      <div className="absolute left-4 md:left-8 top-1/4 z-[3] hidden md:block">
        <div className="floating-element-1 w-3 h-3 rounded-full bg-luxe-blush/40 blur-[1px]" />
        <div className="floating-element-2 w-2 h-2 rounded-full bg-luxe-taupe/30 mt-12 ml-4 blur-[1px]" />
        <div className="floating-element-3 w-4 h-4 rounded-full border border-luxe-blush/30 mt-8" />
      </div>
      <div className="absolute left-8 md:left-16 bottom-1/3 z-[3] hidden md:block">
        <div className="floating-element-2 w-2 h-2 rounded-full bg-luxe-rose/30 blur-[1px]" />
        <div className="floating-element-1 w-5 h-5 rounded-full border border-luxe-taupe/20 mt-6 -ml-2" />
      </div>

      {/* Animated Side Elements - Right */}
      <div className="absolute right-4 md:right-8 top-1/3 z-[3] hidden md:block">
        <div className="floating-element-3 w-4 h-4 rounded-full bg-luxe-blush/30 blur-[1px]" />
        <div className="floating-element-1 w-2 h-2 rounded-full bg-luxe-taupe/40 mt-10 -ml-2 blur-[1px]" />
        <div className="floating-element-2 w-3 h-3 rounded-full border border-luxe-rose/30 mt-6 ml-3" />
      </div>
      <div className="absolute right-10 md:right-20 bottom-1/4 z-[3] hidden md:block">
        <div className="floating-element-1 w-3 h-3 rounded-full border border-luxe-blush/25" />
        <div className="floating-element-3 w-2 h-2 rounded-full bg-luxe-rose/25 mt-8 ml-4 blur-[1px]" />
      </div>

      {/* Content - Top Section - Compact for above the fold */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-[90px] md:pt-[100px] text-center">
        {/* Niche Callout - Badge Style - More Compact */}
        <div className="inline-flex items-center justify-center mb-2 md:mb-3 animate-fade-in-up">
          <span className="bg-luxe-taupe/20 text-luxe-taupe border border-luxe-taupe/30 px-3 py-1 rounded-full font-body text-[9px] md:text-[10px] font-semibold uppercase tracking-[1.5px]">
            For Beauty Brand Founders
          </span>
        </div>

        {/* Hero Headline */}
        <h1
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.6] mb-3 md:mb-4 animate-fade-in-up max-w-3xl mx-auto text-balance"
          style={{ animationDelay: "0.15s" }}
        >
          We help beauty brands{" "}
          <span className="highlight-box">3×</span> their revenue in{" "}
          <span className="highlight-box">60-90 Days</span>.
        </h1>

        {/* Subheadline - Concise */}
        <p className="font-body text-xs md:text-sm text-primary-foreground/85 max-w-xl mx-auto leading-relaxed animate-fade-in-up"
           style={{ animationDelay: "0.3s" }}>
          <strong>The Drop Surge System™</strong> syncs your product launches with precision automation, turning drops into predictable 70% extra revenue.
        </p>
      </div>

      {/* Model Image - Bigger and positioned lower */}
      <div className="relative z-10 flex-1 flex items-end justify-center -mb-16 md:-mb-24">
        <img
          src={heroModel}
          alt="Beauty model applying skincare"
          className="max-h-[60vh] md:max-h-[68vh] w-auto object-contain animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      {/* CTA Button - Centered, positioned to be visible */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center z-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <button className="btn-primary inline-flex items-center gap-2 md:gap-3 text-sm md:text-base px-6 py-3 md:px-8 md:py-4 whitespace-nowrap hero-cta-glow">
          Book Your Revenue Audit
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 animate-bounce-subtle" />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-15px) translateX(5px); opacity: 1; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-10px) translateX(-5px); opacity: 0.8; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.7; }
        }
        
        .floating-element-1 { animation: float-1 4s ease-in-out infinite; }
        .floating-element-2 { animation: float-2 5s ease-in-out infinite 0.5s; }
        .floating-element-3 { animation: float-3 6s ease-in-out infinite 1s; }
        
        @keyframes hero-glow {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(180, 100, 120, 0.4),
              0 0 40px rgba(180, 100, 120, 0.3),
              0 0 60px rgba(180, 100, 120, 0.2),
              0 4px 20px rgba(0, 0, 0, 0.3);
            transform: translateY(0);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(180, 100, 120, 0.6),
              0 0 60px rgba(180, 100, 120, 0.4),
              0 0 100px rgba(180, 100, 120, 0.3),
              0 8px 30px rgba(0, 0, 0, 0.35);
            transform: translateY(-2px);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        
        .hero-cta-glow {
          animation: hero-glow 3s ease-in-out infinite;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
