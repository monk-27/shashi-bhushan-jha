"use client";

import { motion } from "framer-motion";
import { Calendar, User, MessageCircle, Quote, Search, ChevronRight } from "lucide-react";
import Link from "next/link";

const BLOG_POSTS = [
  {
    slug: "mastering-state-management-nextjs",
    title: "Mastering State Management in Next.js 14",
    excerpt: "Explore the different patterns and strategies for handling complex, distributed state in the App Router era of Next.js 14. We cover everything from built-in React hooks to powerful external libraries like Zustand and Jotai capable of serving enterprise-grade applications.",
    date: "Oct 24, 2025",
    category: "React / Next.js",
    readTime: "6 min read",
    author: "Shashi Bhushan Jha",
    content: `
      State management in Next.js 14 has fundamentally changed with the introduction of the App Router. 
      React Server Components enable us to co-locate data fetching with rendering, dramatically reducing 
      the need for global client-side state. However, for interactive features requiring collaborative 
      state or complex side-effects, external solutions like Zustand, Jotai, or React Query remain 
      industry-standard choices.
      
      The key principle guiding modern state architecture is "server state first" — defer to the server 
      where possible via React Server Components and Server Actions, and only introduce client-side state 
      for genuinely interactive, ephemeral UI needs. This approach minimizes JavaScript bundle size and 
      maximizes performance by default.
      
      For complex SaaS applications spanning dashboard-level interactions, Zustand paired with React Query 
      provides a lightweight and highly composable state layer that scales remarkably well from prototype 
      to production. The core advantage is predictable state transitions backed by explicit actions rather 
      than implicit side-effects.
    `,
    tags: ["Next.js", "React", "State Management", "Performance"],
  },
  {
    slug: "why-flutter-dominates-mobile",
    title: "Why Flutter is Dominating Mobile Development in 2025",
    excerpt: "A deep-dive into Flutter's Impeller rendering engine and how its multi-platform compilation targets enable pixel-perfect, 60fps animations on iOS, Android, web, and desktop from a single unified codebase.",
    date: "Sep 12, 2025",
    category: "Flutter",
    readTime: "8 min read",
    author: "Shashi Bhushan Jha",
    content: `
      Flutter 3.x has fundamentally cemented its position as the leading framework for cross-platform 
      mobile development by solving the three historically painful dimensions of app development: performance, 
      consistency, and developer productivity. The new Impeller rendering engine replaces the legacy Skia 
      pipeline with a fully pre-compiled shader system that virtually eliminates jank during complex animations.
      
      The single-codebase paradigm Flutter provides is not merely theoretical — in production environments, 
      Flutter applications consistently achieve parity with native Swift and Kotlin code in benchmarks covering 
      animation throughput, memory usage, and app startup latency. The business case is clear: ship features 
      twice as fast with zero platform divergence.
      
      For freelance developers and agencies, Flutter's widget system and declarative UI model make rapid 
      prototyping and design iteration faster than any framework I've encountered. Combined with Dart's 
      sound null-safety and async/await primitives, it enables production-grade mobile applications to be 
      delivered at exceptional velocity.
    `,
    tags: ["Flutter", "Mobile", "Cross-Platform", "Dart"],
  },
  {
    slug: "scalable-nodejs-architecture",
    title: "Building Scalable Backend Architectures with Node.js",
    excerpt: "Practical architectural patterns for structuring robust Node.js backend services capable of handling thousands of concurrent users with low latency, horizontal scalability, and high reliability.",
    date: "Aug 05, 2025",
    category: "Backend",
    readTime: "7 min read",
    author: "Shashi Bhushan Jha",
    content: `
      Node.js remains one of the most versatile platforms for server-side JavaScript, particularly for 
      I/O-intensive applications like real-time APIs, streaming data pipelines, and microservices architectures. 
      Its non-blocking event loop model enables it to handle massive concurrency with a small memory footprint 
      compared to thread-per-request server models like Java EE or traditional PHP.
      
      The cornerstone of scalable Node.js architecture is the separation of concerns at every level. 
      Controllers should be thin and delegate to service layer classes that contain business logic. 
      Repository patterns abstract data access entirely from business logic, enabling testability and 
      future database migrations without touching application code.
      
      Horizontal scaling with stateless services behind a load balancer using Redis for session and cache 
      state is the gold standard for production Node.js deployments. Combined with PM2 clustering to utilize 
      all available CPU cores and structured JSON logging for observability, you have the foundation of 
      an enterprise-grade backend architecture.
    `,
    tags: ["Node.js", "Backend", "Architecture", "Scalability"],
  },
];

export default function Blogs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-[1240px]">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Blog List */}
          <div className="lg:col-span-8 space-y-12">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(22,67,67,0.06)] hover:shadow-[0_8px_30px_rgba(22,67,67,0.1)] transition-all border border-gray-100 group"
              >
                {/* Card Image Placeholder */}
                <div className="h-64 bg-gradient-to-tr from-[#164343] to-[#1ea173]/80 relative flex items-end overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  <span className="absolute top-6 left-6 px-4 py-1.5 bg-[#1ea173] text-white text-sm font-bold rounded-full">{post.category}</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-8">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-5 text-sm text-[#777] font-medium mb-5">
                    <span className="flex items-center gap-2"><User size={14} className="text-[#1ea173]" /> {post.author}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-[#1ea173]" /> {post.date}</span>
                    <span className="flex items-center gap-2"><MessageCircle size={14} className="text-[#1ea173]" /> 3 Comments</span>
                    <span className="text-[#1ea173] font-bold">{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl lg:text-[26px] font-extrabold text-[#164343] mb-4 leading-tight group-hover:text-[#1ea173] transition-colors">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-[#555] text-[16px] leading-[1.8] mb-6 line-clamp-3">{post.excerpt}</p>

                  {/* Blockquote preview */}
                  <div className="px-6 py-5 bg-[#e3f9f5] border-l-[6px] border-[#16a571] rounded-r-xl mb-6">
                    <p className="text-[16px] italic text-[#333] font-medium line-clamp-2">"{post.content.trim().split('.')[0]}."</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#E3F9F5] text-[#164343] text-sm font-bold rounded">{tag}</span>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link href={`/blogs/${post.slug}`} className="flex items-center gap-2 text-[#1ea173] font-bold hover:text-[#164343] transition-colors group/link">
                      Read Full Article
                      <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a href={`/blogs/${post.slug}`} className="text-sm text-[#777] font-medium hover:text-[#1ea173] transition-colors">Share →</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Right Sidebar */}
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
                {["React / Next.js", "Flutter & Dart", "Backend / Node.js", "TypeScript", "Career & Freelancing", "System Design"].map((cat, i) => (
                  <li key={i} className="border-b border-gray-100 last:border-0">
                    <a href="#" className="flex items-center justify-between py-4 text-[#555] font-medium text-[16px] hover:text-[#16a571] group pl-0 hover:pl-2 transition-all">
                      {cat}
                      <ChevronRight size={18} className="text-[#16a571] opacity-60 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Recent Posts</h4>
              <div className="space-y-6">
                {BLOG_POSTS.slice(0, 3).map((rp) => (
                  <Link key={rp.slug} href={`/blogs/${rp.slug}`} className="flex items-center gap-4 group pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-20 h-20 shrink-0 bg-[#e3f9f5] rounded-xl flex items-center justify-center text-[#1ea173] text-2xl font-extrabold group-hover:bg-[#1ea173] group-hover:text-white transition-colors">
                      {rp.category.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#16a571] mb-1 flex items-center gap-1"><Calendar size={12} /> {rp.date}</p>
                      <h5 className="text-[15px] font-extrabold text-[#111] leading-[1.4] group-hover:text-[#16a571] transition-colors line-clamp-2">{rp.title}</h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h4 className="text-[22px] font-bold text-[#111] mb-6 pb-4 border-b border-gray-100">Tags</h4>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "Flutter", "Node.js", "MongoDB", "TypeScript", "React", "Mobile"].map((tag) => (
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
  );
}
