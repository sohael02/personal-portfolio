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

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" aria-hidden="true" />

          <div className="space-y-10 md:space-y-12">
            {buildProcess.map((step, index) => {
              const Icon = icons[step.icon];
              const isLast = index === buildProcess.length - 1;

              return (
                <motion.div
                  key={step.step}
                  className="relative pl-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-lg z-10 flex-shrink-0" aria-hidden="true" />
                  
                  {!isLast && (
                    <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 to-transparent" aria-hidden="true" />
                  )}

                  <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-accent/30 transition-colors duration-300 relative">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl md:text-4xl font-bold text-accent/20 font-mono whitespace-nowrap shrink-0">
                        {step.step}
                      </span>
                      <div className="p-3 rounded-xl bg-accent/10 text-accent flex-shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
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