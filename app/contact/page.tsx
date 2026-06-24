import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Raynox NDT Solutions for product enquiries, quote requests, and technical support. Our team responds within 24 hours.",
};

export default function ContactPage() {
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
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Have a product enquiry, need a quote, or want to discuss your NDT
            requirements? Our technical team is ready to help.
          </p>
          <div className="flex flex-wrap gap-5 mt-6">
            {[
              "Quotes within 24 hours",
              "Expert technical advice",
              "No obligation enquiries",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#C8991A]" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info sidebar */}
            <div className="space-y-6">
              {/* Quick contacts */}
              <div className="bg-[#0A2342] rounded-sm p-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-base mb-5">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#C8991A]/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Phone size={15} className="text-[#C8991A]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:+1234567890"
                          className="text-white text-sm font-medium hover:text-[#C8991A] transition-colors"
                        >
                          +1 (234) 567-890
                        </a>
                        <p className="text-white/40 text-xs mt-0.5">
                          Mon–Fri, 8:00 AM – 6:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#C8991A]/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Mail size={15} className="text-[#C8991A]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                          Email
                        </p>
                        <a
                          href="mailto:info@raynoxndt.com"
                          className="text-white text-sm font-medium hover:text-[#C8991A] transition-colors"
                        >
                          info@raynoxndt.com
                        </a>
                        <p className="text-white/40 text-xs mt-0.5">
                          We reply within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#C8991A]/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin size={15} className="text-[#C8991A]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                          Address
                        </p>
                        <p className="text-white text-sm leading-relaxed">
                          123 Industrial Park Drive<br />
                          Suite 400<br />
                          Houston, TX 77001<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#C8991A]/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock size={15} className="text-[#C8991A]" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                          Business Hours
                        </p>
                        <div className="text-white text-sm space-y-0.5">
                          <p>Mon – Fri: 8:00 AM – 6:00 PM</p>
                          <p className="text-white/50">Saturday: 9:00 AM – 1:00 PM</p>
                          <p className="text-white/40">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890?text=Hello!%20I'm%20interested%20in%20NDT%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] hover:bg-[#20BA5A] rounded-sm p-5 transition-colors group"
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/80 text-xs">Quick enquiries &amp; quotes</p>
                </div>
                <MessageSquare size={16} className="text-white/60 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Response promise */}
              <div className="bg-white border border-[#E2E8F0] rounded-sm p-5">
                <h4 className="text-[#0A2342] font-bold text-sm mb-3">
                  Our Response Promise
                </h4>
                <div className="space-y-2">
                  {[
                    "Quote requests: within 24 hours",
                    "Technical enquiries: same business day",
                    "Urgent requirements: call us directly",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-[#C8991A] flex-shrink-0" />
                      <span className="text-[#64748B] text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-[#E2E8F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342]/10 to-[#0A2342]/5" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,35,66,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,35,66,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0A2342] rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin size={28} className="text-[#C8991A]" />
            </div>
            <p className="text-[#0A2342] font-bold text-sm">
              123 Industrial Park Drive, Houston, TX 77001
            </p>
            <p className="text-[#64748B] text-xs mt-1">
              Interactive map — embed your Google Maps API here
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
