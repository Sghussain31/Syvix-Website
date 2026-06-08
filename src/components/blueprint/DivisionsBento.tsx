const DIVISIONS = [
  {
    name: "SYVIX AI",
    description:
      "Smart chatbots and automated digital workflows to save you time.",
    icon: "AI",
    color: "#0066FF",
    glow: "rgba(0,102,255,0.08)",
    borderGlow: "rgba(0,102,255,0.2)",
  },
  {
    name: "SYVIX Systems",
    description:
      "High-performance business software, online portals, and mobile apps.",
    icon: "SYS",
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.08)",
    borderGlow: "rgba(124,58,237,0.2)",
  },
  {
    name: "SYVIX Cloud",
    description:
      "Secure online hosting, databases, and digital infrastructure.",
    icon: "CLD",
    color: "#0066FF",
    glow: "rgba(0,102,255,0.08)",
    borderGlow: "rgba(0,102,255,0.2)",
  },
];

export default function DivisionsBento() {
  return (
    <div className="mt-8">
      <p className="mb-6 text-xs font-bold tracking-wider text-slate-500 uppercase">
        Tech Capabilities
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
        {DIVISIONS.map((div) => (
          <article
            key={div.name}
            className="glass-card flex flex-col rounded-xl p-6 shadow-sm"
            style={{
              ["--hover-border" as string]: div.borderGlow,
              ["--hover-glow" as string]: div.glow,
            }}
          >
            {/* Icon badge */}
            <div
              className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg font-mono text-xs font-bold border"
              style={{
                background: `${div.glow.replace("0.08", "0.05")}`,
                color: div.color,
                borderColor: div.borderGlow.replace("0.2", "0.15"),
                boxShadow: `0 0 18px ${div.glow}`,
              }}
            >
              {div.icon}
            </div>
            <h3 className="font-display text-base font-bold text-slate-900">
              {div.name}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 font-sans">
              {div.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
