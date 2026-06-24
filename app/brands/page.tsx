import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Brands",
  description:
    "Raynox NDT Solutions is an authorised reseller of the world's leading NDT equipment manufacturers including Olympus, GE Inspection, Eddyfi, Sonatest, and more.",
};

const brands = [
  {
    name: "Olympus",
    category: "Ultrasonic & Phased Array",
    description:
      "A global leader in ultrasonic flaw detectors, phased array systems, and TOFD equipment. Olympus instruments are the industry standard for weld inspection, aerospace MRO, and pipeline integrity assessment.",
    products: ["OmniScan X3", "EPOCH 6LT", "38DL Plus Thickness Gauge", "Vanta XRF Analyser"],
    gradient: "from-[#1a3060] to-[#0A2342]",
  },
  {
    name: "GE Inspection Technologies",
    category: "Industrial Inspection",
    description:
      "GE Inspection Technologies delivers advanced radiographic, ultrasonic, and eddy current solutions for aerospace, power generation, and oil & gas industries.",
    products: ["Everest XLG3 VideoProbe", "Phoenix v|tome|x", "USM 100", "Krautkramer Probes"],
    gradient: "from-[#00457c] to-[#0A2342]",
  },
  {
    name: "Eddyfi Technologies",
    category: "Advanced NDT Systems",
    description:
      "Eddyfi specialises in advanced electromagnetic, ultrasonic, and robotic inspection technologies, particularly for oil & gas pipeline integrity and corrosion monitoring.",
    products: ["Sharck PA Crawler", "Lyft Pulsed Eddy Current", "Ectane 2", "M2M Gekko"],
    gradient: "from-[#2a1a4e] to-[#0A2342]",
  },
  {
    name: "Sonatest",
    category: "Ultrasonic Testing",
    description:
      "UK-based manufacturer of professional ultrasonic flaw detectors and thickness gauges. Sonatest instruments are trusted for their robustness, accuracy, and field reliability.",
    products: ["Veo+", "Sitescan D-70", "Wave Phased Array", "Masterscan D-70"],
    gradient: "from-[#1e3a5f] to-[#0A2342]",
  },
  {
    name: "Karl Deutsch",
    category: "MPI & UT Equipment",
    description:
      "German precision manufacturer of magnetic particle inspection systems, ultrasonic equipment, and eddy current instruments used in aerospace and automotive production lines.",
    products: ["ECHOGRAPH Flaw Detectors", "MF8 MPI Equipment", "Echomac Automated UT", "Elotest EC Instruments"],
    gradient: "from-[#1a2d5e] to-[#0A2342]",
  },
  {
    name: "Evident (formerly Olympus Scientific)",
    category: "Scientific Instruments",
    description:
      "Evident provides cutting-edge inspection and measurement solutions combining advanced optics, electronics, and digital technologies for industrial and scientific applications.",
    products: ["InSight C-Scan", "OmniScan MX2", "ClearScan", "Omniscan X3 64"],
    gradient: "from-[#0f2b55] to-[#0A2342]",
  },
  {
    name: "MISTRAS Group",
    category: "Acoustic Emission & Monitoring",
    description:
      "World leader in acoustic emission monitoring, structural health monitoring, and non-destructive evaluation for asset integrity management in critical infrastructure.",
    products: ["AEwin Software", "Physical Acoustics Sensors", "Pocket AE", "DiSP-4 AE System"],
    gradient: "from-[#1a3350] to-[#0A2342]",
  },
  {
    name: "Roper Technologies",
    category: "Flow & Measurement",
    description:
      "Provides advanced measurement, control, and NDT solutions for industrial process industries, energy, and infrastructure inspection applications.",
    products: ["CUI Systems", "Flow Measurement Solutions", "Level Measurement", "Process Monitoring"],
    gradient: "from-[#162e4e] to-[#0A2342]",
  },
  {
    name: "Magnaflux",
    category: "MPI & Penetrant Testing",
    description:
      "The world's most trusted brand in magnetic particle inspection and liquid penetrant testing consumables and equipment for aerospace, automotive, and industrial inspection.",
    products: ["ZL-60D Fluorescent PT", "Magnaglo 14HF", "8HF Dry Powder", "UV-A LED Lamps"],
    gradient: "from-[#1e2f52] to-[#0A2342]",
  },
  {
    name: "Proceq",
    category: "Material Testing",
    description:
      "Swiss manufacturer of portable hardness testers, concrete testing instruments, and inspection devices used across construction, manufacturing, and infrastructure inspection.",
    products: ["Equotip Live Hardness Tester", "Pundit Live Ultrasonic", "Profometer Rebar Locator", "Silvascanner GPR"],
    gradient: "from-[#0d2545] to-[#0A2342]",
  },
  {
    name: "Baker Hughes (Waygate Technologies)",
    category: "Industrial Radiography & CT",
    description:
      "Formerly GE Inspection, Waygate Technologies provides the most comprehensive portfolio of industrial radiography, computed tomography, and 3D inspection solutions.",
    products: ["Phoenix Microfocus CT", "Seifert X-Ray Generators", "RHYTHM Software", "Rhythm Industrial CT"],
    gradient: "from-[#153050] to-[#0A2342]",
  },
  {
    name: "Zetec",
    category: "Eddy Current & Ultrasonic",
    description:
      "A leading provider of advanced non-destructive testing technology for the nuclear, power generation, aerospace, and oil & gas industries worldwide.",
    products: ["MIZ-21C Eddy Current", "TOPAZ Phased Array", "UltraVision 3", "Emerald Mixed-Mode"],
    gradient: "from-[#1a3050] to-[#0A2342]",
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0A2342] pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Brands</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Brand Partners
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Raynox NDT Solutions is an authorised reseller of the world&apos;s leading
            NDT equipment manufacturers. Every product we supply is genuine,
            factory-calibrated, and covered by manufacturer warranty.
          </p>

          <div className="flex flex-wrap gap-5 mt-8">
            {[
              "Genuine Manufacturer Products",
              "Full Warranty Coverage",
              "Factory Calibration Certificates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#C8991A]" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-white border border-[#E2E8F0] rounded-sm overflow-hidden hover:shadow-xl hover:shadow-[#0A2342]/10 transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-br ${brand.gradient} p-8 relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <div className="w-16 h-16 bg-white/15 rounded-sm flex items-center justify-center mb-4 border border-white/20">
                        <span className="text-white font-black text-xl">
                          {brand.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-white font-black text-xl">{brand.name}</h3>
                      <span className="text-[#C8991A] text-xs font-semibold uppercase tracking-wider mt-1 block">
                        {brand.category}
                      </span>
                    </div>
                    <div className="bg-white/10 border border-white/20 rounded-sm px-3 py-1">
                      <span className="text-white/70 text-xs">Partner Brand</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[#64748B] text-sm leading-relaxed mb-5">
                    {brand.description}
                  </p>

                  <div className="mb-5">
                    <p className="text-[#0A2342] font-semibold text-xs uppercase tracking-wider mb-3">
                      Featured Products
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {brand.products.map((product) => (
                        <span
                          key={product}
                          className="bg-[#F5F7FA] border border-[#E2E8F0] text-[#1E293B] text-xs px-3 py-1 rounded-sm"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#0A2342] hover:bg-[#C8991A] text-white hover:text-[#0A2342] text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200"
                  >
                    Enquire About {brand.name}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner note */}
      <section className="py-16 bg-[#0A2342]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Looking for a Specific Brand or Product?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-2xl mx-auto">
            Our sourcing network extends beyond the brands listed above. If you
            need equipment from a specific manufacturer, contact our team and
            we&apos;ll source it for you at competitive pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8991A] hover:bg-[#E8B832] text-[#0A2342] font-bold px-8 py-4 rounded-sm transition-colors"
          >
            Contact Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
