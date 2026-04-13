import PageBanner from "@/components/layout/PageBanner";
import SkillsComponent from "@/components/sections/Skills";

export const metadata = {
  title: "Skills & Technologies | Shashi Bhushan Jha",
  description: "Explore the technical expertise of Shashi Bhushan Jha in Frontend (React, Next.js), Mobile (React Native, Flutter), and Backend (Node.js) development.",
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
