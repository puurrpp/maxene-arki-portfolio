import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectDetail from "./project-detail";

export const instant = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
