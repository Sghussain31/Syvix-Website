interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-14 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <h2 className="font-display text-xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-600 font-sans ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
