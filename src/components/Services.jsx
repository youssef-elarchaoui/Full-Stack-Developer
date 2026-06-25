import { motion } from "framer-motion";
import { Zap, Store, LayoutGrid, Check } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { services } from "../data/content";

const icons = { Zap, Store, LayoutGrid };

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Ce que je construis"
          title="Une seule mission : transformer les visiteurs en clients."
          description="Chaque projet est adapté aux besoins spécifiques de votre entreprise ; il ne s'agit pas d'un modèle standard unique. Voici par où commencent la plupart des dirigeants."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-colors duration-300 hover:border-[var(--color-amber)]/50"
              >
                {/* Gradient au hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[var(--color-amber)]/[0.04] to-transparent pointer-events-none" />

                {/* Icône */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-amber)] group-hover:border-[var(--color-amber)]/50 transition-colors">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                {/* Titre et description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-[var(--color-cream)]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* ============================================================
                    PRIX (AJOUTÉ)
                ============================================================ */}
                <div className="flex items-center gap-2 py-2">
                  <span className="text-lg font-bold text-[var(--color-amber)]">
                    {service.price}
                  </span>
                  <span className="text-xs text-[var(--color-muted-2)]">
                    {service.price === "Sur devis" ? "" : "TTC"}
                  </span>
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-2.5 pt-2 mt-auto border-t border-[var(--color-border-soft)]">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-sm text-[var(--color-muted)]">
                      <Check size={15} className="text-[var(--color-cyan)] shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}