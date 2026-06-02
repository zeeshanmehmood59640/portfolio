"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  Trophy,
} from "lucide-react";

/* ─── Animation variants ─────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

/* ─── Carousel ───────────────────────────────────────────────── */

function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    const clamped = (next + images.length) % images.length;
    setDirection(next > index || (index === images.length - 1 && next === 0) ? 1 : -1);
    setIndex(clamped);
  }

  const slideVariants: Variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.38, ease: "easeOut" } },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  return (
    <div>
      {/* Image stage — object-cover + object-top crops to the useful top portion */}
      <div
        className="relative w-full overflow-hidden rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 shadow-md bg-white dark:bg-[#0e0315]"
        style={{ aspectRatio: "16/9" }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${alt} — screenshot ${index + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next */}
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/85 dark:bg-[#0e0315]/85 border border-[#9668C0]/20 dark:border-[#9668C0]/30 text-primary dark:text-light-header hover:bg-white dark:hover:bg-[#0e0315] shadow-sm transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/85 dark:bg-[#0e0315]/85 border border-[#9668C0]/20 dark:border-[#9668C0]/30 text-primary dark:text-light-header hover:bg-white dark:hover:bg-[#0e0315] shadow-sm transition-all"
        >
          <ChevronRight size={18} />
        </button>

        {/* Counter */}
        <span className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-black/50 text-white backdrop-blur-sm">
          {index + 1} / {images.length}
        </span>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 h-2 bg-primary dark:bg-light-header"
                : "w-2 h-2 bg-primary/25 dark:bg-light-header/30 hover:bg-primary/50 dark:hover:bg-light-header/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */

type Tab = "visit" | "rnd";

const visitImages = [
  "/assets/visit/1.png",
  "/assets/visit/2.png",
  "/assets/visit/3.png",
  "/assets/visit/4.png",
  "/assets/visit/5.png",
];
const rndImages = [
  "/assets/rnd/1.png",
  "/assets/rnd/2.png",
  "/assets/rnd/3.png",
  "/assets/rnd/4.png",
  "/assets/rnd/5.png",
];

const portalFeatures = [
  "Calendar-based booking with Morning, Afternoon, and Evening time blocks",
  "Role-based access for 4 user roles: Employee, Admin, Manager, and Operations",
  "Approval and rejection workflows with comments",
  "Real-time in-app notifications using SignalR",
  "Email notifications via Microsoft Graph API",
  "Room preparation checklist management for Operations",
  "Admin calendar management — blocking days, setting day status",
  "Reporting and statistics dashboard with charts",
  "Complete audit logbook with advanced filtering",
  "User management with permission controls",
  "Azure deployment with Dev / QA / Production CI/CD pipelines",
];

const rndFeatures = [
  "4-step formulation creation wizard",
  "Automatic ingredient weight calculations and parts calculator",
  "Dynamic test definitions with flexible field types",
  "Test result registration and tracking",
  "Bulk operations across multiple formulations",
  "Advanced multi-criteria search with dynamic LINQ expressions",
  "Granular per-user permission control (View, Add, Edit, Delete, Tests)",
  "Copy existing formulations for efficient duplication",
];

const projectData: Record<
  Tab,
  { images: string[]; subtitle: string; features: string[] }
> = {
  visit: {
    images: visitImages,
    subtitle:
      "Main internship assignment · Sole developer · Full responsibility from analysis to production deployment",
    features: portalFeatures,
  },
  rnd: {
    images: rndImages,
    subtitle:
      "Additional MVP · Delivered independently after completing the main project",
    features: rndFeatures,
  },
};

const tabLabels: Record<Tab, string> = {
  visit: "Visit Request Portal",
  rnd: "R&D Formulation Database",
};

const techStack = [
  "ASP.NET Core 8",
  "C#",
  "Razor Pages",
  "Entity Framework Core",
  "Azure SQL Server",
  "SignalR",
  "Microsoft Graph API",
  "Microsoft Entra ID",
  "Azure App Service",
  "Azure Key Vault",
  "Application Insights",
  "Azure Bicep (IaC)",
  "Azure DevOps CI/CD",
  "Tailwind CSS",
  "JavaScript",
  "Figma",
];

const documents = [
  {
    label: "Project Plan",
    description:
      "Project scope, planning, objectives, and timeline for the internship assignment.",
    href: "/docs/project-plan.pdf",
    emoji: "📋",
  },
  {
    label: "Realization Document (Thesis)",
    description:
      "Full 5W1H technical report — Who, What, Where, When, Why, and How.",
    href: "/docs/realization.pdf",
    emoji: "📖",
  },
  {
    label: "Reflection",
    description:
      "Critical reflection on the internship experience, learnings, and personal growth.",
    href: "/docs/reflection.pdf",
    emoji: "🔍",
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export function InternshipContent() {
  const [activeTab, setActiveTab] = useState<Tab>("visit");

  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">

      {/* Back link */}
      <motion.div initial="hidden" animate="visible" variants={fadeLeft}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-dark-header/60 dark:text-light-header/60 hover:text-primary dark:hover:text-light-header transition-colors mb-8"
        >
          <ArrowLeft size={15} />
          Back to Portfolio
        </Link>
      </motion.div>

      {/* Page header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mb-14"
      >
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-5">
          <span className="px-3 py-1 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary dark:bg-secondary/20 dark:text-light-header border border-primary/20 dark:border-secondary/30">
            Internship
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-heading font-semibold bg-primary/10 text-primary dark:bg-secondary/20 dark:text-light-header border border-primary/20 dark:border-secondary/30">
            22 Feb – 22 May 2026
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0] leading-tight mb-3"
        >
          App Developer Intern —{" "}
          <span className="text-primary dark:text-light-header">Soudal NV</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-3 w-16 border-2 border-primary dark:border-secondary mb-6"
        />

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-6 text-sm text-dark-header/70 dark:text-light-header/70"
        >
          <span className="flex items-center gap-2">
            <Building2 size={15} className="text-primary dark:text-secondary" />
            Soudal NV, Turnhout, Belgium
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={15} className="text-primary dark:text-secondary" />
            22 February – 22 May 2026 · 13 weeks
          </span>
        </motion.div>
      </motion.div>

      {/* ── Summary ─────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="mb-16"
      >
        <motion.h2
          variants={fadeLeft}
          className="font-heading text-2xl md:text-3xl font-bold text-dark-text dark:text-[#FAF9E0] mb-2"
        >
          Summary
        </motion.h2>
        <motion.div
          variants={fadeLeft}
          className="w-12 border-2 border-primary dark:border-secondary mb-7"
        />

        <motion.div
          variants={stagger}
          className="space-y-4 text-dark-header/80 dark:text-[#FAF9E0]/85 leading-relaxed"
        >
          <motion.p variants={fadeUp}>
            During my 13-week internship at <strong>Soudal NV</strong> — a
            global manufacturer of sealants, adhesives, and polyurethane foams
            headquartered in Turnhout — I was embedded in the IT department as
            an independent developer. I held full responsibility for the entire
            project lifecycle of each assignment: stakeholder requirements
            analysis, use-case modelling, Figma prototyping, database design,
            full-stack implementation, and Microsoft Azure cloud deployment.
          </motion.p>

          <motion.p variants={fadeUp}>
            My primary assignment was the <strong>Visit Request Portal</strong>,
            an enterprise internal web application that replaced the informal,
            email-based visitor scheduling process at the Soudal Turnhout campus
            with a structured, role-based digital workflow. The application
            served four user roles — Employee, Admin, Manager, and Operations —
            and provided a complete visitor management system including a
            calendar booking interface, approval and rejection workflows,
            real-time SignalR notifications, Microsoft Graph API email
            integration, room preparation checklists, reporting dashboards, and
            a full audit logbook. The system was deployed to Microsoft Azure
            using Azure Bicep for Infrastructure-as-Code, with separate Dev, QA,
            and Production environments managed via Azure DevOps CI/CD pipelines.
          </motion.p>

          <motion.p variants={fadeUp}>
            After delivering the main project ahead of schedule, I was given the
            opportunity to build an additional MVP: the{" "}
            <strong>R&D Formulation Database</strong>, a centralized system for
            Soudal's Research & Development department to manage chemical
            formulation records. This replaced fragmented spreadsheet-based
            tracking with a structured, permission-controlled application
            featuring a multi-step creation wizard, automatic weight
            calculations, dynamic test definitions, bulk operations, and advanced
            multi-criteria search.
          </motion.p>

          <motion.p variants={fadeUp}>
            Both applications were built with{" "}
            <strong>ASP.NET Core 8, Razor Pages, and C#</strong>, backed by
            Azure SQL Server via Entity Framework Core, and secured with
            Microsoft Entra ID authentication. The Visit Request Portal met{" "}
            <strong>100% of its defined stakeholder requirements</strong> at the
            formal acceptance review.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* ── Projects (tabbed) ───────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="mb-16"
      >
        <motion.h2
          variants={fadeLeft}
          className="font-heading text-2xl md:text-3xl font-bold text-dark-text dark:text-[#FAF9E0] mb-2"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={fadeLeft}
          className="w-12 border-2 border-primary dark:border-secondary mb-7"
        />

        {/* Tab buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
          {(["visit", "rnd"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-200 ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md dark:bg-secondary dark:text-white"
                  : "border border-primary/30 text-primary dark:text-light-header dark:border-light-header/30 hover:bg-primary/8 dark:hover:bg-secondary/15"
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          >
            <p className="text-sm italic text-dark-header/55 dark:text-light-header/55 mb-5">
              {projectData[activeTab].subtitle}
            </p>

            {/* Carousel — key forces reset to slide 1 on tab change */}
            <Carousel
              key={activeTab}
              images={projectData[activeTab].images}
              alt={tabLabels[activeTab]}
            />

            {/* Features */}
            <div className="mt-8 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 p-6">
              <h3 className="font-heading font-semibold text-dark-header dark:text-[#FAF9E0] mb-5">
                Features Implemented
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {projectData[activeTab].features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-dark-header/80 dark:text-[#FAF9E0]/80"
                  >
                    <CheckCircle
                      size={14}
                      className="text-primary dark:text-secondary mt-0.5 flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* ── Tech Stack ──────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="mb-16"
      >
        <motion.h2
          variants={fadeLeft}
          className="font-heading text-2xl md:text-3xl font-bold text-dark-text dark:text-[#FAF9E0] mb-2"
        >
          Technologies Used
        </motion.h2>
        <motion.div
          variants={fadeLeft}
          className="w-12 border-2 border-primary dark:border-secondary mb-6"
        />
        <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full text-sm font-heading font-medium bg-primary/8 text-primary dark:bg-secondary/15 dark:text-light-header border border-primary/15 dark:border-secondary/25"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Documents ───────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="mb-14"
      >
        <motion.h2
          variants={fadeLeft}
          className="font-heading text-2xl md:text-3xl font-bold text-dark-text dark:text-[#FAF9E0] mb-2"
        >
          Documents
        </motion.h2>
        <motion.div
          variants={fadeLeft}
          className="w-12 border-2 border-primary dark:border-secondary mb-6"
        />

        <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <motion.a
              key={doc.label}
              variants={fadeUp}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-5 rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 hover:border-primary/40 dark:hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(97,0,139,0.12)] transition-all duration-300"
            >
              <span className="text-2xl">{doc.emoji}</span>
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-dark-header dark:text-[#FAF9E0] mb-1 group-hover:text-primary dark:group-hover:text-light-header transition-colors text-sm">
                  {doc.label}
                </h3>
                <p className="text-xs text-dark-header/60 dark:text-light-header/60 leading-relaxed">
                  {doc.description}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-heading font-semibold text-primary dark:text-secondary mt-auto">
                <Download size={12} />
                Open PDF
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* ── Result callout ──────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeUp}
        className="flex items-center gap-4 rounded-xl border border-primary/20 dark:border-secondary/30 bg-primary/5 dark:bg-secondary/10 p-6"
      >
        <Trophy
          size={28}
          className="text-primary dark:text-light-header flex-shrink-0"
        />
        <div>
          <p className="font-heading font-bold text-primary dark:text-light-header">
            100% of stakeholder requirements met
          </p>
          <p className="text-sm text-dark-header/70 dark:text-light-header/70 mt-0.5">
            Confirmed at the formal acceptance review — Visit Request Portal,
            Soudal NV, May 2026
          </p>
        </div>
      </motion.div>
    </div>
  );
}
