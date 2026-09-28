import { motion } from "framer-motion";
import { Lightbulb, Cpu, Box, Code, CheckCircle, Zap } from "lucide-react";
import { buildProcess } from "../../data/portfolio";

const icons = {
  Lightbulb,
  Cpu,
  Box,
  Code,
  CheckCircle,
  Zap,
};

export function BuildProcess() {
  return (
    <section
      id="build-process"
      className="py-20 md:py-28 bg-bg"
      aria-labelledby="build-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="build-heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Build Process
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            How I take an idea from concept to working prototype — a systematic approach to embedded systems development.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {buildProcess.map((step, index) => {
              const Icon = icons[step.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  className={`relative flex lg:flex-row ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-start gap-8`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div
                    className={`flex-1 lg:w-1/2 ${isEven ? "lg:pr-12 text-right" : "lg:pl-12"}`}
                  >
                    <div className={`inline-block ${isEven ? "lg:mr-8" : "lg:ml-8"}`}>
                      <span className="text-4xl md:text-5xl font-bold text-accent/20 font-mono">
                        {step.step}
                      </span>
                    </div>
                    <div className={`mt-4 ${isEven ? "lg:text-right" : ""}`}>
                      <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                      <p className="text-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent relative z-10 mx-auto lg:mx-0">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>

                  <div className={`flex-1 lg:w-1/2 ${!isEven ? "lg:pr-12 text-right" : "lg:pl-12"}`}>
                    <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                      <svg
                        className="w-full h-full opacity-10"
                        viewBox="0 0 200 200"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <pattern id={`grid-${step.step}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" />
                          </pattern>
                        </defs>
                        <rect width="200" height="200" fill="url(#grid-01)" />
                        <g stroke="#2563EB" strokeWidth="1" fill="none" opacity="0.4">
                          <path d="M20,100 Q60,50 100,100 T180,100" strokeDasharray="8,4" className="circuit-line" />
                          <path d="M100,20 Q150,60 100,100 T100,180" strokeDasharray="6,3" strokeDashoffset="15" className="circuit-line" />
                          <path d="M50,150 Q100,100 150,150" strokeDasharray="10,5" strokeDashoffset="25" className="circuit-line" />
                        </g>
                        <g fill="#2563EB" opacity="0.6">
                          <circle cx="20" cy="100" r="3" />
                          <circle cx="100" cy="100" r="3" />
                          <circle cx="180" cy="100" r="3" />
                          <circle cx="100" cy="20" r="3" />
                          <circle cx="100" cy="180" r="3" />
                          <circle cx="50" cy="150" r="3" />
                          <circle cx="150" cy="150" r="3" />
                        </g>
                      </svg>
                      <div className="absolute inset-4 bg-white/50 rounded-lg" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}