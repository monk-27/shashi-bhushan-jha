"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

const CHECKLIST = [
  "3+ years of full-stack web and mobile product development",
  "Expert in React, Next.js, Flutter & TypeScript ecosystems",
  "Delivered 8+ production-grade projects across multiple industries",
  "Proficient in REST API design and Node.js / MongoDB backends",
  "Mobile-first, SEO-optimized UI development as default practice",
  "End-to-end project ownership — from architecture to deployment",
];

const TIMELINE = [
  {
    icon: Briefcase,
    year: "Nov 2022 – Present",
    title: "Software Developer",
    org: "Bright DiGi Gold Pvt. Ltd. (Web – React/Next.js)",
    desc: "Contributed to the development of a web-based digital gold and silver platform, integrating payment systems, backend APIs, and third-party services to enable seamless investment workflows. Worked closely with product and design teams to deliver a scalable, user-centric platform.",
  },
  {
    icon: Briefcase,
    year: "Nov 2022 – Present",
    title: "Software Developer",
    org: "Bright DiGi Gold Pvt. Ltd. (Mobile – Flutter)",
    desc: "Collaborated to build and scale a digital gold and silver investment platform, handling complex financial calculations, secure API integrations, and multiple third-party services. Developed and optimised a high-traffic Flutter application supporting thousands of daily users across 5+ device form factors.",
  },
  {
    icon: GraduationCap,
    year: "August 2018 – August 2022",
    title: "B.Tech – Computer Science Engineering",
    org: "Lingayas Vidyapeeth",
    desc: "Graduated with 8.6 CGPA. Developed a strong foundation in data structures, algorithms, operating systems, databases, and software engineering principles.",
  },
];

export default function AboutSection() {
  return (
    <>
      {/* About Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left – Image stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-full aspect-[4/5] max-w-[420px] mx-auto bg-[#164343] rounded-tl-[80px] rounded-br-[80px] shadow-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#1ea173 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <img
                  src="https://ui-avatars.com/api/?name=Shashi+Bhushan&background=1ea173&color=fff&size=300&font-size=0.33"
                  alt="Shashi Bhushan Jha"
                  className="relative z-10 w-52 h-52 rounded-full object-cover border-4 border-white shadow-2xl"
                />
                <div className="absolute bottom-8 right-8 bg-white text-[#164343] px-5 py-3 rounded-xl shadow-lg border border-gray-100 z-20 text-center">
                  <div className="text-3xl font-extrabold text-[#1ea173]">3+</div>
                  <div className="text-sm font-bold leading-tight">Years<br />Experience</div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-dashed border-[#1ea173]/30" />
            </motion.div>

            {/* Right – Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
                <span className="w-10 h-0.5 bg-[#1ea173]" /> About Me
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#164343] mb-6 leading-tight">
                Software Developer<br className="hidden lg:block" /> Turning Ideas Into Reality
              </h2>
              <p className="text-[#555] text-[17px] leading-[1.9] mb-8">
                I'm <strong>Shashi Bhushan Jha</strong>, a full-stack and mobile software developer
                based in New Delhi with over 3 years of professional experience crafting high-performance
                digital products. I specialise in building scalable web platforms with Next.js and robust
                mobile applications with Flutter, working end-to-end from architecture to production deployment.
              </p>

              <ul className="space-y-3 mb-10">
                {CHECKLIST.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3 text-[#444] font-medium text-[16px]"
                  >
                    <CheckCircle2 size={20} className="text-[#1ea173] mt-0.5 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects" className="px-8 py-4 bg-[#1ea173] text-white font-bold rounded shadow-lg shadow-[#1ea173]/20 hover:bg-[#164343] transition-colors text-center">
                  View Projects
                </Link>
                <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-[#164343] text-[#164343] font-bold rounded hover:bg-[#164343] hover:text-white transition-colors text-center">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="py-24 bg-[#E3F9F5]">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="text-center mb-16">
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm">My Journey</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#164343]">Experience & Education</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1ea173]/20 -translate-x-1/2" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`lg:w-[calc(50%-40px)] bg-white rounded-2xl p-8 shadow-[0_5px_20px_rgba(22,67,67,0.06)] ${i % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"}`}>
                    <span className="inline-block px-3 py-1 bg-[#E3F9F5] text-[#1ea173] text-xs font-bold rounded-full mb-4">{item.year}</span>
                    <h3 className="text-xl font-extrabold text-[#164343] mb-1">{item.title}</h3>
                    <p className="text-[#1ea173] font-bold text-sm mb-3">{item.org}</p>
                    <p className="text-[#555] leading-relaxed text-[15px]">{item.desc}</p>
                  </div>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 w-12 h-12 bg-[#1ea173] rounded-full items-center justify-center text-white shadow-lg z-10">
                    <item.icon size={22} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
