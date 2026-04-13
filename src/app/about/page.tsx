import PageBanner from "@/components/layout/PageBanner";
import AboutSection from "@/components/sections/AboutSection";
import Skills from "@/components/sections/Skills";

export const metadata = {
  title: "About Me | Shashi Bhushan Jha",
  description: "Learn more about Shashi Bhushan Jha, a passionate Software Developer with 3+ years of experience turning ideas into scalable, modern digital solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Me"
        paths={[{ name: "Home", href: "/" }, { name: "About" }]}
      />
      <AboutSection />
      <Skills />
    </>
  );
}
