import { motion } from "framer-motion";

const directions = [
  "Advanced Machine Learning",
  "Data Pipelines",
  "SQL & Databases",
  "Scalable Data Systems",
];

const FutureSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Future Direction</h2>
          <div className="glow-line w-12 mb-8" />

          <p className="text-muted-foreground mb-6">
            Currently expanding knowledge across key areas to strengthen end-to-end data capabilities:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {directions.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="glass-card rounded-lg p-4 text-center"
              >
                <span className="text-sm text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;
