import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "NVIDIA DLI — Starting with Deep Learning (2025)",
  "NTI — Machine Learning Course (2025)",
  "Kaggle — Python & Programming Certifications",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Education & Certifications</h2>
          <div className="glow-line w-12 mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-xs text-primary tracking-wider uppercase">Education</h3>
            </div>
            <p className="text-foreground font-medium">B.Sc. Computer Science</p>
            <p className="text-sm text-muted-foreground mt-1">Sadat Academy for Management Sciences</p>
            <p className="text-xs text-text-dim mt-1 font-mono">2024 — Present</p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-xs text-primary tracking-wider uppercase">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
