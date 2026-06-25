import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "../data/content";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Résultats obtenus par les clients"
          title="Les propriétaires remarquent la différence."
          description="Quelques mots de la part des personnes qui dirigent les entreprises à l'origine des projets ci-dessus."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
            >
              <Quote size={26} className="text-[var(--color-amber)]/70" />
              <p className="text-[var(--color-cream)]/90 leading-relaxed text-[15px] flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border-soft)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] font-mono text-xs text-[var(--color-amber-soft)]">
                  {initials(t.name)}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-medium text-[var(--color-cream)]">{t.name}</span>
                  <span className="text-xs text-[var(--color-muted)]">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
