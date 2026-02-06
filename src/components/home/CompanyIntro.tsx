import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations";
import boxesImage from "@/assets/boxes-closeup.jpg";

const clients = ["LG", "DS Group", "Frank Brothers", "Macmillan"];

const CompanyIntro = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <p className="text-caption text-accent mb-4">Who We Are</p>
            <h2 className="heading-section mb-6">
              Trusted Corrugated Box Manufacturer{" "}
              <span className="text-accent">Since 2000</span>
            </h2>
            <p className="text-body-large mb-6">
              MR Enterprises is a leading corrugated box manufacturer based in
              Greater Noida, serving businesses across Delhi NCR, Noida, and
              surrounding regions. With over 24 years of manufacturing
              experience, we specialize in producing high-quality corrugated
              boxes, custom packaging solutions, and industrial packaging
              products tailored to meet diverse business needs.
            </p>


            {/* Client logos */}
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap gap-6">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="text-lg font-display font-semibold text-foreground/60"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <motion.img
                src={boxesImage}
                alt="Custom corrugated boxes manufactured at MR Enterprises, Greater Noida"
                className="rounded-2xl shadow-xl w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-lg hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="font-display text-3xl font-bold">24+</div>
                <div className="text-sm text-accent-foreground/80">
                  Years Experience
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
