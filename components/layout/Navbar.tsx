"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A2342] shadow-2xl"
          : "bg-[#0A2342]/95 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#061829] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <p className="text-white/60 text-xs">
            Professional NDT Equipment &amp; Inspection Solutions
          </p>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-1.5 text-[#C8991A] text-xs font-medium hover:text-[#E8B832] transition-colors"
          >
            <Phone size={11} />
            +1 (234) 567-890
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              {/* Logo mark */}
              <div className="w-9 h-9 bg-[#C8991A] rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-[#0A2342] font-black text-lg tracking-tighter">R</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-wide">RAYNOX</span>
                <span className="text-[#C8991A] text-[10px] tracking-[0.2em] font-medium uppercase">
                  NDT Solutions
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#C8991A] bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#C8991A] hover:bg-[#E8B832] text-[#0A2342] text-sm font-bold px-5 py-2.5 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#C8991A]/20"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-sm hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="border-t border-white/10 pt-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2.5 text-sm font-medium rounded-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#C8991A] bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href="/contact"
                className="block w-full text-center bg-[#C8991A] text-[#0A2342] text-sm font-bold px-5 py-2.5 rounded-sm"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
