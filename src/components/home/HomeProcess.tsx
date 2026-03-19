"use client";

import { motion } from "framer-motion";
import { Box, Code2, Database, Smartphone, Globe, Cloud, Layout, Terminal } from "lucide-react";

// Replaced percentage-based bars with a sleek grid of technologies
const TECH_SKILLS = [
  { name: "Flutter", icon: Smartphone },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: Code2 },
  { name: "React Native", icon: Layout },
  { name: "REST API", icon: Cloud },
  { name: "MongoDB", icon: Database },
  { name: "Node.js", icon: Terminal },
  { name: "Architecture", icon: Box },
];

export default function HomeProcess() {
  return (
    <section className="py-24 bg-[#E3F9F5]">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text & New Icon Grid Column */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#1ea173]"></span>
              Core Proficiencies
            </p>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#164343] mb-6 leading-tight">
              Tools that build <br className="hidden md:block"/>
              Scalable Success
            </h2>
            
            <p className="text-[#555] text-[17px] mb-12 leading-relaxed font-medium">
              Solve complex business problems and automate workflows with precision-based solutions natively engineered using industry-leading technologies.
            </p>

            {/* Beautiful Icon Grid instead of Progress Bars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TECH_SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-[#E3F9F5] rounded-xl p-4 flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E3F9F5] text-[#1ea173] flex items-center justify-center group-hover:bg-[#1ea173] group-hover:text-white transition-colors">
                    <skill.icon size={22} />
                  </div>
                  <span className="text-[#164343] font-bold text-sm leading-tight">{skill.name}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[500px] aspect-[4/5] bg-white rounded-tl-[100px] rounded-br-[100px] shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#164343] opacity-[0.85] z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
              {/* Decorative ITCO Pattern Overlay Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0" style={{ backgroundImage: 'radial-gradient(#1ea173 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
                 <div className="w-20 h-20 rounded-full border-4 border-[#1ea173] flex items-center justify-center mb-6 bg-white shrink-0">
                    <Code2 size={32} className="text-[#164343]" />
                 </div>
                 <h3 className="text-3xl font-extrabold text-white mb-2">Modern Stack</h3>
                 <p className="text-[#E3F9F5] font-medium max-w-xs">Engineered for speed, SEO performance, and reliability.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
