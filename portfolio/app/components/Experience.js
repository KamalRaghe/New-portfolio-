const experience = [
  {
    year: "2025 - Present",
    company: "Nile Academy",
    role: "Math Olympiad Instructor",
    description:
      "Teaching advanced problem-solving and Olympiad mathematics."
  },
  {
    year: "2026",
    company: "Skinstric",
    role: "Frontend Engineer Intern",
    description:
      "Built and shipped AI-powered image analysis interfaces."
  },
  {
    year: "2024 - Present",
    company: "Math Improve",
    role: "Founder & Frontend Developer",
    description:
      "Built a real-time learning platform using Next.js and Firebase."
  },
  {
    year: "2019 - 2021",
    company: "Kumon",
    role: "Math Tutor",
    description:
      "Tutored students in mathematics through individualized instruction and guided practice."
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
       className="scroll-mt-20 mx-auto max-w-7xl px-6 py-24"
    >
      <h2 className="mb-12 text-5xl font-bold">
        Experience
      </h2>

      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={item.company}
            className="border-b border-zinc-800 pb-8"
          >
            <p className="text-sm text-zinc-500">
              {item.year}
            </p>

            <div className="mt-2 text-2xl font-semibold">
              <h3>{item.company}</h3>
            </div>

            <p className="mt-1 text-lime-400">
              {item.role}
            </p>

            <p className="mt-3 text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}