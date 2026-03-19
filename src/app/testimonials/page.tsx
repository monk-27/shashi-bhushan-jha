import PageBanner from "@/components/layout/PageBanner";
import TestimonialsComponent from "@/components/sections/Testimonials";

export const metadata = {
  title: "Testimonials - Shashi Bhushan Jha",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner 
        title="Client Feedback" 
        paths={[{ name: "Home", href: "/" }, { name: "Testimonials" }]} 
      />
      <TestimonialsComponent />
    </>
  );
}
