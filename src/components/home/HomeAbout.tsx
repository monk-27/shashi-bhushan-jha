"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column (Intersecting Images layout) */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
            {/* Primary Large Image Shape */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-[#E3F9F5] rounded-tl-full rounded-tr-full rounded-br-full border-b-[20px] border-r-[20px] border-white shadow-lg overflow-hidden flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#164343] relative">
                {/* Decorative lines mimicking the ITCO abstract design image */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, #1ea173 0, #1ea173 2px, transparent 2px, transparent 10px)" }}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <p className="font-bold text-lg mb-2 text-[#1ea173]">Since 2022</p>
                  <h3 className="text-4xl font-extrabold tracking-tighter">Code &</h3>
                  <h3 className="text-4xl font-extrabold tracking-tighter">Design</h3>
                </div>
              </div>
            </motion.div>

            {/* Overlapping Small Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border-[10px] border-white bg-[#1ea173] shadow-xl flex items-center justify-center overflow-hidden z-10 hidden md:flex"
            >
              <div className="text-center text-white p-4">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm font-semibold tracking-wider uppercase">Deliver</p>
              </div>
            </motion.div>

            {/* Decorative dot grid */}
            <div className="absolute top-10 -right-10 w-24 h-24 z-[-1]" style={{ backgroundImage: 'radial-gradient(#1ea173 2px, transparent 2px)', backgroundSize: '12px 12px', opacity: 0.5 }}></div>
          </div>

          {/* Right Column (Text & Checklist) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#1ea173]"></span>
              About Shashi
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#164343] mb-6 leading-tight">
              We Execute Ideas <br className="hidden md:block" />
              From Start To Finish
            </h2>

            <p className="text-gray-600 text-[17px] mb-8 leading-relaxed">
              With a strong background in both front-end aesthetics and back-end architecture, I deliver comprehensive software solutions. Whether it's a high-performance Next.js web application or a cross-platform Flutter mobile app, I ensure every detail aligns with modern standards.
            </p>

            <ul className="space-y-4 mb-10 text-[17px] font-semibold text-[#164343]">
              <li className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-[#1ea173] shrink-0" fill="currentColor" color="white" />
                Scalable Backend Architecture
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-[#1ea173] shrink-0" fill="currentColor" color="white" />
                Pixel-Perfect UI/UX Implementation
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 size={24} className="text-[#1ea173] shrink-0" fill="currentColor" color="white" />
                Seamless Third-party Integrations
              </li>
            </ul>

            <Link
              href="/about"
              className="px-8 py-4 bg-[#164343] text-white text-[15px] font-bold rounded shadow-lg hover:bg-[#1ea173] transition-colors duration-300"
            >
              Read More
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
