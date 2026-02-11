import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Programming",
    items: ["Python", "C++ (Data Structures & Fundamentals)", "HTML & CSS"],
  },
  {
    title: "Machine Learning",
    items: ["Supervised Learning", "Unsupervised Learning", "Logistic Regression", "Model Evaluation", "Feature Engineering (Basic)", "Classification Techniques"],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL Processes",
      "Data Cleaning",
      "Data Transformation",
      "Data Warehousing",
      "Data Pipeline Architecture",
      "Database Management",
    ],
  },
  {
    title: "Tools",
    items: ["SQL", "Google Colab", "Git & GitHub", "Data Handling Tools", "Microsoft Excel"],
  },
  {
    title: "Soft Skills",
    items: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Communication", "Time Management", "Fast Learner"],
  },
  {
    title: "Languages",
    items: ["Arabic — Native", "English — Fluent"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Technical Skills</h2>
          <div className="glow-line w-12 mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-lg p-5"
            >
              <h3 className="font-mono text-xs text-primary tracking-wider uppercase mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
