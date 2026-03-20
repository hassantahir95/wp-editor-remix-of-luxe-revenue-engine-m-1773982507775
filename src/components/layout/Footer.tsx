import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="font-display text-3xl font-bold text-background">
              Luxe<span className="text-primary">.</span>
            </a>
            <p className="font-body text-background/70 mt-4 max-w-md leading-relaxed">
              We help beauty brands 3× their revenue with The Drop Surge System™, a launch-timed ad and automation engine built for DTC beauty economics.
            </p>
            <button className="btn-primary mt-6 inline-flex items-center gap-2">
              Book Your Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#solution" className="font-body text-background/70 hover:text-primary transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#results" className="font-body text-background/70 hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="font-body text-background/70 hover:text-primary transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#faq" className="font-body text-background/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-background/70">
                hello@luxeaesthetics.agency
              </li>
              <li className="font-body text-background/70">
                Los Angeles, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-background/50">
            © 2024 Luxe Aesthetics Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-background/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-background/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
