interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3 justify-center">
          <div className={`h-px w-8 ${light ? "bg-[#C8991A]" : "bg-[#C8991A]"}`} />
          <span
            className={`text-xs font-bold uppercase tracking-[0.2em] ${
              light ? "text-[#C8991A]" : "text-[#C8991A]"
            }`}
          >
            {eyebrow}
          </span>
          <div className={`h-px w-8 ${light ? "bg-[#C8991A]" : "bg-[#C8991A]"}`} />
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-[#0A2342]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-[#64748B]"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
