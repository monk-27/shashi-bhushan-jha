import PageBanner from "@/components/layout/PageBanner";
import ContactComponent from "@/components/sections/Contact";

export const metadata = {
  title: "Contact Me | Shashi Bhushan Jha",
  description: "Get in touch with Shashi Bhushan Jha for full-stack development projects, consultations, or collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner 
        title="Contact Me" 
        paths={[{ name: "Home", href: "/" }, { name: "Contact" }]} 
      />
      <ContactComponent />
    </>
  );
}
