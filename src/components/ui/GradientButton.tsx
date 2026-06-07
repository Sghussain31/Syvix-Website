interface GradientButtonProps {
  onClick?: () => void;
  variant?: "primary" | "outline" | "purple";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export default function GradientButton({
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: GradientButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 ease-out focus:outline-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[#0066FF] text-white shadow-sm hover:bg-[#0052CC] hover:shadow-[0_4px_16px_rgba(0,102,255,0.25)] focus:ring-2 focus:ring-[#0066FF]",
    outline: "",
    purple:
      "bg-[#7C3AED] text-white shadow-sm hover:bg-[#6D28D9] hover:shadow-[0_4px_16px_rgba(124,58,237,0.25)] hover:scale-[1.01] focus:ring-2 focus:ring-[#7C3AED]",
  };

  if (variant === "outline") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`inline-flex items-center justify-center relative p-[1.5px] bg-gradient-to-r from-[#0066FF] to-[#7C3AED] rounded-lg transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,102,255,0.12)] hover:scale-[1.01] active:scale-[0.98] focus:outline-none ${className}`}
      >
        <span className="flex items-center justify-center w-full h-full rounded-[7px] bg-white px-[22.5px] py-[10.5px] text-sm font-bold tracking-wide text-slate-700 hover:text-[#0066FF] transition-colors duration-200">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
