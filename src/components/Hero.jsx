import { motion } from "framer-motion";
import { ArrowRight, Eye, Globe2, TrendingUp } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import StatusDot from "./ui/StatusDot";
import { hero } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-[var(--color-amber)]/15 blur-[120px] animate-drift" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-[var(--color-cyan)]/10 blur-[120px] animate-drift" style={{ animationDelay: "2s" }} />
      </div>

      <Container className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7 max-w-xl"
        >
          <motion.div variants={item}>
            <StatusDot label={hero.eyebrow} />
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.06] tracking-tight text-[var(--color-cream)]"
          >
            {hero.headline[0]}{" "}
            <span className="neon-text text-[var(--color-amber-soft)]">{hero.headline[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed"
          >
            {hero.sub}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 pt-1">
            <Button href={hero.primaryCta.href} size="lg" icon={ArrowRight}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-8 pt-6 border-t border-[var(--color-border-soft)] mt-2"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl font-semibold text-[var(--color-cream)]">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--color-muted-2)] font-mono uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Signature visual: a "sign" coming to life — browser mockup with neon glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] neon-border overflow-hidden animate-flicker">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex items-center gap-1.5 rounded-md bg-[var(--color-bg)] px-3 py-1 text-[11px] text-[var(--color-muted-2)] font-mono">
                <Globe2 size={11} /> yourbusiness.com
              </div>
            </div>

            {/* Mock page content */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-[var(--color-amber)]/70" />
                <div className="flex gap-3">
                  <div className="h-2 w-10 rounded-full bg-[var(--color-border)]" />
                  <div className="h-2 w-10 rounded-full bg-[var(--color-border)]" />
                  <div className="h-2 w-10 rounded-full bg-[var(--color-border)]" />
                </div>
              </div>

              <div className="rounded-xl h-40 bg-gradient-to-br from-[var(--color-amber)]/25 via-[var(--color-surface-2)] to-[var(--color-cyan)]/15 border border-[var(--color-border)] flex items-end p-4">
                <div className="flex flex-col gap-2 w-2/3">
                  <div className="h-3 w-3/4 rounded-full bg-[var(--color-cream)]/80" />
                  <div className="h-2 w-1/2 rounded-full bg-[var(--color-cream)]/40" />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-9 flex-1 rounded-lg bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-amber-soft)]" />
                <div className="h-9 w-24 rounded-lg border border-[var(--color-border)]" />
              </div>

              <div className="grid grid-cols-3 gap-3 pt-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-16 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]" />
                ))}
              </div>
            </div>
          </div>

          {/* Floating proof cards */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] glow-cyan px-4 py-3 animate-drift"
          >
            <TrendingUp size={16} className="text-[var(--color-cyan)]" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-mono text-[var(--color-cream)]">+38% inquiries</span>
              <span className="text-[10px] text-[var(--color-muted-2)]">since launch</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] neon-border px-4 py-3 animate-drift"
            style={{ animationDelay: "1.5s" }}
          >
            <Eye size={16} className="text-[var(--color-amber)]" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-mono text-[var(--color-cream)]">Live 24/7</span>
              <span className="text-[10px] text-[var(--color-muted-2)]">while you sleep</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
