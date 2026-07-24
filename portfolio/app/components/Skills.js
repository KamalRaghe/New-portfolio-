const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Firebase",
  "Redux",
  "REST APIs",
  "Axios",
  "Git",
  "GitHub",
  "Vercel",
  "Responsive Design",
  "Accessibility",
  "Performance",
  "UI/UX"
];

export default function Skills() {
  return (
    <section
      id="stack"
       className="scroll-mt-20 mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-12 text-5xl font-bold">
        Tech Stack
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-700 px-4 py-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}