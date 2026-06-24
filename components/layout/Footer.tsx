import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const productCategories = [
  "Ultrasonic Testing Equipment",
  "Thickness Gauges",
  "Eddy Current Testing",
  "Magnetic Particle Inspection",
  "Hardness Testers",
  "Borescopes & Cameras",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#061829] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-[#C8991A] rounded-sm flex items-center justify-center">
                <span className="text-[#0A2342] font-black text-lg">R</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-wide">RAYNOX</span>
                <span className="text-[#C8991A] text-[10px] tracking-[0.2em] font-medium uppercase">
                  NDT Solutions
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for professional Non-Destructive Testing equipment and inspection solutions. Supplying leading global manufacturers to industrial clients worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center hover:bg-[#C8991A] transition-colors" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center hover:bg-[#C8991A] transition-colors" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center hover:bg-[#C8991A] transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#C8991A] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Products
            </h3>
            <ul className="space-y-2.5">
              {productCategories.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/products"
                    className="text-white/60 text-sm hover:text-[#C8991A] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#C8991A] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  123 Industrial Park Drive<br />
                  Suite 400, Houston, TX 77001<br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#C8991A] flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/60 text-sm hover:text-[#C8991A] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#C8991A] flex-shrink-0" />
                <a href="mailto:info@raynoxndt.com" className="text-white/60 text-sm hover:text-[#C8991A] transition-colors">
                  info@raynoxndt.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#C8991A] hover:bg-[#E8B832] text-[#0A2342] text-sm font-bold px-5 py-2.5 rounded-sm transition-colors"
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Raynox NDT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/40 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 text-xs hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
