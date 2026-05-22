"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, ExternalLink, Code2, Send, CheckCircle, Loader2 } from "lucide-react";
import { personalInfo } from "@/lib/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      setFormState("error");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 dark:block hidden"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at 15% 60%, rgba(71, 0, 95, 0.12), transparent 55%)",
        }}
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="mb-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
              Contact <span className="text-primary dark:text-light-header">Me</span>
            </h2>
            <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-dark-header/70 dark:text-[#FAF9E0]/75 mb-12 max-w-xl">
            Ready to start your next project? Send me a message and I&apos;ll get back to you as soon as possible.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: links */}
            <motion.div variants={fadeUp} className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-5 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/45 hover:shadow-[0_0_24px_rgba(150,104,192,0.22)] hover:-translate-y-1 transition-all duration-300 group bg-white/50 dark:bg-[#300b40]/20 overflow-hidden"
                aria-label={`Email ${personalInfo.email}`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={22} className="text-primary dark:text-secondary" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-dark-text dark:text-[#FAF9E0] text-sm">Email</p>
                  <p className="text-sm text-dark-header/70 dark:text-[#FAF9E0]/75 truncate">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/45 hover:shadow-[0_0_24px_rgba(150,104,192,0.22)] hover:-translate-y-1 transition-all duration-300 group bg-white/50 dark:bg-[#300b40]/20 overflow-hidden"
                aria-label="Zeeshan's LinkedIn profile"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ExternalLink size={22} className="text-primary dark:text-secondary" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-dark-text dark:text-[#FAF9E0] text-sm">LinkedIn</p>
                  <p className="text-sm text-dark-header/70 dark:text-[#FAF9E0]/75 truncate">zeeshanmehmood-08may</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/45 hover:shadow-[0_0_24px_rgba(150,104,192,0.22)] hover:-translate-y-1 transition-all duration-300 group bg-white/50 dark:bg-[#300b40]/20 overflow-hidden"
                aria-label="Zeeshan's GitHub profile"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 dark:bg-secondary/15 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code2 size={22} className="text-primary dark:text-secondary" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-dark-text dark:text-[#FAF9E0] text-sm">GitHub</p>
                  <p className="text-sm text-dark-header/70 dark:text-[#FAF9E0]/75 truncate">zeeshanmehmood59640</p>
                </div>
              </a>
            </motion.div>

            {/* Right: form */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-heading font-semibold text-dark-header dark:text-[#FAF9E0]/85 mb-1.5">
                  Name <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={fields.name}
                  onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-[#9668C0]/25 dark:border-[#9668C0]/30 bg-white/80 dark:bg-[#300b40]/20 text-dark-text dark:text-[#FAF9E0] placeholder-dark-header/40 dark:placeholder-[#FAF9E0]/40 focus:outline-none focus:border-primary dark:focus:border-secondary transition-colors text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-heading font-semibold text-dark-header dark:text-[#FAF9E0]/85 mb-1.5">
                  Email <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-[#9668C0]/25 dark:border-[#9668C0]/30 bg-white/80 dark:bg-[#300b40]/20 text-dark-text dark:text-[#FAF9E0] placeholder-dark-header/40 dark:placeholder-[#FAF9E0]/40 focus:outline-none focus:border-primary dark:focus:border-secondary transition-colors text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-heading font-semibold text-dark-header dark:text-[#FAF9E0]/85 mb-1.5">
                  Message <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={fields.message}
                  onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-[#9668C0]/25 dark:border-[#9668C0]/30 bg-white/80 dark:bg-[#300b40]/20 text-dark-text dark:text-[#FAF9E0] placeholder-dark-header/40 dark:placeholder-[#FAF9E0]/40 focus:outline-none focus:border-primary dark:focus:border-secondary transition-colors text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              {formState === "error" && (
                <p className="text-sm text-red-500 dark:text-red-400" role="alert">
                  Something went wrong. Please try emailing directly.
                </p>
              )}

              {formState === "success" ? (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-heading font-semibold" role="status">
                  <CheckCircle size={18} />
                  Message sent! I&apos;ll be in touch soon.
                </div>
              ) : (
                <motion.button
                  type="submit"
                  disabled={formState === "submitting"}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-heading font-semibold text-sm hover:bg-dark-header disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  aria-label="Send message"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </motion.button>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
