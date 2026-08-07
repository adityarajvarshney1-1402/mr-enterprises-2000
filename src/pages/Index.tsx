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
          "@type": "WebPage",
          name: "Corrugated Box Manufacturer in Noida & Greater Noida",
          url: `${SITE_URL}/`,
          about: { "@type": "Organization", name: "MR Enterprises", url: SITE_URL },
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
