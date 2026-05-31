import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="work"
       className="scroll-mt-20 mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-12 text-5xl font-bold">
        Selected Work
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-zinc-800 p-8"
          >
            <p className="text-sm text-zinc-500">
              {project.year}
            </p>

            <h3 className="mt-2 text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-700 px-3 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}