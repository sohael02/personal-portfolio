import { motion } from "framer-motion";
import { TagGroup } from "../ui/Tag";
import { projects } from "../../data/portfolio";

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export function ProjectCard({ project, index }) {
  const stepNumber = String(index + 2).padStart(2, '0');
  const category = index === 0 ? "Embedded Systems" : "Web & Simulation";

  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-accent/30 transition-colors duration-300">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
          <div className="flex items-center gap-4 md:gap-6 min-w-0">
            <span className="text-3xl md:text-4xl font-bold text-accent/20 font-mono whitespace-nowrap shrink-0">{stepNumber}</span>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-2 uppercase tracking-wider">
                {category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-text leading-tight group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-muted leading-relaxed mb-8">
          {project.shortDescription}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 bg-bg rounded-xl border border-slate-100">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Problem</h4>
            <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-5 bg-bg rounded-xl border border-slate-100">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Approach</h4>
            <p className="text-sm text-muted leading-relaxed">{project.approach}</p>
          </div>
        </div>

        <div className="p-5 bg-bg rounded-xl border border-slate-100 mb-6">
          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">My Contribution</h4>
          <p className="text-sm text-muted leading-relaxed">{project.myContribution}</p>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Technologies</h4>
          <TagGroup tags={project.technologies} variant="accent" className="mb-6" />
          
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-blue-700 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Other Projects
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Additional electronics and software projects demonstrating embedded systems, IoT, and simulation work.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}