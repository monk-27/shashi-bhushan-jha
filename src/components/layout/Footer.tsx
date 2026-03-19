"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e3e3e] text-gray-300 pt-20 pb-8 rounded-tr-[50px] rounded-tl-[50px] mt-10">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div>
            <Link href="/" className="text-3xl font-extrabold tracking-tighter text-white flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1ea173] to-[#164343] flex items-center justify-center text-white text-sm">S</div>
              Shashi<span className="text-[#1ea173]">.</span>
            </Link>
            <p className="mb-6 leading-relaxed">
              We provide the highest quality IT services and full-stack development. Building your ideas into scalable successes.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#164343] flex items-center justify-center text-white hover:bg-[#1ea173] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#164343] flex items-center justify-center text-white hover:bg-[#1ea173] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#164343] flex items-center justify-center text-white hover:bg-[#1ea173] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#164343] flex items-center justify-center text-white hover:bg-[#1ea173] transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-xl font-bold text-white border-b-2 border-[#1ea173] pb-2 w-max mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/skills" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> App Development</Link></li>
              <li><Link href="/skills" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> Web Development</Link></li>
              <li><Link href="/skills" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> UI/UX Design</Link></li>
              <li><Link href="/skills" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> IT Consulting</Link></li>
              <li><Link href="/skills" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-white border-b-2 border-[#1ea173] pb-2 w-max mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li><Link href="/skills" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> About Us</Link></li>
              <li><Link href="/skills" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> Discover Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> Our Projects</Link></li>
              <li><Link href="/contact" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> Contact Us</Link></li>
              <li><Link href="/" className="hover:text-[#1ea173] transition-colors flex items-center gap-2"><span className="text-[#1ea173]">•</span> Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Recent Posts */}
          <div>
            <h3 className="text-xl font-bold text-white border-b-2 border-[#1ea173] pb-2 w-max mb-6">Recent Post</h3>
            <div className="space-y-6">
              
              <div className="flex gap-4 group">
                <div className="w-20 h-20 rounded bg-gray-600 overflow-hidden relative shrink-0">
                  <div className="w-full h-full bg-[#164343] flex items-center justify-center text-xs text-white">Post</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-[#1ea173] mb-1">
                    <Calendar size={12} />
                    <span>24 Oct, 2025</span>
                  </div>
                  <Link href="/blogs" className="text-white font-bold hover:text-[#1ea173] transition-colors line-clamp-2">
                    Why Flutter is dominating Mobile Development
                  </Link>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-20 h-20 rounded bg-gray-600 overflow-hidden relative shrink-0">
                  <div className="w-full h-full bg-[#164343] flex items-center justify-center text-xs text-white">Post</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-[#1ea173] mb-1">
                    <Calendar size={12} />
                    <span>12 Sep, 2025</span>
                  </div>
                  <Link href="/blogs" className="text-white font-bold hover:text-[#1ea173] transition-colors line-clamp-2">
                    Mastering State Management in Next.js 14
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-[#164343] pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Shashi Bhushan Jha. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-[#1ea173] transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-[#1ea173] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
