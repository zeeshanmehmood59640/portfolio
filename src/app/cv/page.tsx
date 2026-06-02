import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ChatButton } from "@/components/chatbot/ChatButton";

const siteUrl = "https://zeeshanmehmood.be";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Zeeshan Mehmood | Full-Stack Developer Belgium",
  description:
    "Download or view the Curriculum Vitae of Zeeshan Mehmood — a Full-Stack .NET and Azure developer graduating from Thomas More University (Geel) in June 2026. 16 projects, Microsoft AZ-900 certified, open to junior developer roles in Belgium.",
  keywords: [
    "Zeeshan Mehmood CV",
    "Zeeshan Mehmood Resume",
    "Full-Stack Developer CV Belgium",
    ".NET Developer CV Belgium",
    "ASP.NET Core Developer CV",
    "Azure Developer Belgium CV",
    "Junior Developer CV Geel",
    "Thomas More Geel Graduate",
    "Software Engineer CV Belgium",
    "C# Developer CV",
    "React Developer CV",
    "Angular Developer Belgium",
  ],
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
  openGraph: {
    title: "Curriculum Vitae — Zeeshan Mehmood | Full-Stack Developer Belgium",
    description:
      "Download or view the CV of Zeeshan Mehmood — Full-Stack Developer specialising in ASP.NET Core, Azure, React, and Angular. Thomas More University graduate, June 2026.",
    url: `${siteUrl}/cv`,
    siteName: "Zeeshan Mehmood Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Zeeshan Mehmood — Curriculum Vitae",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curriculum Vitae — Zeeshan Mehmood | Full-Stack Developer Belgium",
    description:
      "Download or view the CV of Zeeshan Mehmood — ASP.NET Core, Azure, React, Angular. Thomas More University graduate June 2026.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Curriculum Vitae",
          item: `${siteUrl}/cv`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/cv`,
      url: `${siteUrl}/cv`,
      name: "Curriculum Vitae — Zeeshan Mehmood",
      description:
        "Curriculum Vitae of Zeeshan Mehmood, Full-Stack Developer specialising in ASP.NET Core, Azure, React, and Angular, graduating from Thomas More University in June 2026.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: {
        "@type": "Person",
        name: "Zeeshan Mehmood",
        url: siteUrl,
        jobTitle: "Full-Stack Developer",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Thomas More University of Applied Sciences",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Geel",
            addressCountry: "BE",
          },
        },
      },
    },
  ],
};

export default function CVPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-dark-header/60 dark:text-light-header/60 hover:text-primary dark:hover:text-light-header transition-colors mb-6"
            >
              <ArrowLeft size={15} />
              Back to Portfolio
            </Link>

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark-text dark:text-[#FAF9E0]">
                  Curriculum{" "}
                  <span className="text-primary dark:text-light-header">Vitae</span>
                </h1>
                <div className="mt-3 w-16 border-2 border-primary dark:border-secondary" />
              </div>

              <a
                href="/zeeshan_cv.pdf"
                download
                aria-label="Download Zeeshan Mehmood CV as PDF"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-heading font-semibold text-sm hover:bg-dark-header transition-colors"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>

          {/* PDF viewer */}
          <div className="rounded-xl border border-[#9668C0]/20 dark:border-[#9668C0]/30 overflow-hidden shadow-lg">
            <object
              data="/zeeshan_cv.pdf"
              type="application/pdf"
              className="w-full"
              style={{ height: "85vh" }}
              aria-label="Zeeshan Mehmood Curriculum Vitae PDF"
            >
              {/* Fallback for browsers that cannot render inline PDFs */}
              <div className="flex flex-col items-center justify-center gap-6 p-16 text-center bg-white dark:bg-[#0e0315]">
                <p className="text-dark-header/70 dark:text-light-header/70">
                  Your browser cannot display the PDF inline. Please download it
                  to view.
                </p>
                <a
                  href="/zeeshan_cv.pdf"
                  download
                  aria-label="Download Zeeshan Mehmood CV as PDF"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-heading font-semibold text-sm hover:bg-dark-header transition-colors"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </object>
          </div>
        </div>
      </main>
      <Footer />
      <ChatButton />
    </>
  );
}
