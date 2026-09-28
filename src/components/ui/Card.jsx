import { motion } from "framer-motion";

export function Card({
  children,
  className = "",
  hover = true,
  padding = "p-6",
  ...props
}) {
  return (
    <motion.div
      className={`bg-card rounded-xl border border-slate-200 ${padding} ${className}`}
      whileHover={hover ? { y: -4, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardImage({
  src,
  alt,
  className = "",
  placeholder = "Add Project Photo",
}) {
  if (!src) {
    return (
      <div className={`w-full aspect-video bg-slate-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-4 text-muted">
          <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm font-medium">{placeholder}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full aspect-video object-cover rounded-lg ${className}`}
      loading="lazy"
    />
  );
}