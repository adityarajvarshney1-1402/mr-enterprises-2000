import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const sy = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const imgTx = useTransform(sx, [-1, 1], [-15, 15]);
  const imgTy = useTransform(sy, [-1, 1], [-15, 15]);
  const shape1Tx = useTransform(sx, [-1, 1], [30, -30]);
  const shape1Ty = useTransform(sy, [-1, 1], [30, -30]);
  const shape2Tx = useTransform(sx, [-1, 1], [-40, 40]);
  const shape2Ty = useTransform(sy, [-1, 1], [-20, 20]);

  // Scroll-linked subtle zoom on hero image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-16 lg:pt-24 lg:pb-24"
    >
      {/* Decorative structural shapes */}
      <motion.div
        style={{ x: shape1Tx, y: shape1Ty }}
        className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] border-[40px] border-kraft/20 rotate-12 rounded-[2rem]"
        aria-hidden
      />
      <motion.div
        style={{ x: shape2Tx, y: shape2Ty }}
        className="pointer-events-none absolute -bottom-16 right-4 w-72 h-72 border-[20px] border-kraft-dark/20 -rotate-12 rounded-3xl"
        aria-hidden
      />

      {/* Subtle grid dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(var(--charcoal)) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          style={{ y: contentY }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
        >
          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-kraft-light border border-border text-kraft-dark text-xs md:text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Trusted Corrugated Box Manufacturer · Noida & Greater Noida
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="heading-hero text-foreground"
            >
              Leading Corrugated Boxes &{" "}
              <span className="italic text-accent">Packaging Solutions</span>{" "}
              in Noida & Greater Noida
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-body-large max-w-xl"
            >
              MR Enterprises is a trusted corrugated box manufacturer serving
              businesses across Delhi NCR with high-quality custom packaging,
              industrial packaging, and shipping solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button variant="default" size="xl" asChild>
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </motion.div>

            {/* Micro trust bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-xs uppercase tracking-widest text-muted-foreground"
            >
              <span>24+ Years</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>ISO-Grade Quality</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>Delhi NCR Delivery</span>
            </motion.div>
          </div>

          {/* Right: Interactive visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <motion.div
              style={{ scale: imgScale }}
              className="relative aspect-[4/5] md:aspect-auto md:h-[560px] w-full rounded-2xl overflow-hidden shadow-2xl bg-muted"
            >
              <motion.img
                src={heroImage}
                alt="Corrugated box manufacturing facility in Noida and Greater Noida"
                style={{ x: imgTx, y: imgTy }}
                className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] object-cover"
              />
              {/* Warm gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-transparent" />

              {/* Dashed structural overlay */}
              <div className="absolute inset-0 pointer-events-none border border-white/20 m-4 rounded-xl border-dashed opacity-60" />

              {/* Floating stat cards */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-4 bg-cream/95 backdrop-blur-md rounded-xl border border-kraft/20 shadow-lg"
                >
                  <div className="text-accent font-display font-bold text-2xl">
                    24+
                  </div>
                  <div className="text-charcoal-light text-[10px] md:text-xs font-semibold uppercase tracking-wider mt-1">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}
                  className="p-4 bg-cream/95 backdrop-blur-md rounded-xl border border-kraft/20 shadow-lg"
                >
                  <div className="text-accent font-display font-bold text-2xl">
                    100%
                  </div>
                  <div className="text-charcoal-light text-[10px] md:text-xs font-semibold uppercase tracking-wider mt-1">
                    Quality Tested
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating badge - top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ duration: 0.7, delay: 0.7, type: "spring" }}
              whileHover={{ rotate: 4, scale: 1.05 }}
              className="absolute -top-6 -right-4 md:-right-6 w-28 h-28 md:w-32 md:h-32 bg-accent rounded-2xl shadow-xl flex items-center justify-center p-4 text-center z-20"
            >
              <span className="font-display font-bold text-xs md:text-sm leading-tight uppercase text-accent-foreground tracking-wide">
                Custom Sizes On Demand
              </span>
            </motion.div>


          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1.5 h-3 bg-accent rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
