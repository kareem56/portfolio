import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  problem: string;
  process: string;
  result: string;
  tools: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "Logistic Regression Classification",
    problem: "Binary classification problem requiring accurate prediction on structured data.",
    process: "Data cleaning, feature selection, model training with Logistic Regression, and systematic evaluation.",
    result: "Achieved measurable classification accuracy with clear performance metrics and confusion matrix analysis.",
    tools: ["Python", "scikit-learn", "pandas"],
    github: "https://github.com/kareem56",
  },
  {
    title: "Bisecting K-Means Clustering",
    problem: "Unsupervised data clustering on unlabeled datasets.",
    process: "Iterative splitting method — recursively bisecting the largest cluster to achieve optimal grouping.",
    result: "Generated cluster visualizations with performance analysis and silhouette score discussion.",
    tools: ["Python", "NumPy"],
    github: "https://github.com/kareem56",
  },
  {
    title: "Data Engineering — ETL Pipeline",
    problem: "Raw, unstructured dataset requiring cleaning and transformation for downstream analysis.",
    process: "Built an ETL-style pipeline: ingestion of raw data, cleaning null values and duplicates, transforming schema, exporting structured output.",
    result: "Produced a clean, analysis-ready dataset with documented performance optimization decisions.",
    tools: ["Python", "Pandas"],
    github: "https://github.com/kareem56",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Projects</h2>
          <div className="glow-line w-12 mb-10" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-mono text-xs text-primary tracking-wider uppercase block mb-1">Problem</span>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-primary tracking-wider uppercase block mb-1">Process</span>
                  <p className="text-muted-foreground">{project.process}</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-primary tracking-wider uppercase block mb-1">Result</span>
                  <p className="text-muted-foreground">{project.result}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs px-2.5 py-1 rounded bg-secondary text-secondary-foreground font-mono">
                    {tool}
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

export default ProjectsSection;
