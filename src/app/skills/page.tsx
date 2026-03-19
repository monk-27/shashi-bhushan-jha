import PageBanner from "@/components/layout/PageBanner";
import SkillsComponent from "@/components/sections/Skills";

export const metadata = {
  title: "Skills - Shashi Bhushan Jha",
};

export default function SkillsPage() {
  return (
    <>
      <PageBanner 
        title="My Skills" 
        paths={[{ name: "Home", href: "/" }, { name: "Skills" }]} 
      />
      <SkillsComponent />
    </>
  );
}
