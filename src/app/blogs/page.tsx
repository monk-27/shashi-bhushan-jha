import PageBanner from "@/components/layout/PageBanner";
import BlogsComponent from "@/components/sections/Blogs";

export const metadata = {
  title: "Blogs - Shashi Bhushan Jha",
};

export default function BlogsPage() {
  return (
    <>
      <PageBanner 
        title="Latest Articles" 
        paths={[{ name: "Home", href: "/" }, { name: "Blogs" }]} 
      />
      <BlogsComponent />
    </>
  );
}
