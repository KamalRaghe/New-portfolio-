export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32 text-center"
    >
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Contact
      </p>

      <h2 className="text-5xl font-bold md:text-7xl">
        Let's build
        <br />
        something together.
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400">
        I'm currently open to frontend developer, React, and software engineer
        opportunities, including full-time, contract, and remote roles.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:kamal.raghe33@gmail.com"
          className="rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:bg-lime-300"
          aria-label="Email Kamal"
        >
          Email Me
        </a>

        <a
          href="tel:+14374881840"
          className="rounded-full border border-zinc-700 px-6 py-3 transition hover:border-zinc-500 hover:bg-zinc-900"
          aria-label="Call Kamal"
        >
          Call Me
        </a>
      </div>
    </section>
  );
}