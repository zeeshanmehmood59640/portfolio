import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ChatButton } from "@/components/chatbot/ChatButton";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { projects } from "@/lib/content";
import { projectDetails } from "@/lib/projectDetails";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  if (!project) return {};
  const url = `https://zeeshanmehmood.be/projects/${id}`;
  return {
    title: `${project.title} — Zeeshan Mehmood`,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Zeeshan Mehmood`,
      description: project.description,
      url,
      siteName: "Zeeshan Mehmood Portfolio",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Zeeshan Mehmood`,
      description: project.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));
  const detail = projectDetails[Number(id)];

  if (!project || !detail) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail project={project} detail={detail} />
      </main>
      <Footer />
      <ChatButton />
    </>
  );
}
