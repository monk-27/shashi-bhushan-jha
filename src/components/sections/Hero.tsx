"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-primary)] overflow-hidden pt-32 pb-24 lg:pt-0 lg:pb-0">
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      
      {/* Soft gradient blur */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-[var(--color-accent)] font-bold tracking-wider uppercase mb-4 text-sm md:text-base flex items-center justify-center lg:justify-start gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-8 h-0.5 bg-[var(--color-accent)]"></span>
              Full Stack Developer
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building scalable <br className="hidden md:block"/>
              solutions for <br className="hidden md:block"/>
              your success
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hi, I&apos;m Shashi Bhushan Jha. I turn ideas into performant, user-centric interfaces and powerful backend systems using Next.js, React, Node.js, and Flutter.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link 
                href="/contact"
                className="px-8 py-4 bg-[var(--color-accent)] text-white font-bold rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Let&apos;s Connect
              </Link>
              
              <Link 
                href="/projects"
                className="group flex items-center gap-4 text-white font-bold hover:text-[var(--color-accent)] transition-colors"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 group-hover:border-[var(--color-accent)] flex items-center justify-center transition-colors">
                  <Play size={20} className="text-[var(--color-accent)] ml-1" />
                </div>
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element mimicking ITCO mask shape */}
          <motion.div 
            className="flex-1 w-full flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[550px]">
              {/* Outer decorative shape (ITCO uses distinctive rounded rectangles) */}
              <div className="absolute inset-0 bg-white/5 rounded-[40px] md:rounded-[80px] rounded-tl-none md:rounded-tl-none -rotate-3 overflow-hidden border border-white/10 flex items-center justify-center backdrop-blur-md">
                
                {/* Simulated image/avatar container */}
                <div className="w-full h-full bg-[#123636] flex flex-col items-center justify-center text-center p-8">
                  <div className="w-32 h-32 rounded-full border-4 border-[var(--color-accent)] bg-[var(--color-primary)] flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-2xl">
                    SBJ
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Shashi Bhushan Jha</h3>
                  <p className="text-[var(--color-accent)] font-semibold mb-6">Software Developer</p>
                  
                  <div className="flex gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <p className="text-white font-bold text-xl">5+</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years Exp</p>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <p className="text-white font-bold text-xl">20+</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Projects</p>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Simple decorative dot grid block */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24  z-[-1]" style={{ backgroundImage: 'radial-gradient(#16A571 2px, transparent 2px)', backgroundSize: '12px 12px' }}></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
