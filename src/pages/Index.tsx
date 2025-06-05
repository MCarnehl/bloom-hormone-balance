
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HormoneBasics } from "@/components/HormoneBasics";
import { MedicalData } from "@/components/MedicalData";
import { ImprovementSteps } from "@/components/ImprovementSteps";
import { ProductRecommendation } from "@/components/ProductRecommendation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <HeroSection />
      <HormoneBasics />
      <MedicalData />
      <ImprovementSteps />
      <ProductRecommendation />
      <Footer />
    </div>
  );
};

export default Index;
