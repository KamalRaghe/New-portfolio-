export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 mx-auto max-w-7xl px-6 py-24"
    >
      <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            About
          </p>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Currently
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>Frontend Intern @ Skinstric</li>
              <li>Founder @ Math Improve</li>
              <li>Math Olympiad Instructor</li>
              <li>Open to opportunities</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-5xl font-bold">
            Frontend engineer with a
            teacher's mindset.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              I build production-ready web
              applications using React,
              Next.js and TypeScript with a
              focus on accessibility,
              performance and user
              experience.
            </p>

            <p>
              Before becoming a developer I
              spent years teaching advanced
              mathematics. Teaching taught me
              how to break down complexity and
              design interfaces that feel
              intuitive.
            </p>

            <p>
              Today I build modern frontend
              experiences while continuing to
              teach and mentor students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}