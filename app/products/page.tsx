import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Filter } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Raynox NDT Solutions' complete range of Non-Destructive Testing equipment including ultrasonic flaw detectors, thickness gauges, eddy current testers, MPI equipment, and more.",
};

const categories = [
  {
    id: "ultrasonic",
    name: "Ultrasonic Testing Equipment",
    description:
      "High-performance ultrasonic flaw detectors, phased array systems, and TOFD instruments for comprehensive weld inspection, crack detection, and material characterisation.",
    gradient: "from-[#0A2342] to-[#1a3d6b]",
    products: [
      {
        name: "Portable Ultrasonic Flaw Detector",
        description:
          "Advanced A-scan flaw detector with full digital signal processing, wide-frequency range (0.5–20 MHz), and intuitive touchscreen interface for field and workshop use.",
        category: "Ultrasonic Testing",
      },
      {
        name: "Phased Array UT System",
        description:
          "Multi-channel phased array instrument with full matrix capture capability, S-scan imaging, and real-time 3D reconstruction for complex weld inspection.",
        category: "Phased Array",
      },
      {
        name: "TOFD Inspection System",
        description:
          "Time-of-Flight Diffraction system for rapid, accurate weld inspection with full data recording, DAC curves, and reporting software.",
        category: "TOFD",
      },
    ],
  },
  {
    id: "thickness",
    name: "Thickness Gauges",
    description:
      "Precision ultrasonic thickness gauges for corrosion monitoring, wall thickness measurement, and remaining-wall evaluation in pipes, vessels, and structural components.",
    gradient: "from-[#142b4e] to-[#0A2342]",
    products: [
      {
        name: "Corrosion Thickness Gauge",
        description:
          "Single-echo and echo-to-echo ultrasonic gauge for measuring metal wall thickness through paint and coatings. IP67 rated for harsh environments.",
        category: "Thickness Gauge",
      },
      {
        name: "High-Temperature Thickness Gauge",
        description:
          "Specialised gauge for measuring thickness of materials at elevated temperatures up to 500°C without shutdown or surface cooling.",
        category: "Thickness Gauge",
      },
      {
        name: "Multi-Echo Thickness Gauge",
        description:
          "Measures through coatings up to 2mm thick without removal, ideal for painted structures, ships, and coated pipelines.",
        category: "Thickness Gauge",
      },
    ],
  },
  {
    id: "eddy-current",
    name: "Eddy Current Testing Equipment",
    description:
      "State-of-the-art eddy current instruments for surface crack detection, heat exchanger tube inspection, and coating thickness measurement on conductive substrates.",
    gradient: "from-[#0d2a4a] to-[#1a4a6b]",
    products: [
      {
        name: "Portable Eddy Current Flaw Detector",
        description:
          "Multi-frequency eddy current instrument for surface and near-surface defect detection in ferromagnetic and non-ferromagnetic components.",
        category: "Eddy Current",
      },
      {
        name: "Rotating Probe Scanner",
        description:
          "High-speed rotating eddy current probe system for rapid tube inspection in heat exchangers, boilers, and condensers.",
        category: "Eddy Current",
      },
      {
        name: "Pulsed Eddy Current System",
        description:
          "Through-insulation corrosion screening system for inspecting insulated pipework and vessels without removing insulation or cladding.",
        category: "PEC",
      },
    ],
  },
  {
    id: "mpi",
    name: "Magnetic Particle Inspection Equipment",
    description:
      "Complete MPI systems for surface and near-surface discontinuity detection in ferromagnetic components. Suitable for welds, castings, forgings, and in-service components.",
    gradient: "from-[#0A2342] to-[#0d3055]",
    products: [
      {
        name: "Portable AC/DC Yoke",
        description:
          "Lightweight electromagnetic yoke for field MPI inspections. Switchable AC/DC magnetisation with adjustable pole spacing for various component geometries.",
        category: "MPI",
      },
      {
        name: "UV Inspection Lamp",
        description:
          "High-intensity UV-A LED lamp for fluorescent MPI and penetrant testing. Battery-powered with 10-hour runtime and shock-resistant housing.",
        category: "MPI Accessories",
      },
      {
        name: "Bench-Top MPI Machine",
        description:
          "Wet horizontal magnetic particle inspection unit with combined longitudinal and circular magnetisation for workshop inspection of shafts, gears, and fasteners.",
        category: "MPI",
      },
    ],
  },
  {
    id: "dye-penetrant",
    name: "Dye Penetrant Testing Products",
    description:
      "Full range of liquid penetrant testing consumables and systems for surface-open defect detection in both ferromagnetic and non-ferromagnetic materials.",
    gradient: "from-[#1a2e5e] to-[#0A2342]",
    products: [
      {
        name: "Fluorescent PT Aerosol Kit",
        description:
          "Complete three-stage fluorescent penetrant testing kit including penetrant, emulsifier, and developer in aerosol format for rapid field inspections.",
        category: "Penetrant Testing",
      },
      {
        name: "Visible Red Dye Penetrant System",
        description:
          "Visible red dye penetrant system for general surface defect detection. Available in bulk containers and aerosol formats.",
        category: "Penetrant Testing",
      },
      {
        name: "Water-Washable PT Kit",
        description:
          "Water-washable fluorescent penetrant testing kit for rapid production-line inspection of castings, welds, and machined components.",
        category: "Penetrant Testing",
      },
    ],
  },
  {
    id: "hardness",
    name: "Hardness Testers",
    description:
      "Portable and benchtop hardness testing instruments for material verification, weld HAZ assessment, and in-service component evaluation across multiple hardness scales.",
    gradient: "from-[#0A2342] to-[#0f2e50]",
    products: [
      {
        name: "Portable Rebound Hardness Tester",
        description:
          "Handheld Leeb hardness tester with multiple impact device compatibility, automatic conversion between HB, HRC, HV, and HRB scales, and data storage.",
        category: "Hardness Testing",
      },
      {
        name: "UCI Hardness Tester",
        description:
          "Ultrasonic Contact Impedance tester for measuring hardness on thin-walled components, coatings, and geometrically complex parts where rebound testers are unsuitable.",
        category: "Hardness Testing",
      },
      {
        name: "Portable Brinell Hardness Tester",
        description:
          "Optical Brinell hardness tester for verification testing on welds, forgings, and castings per ASTM E110 and equivalent international standards.",
        category: "Hardness Testing",
      },
    ],
  },
  {
    id: "borescopes",
    name: "Borescopes & Inspection Cameras",
    description:
      "Industrial video borescopes, rigid borescopes, and remote visual inspection systems for internal inspection of engines, pipelines, turbines, and confined spaces.",
    gradient: "from-[#162e52] to-[#0A2342]",
    products: [
      {
        name: "Industrial Video Borescope",
        description:
          "4-way articulating video borescope with HD CMOS camera, LED illumination, measurement capability, and USB video output for remote visual inspection.",
        category: "Borescope",
      },
      {
        name: "Push-Cable Inspection Camera",
        description:
          "Semi-rigid push-cable camera system for pipeline, drain, and conduit inspection. 30m cable with self-levelling camera head and DVR recording.",
        category: "Inspection Camera",
      },
      {
        name: "Rigid Borescope Set",
        description:
          "Precision optical rigid borescope set in multiple diameters and viewing angles for engine and mechanical component internal inspection.",
        category: "Borescope",
      },
    ],
  },
  {
    id: "radiography",
    name: "Radiography Testing Equipment",
    description:
      "Portable X-ray and gamma-ray radiography equipment, digital radiography systems, and associated accessories for weld inspection and casting evaluation.",
    gradient: "from-[#0a1e3d] to-[#0A2342]",
    products: [
      {
        name: "Portable X-Ray Generator",
        description:
          "Constant potential DC X-ray generator for field and workshop radiography of welds, castings, and structural components up to 50mm steel.",
        category: "Radiography",
      },
      {
        name: "Digital Radiography Panel",
        description:
          "Flat-panel digital detector for real-time digital radiography. Replaces film and CR for faster, more sensitive weld and casting inspection.",
        category: "Digital RT",
      },
      {
        name: "Gamma-Ray Crawler",
        description:
          "Remote-controlled pipeline gamma-ray crawler with built-in source holder, self-propelled drive, and wireless position control for pipe welds.",
        category: "Radiography",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
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
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            NDT Equipment &amp; Inspection Solutions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Browse our comprehensive range of professional Non-Destructive Testing
            equipment. Click &quot;Request Quote&quot; on any product to receive a tailored
            price from our team.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <div className="bg-white border-b border-[#E2E8F0] sticky top-[84px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-sm text-[#64748B] hover:text-[#0A2342] font-medium px-3 py-1.5 rounded-sm hover:bg-[#F5F7FA] transition-colors whitespace-nowrap flex-shrink-0"
              >
                {cat.name.split(" ")[0]} {cat.name.split(" ")[1] || ""}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Products by category */}
      <div className="bg-[#F5F7FA]">
        {categories.map((category, idx) => (
          <section
            key={category.id}
            id={category.id}
            className={`py-16 ${idx % 2 === 0 ? "bg-[#F5F7FA]" : "bg-white"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-[#C8991A] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                    NDT Equipment
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2342]">
                    {category.name}
                  </h2>
                  <p className="text-[#64748B] text-sm mt-2 max-w-2xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0A2342] hover:bg-[#C8991A] text-white hover:text-[#0A2342] text-sm font-semibold px-5 py-2.5 rounded-sm transition-all"
                >
                  Get Category Quote
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.name}
                    name={product.name}
                    description={product.description}
                    category={product.category}
                    imageBg={category.gradient}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-[#0A2342]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Can&apos;t Find What You Need?
          </h2>
          <p className="text-white/70 text-base mb-8">
            We source equipment from a wide network of manufacturers. Contact our
            technical team with your specification and we&apos;ll find the right solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8991A] hover:bg-[#E8B832] text-[#0A2342] font-bold px-8 py-4 rounded-sm transition-colors"
          >
            Contact Our Experts
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
