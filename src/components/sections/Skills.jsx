import { motion } from "framer-motion";
import { Cpu, Zap, Code2, Wrench, Brain } from "lucide-react";
import { skills } from "../../data/portfolio";

const categories = [
  {
    id: "embedded",
    title: "Embedded Systems",
    icon: Cpu,
    color: "blue",
    items: skills.embedded,
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: Zap,
    color: "amber",
    items: skills.electronics,
  },
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    color: "cyan",
    items: skills.programming,
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    color: "purple",
    items: skills.tools,
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: Brain,
    color: "green",
    items: skills.ml,
  },
];

const colorStyles = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100", accent: "bg-blue-500" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100", accent: "bg-amber-500" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-100", accent: "bg-cyan-500" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-100", accent: "bg-purple-500" },
  green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-100", accent: "bg-green-500" },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Skills
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Technical competencies across embedded systems, electronics, programming, and development tools.
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((category, catIndex) => {
            const style = colorStyles[category.color];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                className={`rounded-2xl border p-6 md:p-8 ${style.bg} ${style.border}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${style.accent}`}>
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-text">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group p-4 bg-white rounded-xl border border-slate-100 hover:border-accent/30 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-text">{skill.name}</span>
                        <span className="text-sm font-semibold text-muted">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${style.accent}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}