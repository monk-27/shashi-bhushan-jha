"use client";

import { motion } from "framer-motion";

export default function HomeNewsletter() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row w-full h-[500px]">
        {/* Left Side: Image Area */}
        <div className="w-full lg:w-1/2 h-full bg-gray-200 relative overflow-hidden">
          {/* Simulated Image Content */}
          <div className="absolute inset-0 bg-[#E3F9F5]"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #1ea173 25%, transparent 25%, transparent 75%, #1ea173 75%, #1ea173), linear-gradient(45deg, #1ea173 25%, transparent 25%, transparent 75%, #1ea173 75%, #1ea173)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-20 h-20 bg-[#1ea173] rounded-full flex items-center justify-center text-white shadow-xl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
            </div>
          </div>
        </div>

        {/* Right Side: Subscription Form Container */}
        <div className="w-full lg:w-1/2 h-full bg-[#164343] flex flex-col justify-center px-10 lg:px-20 text-white relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-5 rounded-full pointer-events-none"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight relative text-white"
          >
            Subscribe to Our <br className="hidden md:block"/>
            Newsletter
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 md:text-lg mb-10 max-w-lg leading-relaxed font-medium"
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="flex-1 bg-white px-6 py-4 rounded text-black font-semibold focus:outline-none focus:ring-4 focus:ring-[#1ea173]/30"
              required
            />
            <button 
              type="submit" 
              className="bg-[#1ea173] text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-[#164343] transition-colors duration-300 shadow-md"
            >
              Subscribe Now
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
