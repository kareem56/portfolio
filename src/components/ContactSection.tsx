import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contacts = [
  { icon: Phone, label: "+20 01125823130", href: "tel:+2001125823130" },
  { icon: Mail, label: "ftk.kareem@gmail.com", href: "mailto:ftk.kareem@gmail.com" },
  { icon: Github, label: "github.com/kareem56", href: "https://github.com/kareem56" },
  { icon: Linkedin, label: "linkedin.com/in/kareemahmedm", href: "https://www.linkedin.com/in/kareemahmedm/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">Contact</h2>
          <div className="glow-line w-12 mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-lg p-5 flex items-center gap-4 hover:border-primary/30 transition-colors duration-300 group"
              >
                <c.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-border">
        <p className="text-xs text-text-dim text-center font-mono">
          Kareem Ahmed — {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
