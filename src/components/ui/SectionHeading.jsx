import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-4 max-w-2xl ${alignment} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-amber)]">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-[var(--color-cream)]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
