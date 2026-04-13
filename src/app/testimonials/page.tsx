import PageBanner from "@/components/layout/PageBanner";
import TestimonialsComponent from "@/components/sections/Testimonials";

export const metadata = {
  title: "Client Testimonials | Shashi Bhushan Jha",
  description: "Read what clients and colleagues say about my work on full-stack web and mobile development projects.",
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
