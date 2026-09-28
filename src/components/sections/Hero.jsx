import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TagGroup } from "../ui/Tag";
import { personalInfo, heroBadges } from "../../data/portfolio";

const CircuitBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
        <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <g stroke="url(#circuitGradient)" strokeWidth="1" fill="none" className="circuit-line">
      <path d="M50,100 L300,100 M300,100 L300,250 M300,250 L550,250" strokeDasharray="10,5" />
      <path d="M800,150 L1050,150 M1050,150 L1050,300 M1050,300 L800,300" strokeDasharray="8,4" strokeDashoffset="20" />
      <path d="M200,400 L450,400 M450,400 L450,500 M450,500 L700,500" strokeDasharray="12,6" strokeDashoffset="40" />
      <path d="M600,50 L600,200 M600,200 L850,200" strokeDasharray="6,3" strokeDashoffset="10" />
    </g>
    <g fill="#2563EB" opacity="0.5">
      <circle cx="300" cy="100" r="3" />
      <circle cx="300" cy="250" r="3" />
      <circle cx="550" cy="250" r="3" />
      <circle cx="1050" cy="150" r="3" />
      <circle cx="1050" cy="300" r="3" />
      <circle cx="800" cy="300" r="3" />
      <circle cx="450" cy="400" r="3" />
      <circle cx="450" cy="500" r="3" />
      <circle cx="700" cy="500" r="3" />
      <circle cx="600" cy="50" r="3" />
      <circle cx="600" cy="200" r="3" />
      <circle cx="850" cy="200" r="3" />
    </g>
  </svg>
);

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <CircuitBackground />

      <div className="relative max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-accent text-sm font-medium border border-blue-100 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Electronics & Embedded Systems Student
          </motion.span>

          <motion.h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-bold text-text leading-tight tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted font-medium mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.p
            className="text-lg text-slate-500 mb-12 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button size="lg" href="#projects">
              View Projects
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <TagGroup tags={heroBadges} variant="accent" />
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-96 h-96 max-w-[40vw] max-h-[60vh]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          aria-hidden="true"
        >
          <div className="relative w-full h-full">
            <svg
              className="w-full h-full opacity-10"
              viewBox="0 0 400 400"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              <g stroke="#2563EB" strokeWidth="1.5" fill="none" opacity="0.6">
                <path d="M50,200 Q150,100 250,200 T350,200" strokeDasharray="10,5" className="circuit-line" />
                <path d="M200,50 Q300,150 200,250 T200,350" strokeDasharray="8,4" strokeDashoffset="20" className="circuit-line" />
                <path d="M100,300 Q200,200 300,300" strokeDasharray="12,6" strokeDashoffset="40" className="circuit-line" />
              </g>
              <g fill="#2563EB" opacity="0.8">
                <circle cx="50" cy="200" r="4" />
                <circle cx="250" cy="200" r="4" />
                <circle cx="350" cy="200" r="4" />
                <circle cx="200" cy="50" r="4" />
                <circle cx="200" cy="250" r="4" />
                <circle cx="200" cy="350" r="4" />
                <circle cx="100" cy="300" r="4" />
                <circle cx="300" cy="300" r="4" />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-full flex flex-col items-center gap-2 text-muted py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}