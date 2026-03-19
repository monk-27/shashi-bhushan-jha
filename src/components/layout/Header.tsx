"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar - Dark Teal #164343 */}
      <div 
        className={`w-full bg-[#164343] text-white transition-all duration-300 hidden lg:block overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-12 opacity-100"
        }`}
      >
        <div className="container mx-auto px-6 max-w-[1240px] h-full flex items-center justify-between text-[13px] font-medium">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#1ea173]" />
              <span>New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#1ea173]" />
              <a href="mailto:exquisiteshashi@gmail.com" className="hover:text-[#1ea173] transition-colors">exquisiteshashi@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#1ea173]" />
              <span>+91 9731737300</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#1ea173] transition-colors"><Facebook size={14} /></a>
            <a href="#" className="hover:text-[#1ea173] transition-colors"><Twitter size={14} /></a>
            <a href="#" className="hover:text-[#1ea173] transition-colors"><Linkedin size={14} /></a>
            <a href="#" className="hover:text-[#1ea173] transition-colors"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Floating Header */}
      <div className={`transition-all duration-300 w-full flex justify-center ${isScrolled ? "py-2" : "py-4"}`}>
        <div className={`w-full max-w-[1240px] px-4`}>
          <div className={`bg-white rounded-bl-[10px] rounded-br-[10px] shadow-[0_10px_40px_rgba(22,67,67,0.08)] px-6 lg:px-8 h-20 flex items-center justify-between ${!isScrolled && 'rounded-tl-[10px] rounded-tr-[10px]'}`}>
            
            {/* Logo */}
            <Link href="/" className="text-3xl font-extrabold tracking-tighter text-[#164343] flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1ea173] to-[#164343] flex items-center justify-center text-white text-sm">S</div>
              Shashi<span className="text-[#1ea173]">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[15px] font-bold flex items-center gap-1 transition-colors duration-300 ${
                      isActive ? "text-[#1ea173]" : "text-[#164343] hover:text-[#1ea173]"
                    }`}
                  >
                    {link.name} 
                  </Link>
                );
              })}
            </nav>

            {/* Search / CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#1ea173] text-white text-[15px] font-bold rounded shadow-md hover:bg-[#164343] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Get A Free Quote
              </Link>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              className="lg:hidden text-[#164343] p-2 hover:text-[#1ea173] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-bold py-2 border-b border-gray-100 last:border-0 ${
                  isActive ? "text-[#1ea173]" : "text-[#164343]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="w-full text-center py-3 mt-2 bg-[#1ea173] text-white font-bold rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get A Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
