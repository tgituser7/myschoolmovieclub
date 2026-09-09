import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CategoryPills from "@/components/CategoryPills";
import FeaturedMovies from "@/components/FeaturedMovies";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Movies — My School Movie Club",
  description:
    "Browse the My School Movie Club catalogue by category — values, science, history, wellness and more.",
};

export default function MoviesPage() {
  return (
    <>
      <PageBanner
        kicker="The Catalogue"
        title="A movie for every lesson"
        subtitle="Every title in the collection is picked for a reason — something for every age, mood and subject."
      />
      <CategoryPills />
      <FeaturedMovies />
      <CTABanner
        title="Want this catalogue playing at your school?"
        subtitle="Pick a subscription, a single-film tour, or bring your own screen — we'll help you choose."
        secondary={{ href: "/services", label: "See How It Works" }}
      />
    </>
  );
}
