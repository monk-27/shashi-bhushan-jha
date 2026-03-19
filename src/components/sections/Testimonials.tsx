"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ajitesh Kumar",
    role: "COO at Bright DiGi Gold",
    avatar: "A",
    content: "Shashi's technical depth and commitment to quality have been outstanding throughout his tenure at Bright DiGi Gold. He consistently takes full ownership of complex modules — from payment integrations to real-time platform features — and delivers them to a very high standard. A truly reliable and growth-oriented engineer.",
    rating: 5,
  },
  {
    name: "Mrityunjay",
    role: "Software Developer at Bright DiGi Gold",
    avatar: "M",
    content: "Collaborating with Shashi has been a great experience. He brings strong problem-solving skills and a clean, maintainable coding style. His ability to pick up new technologies quickly and contribute meaningfully from day one makes him an asset to any engineering team.",
    rating: 5,
  },
  {
    name: "Ritesh Singh",
    role: "Project Owner",
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
    role: "Engineering Manager",
    avatar: "A",
    content: "Shashi Bhushan Jha is an exceptional software developer with expertise in React, JavaScript, and TypeScript. He consistently delivered high-quality code. His collaboration skills and ability to communicate technical concepts were a major asset to our team. I highly recommend Shashi Bhushan Jha for any front-end development role.",
    rating: 5,
  },
  {
    name: "Ayush Arya",
    role: "Product Collaborator",
    avatar: "A",
    content: "Working with Shashi Bhushan Jha as a team member has been an absolute pleasure. He brings a sharp understanding of project requirements and delivers results that are both functional and visually impressive. His attention to detail, collaborative approach, and dedication to getting things done right are truly inspiring. Shashi's contributions consistently elevate the team's performance, and I'm grateful to have had the chance to work alongside him!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#E3F9F5] -z-10" />

      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="text-center mb-16">
          <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-3">
            <span className="w-10 h-0.5 bg-[#1ea173]" /> Client Feedback
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#164343] mb-6">What Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            I take great pride in every project I deliver. Here's what some of my clients and colleagues have shared about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(22,67,67,0.06)] hover:shadow-[0_8px_30px_rgba(22,67,67,0.12)] transition-all group flex flex-col"
            >
              {/* Quote Content top half */}
              <div className="p-8 flex-1 relative">
                <Quote size={40} className="absolute top-6 right-6 text-gray-100 group-hover:text-[#1ea173]/10 transition-colors" />
                <div className="flex gap-1 mb-6 text-[#1ea173]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#555] italic leading-relaxed text-[16px] relative z-10">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Profile bottom half — exact ITCO split-tone Green block */}
              <div className="bg-[#1ea173] px-8 py-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-extrabold text-white text-lg shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-[16px]">{testimonial.name}</h4>
                  <p className="text-white/80 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
