import PageBanner from "@/components/layout/PageBanner";
import ProjectsComponent from "@/components/sections/Projects";

export const metadata = {
  title: "Projects Portfolio | Shashi Bhushan Jha",
  description: "View my latest projects, including Callorax, TestOfire, Medical Kundali, and complex scalable infrastructures.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageBanner 
        title="Featured Projects" 
        paths={[{ name: "Home", href: "/" }, { name: "Projects" }]} 
      />
      <ProjectsComponent />
    </>
  );
}
