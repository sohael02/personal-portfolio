import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            ECE undergraduate at SRM University AP interested in embedded systems, electronics, IoT, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-6">About Me</h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I'm Sohael Shaik, an Electronics and Communication Engineering student at SRM University AP (2023–2027) with a CGPA of 8.15/10.
              </p>
              <p>
                My primary focus is on building practical electronic systems — from sensor-driven prototypes to simulation platforms. I enjoy the complete development cycle: designing circuits, writing embedded firmware, and validating working hardware.
              </p>
              <p>
                I'm seeking an Electronics Engineering Internship where I can apply my hands-on experience with Arduino, ESP32, sensor interfacing, and embedded control logic to real-world product development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="bg-bg rounded-2xl border border-slate-200 p-8">
              <h4 className="text-lg font-semibold text-text mb-6">Interests & Focus</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Embedded Systems</h5>
                  <p className="text-sm text-muted leading-relaxed">Arduino, ESP32, IoT, Sensor Interfacing, Control Logic, Real-time Systems</p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Electronics</h5>
                  <p className="text-sm text-muted leading-relaxed">Digital Electronics, Basic Circuit Design, Prototyping, Hardware Debugging</p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Software Development</h5>
                  <p className="text-sm text-muted leading-relaxed">Java, SQL, Backend Logic, Simulation Engines, Version Control (Git)</p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Tools & Workflow</h5>
                  <p className="text-sm text-muted leading-relaxed">VS Code, GitHub, Google Colab, Collaborative Development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}