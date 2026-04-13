import { PROJECTS } from "@/lib/projects";
import PageBanner from "@/components/layout/PageBanner";
import ProjectIcon from "@/components/ui/ProjectIcon";
import { User, Calendar, MessageCircle, ChevronRight, Search, Quote } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Comments from "@/components/projects/Comments";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} | Shashi Bhushan Jha` : "Project",
    description: project?.desc ?? "",
  };
}

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <>
      <PageBanner
        title={project.title}
        paths={[{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }, { name: project.title }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* ── Left 8-col Content ── */}
            <div className="lg:col-span-8 space-y-8">

              {/* Hero Image Placeholder */}
              <div className="w-full aspect-video bg-gradient-to-tr from-[#164343]/90 to-[#1ea173]/30 rounded-3xl overflow-hidden shadow-sm flex items-center justify-center relative">
                <div className="opacity-20 text-white">
                  <ProjectIcon name={project.iconName} size={120} />
                </div>
                <div className="absolute inset-0 flex items-end p-8">
                  <span className="px-4 py-1.5 bg-[#1ea173] text-white text-sm font-bold rounded-full">{project.category}</span>
                </div>
              </div>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-6 text-[#777] text-sm font-medium pb-6 border-b border-gray-100">
                <span className="flex items-center gap-2"><User size={16} className="text-[#1ea173]" /> By Admin</span>
                <span className="flex items-center gap-2"><Calendar size={16} className="text-[#1ea173]" /> {project.date ?? "2025"}</span>
                <span className="flex items-center gap-2"><MessageCircle size={16} className="text-[#1ea173]" /> Comment (03)</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-[38px] font-extrabold text-[#111] leading-tight tracking-tight mt-2">
                {project.title} — A Complete Overview
              </h2>

              <p className="text-[#555] text-[17px] leading-[1.9] mb-4">{project.desc}</p>

              <p className="text-[#555] text-[17px] leading-[1.9] mb-6">
                The project was designed and developed with scalability and modern web standards firmly in mind.
                Every component was crafted to provide the best possible user experience while maintaining
                exceptional performance benchmarks measured by Core Web Vitals. Rigorous testing was applied
                across all major browsers and device form factors to ensure a seamless experience.
              </p>

              {/* Blockquote */}
              <div className="my-10 px-8 lg:px-12 py-10 bg-[#e3f9f5] border-l-[12px] border-[#16a571] rounded-r-2xl flex gap-6 items-start">
                <div className="text-[#16a571] opacity-60 shrink-0">
                  <Quote size={48} className="scale-x-[-1]" fill="currentColor" />
                </div>
                <p className="text-[22px] font-medium leading-relaxed italic text-[#333] mt-1">
                  "This project redefined how we approach digital infrastructure — performance-first and built to scale."
                </p>
              </div>

              <p className="text-[#555] text-[17px] leading-[1.9] mb-6">
                The architecture leverages modern patterns including server-side rendering, static generation,
                and edge caching to minimize latency globally. API endpoints are documented, versioned, and
                secured using industry-standard authentication protocols. The result is a system that can
                handle exponential user growth without architectural changes.
              </p>

              <h3 className="text-[28px] font-extrabold text-[#111] tracking-tight mb-4">Key Technical Highlights</h3>

              <ul className="space-y-4 mb-10">
                {[
                  "Built with a mobile-first responsive framework ensuring 100% device compatibility",
                  "Integrated payment gateways, analytics, and real-time communication protocols",
                  "Optimized for Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1",
                  "End-to-end TypeScript for full type safety across client and server",
                  "CI/CD pipeline configured for zero-downtime deployments",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#555] font-medium text-[17px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#16a571] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Tags + Share */}
              <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-gray-100 gap-6 mt-16">
                <div className="flex flex-wrap items-center gap-3 text-base text-[#111]">
                  <span className="font-semibold">Tags:</span>
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[#16a571] hover:underline cursor-pointer font-medium">#{tag.replace(/\s+/g, "")}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[#111]">Share:</span>
                  {["f", "in", "tw", "ig"].map((s) => (
                    <span key={s} className="w-9 h-9 rounded-full bg-[#E3F9F5] flex items-center justify-center text-[#164343] hover:bg-[#16a571] hover:text-white cursor-pointer transition-colors text-sm font-bold">{s}</span>
                  ))}
                </div>
              </div>

              {/* Author Box */}
              <div className="bg-[#e3f9f5] border border-[#aee7dc] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 mt-12 mb-16">
                <img
                  src="https://ui-avatars.com/api/?name=Shashi+Bhushan&background=164343&color=fff&size=128"
                  alt="Shashi Bhushan Jha"
                  className="w-28 h-28 rounded-full shrink-0 shadow-xl object-cover"
                />
                <div>
                  <h4 className="text-[22px] font-extrabold text-[#111] mb-1">Shashi Bhushan Jha</h4>
                  <p className="text-[#1ea173] text-sm font-bold mb-4 uppercase tracking-wide">Software Developer</p>
                  <p className="text-[#555] font-medium text-[16px] leading-[1.8]">
                    Software Developer turning ideas into scalable products using Next.js, React, React Native,
                    TypeScript, Node.js, and Flutter. Focused on building performant, user-centric solutions
                    across web and mobile.
                  </p>
                </div>
              </div>

              {/* Comments */}
              {/* Comments */}
              <Comments projectId={project.slug} />
            </div>

            {/* ── Right 4-col Sidebar ── */}
            <aside className="lg:col-span-4 space-y-10">

              {/* Search */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Search</h4>
                <div className="relative">
                  <input type="text" placeholder="Search here..." className="w-full pl-5 pr-14 py-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-[#16a571] text-[#555] text-sm" />
                  <button className="absolute right-2 top-2 bottom-2 w-10 bg-[#0c3b31] rounded-lg flex items-center justify-center text-white hover:bg-[#16a571] transition-colors">
                    <Search size={17} />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Categories</h4>
                <ul>
                  {["Full Stack Web", "Mobile Apps", "SEO Optimization", "API Architecture", "UI/UX Design", "Tech Consulting"].map((cat, i) => (
                    <li key={i} className="border-b border-gray-100 last:border-0">
                      <a href="#" className="flex items-center justify-between py-4 text-[#555] font-medium text-[16px] hover:text-[#16a571] group pl-0 hover:pl-2 transition-all">
                        {cat}
                        <ChevronRight size={18} className="text-[#16a571] opacity-60 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Projects */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Recent Projects</h4>
                <div className="space-y-6">
                  {PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3).map((rp) => (
                    <Link key={rp.slug} href={`/projects/${rp.slug}`} className="flex items-center gap-4 group pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                      <div className="w-20 h-20 shrink-0 bg-[#e3f9f5] rounded-xl flex items-center justify-center text-[#1ea173] group-hover:bg-[#1ea173] group-hover:text-white transition-colors">
                        <ProjectIcon name={rp.iconName} size={28} />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#16a571] mb-1 flex items-center gap-1"><Calendar size={12} /> {rp.date}</p>
                        <h5 className="text-[16px] font-extrabold text-[#111] leading-[1.4] group-hover:text-[#16a571] transition-colors line-clamp-2">{rp.title}</h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Tags</h4>
                <div className="flex flex-wrap gap-3">
                  {["Next.js", "Flutter", "Node.js", "MongoDB", "TypeScript", "React Native", "REST API"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-[#f4f8f7] text-[#111] text-[14px] font-medium rounded hover:bg-[#16a571] hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
