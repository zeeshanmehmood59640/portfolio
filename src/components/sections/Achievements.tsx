"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Trophy, CheckCircle, Award, ExternalLink } from "lucide-react";
import { achievement, certifications } from "@/lib/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
              My <span className="text-primary dark:text-light-header">Achievements</span>
            </h2>
            <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
          </motion.div>

          <div className="flex flex-col gap-6">
            {/* Best Project Award */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl border border-yellow-400/30 dark:border-yellow-400/20 p-5 sm:p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(234,179,8,0.12)] transition-all duration-500 bg-white/60 dark:bg-[#300b40]/15"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-yellow-400/10 blur-3xl" aria-hidden="true" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-yellow-400/15 dark:bg-yellow-400/10 flex items-center justify-center">
                  <Trophy size={22} className="text-yellow-500 dark:text-yellow-400 sm:hidden" />
                  <Trophy size={28} className="text-yellow-500 dark:text-yellow-400 hidden sm:block" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/15 text-yellow-700 dark:text-yellow-300 text-xs font-bold font-heading mb-3">
                    <Trophy size={11} /> Best Project Award
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-dark-text dark:text-[#FAF9E0] mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-primary dark:text-secondary font-heading font-semibold mb-4">
                    {achievement.subtitle}
                  </p>

                  <ul className="space-y-2.5">
                    {achievement.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80">
                        <CheckCircle size={16} className="text-yellow-500 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative rounded-2xl border border-purple-400/30 dark:border-purple-400/20 p-5 sm:p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(147,51,234,0.12)] transition-all duration-500 bg-white/60 dark:bg-[#300b40]/15"
              >
                <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-purple-400/10 blur-3xl" aria-hidden="true" />

                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-400/15 dark:bg-purple-400/10 flex items-center justify-center">
                    <Award size={22} className="text-purple-500 dark:text-purple-400 sm:hidden" />
                    <Award size={28} className="text-purple-500 dark:text-purple-400 hidden sm:block" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/15 text-purple-700 dark:text-purple-300 text-xs font-bold font-heading mb-3">
                      <Award size={11} /> {cert.issuer} Certificate
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-dark-text dark:text-[#FAF9E0] mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-dark-header/75 dark:text-[#FAF9E0]/80 mb-4">
                      {cert.description}
                    </p>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-secondary hover:underline"
                    >
                      View Course <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
