import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import lightRoseMesh from "@/assets/light-rose-mesh-gradient.png";

const faqs = [
  {
    question: "How fast will I see results?",
    answer: "Most beauty brands see measurable improvement in cart recovery within 14-21 days. Full 3× revenue impact typically lands at 60-90 days once complete drop cycles execute.",
  },
  {
    question: "Does this work if I'm already running ads?",
    answer: "Absolutely. We optimize your existing spend through better timing and automation. You'll get 3-5× more from every dollar by syncing ads with actual buying behavior.",
  },
  {
    question: "What if I don't have regular product drops?",
    answer: 'The system works for seasonal campaigns, promotional windows, and even evergreen catalogs. We create "drop moments" that drive urgency and predictable revenue events.',
  },
];

export const FAQSection = () => {
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
          COMMON QUESTIONS
        </p>

        {/* FAQ Accordions */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`reveal-card bg-background rounded-xl border border-border px-6 card-gradient-hover ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <AccordionTrigger className="font-display text-lg font-semibold text-foreground py-6 hover:no-underline relative z-10 transition-colors duration-500">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-6 leading-relaxed relative z-10 transition-colors duration-500">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
