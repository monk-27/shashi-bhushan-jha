import PageBanner from "@/components/layout/PageBanner";
import ProjectsComponent from "@/components/sections/Projects";

export const metadata = {
  title: "Projects - Shashi Bhushan Jha",
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
