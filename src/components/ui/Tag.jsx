export function Tag({ children, className = "", variant = "default" }) {
  const variants = {
    default: "bg-slate-100 text-slate-700",
    accent: "bg-blue-50 text-accent border border-blue-100",
    highlight: "bg-amber-50 text-amber-700 border border-amber-100",
    cyan: "bg-cyan-50 text-cyan-700 border border-cyan-100",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function TagGroup({ tags, variant = "default", className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag, index) => (
        <Tag key={index} variant={variant}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}