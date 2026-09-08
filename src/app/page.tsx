import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryPills from "@/components/CategoryPills";
import FeaturedMovies from "@/components/FeaturedMovies";
import Philosophy from "@/components/Philosophy";
import HowItWorks from "@/components/HowItWorks";
import Schedule from "@/components/Schedule";
import Promotion from "@/components/Promotion";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryPills />
        <FeaturedMovies />
        <Philosophy />
        <HowItWorks />
        <Schedule />
        <Promotion />
        <Advantages />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
