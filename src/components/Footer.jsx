import { Mail, X as XIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "./ui/Container";
import StatusDot from "./ui/StatusDot";
import { brand, nav } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-soft)] py-12">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="font-mono text-[var(--color-amber)] text-base">{"</>"}</span>
              <span className="font-display text-base font-semibold text-[var(--color-cream)]">
                {brand.name}
              </span>
            </a>
            <p className="text-sm text-[var(--color-muted)] max-w-xs">{brand.tagline}</p>
            <StatusDot className="mt-1 self-start" />
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-cream)] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {[
              { icon: FaGithub, href: brand.github, label: "GitHub" },
              { icon: FaLinkedin, href: brand.linkedin, label: "LinkedIn" },
              { icon: XIcon, href: brand.twitter, label: "X" },
              { icon: Mail, href: `mailto:${brand.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-cream)] hover:border-[var(--color-amber)]/40 transition-colors"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-[var(--color-border-soft)] text-xs text-[var(--color-muted-2)]">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span className="font-mono">Designed &amp; built with React, Tailwind &amp; Framer Motion</span>
        </div>
      </Container>
    </footer>
  );
}
