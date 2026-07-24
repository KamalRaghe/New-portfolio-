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

      {/* Contact Information */}
      <div className="mt-10 space-y-3 text-lg">
        <p>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:kamal.raghe33@gmail.com"
            className="text-blue-400 hover:underline"
          >
            kamal.raghe33@gmail.com
          </a>
        </p>

        <p>
          <span className="font-semibold">Phone:</span>{" "}
          <a
            href="tel:+14374881840"
            className="text-blue-400 hover:underline"
          >
            +1 (437) 488-1840
          </a>
        </p>
      </div>
    </section>
  );
}