import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import HomeNewsletter from "@/components/home/HomeNewsletter";
import HomeProjects from "@/components/home/HomeProjects";
import HomeProcess from "@/components/home/HomeProcess";
import HomeStats from "@/components/home/HomeStats";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeBlogs from "@/components/home/HomeBlogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Shashi Bhushan Jha - Full Stack Developer",
  description: "Welcome to the portfolio of Shashi Bhushan Jha. Explore dynamic IT infrastructures, scalable full-stack web and mobile apps built with Next.js, React Native, and Node.js.",
};

export default function Home() {
  return (
    <>
      {/* 1:1 ITCO Structural Clone Elements */}
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeProcess />
      <HomeStats />
      <HomeTestimonials />
      <HomeBlogs />
    </>
  );
}
