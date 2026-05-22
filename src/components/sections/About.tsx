"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BookOpen, Globe, Heart } from "lucide-react";
import { aboutBio, languages, hobbies } from "@/lib/content";

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function About() {
  const paragraphs = aboutBio.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Section heading */}
          <motion.div variants={fadeLeft} className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
              About <span className="text-primary dark:text-light-header">Me</span>
            </h2>
            <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Bio */}
            <motion.div variants={fadeLeft} className="md:col-span-2 space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-dark-header/80 dark:text-[#FAF9E0]/85 leading-relaxed text-base">
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Info cards */}
            <motion.div variants={fadeRight} className="space-y-4">
              <div className="rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 p-5 hover:shadow-[0_0_20px_rgba(97,0,139,0.15)] transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <Globe size={18} className="text-primary dark:text-secondary" />
                  <h3 className="font-heading font-semibold text-dark-header dark:text-[#FAF9E0]">Languages</h3>
                </div>
                <ul className="space-y-1">
                  {languages.map((lang) => (
                    <li key={lang} className="text-sm text-dark-header/70 dark:text-[#FAF9E0]/80">
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 p-5 hover:shadow-[0_0_20px_rgba(97,0,139,0.15)] transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={18} className="text-primary dark:text-secondary" />
                  <h3 className="font-heading font-semibold text-dark-header dark:text-[#FAF9E0]">Hobbies</h3>
                </div>
                <ul className="space-y-1">
                  {hobbies.map((h) => (
                    <li key={h} className="text-sm text-dark-header/70 dark:text-[#FAF9E0]/80">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 p-5 hover:shadow-[0_0_20px_rgba(97,0,139,0.15)] transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={18} className="text-primary dark:text-secondary" />
                  <h3 className="font-heading font-semibold text-dark-header dark:text-[#FAF9E0]">Status</h3>
                </div>
                <p className="text-sm text-dark-header/70 dark:text-[#FAF9E0]/80">
                  Graduating June 2026 · Open to junior developer roles in Belgium
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
