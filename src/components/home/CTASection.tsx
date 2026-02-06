import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations";

const CTASection = () => {
  return (
    <section className="section-padding bg-kraft-light">
      <div className="container-narrow">
        <ScrollReveal className="text-center">
          <p className="text-caption text-accent mb-4">Get Started</p>
          <h2 className="heading-section mb-6">
            Looking for Quality Corrugated Boxes?
          </h2>
          <p className="text-body-large max-w-2xl mx-auto mb-10">
            Get in touch with MR Enterprises today for a free consultation
            and competitive quote. Whether you need custom corrugated boxes,
            industrial packaging, or bulk shipping solutions — our team
            is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Request a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
