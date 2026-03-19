"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="text-center mb-16">
            <p className="text-[#1ea173] font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-3">
              <span className="w-10 h-0.5 bg-[#1ea173]" /> Get In Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#164343] mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
              Have a project in mind? Want to discuss a technical challenge? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#164343] p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-extrabold mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Looking to start a new project or just want to say hi? My inbox is always open. I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: "Location", value: "New Delhi, India", href: undefined },
                    { icon: Phone, label: "Phone", value: "+91 9731737300", href: "tel:+919731737300" },
                    { icon: Mail, label: "Email", value: "exquisiteshashi@gmail.com", href: "mailto:exquisiteshashi@gmail.com" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1ea173]/20 flex items-center justify-center text-[#1ea173] shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="text-white text-[17px] font-semibold hover:text-[#1ea173] transition-colors break-all">{value}</a>
                        ) : (
                          <p className="text-white text-[17px] font-semibold">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <a href="https://github.com/monk-27" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1ea173] flex items-center justify-center text-white transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/shashi-bhushan-jha" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1ea173] flex items-center justify-center text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-[#164343]">Your Name</label>
                    <input type="text" id="name" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#164343] focus:outline-none focus:border-[#1ea173] focus:bg-white transition-all" placeholder="Shashi Bhushan" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-[#164343]">Your Email</label>
                    <input type="email" id="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#164343] focus:outline-none focus:border-[#1ea173] focus:bg-white transition-all" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-[#164343]">Subject</label>
                  <input type="text" id="subject" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#164343] focus:outline-none focus:border-[#1ea173] focus:bg-white transition-all" placeholder="Project Inquiry" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-[#164343]">Message</label>
                  <textarea id="message" rows={6} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#164343] focus:outline-none focus:border-[#1ea173] focus:bg-white transition-all resize-none" placeholder="Tell me about your project..." />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1ea173] text-white font-bold rounded-xl hover:bg-[#164343] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-[#1ea173]/20 text-[16px]"
                >
                  {isSubmitting ? "Sending..." : submitted ? "✓ Message Sent!" : (
                    <><Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="w-full h-80 bg-[#E3F9F5] flex items-center justify-center text-[#164343] text-center border-t border-gray-100">
        <div>
          <MapPin size={48} className="text-[#1ea173] mx-auto mb-4" />
          <p className="text-[#164343] font-bold text-xl">New Delhi, India</p>
          <p className="text-gray-500 font-medium mt-1">Available for remote & on-site collaboration worldwide</p>
        </div>
      </div>
    </>
  );
}
