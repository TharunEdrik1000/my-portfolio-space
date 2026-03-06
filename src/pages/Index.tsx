import { motion } from "framer-motion";
import heroArt from "@/assets/hero-art.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const projects = [
  {
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete visual identity for a sustainable fashion label.",
    year: "2025",
  },
  {
    title: "Dashboard Redesign",
    category: "Product Design",
    description: "Reimagining analytics for a fintech startup.",
    year: "2024",
  },
  {
    title: "Editorial Platform",
    category: "Web Design",
    description: "A modern publishing platform for independent writers.",
    year: "2024",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-background/80 backdrop-blur-md">
        <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          Portfolio
        </span>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center w-full max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary text-sm font-medium uppercase tracking-widest">
              Designer & Developer
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Creating digital experiences that{" "}
              <span className="italic text-primary">resonate</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg max-w-md leading-relaxed">
              I craft thoughtful interfaces and brand identities with a focus on clarity, beauty, and purpose.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
              >
                View selected work ↓
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <img
              src={heroArt}
              alt="Abstract geometric artwork"
              className="w-full rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-16"
          >
            Selected Work
          </motion.h2>
          <div className="space-y-0 divide-y divide-border">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group grid md:grid-cols-[1fr_2fr_1fr] gap-4 py-10 cursor-pointer hover:bg-secondary/30 transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-muted-foreground text-sm">{project.year}</span>
                  <span className="text-xs text-primary uppercase tracking-wider">{project.category}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className="flex items-center md:justify-end">
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    View project →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-12 py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">About</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a designer and developer with over 8 years of experience building digital products. I believe great design lives at the intersection of aesthetics and usability.
              </p>
              <p>
                Currently available for freelance projects and collaborations. Let's create something meaningful together.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg mb-4 text-primary">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "React", "TypeScript", "Figma", "Branding", "Motion Design", "Prototyping"].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-secondary rounded-full text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-4 text-primary">Experience</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Senior Designer — Studio Co.</span><span>2022–Present</span></div>
                <div className="flex justify-between"><span>Product Designer — TechStart</span><span>2019–2022</span></div>
                <div className="flex justify-between"><span>Junior Designer — Agency X</span><span>2017–2019</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Let's work <span className="italic text-primary">together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Have a project in mind? I'd love to hear about it.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>© 2026 Portfolio. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Dribbble</a>
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
