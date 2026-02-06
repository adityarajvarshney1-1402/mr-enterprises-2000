import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: string; suffix?: string; prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="stat-number text-foreground">
      {prefix}{displayValue}{suffix}
    </span>
  );
};

const stats = [
  { value: "24", suffix: "+", label: "Years of Excellence" },
  { value: "30", suffix: "+", label: "Skilled Team Members" },
  { value: "10-12", prefix: "₹", suffix: " Cr", label: "Annual Turnover" },
  { value: "100", suffix: "%", label: "Quality Tested" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-caption text-accent mb-4">Our Impact</p>
          <h2 className="heading-section mb-4">
            Building Trust Through Quality
          </h2>
          <p className="text-body-large">
            With over two decades of dedication in Noida and Greater Noida, we've established ourselves
            as a trusted packaging partner for businesses across Delhi NCR.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className={`p-8 rounded-2xl text-center ${
                  index === 0
                    ? "bg-primary text-primary-foreground col-span-2 lg:col-span-1"
                    : "bg-secondary"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={index === 0 ? "text-primary-foreground" : ""}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p
                  className={`text-sm mt-2 ${
                    index === 0
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StatsSection;
