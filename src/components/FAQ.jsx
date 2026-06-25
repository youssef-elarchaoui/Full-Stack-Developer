import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { faq } from "../data/content";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-[var(--color-border-soft)]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base sm:text-lg text-[var(--color-cream)]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-amber)]"
        >
          <Plus size={14} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm sm:text-[15px] text-[var(--color-muted)] leading-relaxed pr-10">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 border-y border-[var(--color-border-soft)] bg-[var(--color-bg-soft)]">
      <Container className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <SectionHeading
          eyebrow="Questions"
          title="Bon à savoir avant de commencer"
          align="left"
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div>
          {faq.map((item, i) => (
            <FaqItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
