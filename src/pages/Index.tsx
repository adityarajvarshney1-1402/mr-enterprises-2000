import Layout from "@/components/layout/Layout";
import Seo, { SITE_URL } from "@/components/Seo";
import { PageTransition } from "@/components/animations";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CompanyIntro from "@/components/home/CompanyIntro";
import ProductsServices from "@/components/home/ProductsServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationSection from "@/components/home/LocationSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Corrugated Box Manufacturer in Noida & Greater Noida | MR Enterprises"
        description="MR Enterprises manufactures corrugated boxes, custom packaging and shipping boxes in Noida & Greater Noida. 24+ years serving businesses across Delhi NCR."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "MR Enterprises",
          url: SITE_URL,
          telephone: "+91-9810504174",
          email: "mrenterprises2000@gmail.com",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot No - 112, Ground Floor, Udyog Kendra II",
            addressLocality: "Greater Noida",
            addressRegion: "Uttar Pradesh",
            postalCode: "201310",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: "28.4744", longitude: "77.5040" },
          openingHours: "Mo-Sa 09:00-20:00",
          areaServed: ["Greater Noida", "Noida", "Delhi NCR", "Ghaziabad", "Faridabad"],
        }}
      />
      <PageTransition>

        <HeroSection />
        <StatsSection />
        <CompanyIntro />
        <WhyChooseUs />
        <ProductsServices />
        <LocationSection />
        <CTASection />
      </PageTransition>
    </Layout>
  );
};

export default Index;
