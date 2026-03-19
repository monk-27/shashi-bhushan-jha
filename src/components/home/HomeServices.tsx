"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Globe, Server, LineChart } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { name: "SEO App Development", desc: "Building highly-optimized, cross-platform mobile experiences that rank and convert using Flutter.", icon: Smartphone },
  { name: "High-Performance Web", desc: "Delivering lightning-fast, accessible web platforms using Next.js & React for maximum user retention.", icon: Globe },
  { name: "Complete Infrastructure", desc: "Architecting end-to-end backend solutions, API workflows, and scalable databases tailored for your business.", icon: Server },
  { name: "Digital Growth Strategy", desc: "Providing expert technical consultation to ensure your digital products are built for scale and visibility.", icon: LineChart },
];

export default function HomeServices() {
  return (
    <section className="py-24 bg-[#E3F9F5]">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Column */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#1ea173]"></span>
              Freelance Expertise
            </p>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#164343] mb-6 leading-tight">
              Premium Solutions <br className="hidden md:block"/>
              For Your Business
            </h2>
            
            <p className="text-[#555] text-[17px] mb-10 leading-relaxed font-medium">
              As an independent software engineer, I provide end-to-end development services. From SEO-optimized mobile applications to entirely bespoke web infrastructures, I deliver code that scales your business and dominates search algorithms.
            </p>

            <Link 
              href="/projects"
              className="px-8 py-4 bg-[#1ea173] text-white text-[15px] font-bold rounded shadow-lg shadow-[#1ea173]/20 hover:bg-[#164343] transition-colors duration-300 inline-block"
            >
              View My Projects
            </Link>
          </motion.div>

          {/* Right Vertical List Column */}
          <div className="space-y-6">
            {SERVICES.map((srv, idx) => (
              <motion.div
                key={srv.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[rgba(255,255,255,0.6)] backdrop-blur-sm border border-white/50 hover:bg-white rounded-xl p-6 md:p-8 flex items-center justify-between transition-all hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full border border-dashed border-[#1ea173] flex items-center justify-center p-1 shrink-0">
                    <div className="w-full h-full rounded-full bg-[#E3F9F5] group-hover:bg-[#1ea173] transition-colors flex items-center justify-center text-[#1ea173] group-hover:text-white">
                       <srv.icon size={24} />
                    </div>
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#164343] mb-1">{srv.name}</h3>
                    <p className="text-[#555] text-[15px]">{srv.desc}</p>
                  </div>
                </div>
                {/* Arrow */}
                <div className="w-12 h-12 rounded bg-[#164343] text-white flex items-center justify-center shrink-0 lg:opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-1">
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
