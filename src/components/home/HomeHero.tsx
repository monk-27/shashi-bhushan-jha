"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 bg-[#164343] overflow-hidden">
      {/* Decorative patterns imitating the architectural grids shown in ITCO */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1ea173] opacity-[0.15] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#1ea173]"></span>
              IT Solutions Provider
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.15]">
              Full Stack <br />
              Development for <br />
              your success
            </h1>
            
            <p className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed font-light">
              Hi, I&apos;m Shashi Bhushan Jha. I specialize in building performant, user-centric interfaces and powerful backend systems to elevate your digital presence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link 
                href="/projects"
                className="px-8 py-4 bg-[#1ea173] text-white text-[15px] font-bold rounded shadow-lg shadow-[#1ea173]/20 hover:bg-white hover:text-[#164343] transition-all duration-300"
              >
                View Projects
              </Link>
              
              <Link 
                href="/contact"
                className="group flex items-center gap-4 text-white font-bold hover:text-[#1ea173] transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 group-hover:border-[#1ea173] bg-white/5 flex items-center justify-center transition-colors">
                  <Play size={20} className="text-[#1ea173] ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                </div>
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Image Column (mimicking curved crop) */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5]">
              {/* ITCO Leaf/Curved Mask container representation */}
              <div 
                className="absolute inset-0 bg-[#0e2c2c] overflow-hidden border-8 border-[#1ea173]/20 shadow-2xl"
                style={{ borderRadius: "50% 50% 50% 0% / 50% 50% 50% 0%" }}
              >
                 <div className="w-full h-full bg-gradient-to-tr from-[#164343] to-[#1ea173]/40 flex flex-col items-center justify-center p-8 text-center relative pointer-events-none">
                    <div className="w-24 h-24 rounded-full bg-white mb-4 flex items-center justify-center text-[#164343] font-bold text-3xl shadow-xl">S</div>
                    <h3 className="text-white text-3xl font-bold mb-2">Shashi B. Jha</h3>
                    <p className="text-[#1ea173] font-bold tracking-wider uppercase">Software Engineer</p>
                 </div>
              </div>

              {/* Floating Badge 1 (Top Right) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 lg:-right-12 bg-white text-[#164343] p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 hidden md:flex"
              >
                <div className="w-12 h-12 bg-[#E3F9F5] rounded-full flex items-center justify-center text-[#1ea173] font-bold text-xl">
                  3+
                </div>
                <div>
                  <p className="font-bold leading-tight">Years<br/>Experience</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left) */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 lg:-left-12 bg-[#1ea173] text-white p-5 rounded-xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  20+
                </div>
                <div>
                  <p className="font-bold leading-tight">Completed<br/>Projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
