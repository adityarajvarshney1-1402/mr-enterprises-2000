import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/animations";

const LocationSection = () => {
  return (
    <section className="section-padding-sm bg-secondary">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="flex items-start gap-6 p-8 md:p-12 bg-card rounded-2xl shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 hidden md:flex">
              <MapPin className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h2 className="heading-card mb-4">
                Corrugated Boxes in Noida & Greater Noida — Delivered Across Delhi NCR
              </h2>
              <p className="text-body">
                Based in Greater Noida, Gautam Buddha Nagar, MR Enterprises is
                strategically located to serve businesses across the entire
                Delhi NCR region. Whether you need corrugated boxes in Greater
                Noida, Noida, Ghaziabad, Faridabad, or Delhi, our
                manufacturing facility ensures fast production turnaround and
                prompt delivery. As a reliable packaging supplier in Noida and
                surrounding areas, we understand the logistics needs of
                businesses in this industrial corridor and are committed to
                providing quality corrugated packaging at your doorstep.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LocationSection;
