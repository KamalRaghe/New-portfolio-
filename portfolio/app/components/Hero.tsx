export default function Hero() {
  return (
    <section
      id="top"
       className="scroll-mt-20 mx-auto max-w-7xl px-6 py-24"
    >
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Frontend Engineer
      </p>

      <h1 className="text-7xl font-bold md:text-9xl">
        Kamal
        <br />
        Raghe
        <span className="text-lime-400">.</span>
      </h1>

      <p className="mt-8 max-w-xl text-lg text-zinc-400">
        Frontend developer building modern web
        applications with React, Next.js and
        TypeScript.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#work"
          className="rounded-full bg-lime-400 px-6 py-3 text-black"
        >
          View Work
        </a>

        <a
          href="#contact"
          className="rounded-full border border-zinc-700 px-6 py-3"
        >
          Contact
        </a>
      </div>
    </section>
  );
}