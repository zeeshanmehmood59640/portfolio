import type { Metadata } from "next";
import { Tilt_Neon, Roboto_Serif, Manufacturing_Consent } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const tiltNeon = Tilt_Neon({
  variable: "--font-tilt-neon",
  subsets: ["latin"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  axes: ["opsz"],
});

const manufacturingConsent = Manufacturing_Consent({
  variable: "--font-manufacturing-consent",
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false,
});

const siteUrl = "https://zeeshanmehmood.be";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zeeshan Mehmood — Full-Stack Developer | .NET & Azure | Belgium",
  description:
    "Junior Full-Stack Developer based in Geel, Belgium. 16 projects across .NET, Azure, React, Angular, Laravel, AI/ML. Thomas More graduate June 2026. Open to junior developer roles in Belgium.",
  keywords: [
    "Zeeshan Mehmood",
    "Full-Stack Developer Belgium",
    "Junior Developer Geel",
    ".NET Developer Belgium",
    "Azure Developer Belgium",
    "React Developer Belgium",
    "ASP.NET Core",
    "C# Developer",
    "Thomas More Geel",
    "Software Engineer Belgium",
  ],
  authors: [{ name: "Zeeshan Mehmood", url: siteUrl }],
  creator: "Zeeshan Mehmood",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Zeeshan Mehmood — Full-Stack Developer | .NET & Azure | Belgium",
    description:
      "Junior Full-Stack Developer based in Geel, Belgium. 16 projects across .NET, Azure, React, Angular, Laravel, AI/ML.",
    url: siteUrl,
    siteName: "Zeeshan Mehmood Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zeeshan Mehmood — Full-Stack Developer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshan Mehmood — Full-Stack Developer | .NET & Azure | Belgium",
    description:
      "Junior Full-Stack Developer based in Geel, Belgium. 16 projects across .NET, Azure, React, Angular, Laravel, AI/ML.",
    images: ["/og-image.png"],
    creator: "@zeeshanmehmood",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${tiltNeon.variable} ${robotoSerif.variable} ${manufacturingConsent.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(t==null&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zeeshan Mehmood",
              url: "https://zeeshanmehmood.be",
              image: "https://zeeshanmehmood.be/assets/shan.jpg",
              sameAs: [
                "https://linkedin.com/in/zeeshanmehmood-08may",
                "https://github.com/zeeshanmehmood59640",
              ],
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Thomas More University of Applied Sciences",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Geel",
                addressCountry: "BE",
              },
              email: "zeeshanmehmood59640@gmail.com",
              knowsAbout: [
                ".NET",
                "ASP.NET Core",
                "C#",
                "Azure",
                "React",
                "Angular",
                "TypeScript",
                "Laravel",
                "NestJS",
                "Python",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Thomas More University of Applied Sciences",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Geel",
                  addressCountry: "BE",
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
