"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, Download, ChevronDown } from "lucide-react";
import Image from "next/image";
import { personalInfo, heroTypingTitles } from "@/lib/content";

function useTypingAnimation(phrases: readonly string[]) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return phrases[phraseIndex].slice(0, charIndex);
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Hero() {
  const typedText = useTypingAnimation(heroTypingTitles);

  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradients */}
      <div
        className="pointer-events-none absolute inset-0 dark:block hidden"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(circle at 18% 30%, rgba(71, 0, 95, 0.2), transparent 50%)",
            "radial-gradient(circle at 82% 72%, rgba(0, 108, 131, 0.16), transparent 52%)",
          ].join(", "),
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 dark:hidden block"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(circle at 20% 25%, rgba(13, 95, 130, 0.09), transparent 54%)",
            "radial-gradient(circle at 78% 78%, rgba(212, 69, 107, 0.07), transparent 52%)",
          ].join(", "),
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(97,0,139,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(97,0,139,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="font-heading text-base font-semibold text-secondary dark:text-secondary mb-3 tracking-widest uppercase"
            >
              Hi, I am
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-dark-text dark:text-[#FAF9E0] leading-tight tracking-tight"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-primary dark:text-light-header">
                {personalInfo.name.split(" ")[1]}
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-4 h-10 flex items-center justify-center md:justify-start">
              <span className="font-heading text-xl md:text-2xl font-semibold text-secondary dark:text-secondary">
                {typedText}
                <span className="inline-block w-0.5 h-6 ml-0.5 bg-secondary align-middle animate-pulse" />
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center md:justify-start gap-2 mt-3 text-sm text-dark-header/70 dark:text-light-header/70"
            >
              <MapPin size={14} className="text-primary dark:text-secondary" />
              <span>{personalInfo.location}</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-dark-header/80 dark:text-[#FAF9E0]/80 mx-auto md:mx-0"
            >
              I have a passion for programming and web development. I find great joy
              in creating functional and aesthetically pleasing web applications —
              from concept to production deployment.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="/zeeshan_cv.pdf"
                download
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-heading font-semibold text-sm hover:bg-dark-header transition-colors"
              >
                <Download size={16} />
                Download CV
              </motion.a>
              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-secondary text-secondary dark:text-light-header dark:border-light-header font-heading font-semibold text-sm hover:bg-secondary hover:text-white dark:hover:bg-secondary/30 transition-all animate-pulse"
                aria-label="Scroll to contact section"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-y-3"
            >
              {[
                { value: "16+", label: "Projects" },
                { value: "1+", label: "Years Exp." },
                { value: "# 2", label: "Award Winner" },
                { value: "# 1", label: "Certification" },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`text-center md:text-left ${i > 0 ? "pl-6 ml-6 border-l border-primary/20 dark:border-light-header/20" : ""}`}
                >
                  <p className="font-heading text-2xl font-bold text-primary dark:text-light-header leading-none">
                    {value}
                  </p>
                  <p className="text-xs text-dark-header/55 dark:text-[#FAF9E0]/60 tracking-wide mt-1 whitespace-nowrap">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl scale-110" />
              <div className="relative w-full h-full rounded-full border-2 border-primary/30 dark:border-light-header/30 overflow-hidden bg-[#300b40]/10">
                <Image
                  src="/assets/shan.jpg"
                  alt="Zeeshan Mehmood — Full-Stack Developer"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={() => scrollTo("#about")}
            aria-label="Scroll to about section"
            className="text-dark-header/40 dark:text-[#FAF9E0]/40 hover:text-primary dark:hover:text-secondary transition-colors animate-bounce"
          >
            <ChevronDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
