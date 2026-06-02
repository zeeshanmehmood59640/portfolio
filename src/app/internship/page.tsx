import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ChatButton } from "@/components/chatbot/ChatButton";
import { InternshipContent } from "@/components/sections/InternshipContent";

const siteUrl = "https://zeeshanmehmood.be";

export const metadata: Metadata = {
  title: "Internship at Soudal NV — Zeeshan Mehmood | App Developer Intern",
  description:
    "Zeeshan Mehmood's 13-week software internship at Soudal NV (Turnhout, Belgium), 22 Feb – 22 May 2026. Independently developed the Visit Request Portal and R&D Formulation Database using ASP.NET Core 8, Azure DevOps, SignalR, and Microsoft Entra ID. 100% of stakeholder requirements met.",
  keywords: [
    "Zeeshan Mehmood internship",
    "Soudal NV internship 2026",
    "App Developer Intern Belgium",
    "ASP.NET Core internship Turnhout",
    "Azure DevOps internship Belgium",
    "Software internship Thomas More Geel",
    "Visit Request Portal Soudal",
    "R&D Formulation Database",
    "SignalR web application",
    "Microsoft Entra ID authentication",
    "Full-Stack Developer intern Belgium",
  ],
  alternates: {
    canonical: `${siteUrl}/internship`,
  },
  openGraph: {
    title: "Internship at Soudal NV — Zeeshan Mehmood | App Developer Intern",
    description:
      "13-week software internship at Soudal NV (Turnhout) — built the Visit Request Portal and R&D Formulation Database using ASP.NET Core 8, Azure, and SignalR. 100% of stakeholder requirements met.",
    url: `${siteUrl}/internship`,
    siteName: "Zeeshan Mehmood Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Zeeshan Mehmood — Internship at Soudal NV",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Internship at Soudal NV — Zeeshan Mehmood | App Developer Intern",
    description:
      "13-week internship at Soudal NV — Visit Request Portal and R&D Formulation Database using ASP.NET Core 8, Azure, and SignalR.",
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
          name: "Internship",
          item: `${siteUrl}/internship`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/internship`,
      url: `${siteUrl}/internship`,
      name: "Internship at Soudal NV — Zeeshan Mehmood",
      description:
        "Zeeshan Mehmood's 13-week software internship at Soudal NV in Turnhout, Belgium, from 22 February to 22 May 2026.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@type": "EmployeeRole",
      roleName: "App Developer Intern",
      startDate: "2026-02-22",
      endDate: "2026-05-22",
      worker: {
        "@type": "Person",
        name: "Zeeshan Mehmood",
        url: siteUrl,
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
      worksFor: {
        "@type": "Organization",
        name: "Soudal NV",
        url: "https://www.soudal.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Turnhout",
          addressCountry: "BE",
        },
      },
    },
  ],
};

export default function InternshipPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen">
        <InternshipContent />
      </main>
      <Footer />
      <ChatButton />
    </>
  );
}
