import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-lg shadow-soft py-4"
          : "bg-gradient-to-b from-foreground/20 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className={`font-display text-2xl font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
          Luxe<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            className={`text-sm py-2.5 px-5 rounded-md font-semibold transition-all duration-300 ${
              isScrolled 
                ? 'btn-primary' 
                : 'bg-white text-primary hover:bg-white/90'
            }`}
          >
            Book Audit
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border shadow-soft">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <button className="btn-primary w-full mt-2">
              Book Audit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
