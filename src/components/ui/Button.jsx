import { motion } from "framer-motion";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-accent text-white hover:bg-blue-700 focus-visible:ring-accent",
    secondary: "bg-accent2 text-white hover:bg-cyan-700 focus-visible:ring-accent2",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white focus-visible:ring-accent",
    ghost: "text-text hover:bg-slate-100 focus-visible:ring-slate-300",
    highlight: "bg-highlight text-white hover:bg-amber-600 focus-visible:ring-highlight",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.button
      as={Component}
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}