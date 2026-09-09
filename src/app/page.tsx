import Hero from "@/components/Hero";
import CategoryPills from "@/components/CategoryPills";
import FeaturedMovies from "@/components/FeaturedMovies";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryPills />
      <FeaturedMovies />
      <CTABanner
        title="Ready to bring meaningful movies to your school?"
        subtitle="From a single screening to a full-term subscription, we'll help you find the right fit — see how the club works, or register your school today."
      />
    </>
  );
}
