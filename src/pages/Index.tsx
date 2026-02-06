import Layout from "@/components/layout/Layout";
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
