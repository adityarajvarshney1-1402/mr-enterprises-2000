import { Package, Truck, Shield, Award, Ruler, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const features = [
  {
    icon: Shield,
    title: "Quality Manufacturing",
    description: "Rigorous quality control at every stage ensures consistent, high-standard corrugated packaging.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Reliable logistics and on-time delivery across Delhi NCR, so your operations never face delays.",
  },
  {
    icon: Ruler,
    title: "Custom Sizes & Designs",
    description: "We manufacture corrugated boxes in any size or specification to suit your product requirements.",
  },
  {
    icon: IndianRupee,
    title: "Competitive Pricing",
    description: "Factory-direct pricing from our Greater Noida facility ensures you get the best value without compromises.",
  },
  {
    icon: Award,
    title: "Experienced Workforce",
    description: "24+ years of industry expertise backed by 30+ skilled professionals dedicated to packaging excellence.",
  },
  {
    icon: Package,
    title: "Reliable Service",
    description: "From enquiry to delivery, we offer transparent communication and dependable after-sales support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-caption text-accent mb-4">Why Choose Us</p>
          <h2 className="heading-section mb-4">
            Why Businesses Choose MR Enterprises
          </h2>
          <p className="text-body-large">
            We combine decades of manufacturing expertise with modern processes
            to deliver corrugated packaging that meets the highest standards.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="group p-8 bg-secondary rounded-2xl h-full hover:bg-kraft-light transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
