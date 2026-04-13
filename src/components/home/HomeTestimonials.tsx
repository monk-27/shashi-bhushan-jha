"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  {
    name: "Ajitesh Kumar",
    role: "COO at Bright DiGi Gold",
    avatar: "A",
    content: "Shashi's technical depth and commitment to quality have been outstanding throughout his tenure at Bright DiGi Gold. He consistently takes full ownership of complex modules — from payment integrations to real-time platform features — and delivers them to a very high standard. A truly reliable and growth-oriented engineer.",
    rating: 5,
  },
  {
    name: "Mrityunjay Gupta",
    role: "Software Developer at Bright DiGi Gold",
    avatar: "M",
    content: "Collaborating with Shashi has been a great experience. He brings strong problem-solving skills and a clean, maintainable coding style. His ability to pick up new technologies quickly and contribute meaningfully from day one makes him an asset to any engineering team.",
    rating: 5,
  },
  {
    name: "Ritesh Singh",
    role: "Project Manager and CTO",
    avatar: "R",
    content: "From the day I hired Shashi Bhushan Jha, his dedication and technical expertise have stood out. He turned our vision into a sleek, user-friendly website that has boosted client engagement and strengthened our brand. His ability to deliver exceptional results on time is truly commendable. Shashi, your hard work and commitment are invaluable to our team!",
    rating: 5,
  },
  {
    name: "Raghav Singh",
    role: "Team Lead",
    avatar: "R",
    content: "Shashi Bhushan Jha was an incredible team member to work with. He quickly understood the unique requirements of the project and delivered a website that is both visually stunning and highly functional. His attention to detail, problem-solving skills, and dedication to the project were evident at every step. The final result exceeded expectations, and it was a pleasure having him lead the way!",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Software Developer at Bright DiGi Gold",
    avatar: "A",
    content: "Shashi Bhushan Jha is an exceptional software developer with expertise in React, JavaScript, and TypeScript. He consistently delivered high-quality code. His collaboration skills and ability to communicate technical concepts were a major asset to our team. I highly recommend Shashi Bhushan Jha for any front-end development role.",
    rating: 5,
  },
  {
    name: "Ayush Arya",
    role: "Software Developer at Bright DiGi Gold",
    avatar: "A",
    content: "Working with Shashi Bhushan Jha as a team member has been an absolute pleasure. He brings a sharp understanding of project requirements and delivers results that are both functional and visually impressive. His attention to detail, collaborative approach, and dedication to getting things done right are truly inspiring. Shashi's contributions consistently elevate the team's performance, and I'm grateful to have had the chance to work alongside him!",
    rating: 5,
  },
];

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <section className="py-24 bg-[#E3F9F5] pt-32 lg:pt-40 relative">
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

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#1ea173] text-[#164343] hover:text-white p-3 rounded-full shadow-lg transition-all backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#1ea173] text-[#164343] hover:text-white p-3 rounded-full shadow-lg transition-all backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden relative rounded-xl shadow-xl min-h-[400px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-transparent flex flex-col h-full"
              >
                {/* Top Half - Review Content */}
                <div className="bg-white p-10 md:p-12 relative flex-grow flex flex-col justify-center">
                  <Quote className="absolute top-8 right-8 text-[#E3F9F5] w-20 h-20 opacity-40" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className={i < TESTIMONIALS[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium relative z-10 italic">
                    "{TESTIMONIALS[currentIndex].content}"
                  </p>
                </div>

                {/* Bottom Half - Profile Solid Green */}
                <div className="bg-[#1ea173] p-8 shrink-0 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-[#164343] flex items-center justify-center shrink-0">
                    <span className="text-xl font-bold text-white">{TESTIMONIALS[currentIndex].avatar}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-[#E3F9F5] font-semibold">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  currentIndex === idx 
                    ? "w-10 bg-[#1ea173]" 
                    : "w-3 bg-[#1ea173]/30 hover:bg-[#1ea173]/60"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
