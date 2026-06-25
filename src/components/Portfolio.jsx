import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { portfolio } from "../data/content";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Travaux récents"
          title="Des projets concrets, des entreprises réelles"
          description="Un aperçu de sites et d'applications conçus pour des petites entreprises dans les secteurs de l'alimentation, du voyage, de la beauté et du fitness."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolio.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors duration-300 hover:border-[var(--color-amber)]/40"
            >
              {/* Mock screenshot */}
              <div className={`relative h-52 sm:h-60 bg-gradient-to-br ${project.gradient} bg-[var(--color-surface-2)] overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] rounded-lg border border-white/10 bg-[var(--color-bg)]/60 backdrop-blur-sm p-4 flex flex-col gap-2.5 shadow-2xl group-hover:scale-[1.03] transition-transform duration-500">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    </div>
                    <div className="h-2 w-2/3 rounded-full bg-white/25" />
                    <div className="h-12 rounded-md bg-white/10" />
                    <div className="flex gap-2">
                      <div className="h-5 w-16 rounded-full bg-white/20" />
                      <div className="h-5 w-10 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6 flex-1">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs uppercase tracking-wide text-[var(--color-amber)]">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-cream)]">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] rounded-md border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-2 py-1 text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[var(--color-border-soft)]">
                  <a
                    href={project.demoUrl}
                    target="_blanck"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cream)] hover:text-[var(--color-amber-soft)] transition-colors"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
                  >
                    <FaGithub size={15} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
