import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  CheckCircle,
  Users,
  Award,
  Globe,
  Wrench,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Raynox NDT Solutions — our mission, values, and commitment to supplying world-class Non-Destructive Testing equipment to industrial clients.",
};

const industries = [
  { name: "Oil & Gas", icon: "⚙️", description: "Upstream, midstream, and downstream inspection" },
  { name: "Aerospace", icon: "✈️", description: "MRO, manufacturing, and structural inspection" },
  { name: "Power Generation", icon: "⚡", description: "Nuclear, thermal, and renewable energy" },
  { name: "Petrochemical", icon: "🏭", description: "Pressure vessels, piping, and storage tanks" },
  { name: "Pipeline Integrity", icon: "🔧", description: "Onshore and offshore pipeline inspection" },
  { name: "Automotive", icon: "🚗", description: "Manufacturing quality control and R&D" },
  { name: "Marine & Offshore", icon: "🚢", description: "Hull inspection and structural integrity" },
  { name: "Construction", icon: "🏗️", description: "Structural steel and concrete inspection" },
  { name: "Nuclear", icon: "⚛️", description: "Code-compliant reactor and plant inspection" },
  { name: "Manufacturing", icon: "🔩", description: "In-line and end-of-line quality assurance" },
  { name: "Railway", icon: "🚂", description: "Rail, axle, and rolling stock inspection" },
  { name: "Defense", icon: "🛡️", description: "Military asset inspection and maintenance" },
];

const values = [
  {
    icon: Award,
    title: "Quality Without Compromise",
    description:
      "We supply only genuine, certified equipment from authorised manufacturers. Every instrument we ship meets the stringent quality standards demanded by industrial inspection environments.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description:
      "Our team works closely with clients to understand their inspection challenges, application requirements, and budget constraints before recommending equipment.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Support",
    description:
      "We access global manufacturer networks to source the right equipment from anywhere in the world, while providing personalised local service and technical support.",
  },
  {
    icon: Wrench,
    title: "Technical Excellence",
    description:
      "Our team includes qualified NDT professionals who can provide application guidance, equipment selection advice, and post-purchase technical support.",
  },
];

export default function AboutPage() {
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
            <span className="text-white">About Us</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-5">
              About Raynox NDT Solutions
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              A dedicated partner for professional Non-Destructive Testing equipment —
              supplying the instruments that keep critical infrastructure safe, compliant,
              and operational.
            </p>
          </div>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C8991A]" />
                <span className="text-[#C8991A] text-xs font-bold uppercase tracking-[0.2em]">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2342] mb-5 leading-tight">
                Specialist NDT Equipment, Delivered with Expertise
              </h2>
              <div className="space-y-4 text-[#64748B] text-base leading-relaxed">
                <p>
                  Raynox NDT Solutions was founded to address a clear gap in the market:
                  industrial clients needed a knowledgeable, reliable partner who could
                  supply world-class NDT equipment with genuine technical expertise — not
                  just a catalogue and a price list.
                </p>
                <p>
                  We operate as a specialist supplier and reseller, maintaining direct
                  relationships with the industry&apos;s most respected equipment manufacturers.
                  This allows us to source authentic, factory-calibrated instruments with
                  full documentation and warranty support.
                </p>
                <p>
                  Our clients range from independent inspection contractors to national
                  oil companies, aerospace manufacturers, and infrastructure operators.
                  What unites them is the demand for equipment they can trust in the most
                  demanding inspection environments.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { value: "500+", label: "Products" },
                  { value: "20+", label: "Brands" },
                  { value: "15+", label: "Industries" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-[#E2E8F0] rounded-sm p-4 text-center"
                  >
                    <div className="text-3xl font-black text-[#C8991A]">{stat.value}</div>
                    <div className="text-[#64748B] text-xs mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="space-y-4">
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
                  <p className="text-[#C8991A] text-xs font-bold uppercase tracking-[0.2em] mb-5">
                    What Sets Us Apart
                  </p>
                  <div className="space-y-4">
                    {[
                      "Authorised reseller relationships with 20+ global manufacturers",
                      "Technical team with hands-on NDT inspection experience",
                      "Comprehensive product documentation and calibration certificates",
                      "After-sales support and calibration services",
                      "Fast response to enquiries — quotes within 24 hours",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle size={15} className="text-[#C8991A] mt-0.5 flex-shrink-0" />
                        <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-sm p-8">
              <div className="w-12 h-12 bg-[#0A2342] rounded-sm flex items-center justify-center mb-5">
                <Target size={22} className="text-[#C8991A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0A2342] mb-4">Our Mission</h2>
              <p className="text-[#64748B] text-base leading-relaxed">
                To be the most trusted specialist supplier of Non-Destructive Testing
                equipment in the industrial marketplace — providing genuine, certified
                instruments with expert technical guidance that enables our clients to
                deliver safer, more reliable inspection programmes.
              </p>
              <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                <p className="text-[#0A2342] font-semibold text-sm">
                  &ldquo;Equipment you trust. Support you rely on.&rdquo;
                </p>
              </div>
            </div>

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
                <div className="w-12 h-12 bg-[#C8991A]/20 rounded-sm flex items-center justify-center mb-5 border border-[#C8991A]/30">
                  <Eye size={22} className="text-[#C8991A]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/70 text-base leading-relaxed">
                  To become the preferred NDT equipment partner for industrial
                  inspection professionals across the globe — recognised for our
                  product range, technical depth, and the quality of the service
                  we deliver to every client, regardless of order size.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[#C8991A] font-semibold text-sm">
                    &ldquo;Raising the standard of industrial inspection, one instrument at a time.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="Every decision we make is guided by four core principles that define how we work with our clients, suppliers, and each other."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white border border-[#E2E8F0] rounded-sm p-8 hover:shadow-lg hover:border-[#0A2342]/20 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-[#0A2342]/5 rounded-sm flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#0A2342]" />
                  </div>
                  <h3 className="text-[#0A2342] font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries Served"
            title="Trusted Across Critical Industries"
            subtitle="From energy to aerospace, our NDT equipment supports inspection professionals in the most demanding industrial environments."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex items-start gap-4 p-5 bg-[#F5F7FA] border border-[#E2E8F0] rounded-sm hover:border-[#0A2342]/30 hover:bg-white transition-all duration-200"
              >
                <span className="text-2xl flex-shrink-0">{industry.icon}</span>
                <div>
                  <h3 className="text-[#0A2342] font-bold text-sm mb-1">{industry.name}</h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A2342]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 text-base mb-8">
            Get in touch with our team to discuss your NDT equipment requirements
            and receive a tailored quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C8991A] hover:bg-[#E8B832] text-[#0A2342] font-bold px-8 py-4 rounded-sm transition-colors"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-sm transition-colors border border-white/20"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
