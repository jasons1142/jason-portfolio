type Project = {
    title: string;
    description: string;
    technologies: string[];
  };
  
  export default function ProjectCard({
    project,
  }: {
    project: Project;
  }) {
    return (
      <div className="rounded-xl border p-6 w-100 h-50">
        <h2 className="text-2xl font-bold">
          {project.title}
        </h2>
  
        <p className="mt-2 text-gray-600">
          {project.description}
        </p>
  
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded px-2 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }