import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { process } from "../data/content";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 border-y border-[var(--color-border-soft)] bg-[var(--color-bg-soft)]">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Comment ça marche"
          title="Du premier appel à la mise en service"
          description="Quatre étapes, aucune incertitude. Vous saurez exactement ce qui se passe et à quel moment, à chaque étape."
        />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-[var(--color-border)]" />

          {process.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="relative flex flex-col gap-4"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-amber)]/40 bg-[var(--color-bg)] font-mono text-sm text-[var(--color-amber)]">
                {step.number}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-[var(--color-cream)]">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[11px] text-[var(--color-muted-2)]">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
