import type { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Join Us — My School Movie Club",
  description:
    "Bring My School Movie Club to your campus — tell us about your school and we'll follow up with a plan.",
};

export default function JoinUsPage() {
  return <CTA />;
}
