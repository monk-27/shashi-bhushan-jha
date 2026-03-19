"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

const BLOGS = [
  {
    title: "Why Flutter is dominating Mobile Development",
    excerpt: "Discover the architectural advantages of using a single codebase to deploy cross-platform mobile apps.",
    date: "24 Oct 2025",
    author: "Shashi",
    category: "Mobile Tech",
  },
  {
    title: "Mastering State Management in Next.js 14",
    excerpt: "A deep dive into server components and efficient global state distribution.",
    date: "12 Sep 2025",
    author: "Shashi",
    category: "Web Dev",
  },
  {
    title: "Designing Scalable MongoDB Schemas",
    excerpt: "Avoid common pitfalls and index your collections for high-volume enterprise production use cases.",
    date: "05 Aug 2025",
    author: "Shashi",
    category: "Database",
  },
];

export default function HomeBlogs() {
  const featured = BLOGS[0];
  const list = BLOGS.slice(1);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div>
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#1ea173]"></span>
              Blog & News
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#164343] leading-tight max-w-xl">
              Latest News & Articals <br className="hidden md:block"/> From The Blog
            </h2>
          </div>
          <Link 
              href="/blogs"
              className="px-8 py-4 bg-[#1ea173] text-white text-[15px] font-bold rounded shadow-xl shadow-[#1ea173]/20 hover:bg-[#164343] transition-colors duration-300 w-max"
            >
              View All Blog
          </Link>
        </div>

        {/* Layout Grid Big Left / Small Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Featured Large Blog */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[16/10] bg-[#164343]">
               {/* Image Placeholder */}
               <div className="absolute inset-0 bg-[#0e2c2c] bg-opacity-80 transition-transform duration-700 group-hover:scale-105"></div>
               <div className="absolute top-6 left-6 bg-[#1ea173] text-white py-2 px-4 rounded font-bold uppercase text-sm z-10">
                 {featured.category}
               </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-[#1ea173] font-semibold mb-4 text-sm">
              <span className="flex items-center gap-2"><User size={16}/> {featured.author}</span>
              <span className="flex items-center gap-2"><Calendar size={16}/> {featured.date}</span>
            </div>

            <h3 className="text-3xl font-bold text-[#164343] mb-4 group-hover:text-[#1ea173] transition-colors">
              <Link href="/blogs">{featured.title}</Link>
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed font-medium">
              {featured.excerpt}
            </p>

            <Link href="/blogs" className="font-bold flex items-center gap-2 text-[#164343] group-hover:text-[#1ea173] transition-colors uppercase tracking-widest text-[13px]">
               Read More <ArrowRight size={16}/>
            </Link>
          </motion.div>

          {/* Small List Right */}
          <div className="lg:col-span-5 space-y-8">
            {list.map((post, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6 group cursor-pointer items-center border-b border-gray-100 pb-8 last:pb-0 last:border-0"
              >
                {/* Thumbnail */}
                <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-xl bg-[#164343] overflow-hidden relative">
                   <div className="absolute inset-0 bg-[#E3F9F5] transition-transform duration-700 group-hover:scale-110"></div>
                </div>

                {/* Content */}
                <div>
                   <div className="flex items-center gap-4 text-[#1ea173] font-semibold mb-3 text-xs md:text-sm">
                    <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#164343] group-hover:text-[#1ea173] transition-colors leading-tight">
                    <Link href="/blogs">{post.title}</Link>
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
