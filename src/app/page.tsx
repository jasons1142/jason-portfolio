import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}
