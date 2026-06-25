import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2, X as XIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";
import { brand, projectTypes } from "../data/content";

// ============================================================
// IMPORT EMAILJS
// ============================================================
import emailjs from '@emailjs/browser';

const inputClasses =
  "w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-3 text-sm text-[var(--color-cream)] placeholder:text-[var(--color-muted-2)] outline-none transition-colors focus:border-[var(--color-amber)]/60 focus:ring-1 focus:ring-[var(--color-amber)]/30";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    projectType: projectTypes[0], 
    message: "" 
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    // ============================================================
    // ENVOI AVEC EMAILJS
    // ============================================================
    const serviceId = "service_youssef";        // اسم الخدمة لي صنعتها
    const templateId = "template_7ly7cao";      // اسم القالب لي صنعته
    const publicKey = 'l408Nrzthl5h5j0fC';       // تلقاها فـ Dashboard > API Keys

    const templateParams = {
      name: form.name,
      email: form.email,
      projectType: form.projectType,
      message: form.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("✅ Email envoyé avec succès !", response);
        setStatus("success");
      })
      .catch((error) => {
        console.error("❌ Erreur lors de l'envoi :", error);
        setStatus("idle");
        alert("Une erreur s'est produite. Veuillez réessayer.");
      });
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20">
          {/* ============================================================
              COLONNE GAUCHE
          ============================================================ */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Let's talk"
              title="Ready to stop losing customers to a bad website?"
              description="Tell me about your business and what's not working. I'll reply within one business day with honest feedback — no pressure, no obligation."
              align="left"
            />

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-3 text-sm text-[var(--color-cream)] hover:text-[var(--color-amber-soft)] transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <Mail size={16} className="text-[var(--color-amber)]" />
                </span>
                {brand.email}
              </a>

              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: FaGithub, href: brand.github, label: "GitHub" },
                  { icon: FaLinkedin, href: brand.linkedin, label: "LinkedIn" },
                  { icon: XIcon, href: brand.twitter, label: "X" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-cream)] hover:border-[var(--color-amber)]/40 transition-colors"
                  >
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ============================================================
              FORMULAIRE
          ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 size={40} className="text-[var(--color-cyan)]" />
                <h3 className="font-display text-xl font-semibold text-[var(--color-cream)]">
                  Message envoyé ✅
                </h3>
                <p className="text-sm text-[var(--color-muted)] max-w-sm">
                  Merci {form.name.split(" ")[0] || "à vous"} ! Je vous répondrai à {form.email} sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono uppercase tracking-wide text-[var(--color-muted)]">
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Maria Santos"
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-wide text-[var(--color-muted)]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="maria@yourbusiness.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-xs font-mono uppercase tracking-wide text-[var(--color-muted)]">
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[var(--color-bg-soft)]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono uppercase tracking-wide text-[var(--color-muted)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Parlez-moi un peu de votre activité et de ce que vous recherchez…"
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <Button
                  as="button"
                  type="submit"
                  size="lg"
                  icon={status === "submitting" ? Loader2 : Send}
                  iconClassName={status === "submitting" ? "animate-spin" : ""}
                  className="self-start mt-1"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}