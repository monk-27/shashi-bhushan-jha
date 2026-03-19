"use client";

import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Database, Globe, Box, Terminal, Layout } from "lucide-react";

// Sleek icon-based skill list matching CV capabilities
const SKILLS = [
  { name: "Flutter Application Development", desc: "Building high-performance, natively compiled applications for mobile from a single codebase.", icon: Smartphone },
  { name: "React & Next.js Ecosystem", desc: "Engineering scalable, SEO-friendly web platforms leveraging SSR, SSG, and React Server Components.", icon: Globe },
  { name: "Backend Architecture", desc: "Designing robust server-side logic and microservices using Node.js and Express.", icon: Server },
  { name: "Database Engineering", desc: "Structuring high-volume, highly-available NoSQL (MongoDB) and SQL data pipelines.", icon: Database },
  { name: "TypeScript", desc: "Enforcing strict type safety and architectural integrity across the full JavaScript stack.", icon: Code2 },
  { name: "React Native", desc: "Crafting cross-platform mobile apps with native UI components and JavaScript.", icon: Layout },
  { name: "RESTful APIs", desc: "Building and consuming highly scalable, secure, and documented API endpoints.", icon: Terminal },
  { name: "System Design", desc: "Architecting cloud-native solutions that scale seamlessly with business growth.", icon: Box },
];

export default function Skills() {
  return (
    <section className="py-20 bg-white min-h-[70vh]">
      <div className="container mx-auto px-6 max-w-[1240px]">
        
        <div className="text-center mb-16">
          <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm">
            Technical Arsenal
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#164343] mb-6">
            Comprehensive Skill Set
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            I leverage modern technologies to build resilient, scalable, and high-performance applications. Here are the core tools and frameworks I use to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-xl rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-[#E3F9F5] text-[#1ea173] flex items-center justify-center mb-6 group-hover:bg-[#1ea173] group-hover:text-white transition-colors">
                <skill.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#164343] mb-3">{skill.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
