import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";

export function Experience() {
  const experience = {
    role: "Web Development Intern",
    company: "Edunet",
    period: "June 2025 – July 2025",
    description: [
      "Completed a Web Development internship focused on building web applications and understanding software development workflows.",
      "Developed MedConnect, a web application for locating nearby medical stores using map APIs.",
      "Collaborated on application development and API integration to improve functionality.",
    ],
    technologies: ["Web Development", "API Integration", "Map APIs"],
    projectName: "MedConnect",
    projectDescription: "A web application for locating nearby medical stores using map APIs.",
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-bg"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Professional experience in web development and software engineering.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
            
            <div className="pl-12 relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent relative z-10">
                  <Briefcase className="w-5 h-5" aria-hidden="true" />
                </div>
                
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-text">{experience.role}</h3>
                      <p className="text-accent font-medium">{experience.company}</p>
                    </div>
                    <time className="text-sm text-muted font-medium whitespace-nowrap shrink-0">
                      {experience.period}
                    </time>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-sm text-muted"
                      >
                        <Code2 className="w-3 h-3" aria-hidden="true" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-4">
                    <p className="text-muted leading-relaxed">
                      <span className="font-medium text-text">{experience.projectName}</span> — {experience.projectDescription}
                    </p>
                    {experience.description.map((desc, index) => (
                      <p key={index} className="text-muted leading-relaxed ml-4 relative">
                        <span className="absolute left-0 top-0">•</span>
                        <span className="ml-2">{desc}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}