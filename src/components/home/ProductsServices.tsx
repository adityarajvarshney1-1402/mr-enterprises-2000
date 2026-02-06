import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { motion } from "framer-motion";

const products = [
  {
    name: "Corrugated Boxes",
    description: "Standard and heavy-duty corrugated cardboard boxes for safe shipping and storage across all industries.",
    slug: "corrugated-cardboard-boxes",
  },
  {
    name: "Custom Packaging",
    description: "Tailored corrugated packaging in custom sizes, prints, and specifications to match your exact requirements.",
    slug: "printed-corrugated-boxes",
  },
  {
    name: "Industrial Packaging",
    description: "Durable, high-strength packaging solutions designed for heavy industrial and bulk goods.",
    slug: "packaging-corrugated-boxes",
  },
  {
    name: "Shipping Boxes",
    description: "Reliable and cost-effective shipping boxes built to protect products during transit.",
    slug: "packing-boxes",
  },
  {
    name: "Fruits Corrugated Boxes",
    description: "Specialized ventilated boxes designed for safe transportation of fruits and agricultural produce.",
    slug: "fruits-corrugated-boxes",
  },
  {
    name: "BOPP Adhesive Tapes",
    description: "Premium quality BOPP tapes for secure sealing, available in various widths and specifications.",
    slug: null,
  },
];

const ProductsServices = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <ScrollReveal className="max-w-2xl">
            <p className="text-caption text-accent mb-4">Products & Services</p>
            <h2 className="heading-section text-primary-foreground mb-4">
              Comprehensive Packaging Solutions
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              From corrugated boxes to custom packaging, we offer a complete range
              of industrial packaging solutions for businesses in Greater Noida,
              Noida, and Delhi NCR.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button variant="accent" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.name}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                {product.slug ? (
                  <Link
                    to={`/products/${product.slug}`}
                    className="group flex items-start gap-4 p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-primary-foreground group-hover:text-accent transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-primary-foreground/60">
                        {product.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </Link>
                ) : (
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary-foreground/5 h-full">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-primary-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-primary-foreground/60">
                        {product.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProductsServices;
