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
  return {
    title: `${project.title} — Zeeshan Mehmood`,
    description: project.description,
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
