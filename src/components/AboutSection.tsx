import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">About</h2>
          <div className="glow-line w-12 mb-8" />

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Data practitioner with hands-on exposure to Machine Learning and Data Engineering through NTI and DEPI training. Experienced in data processing, workflow organization, and analytical problem solving using Python, SQL, and data handling tools.
            </p>
            <p>
              Brings a solid technical foundation and adapts quickly to modern data technologies. Supports scalable data systems and delivers reliable results in professional environments.
            </p>
            <p>
              Currently studying Computer Science at Sadat Academy for Management Sciences (2024 -- Present), focusing on building strong foundations in Python, algorithms, and data systems before scaling into advanced AI and engineering domains.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Machine Learning model development and evaluation",
              "Data preprocessing and analysis",
              "Algorithmic problem solving",
              "Structured thinking and logical system design",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm text-secondary-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
