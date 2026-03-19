import PageBanner from "@/components/layout/PageBanner";
import ContactComponent from "@/components/sections/Contact";

export const metadata = {
  title: "Contact - Shashi Bhushan Jha",
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
