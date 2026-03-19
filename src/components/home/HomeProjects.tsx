"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { PROJECTS } from "@/lib/projects";
import ProjectIcon from "@/components/ui/ProjectIcon";

export default function HomeProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: -460, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: 460, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#1ea173]" />
              Latest Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#164343] leading-tight max-w-2xl">
              Delivering Global Scale <br className="hidden md:block" /> Infrastructure
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-[#E3F9F5] text-[#1ea173] flex items-center justify-center hover:bg-[#1ea173] hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-[#E3F9F5] text-[#1ea173] flex items-center justify-center hover:bg-[#1ea173] hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-8 pb-4 scroll-smooth w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="min-w-[85vw] md:min-w-[440px] lg:min-w-[480px] rounded-3xl relative group overflow-hidden bg-[#164343] shrink-0 cursor-pointer shadow-lg"
              style={{ height: "380px" }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b2222] via-[#164343] to-[#1ea173]/30" />

              {/* Centre icon — fades in on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 text-white">
                <ProjectIcon name={proj.iconName} size={120} />
              </div>

              {/* ── Bottom overlay — always shows category + title, expands on hover ── */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0b2222] via-[#0b2222]/90 to-transparent p-7 transition-all duration-500">
                {/* Category — always visible */}
                <p className="text-[#1ea173] font-bold text-xs tracking-widest uppercase mb-3">
                  {proj.category}
                </p>

                {/* Title — always visible */}
                <Link
                  href={`/projects/${proj.slug}`}
                  className="text-2xl font-extrabold text-white hover:text-[#1ea173] transition-colors block leading-tight mb-0 group-hover:mb-3"
                >
                  {proj.title}
                </Link>

                {/* Desc — only on hover */}
                <p className="text-gray-300 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3">
                  {proj.desc}
                </p>

                {/* CTA arrow — only on hover */}
                <div className="flex items-center gap-2 text-[#1ea173] font-bold text-sm mt-0 max-h-0 overflow-hidden opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-500 delay-150">
                  View Details →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
