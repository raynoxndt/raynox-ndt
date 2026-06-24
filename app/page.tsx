import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Award,
  Clock,
  Users,
  CheckCircle,
  Zap,
  Globe,
  Headphones,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";

const productCategories = [
  {
    name: "Ultrasonic Testing Equipment",
    description:
      "Advanced flaw detectors, phased array instruments, and TOFD systems for precise internal defect detection.",
    imageBg: "from-[#0A2342] to-[#1a3d6b]",
  },
  {
    name: "Thickness Gauges",
    description:
      "Precision ultrasonic thickness gauges for corrosion monitoring, wall thickness measurement, and material evaluation.",
    imageBg: "from-[#142b4e] to-[#0A2342]",
  },
  {
    name: "Eddy Current Testing",
    description:
      "High-performance eddy current instruments for surface and sub-surface crack detection in conductive materials.",
    imageBg: "from-[#0d2a4a] to-[#1a4a6b]",
  },
  {
    name: "Magnetic Particle Inspection",
    description:
      "Complete MPI systems for detecting surface and near-surface defects in ferromagnetic components.",
    imageBg: "from-[#0A2342] to-[#0d3055]",
  },
  {
    name: "Borescopes & Inspection Cameras",
    description:
      "Industrial video borescopes and remote visual inspection systems for confined space and turbine inspection.",
    imageBg: "from-[#162e52] to-[#0A2342]",
  },
  {
    name: "Hardness Testers",
    description:
      "Portable and benchtop hardness testing solutions for material verification across Rockwell, Brinell, and Vickers scales.",
    imageBg: "from-[#0A2342] to-[#0f2e50]",
  },
];

const brands = [
  "Olympus",
  "GE Inspection",
  "Eddyfi",
  "MISTRAS",
  "Karl Deutsch",
  "Sonatest",
  "Roper Technologies",
  "Evident",
];

const stats = [
  { value: "500+", label: "Products Supplied" },
  { value: "20+", label: "Global Brands" },
  { value: "15+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const reasons = [
  {
    icon: Shield,
    title: "Certified Equipment",
    description:
      "All equipment sourced from ISO-certified manufacturers with full calibration certificates and compliance documentation.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Our team brings decades of hands-on NDT experience to help you select the right equipment for your application.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Competitive lead times and reliable logistics ensure your equipment arrives when your project demands it.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Ongoing after-sales technical assistance, equipment training, and calibration services from certified professionals.",
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "Access to the world's leading NDT brands through our extensive manufacturer network and preferred partnerships.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description:
      "Best-value pricing on premium NDT equipment, backed by volume purchasing power and direct manufacturer relationships.",
  },
];

const industries = [
  "Oil & Gas",
  "Aerospace",
  "Power Generation",
  "Petrochemical",
  "Pipeline Integrity",
  "Automotive",
  "Marine & Offshore",
  "Construction",
  "Nuclear",
  "Manufacturing",
  "Railway",
  "Defense",
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-[#0A2342] overflow-hidden pt-24">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8991A]/5 rounded-full blur-3xl" />
        {/* Accent diagonal */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-[#0D2E58] to-transparent opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#C8991A]" />
                <span className="text-[#C8991A] text-xs font-bold uppercase tracking-[0.25em]">
                  Trusted NDT Equipment Supplier
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                Precision Tools for{" "}
                <span className="text-[#C8991A]">Industrial</span>{" "}
                Inspection Excellence
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                Raynox NDT Solutions supplies world-class Non-Destructive Testing
                equipment from leading global manufacturers. Serving oil &amp; gas,
                aerospace, power generation, and manufacturing industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[#C8991A] hover:bg-[#E8B832] text-[#0A2342] font-bold px-7 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#C8991A]/30"
                >
                  Explore Products
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-4 rounded-sm transition-all duration-200"
                >
                  Request a Quote
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-10 flex flex-wrap gap-5">
                {["ISO Certified Equipment", "Factory Calibrated", "Expert Support"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={15} className="text-[#C8991A]" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Stats panel */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 border border-white/10 rounded-sm p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    <div className="text-4xl font-black text-[#C8991A] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Industries strip */}
              <div className="mt-4 bg-white/5 border border-white/10 rounded-sm p-5">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                  Industries Served
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Oil & Gas", "Aerospace", "Power Generation", "Petrochemical", "Pipeline", "Nuclear"].map(
                    (ind) => (
                      <span
                        key={ind}
                        className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-sm border border-white/10"
                      >
                        {ind}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60L1440 60L1440 30C1200 0 960 0 720 30C480 60 240 60 0 30L0 60Z"
              fill="#F5F7FA"
            />
          </svg>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C8991A]" />
                <span className="text-[#C8991A] text-xs font-bold uppercase tracking-[0.2em]">
                  About Raynox NDT
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] leading-tight mb-5">
                Your Specialist NDT Equipment Partner
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Raynox NDT Solutions is a dedicated supplier and reseller of
                Non-Destructive Testing instruments and inspection technologies.
                We partner with the world&apos;s most respected NDT manufacturers to
                bring cutting-edge equipment to your doorstep.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-7">
                From ultrasonic flaw detectors to advanced phased array systems,
                we supply the complete spectrum of NDT solutions — ensuring your
                team has the right tools to maintain quality, safety, and
                regulatory compliance.
              </p>
              <div className="space-y-3">
                {[
                  "Authorised reseller of leading global NDT brands",
                  "Expert technical consultation before and after purchase",
                  "Serving industrial clients across 15+ sectors",
                  "Full equipment lifecycle support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#C8991A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={12} className="text-[#C8991A]" />
                    </div>
                    <span className="text-[#1E293B] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#0A2342] font-bold text-sm border-b-2 border-[#C8991A] pb-0.5 hover:text-[#C8991A] transition-colors group"
                >
                  Learn more about us
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div className="bg-[#0A2342] rounded-sm p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">
                  <p className="text-[#C8991A] text-xs uppercase tracking-widest mb-6">
                    Why Industry Leaders Choose Us
                  </p>
                  <div className="space-y-4">
                    {[
                      { pct: 95, label: "Equipment Reliability" },
                      { pct: 98, label: "On-Time Delivery" },
                      { pct: 100, label: "Certified Quality" },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-white/80 text-sm">{bar.label}</span>
                          <span className="text-[#C8991A] text-sm font-bold">{bar.pct}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#C8991A] to-[#E8B832] rounded-full"
                            style={{ width: `${bar.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                    {stats.slice(0, 3).map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-black text-[#C8991A]">{stat.value}</div>
                        <div className="text-white/50 text-xs mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C8991A]/20 rounded-sm -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0A2342]/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Product Range"
            title="Complete NDT Equipment Solutions"
            subtitle="We supply industry-leading inspection and testing equipment across all major NDT methodologies — from ultrasonic to radiographic testing."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                description={product.description}
                category="NDT Equipment"
                imageBg={product.imageBg}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#0A2342] hover:bg-[#0D2E58] text-white font-semibold px-8 py-3.5 rounded-sm transition-colors"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BRANDS SECTION */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Trusted Brands"
            title="Authorised Reseller of Global Leaders"
            subtitle="We partner exclusively with the world's most reputable NDT manufacturers, ensuring genuine products with full manufacturer warranties."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-white border border-[#E2E8F0] rounded-sm p-6 flex items-center justify-center h-20 hover:border-[#0A2342] hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-[#64748B] font-bold text-sm group-hover:text-[#0A2342] transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 text-[#0A2342] font-semibold text-sm hover:text-[#C8991A] transition-colors group"
            >
              View All Brands
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#0A2342] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Raynox NDT"
            title="Built on Expertise, Delivered with Precision"
            subtitle="From equipment selection through to after-sales support, we provide a complete service that industrial professionals rely on."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/10 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-[#C8991A]/15 rounded-sm flex items-center justify-center mb-4 group-hover:bg-[#C8991A]/25 transition-colors">
                    <Icon size={22} className="text-[#C8991A]" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="NDT Solutions Across Critical Sectors"
            subtitle="From upstream oil & gas to aerospace MRO, our equipment portfolio covers the full spectrum of industrial inspection requirements."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-sm px-4 py-3 text-center hover:bg-[#0A2342] hover:text-white hover:border-[#0A2342] transition-all duration-200 group"
              >
                <span className="text-[#1E293B] group-hover:text-white text-sm font-medium transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#0A2342] to-[#0D2E58] rounded-sm p-12 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              <span className="text-[#C8991A] text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
                Ready to get started?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Request a Quote for Your NDT Equipment
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                Tell us what you need and our technical team will respond with a
                competitive quote and full product recommendations within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C8991A] hover:bg-[#E8B832] text-[#0A2342] font-bold px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#C8991A]/30"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-sm transition-colors border border-white/20"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
