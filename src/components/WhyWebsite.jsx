import { motion } from "framer-motion";
import { Search, Clock, Sparkles, MessageSquare } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { whyWebsite } from "../data/content";

const icons = { Search, Clock, Sparkles, MessageSquare };

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyWebsite() {
  return (
    <section className="relative py-24 sm:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={whyWebsite.eyebrow}
          title={whyWebsite.title}
          description={whyWebsite.description}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWebsite.items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-amber)]">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-base font-semibold text-[var(--color-cream)]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {item.description}
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
