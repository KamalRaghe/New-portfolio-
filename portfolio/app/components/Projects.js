import { projects } from "../data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="work"
       className="scroll-mt-20 mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-12 text-5xl font-bold">
        Selected Work
      </h2>

      <div className="space-y-6" style={{cursor:"pointer"}}>
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-zinc-800 p-8"
          >
            <p className="text-sm text-zinc-500">
              {project.year}
            </p>

            <div  className="mt-2 text-3xl">
              <div className="flex" style={{gap:"15px"}}>
                <Link style={{color:"#0000EE"}} href={project.link} ><h3>{project.title}</h3></Link>
                <button className="github-btn ">
                  <Link href={project.git} >
                    GitHub
                  </Link>
                </button>
              </div>
            </div>

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