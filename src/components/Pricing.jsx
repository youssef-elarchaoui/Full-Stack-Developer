import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { pricing } from "../data/content";

const variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-24 sm:py-32 border-y border-[var(--color-border-soft)] bg-[var(--color-bg-soft)]">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {pricing.plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              custom={i}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col gap-6 rounded-2xl border p-7 ${
                plan.featured
                  ? "border-[var(--color-amber)]/50 bg-[var(--color-surface)] neon-border"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-amber-soft)] px-3 py-1 text-[11px] font-medium text-[#181008]">
                  <Star size={11} fill="currentColor" /> Le plus choisi
                </span>
              )}

              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-display text-lg font-semibold text-[var(--color-cream)]">
                  {plan.title}
                </h3>
                <span className="font-display text-2xl font-semibold text-[var(--color-amber-soft)]">
                  {plan.price}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
                    <Check size={15} className="text-[var(--color-cyan)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full justify-center"
              >
                Demander un devis
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
