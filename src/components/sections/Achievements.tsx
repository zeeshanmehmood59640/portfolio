"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Trophy, CheckCircle, Award, ExternalLink, Medal, BadgeCheck, GraduationCap, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { achievement, entrepreneurialAward, certifications, azureCertification, bestStudentAward } from "@/lib/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Achievements() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

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
            {/* Best Student Award */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl border border-green-400/30 dark:border-green-400/20 p-5 sm:p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(34,197,94,0.12)] transition-all duration-500 bg-white/60 dark:bg-[#300b40]/15"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-green-400/10 blur-3xl" aria-hidden="true" />

              {/* 50/50: text left, photo right */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left — text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-400/15 dark:bg-green-400/10 flex items-center justify-center">
                      <GraduationCap size={24} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-400/15 text-green-700 dark:text-green-300 text-xs font-bold font-heading mb-2">
                        <GraduationCap size={11} /> Best Student Award
                      </div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-dark-text dark:text-[#FAF9E0]">
                        {bestStudentAward.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-primary dark:text-secondary font-heading font-semibold mb-1">
                    {bestStudentAward.subtitle}
                  </p>
                  <p className="text-xs text-dark-header/60 dark:text-[#FAF9E0]/60 font-heading mb-4">
                    {bestStudentAward.role}
                  </p>
                  <ul className="space-y-2.5">
                    {bestStudentAward.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80">
                        <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — photo (click to open lightbox) */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  aria-label="View full award photo"
                  className="flex-1 group relative min-h-[260px] rounded-xl overflow-hidden border border-green-400/20 dark:border-green-400/15 cursor-zoom-in"
                >
                  <Image
                    src={bestStudentAward.photo}
                    alt="Zeeshan Mehmood receiving the Best Student Award at Thomas More graduation ceremony"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn size={36} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </button>

                {/* Lightbox */}
                {lightboxOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                    onClick={() => setLightboxOpen(false)}
                  >
                    <button
                      onClick={() => setLightboxOpen(false)}
                      aria-label="Close photo"
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                    <div
                      className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={bestStudentAward.photo}
                        alt="Zeeshan Mehmood receiving the Best Student Award at Thomas More graduation ceremony"
                        width={1200}
                        height={900}
                        className="object-contain w-full h-full max-h-[90vh]"
                        priority
                      />
                    </div>
                  </div>
                )}

              </div>
            </motion.div>

            {/* Azure AZ-900 Certification */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl border border-blue-400/30 dark:border-blue-400/20 p-5 sm:p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.12)] transition-all duration-500 bg-white/60 dark:bg-[#300b40]/15"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl" aria-hidden="true" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-400/15 dark:bg-blue-400/10 flex items-center justify-center">
                  <BadgeCheck size={22} className="text-blue-500 dark:text-blue-400 sm:hidden" />
                  <BadgeCheck size={28} className="text-blue-500 dark:text-blue-400 hidden sm:block" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/15 text-blue-700 dark:text-blue-300 text-xs font-bold font-heading mb-3">
                    <BadgeCheck size={11} /> {azureCertification.issuer} Certification
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-dark-text dark:text-[#FAF9E0] mb-1">
                    {azureCertification.title}
                  </h3>
                  <p className="text-sm text-primary dark:text-secondary font-heading font-semibold mb-4">
                    {azureCertification.date}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {azureCertification.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80">
                        <CheckCircle size={16} className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={azureCertification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

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
                  <p className="text-sm text-primary dark:text-secondary font-heading font-semibold mb-1">
                    {achievement.subtitle}
                  </p>
                  <p className="text-xs text-dark-header/60 dark:text-[#FAF9E0]/60 font-heading mb-4">
                    {achievement.role}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {achievement.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80">
                        <CheckCircle size={16} className="text-yellow-500 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={achievement.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400 hover:underline"
                  >
                    View LinkedIn Post <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Entrepreneurial Award */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl border border-orange-400/30 dark:border-orange-400/20 p-5 sm:p-8 overflow-hidden hover:shadow-[0_0_40px_rgba(251,146,60,0.12)] transition-all duration-500 bg-white/60 dark:bg-[#300b40]/15"
            >
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl" aria-hidden="true" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-400/15 dark:bg-orange-400/10 flex items-center justify-center">
                  <Medal size={22} className="text-orange-500 dark:text-orange-400 sm:hidden" />
                  <Medal size={28} className="text-orange-500 dark:text-orange-400 hidden sm:block" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-400/15 text-orange-700 dark:text-orange-300 text-xs font-bold font-heading mb-3">
                    <Medal size={11} /> Entrepreneurial Award
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-dark-text dark:text-[#FAF9E0] mb-1">
                    {entrepreneurialAward.title}
                  </h3>
                  <p className="text-sm text-primary dark:text-secondary font-heading font-semibold mb-1">
                    {entrepreneurialAward.subtitle}
                  </p>
                  <p className="text-xs text-dark-header/60 dark:text-[#FAF9E0]/60 font-heading mb-3">
                    {entrepreneurialAward.role}
                  </p>
                  <p className="text-sm text-dark-header/75 dark:text-[#FAF9E0]/80 mb-4 leading-relaxed">
                    {entrepreneurialAward.description}
                  </p>

                  <ul className="space-y-2.5 mb-5">
                    {entrepreneurialAward.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-dark-header/75 dark:text-[#FAF9E0]/80">
                        <CheckCircle size={16} className="text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={entrepreneurialAward.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    View LinkedIn Post <ExternalLink size={14} />
                  </a>
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
