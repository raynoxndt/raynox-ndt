"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const productCategories = [
  "Ultrasonic Testing Equipment",
  "Thickness Gauges",
  "Eddy Current Testing Equipment",
  "Magnetic Particle Inspection Equipment",
  "Dye Penetrant Testing Products",
  "Hardness Testers",
  "Borescopes & Inspection Cameras",
  "Radiography Testing Equipment",
  "Other / Not Listed",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    message: "",
    requestType: "quote",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-sm p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={36} className="text-green-600" />
        </div>
        <h3 className="text-[#0A2342] font-black text-2xl mb-3">
          Enquiry Received
        </h3>
        <p className="text-[#64748B] text-base leading-relaxed max-w-md mx-auto">
          Thank you for contacting Raynox NDT Solutions. Our technical team
          will review your enquiry and respond within 24 business hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setForm({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              company: "",
              category: "",
              message: "",
              requestType: "quote",
            });
          }}
          className="mt-8 inline-flex items-center gap-2 bg-[#0A2342] text-white font-semibold px-6 py-3 rounded-sm hover:bg-[#0D2E58] transition-colors text-sm"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-sm overflow-hidden">
      {/* Form header */}
      <div className="bg-[#0A2342] px-8 py-6">
        <h2 className="text-white font-bold text-xl">Send Us an Enquiry</h2>
        <p className="text-white/60 text-sm mt-1">
          Complete the form below and we&apos;ll respond within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {/* Request type */}
        <div>
          <label className="block text-[#0A2342] text-sm font-semibold mb-3">
            Enquiry Type
          </label>
          <div className="flex flex-wrap gap-3">
            {[
              { value: "quote", label: "Request a Quote" },
              { value: "info", label: "Product Information" },
              { value: "support", label: "Technical Support" },
              { value: "other", label: "Other" },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm border cursor-pointer text-sm transition-all ${
                  form.requestType === opt.value
                    ? "bg-[#0A2342] border-[#0A2342] text-white"
                    : "bg-white border-[#E2E8F0] text-[#64748B] hover:border-[#0A2342]"
                }`}
              >
                <input
                  type="radio"
                  name="requestType"
                  value={opt.value}
                  checked={form.requestType === opt.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Name fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-[#0A2342] text-sm font-semibold mb-1.5"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={form.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full border border-[#E2E8F0] rounded-sm px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#CBD5E1] focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-[#0A2342] text-sm font-semibold mb-1.5"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={form.lastName}
              onChange={handleChange}
              placeholder="Smith"
              className="w-full border border-[#E2E8F0] rounded-sm px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#CBD5E1] focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-[#0A2342] text-sm font-semibold mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className="w-full border border-[#E2E8F0] rounded-sm px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#CBD5E1] focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-[#0A2342] text-sm font-semibold mb-1.5"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (234) 567-890"
              className="w-full border border-[#E2E8F0] rounded-sm px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#CBD5E1] focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-[#0A2342] text-sm font-semibold mb-1.5"
          >
            Company / Organisation
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full border border-[#E2E8F0] rounded-sm px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#CBD5E1] focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors"
          />
        </div>

        {/* Product category */}
        <div>
          <label
            htmlFor="category"
            className="block text-[#0A2342] text-sm font-semibold mb-1.5"
          >
            Product Category of Interest
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-[#E2E8F0] rounded-sm px-4 py-2.5 text-sm text-[#1E293B] focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors bg-white"
          >
            <option value="">Select a category...</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-[#0A2342] text-sm font-semibold mb-1.5"
          >
            Message / Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Please describe the equipment you need, your application, and any specific requirements (material, thickness range, standards, etc.)..."
            className="w-full border border-[#E2E8F0] rounded-sm px-4 py-2.5 text-sm text-[#1E293B] placeholder-[#CBD5E1] focus:outline-none focus:border-[#0A2342] focus:ring-1 focus:ring-[#0A2342] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 bg-[#C8991A] hover:bg-[#E8B832] disabled:opacity-60 text-[#0A2342] font-bold py-4 px-8 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#C8991A]/20"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Submit Enquiry
            </>
          )}
        </button>

        <p className="text-[#CBD5E1] text-xs text-center">
          By submitting this form you agree to our privacy policy. We will never
          share your information with third parties.
        </p>
      </form>
    </div>
  );
}
