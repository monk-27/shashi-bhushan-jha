"use client";

import { motion } from "framer-motion";
import { Users, FileCheck2, HeartHandshake } from "lucide-react";

const STATS = [
  { value: "3+", label: "Years Experience", icon: Users },
  { value: "20+", label: "Completed Projects", icon: FileCheck2 },
  { value: "10+", label: "Satisfied Clients", icon: HeartHandshake },
];

export default function HomeStats() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Negative top margin makes it overlap if placed correctly, or just flush if no margin. ITCO shows it as a solid block. */}
        <div className="bg-[#164343] rounded-2xl p-10 lg:p-14 shadow-2xl relative translate-y-12 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-6 justify-center pt-8 md:pt-0 first:pt-0"
              >
                <div className="text-[#1ea173]">
                  <stat.icon size={48} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-1">{stat.value}</h3>
                  <p className="text-white font-semibold">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
