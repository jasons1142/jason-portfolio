import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
    <Navbar />

    <main className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 pt-24">

      <div className="flex w-full flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
        <div className="max-w-xl">
          <p className="text-5xl mb-4">Jason Senecharles</p>
          <p className="text-2xl mb-4">Software Engineer</p>
          <p className="text-xl mb-4">
            Building full-stack applications and backend systems using Go,
            TypeScript, React, Next.js, and PostgreSQL.
          </p>
        </div>
        <img src="/IMG_4824.jpg" 
          alt="Picture of Jason Senecharles" 
          className="h-auto w-full max-w-sm object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold text-center">
        Featured Projects
      </h2>

      <section className="w-full py-12">
        <div className="grid gap-8 md:grid-cols-2 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-3xl font-bold text-center">Skills</h2>
        <div className='mb-6'>
          <h3 className="mb-3 text-xl font-bold text-center">Languages</h3>
          <p className="flex items-center justify-center">
            Java Go Python TypeScript
          </p>
        </div>

        <div className='mb-6'>
          <h3 className="mb-3 text-xl font-bold text-center">Front End</h3>
          <p className="flex items-center justify-center">
            React Next.js Tailwind
          </p>
        </div>

        <div className='mb-6'>
          <h3 className="mb-3 text-xl font-bold text-center">Back End</h3>
          <p className="flex items-center justify-center">
            Go Gin Node Prisma
          </p>
        </div>

        <div className='mb-6'>
          <h3 className="mb-3 text-xl font-bold text-center">Databases</h3>
          <p className="flex items-center justify-center">
            PostgreSQL MongoDB Redis
          </p>
        </div>

        <div className='mb-6'>
          <h3 className="mb-3 text-xl font-bold text-center">Dev Tools</h3>
          <p className="flex items-center justify-center">
            Docker Git Vercel
          </p>
        </div>

      </section>

    </main>
    <Footer />
  </div>
  );
}
