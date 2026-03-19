"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  { 
    name: "Ajit Sharma", 
    role: "CEO, Talent Traction", 
    content: "Shashi is a brilliant developer who successfully led the development of our core features. The quality of his code and dedication to the deadline was phenomenal.",
    rating: 5
  },
  { 
    name: "Priya Singh", 
    role: "Director, Medical Kundali", 
    content: "Working with Shashi was extremely smooth. He understands requirements deeply and always has the best architectural solutions for complex technical issues.",
    rating: 5
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-24 bg-[#E3F9F5] pt-32 lg:pt-40">
      <div className="container mx-auto px-6 max-w-[1240px]">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-3">
            <span className="w-10 h-0.5 bg-[#1ea173]"></span>
            Testimonial
            <span className="w-10 h-0.5 bg-[#1ea173]"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#164343] mb-6 leading-tight max-w-2xl">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid (Mimicking Carousel structure for 2 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-transparent rounded-xl overflow-hidden group shadow-lg"
            >
              {/* Top Half - Review Content */}
              <div className="bg-white p-10 relative">
                <Quote className="absolute top-8 right-8 text-[#E3F9F5] w-16 h-16 opacity-30 group-hover:text-[#1ea173] group-hover:opacity-10 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium relative z-10 italic">
                  "{t.content}"
                </p>
              </div>

              {/* Bottom Half - Profile Solid Green */}
              <div className="bg-[#1ea173] p-8 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-[#164343] flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-white">{t.name[0]}</span>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{t.name}</h4>
                  <p className="text-[#E3F9F5] font-semibold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Dots Mimic */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-8 h-2 rounded-full bg-[#1ea173]"></button>
          <button className="w-3 h-2 rounded-full bg-black/10 hover:bg-[#1ea173] transition-colors"></button>
          <button className="w-3 h-2 rounded-full bg-black/10 hover:bg-[#1ea173] transition-colors"></button>
        </div>

      </div>
    </section>
  );
}
