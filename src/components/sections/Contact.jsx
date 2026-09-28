import { motion } from "framer-motion";
import { Mail, Code, ExternalLink, Download, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { personalInfo } from "../../data/portfolio";

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "blue",
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/sohaelshaik",
      href: personalInfo.linkedin,
      color: "blue",
      external: true,
    },
    {
      icon: GitHubIcon,
      label: "GitHub",
      value: "github.com/sohaelshaik",
      href: personalInfo.github,
      color: "slate",
      external: true,
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/sohaelshaik",
      href: personalInfo.leetcode,
      color: "amber",
      external: true,
    },
  ];

  const colorStyles = {
    blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100", iconBg: "bg-blue-100" },
    slate: { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-100", iconBg: "bg-slate-100" },
    amber: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100", iconBg: "bg-amber-100" },
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-bg"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            I&apos;m always open to discussing internship opportunities, interesting projects, or electronics engineering challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactItems.map((item, index) => {
            const style = colorStyles[item.color];
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${style.bg} ${style.border} ${item.external ? "hover:border-accent/30" : "hover:border-accent/30"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${style.iconBg} flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${style.text}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="font-medium text-text truncate group-hover:text-accent transition-colors">{item.value}</p>
                  </div>
                  {item.external && (
                    <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="p-8 md:p-12 rounded-2xl bg-white border border-slate-200 text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-text mb-4">Get in Touch</h3>
          <p className="text-muted mb-8">
            My resume is available for download below. Feel free to reach out via email or any of the channels above for internship opportunities or project discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/resume.pdf" download="Sohael_Shaik_Resume.pdf">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}