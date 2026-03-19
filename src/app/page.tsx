import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import HomeNewsletter from "@/components/home/HomeNewsletter";
import HomeProjects from "@/components/home/HomeProjects";
import HomeProcess from "@/components/home/HomeProcess";
import HomeStats from "@/components/home/HomeStats";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeBlogs from "@/components/home/HomeBlogs";

export default function Home() {
  return (
    <>
      {/* 1:1 ITCO Structural Clone Elements */}
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeNewsletter />
      <HomeProjects />
      <HomeProcess />
      <HomeStats />
      <HomeTestimonials />
      <HomeBlogs />
    </>
  );
}
