"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import ProjectIcon from "@/components/ui/ProjectIcon";

export default function Projects() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="text-center mb-16">
          <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-3">
            <span className="w-10 h-0.5 bg-[#1ea173]" /> Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#164343] mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of production-grade products I've architected and delivered across web and mobile, each built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(22,67,67,0.06)] hover:shadow-[0_8px_30px_rgba(22,67,67,0.12)] transition-all group flex flex-col"
            >
              {/* Card top image area */}
              <div className="h-48 bg-[#164343] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0b2222] to-[#1ea173]/20" />
                <div className="relative z-10 text-[#1ea173]/60 group-hover:text-[#1ea173] transition-colors duration-500 group-hover:scale-110 transform transition-transform">
                  <ProjectIcon name={project.iconName} size={60} />
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#1ea173] text-white text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-extrabold text-[#164343] mb-3 group-hover:text-[#1ea173] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-5 flex-1 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#E3F9F5] text-[#164343] text-xs font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-[#1ea173] font-bold hover:text-[#164343] transition-colors text-sm"
                  >
                    View Details <ExternalLink size={15} />
                  </Link>
                  {project.externalLink !== "#" && (
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-[#1ea173] transition-colors text-sm font-medium"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
