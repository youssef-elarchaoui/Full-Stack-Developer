import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import StatusDot from "./ui/StatusDot";
import { brand, nav } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-lg border-b border-[var(--color-border-soft)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between h-18 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="font-mono text-[var(--color-amber)] text-lg">{"</>"}</span>
          <span className="font-display text-lg font-semibold text-[var(--color-cream)] tracking-tight">
            {brand.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <StatusDot />
          <Button href="#contact" size="md">
            Obtenez une consultation 
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[var(--color-cream)] p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[var(--color-bg)]/95 backdrop-blur-lg border-b border-[var(--color-border-soft)]"
          >
            <Container className="flex flex-col gap-5 py-6">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <StatusDot />
              </div>
              <Button href="#contact" size="md" onClick={() => setOpen(false)} className="w-full mt-1">
                Obtenez une consultation 
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
