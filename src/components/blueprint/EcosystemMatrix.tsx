const ECOSYSTEM = [
  {
    category: "AI SaaS",
    product: "SYVIX Flow / Core",
    description: "Scalable cloud productivity frameworks with agent-native workflows.",
    tags: ["Multi-tenant", "Agents", "Edge CDN"],
  },
  {
    category: "Automation & Robotics",
    product: "SYVIX Automate",
    description:
      "Bridging software intelligence with real-world machine execution and IoT.",
    tags: ["RPA + IoT", "Real-time", "Safety"],
  },
  {
    category: "Cybersecurity",
    product: "SYVIX Neural / Nexus",
    description:
      "Protecting next-generation digital environments and neural systems.",
    tags: ["Zero-trust", "Threat AI", "Forensics"],
  },
  {
    category: "Developer Infrastructure",
    product: "SYVIX Vision / Pulse",
    description:
      "Robust APIs and rapid edge-compute development infrastructure.",
    tags: ["REST + GraphQL", "Edge inference", "CLI"],
  },
];

export default function EcosystemMatrix() {
  return (
    <>
      <p className="mb-8 text-center text-sm font-medium tracking-wider text-[#8B949E] uppercase">
        Future Ecosystem Matrix
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {ECOSYSTEM.map((item, i) => (
          <article
            key={item.product}
            className={`card-cyber glass-hover rounded-2xl p-6 sm:p-8 ${
              i === 0 ? "md:row-span-2" : ""
            }`}
          >
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs font-medium text-[#00F0FF]">
              {item.category}
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-white sm:text-2xl">
              {item.product}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#8B949E]">
              {item.description}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-[#8B949E]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
