import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { TagGroup } from "../ui/Tag";
import { featuredProject } from "../../data/portfolio";

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="py-20 md:py-28 bg-bg"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Featured Project
          </span>
          <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            {featuredProject.title}
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            {featuredProject.shortDescription}
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12 p-6 md:p-8 bg-white rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4 md:gap-6 min-w-0">
              <span className="text-4xl md:text-5xl font-bold text-accent/20 font-mono whitespace-nowrap shrink-0">01</span>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-2 uppercase tracking-wider">
                  Embedded Systems
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-text leading-tight">
                  {featuredProject.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted leading-relaxed mb-10">
              {featuredProject.fullDescription}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Problem</h4>
                <p className="text-muted leading-relaxed">{featuredProject.problem}</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-slate-200">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Approach</h4>
                <p className="text-muted leading-relaxed">{featuredProject.approach}</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 mb-10">
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">My Contribution</h4>
              <p className="text-muted leading-relaxed">{featuredProject.myContribution}</p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Technologies</h4>
              <TagGroup tags={featuredProject.technologies} variant="accent" />
            </div>

            {featuredProject.links.github && (
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Button variant="outline" size="sm" href={featuredProject.links.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}