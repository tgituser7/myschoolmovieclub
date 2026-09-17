import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SchoolRegistrationForm from "@/components/SchoolRegistrationForm";

export const metadata: Metadata = {
  title: "School Registration — My School Movie Club",
  description:
    "Register your school for My School Movie Club and get a plan tailored to your class sizes and equipment.",
};

export default function SchoolRegistrationPage() {
  return (
    <>
      <PageBanner
        kicker="School Registration"
        title="Register your school"
        subtitle="A few details about your school helps us recommend the right plan and get your first screening on the calendar."
      />
      <SchoolRegistrationForm />
    </>
  );
}
