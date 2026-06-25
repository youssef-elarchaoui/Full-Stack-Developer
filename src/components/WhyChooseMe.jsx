import { motion } from "framer-motion";
import { Rocket, Sparkles, Search, Smartphone, ShieldCheck } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { whyChooseMe } from "../data/content";

const icons = { Rocket, Sparkles, Search, Smartphone, ShieldCheck };

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyChooseMe() {
  return (
    <section className="relative py-24 sm:py-32 border-y border-[var(--color-border-soft)] bg-[var(--color-bg-soft)]">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Pourquoi travailler avec moi"
          title="Conçu comme un produit, et non comme une faveur."
          description="Les mêmes exigences qu'une entreprise SaaS applique à son propre site — transposées à une entreprise de votre taille, à un tarif cohérent."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {whyChooseMe.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <Icon size={20} strokeWidth={1.75} className="text-[var(--color-amber)]" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-base font-semibold text-[var(--color-cream)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
