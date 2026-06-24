import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
  imageBg?: string;
  icon?: React.ReactNode;
}

export default function ProductCard({
  name,
  description,
  category,
  imageBg = "from-[#0A2342] to-[#0D2E58]",
  icon,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-sm border border-[#E2E8F0] overflow-hidden group hover:shadow-xl hover:shadow-[#0A2342]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image placeholder */}
      <div className={`relative h-52 bg-gradient-to-br ${imageBg} flex items-center justify-center overflow-hidden`}>
        {/* Industrial grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
            {icon || (
              <svg
                className="w-8 h-8 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                />
              </svg>
            )}
          </div>
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Equipment
          </span>
        </div>
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8991A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <Tag size={11} className="text-[#C8991A]" />
          <span className="text-[#C8991A] text-xs font-semibold uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="text-[#0A2342] font-bold text-base leading-snug mb-2 group-hover:text-[#0D2E58] transition-colors">
          {name}
        </h3>
        <p className="text-[#64748B] text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-[#0A2342] hover:bg-[#C8991A] text-white hover:text-[#0A2342] text-sm font-semibold py-2.5 px-4 rounded-sm transition-all duration-200 group/btn"
        >
          Request Quote
          <ArrowRight
            size={14}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
