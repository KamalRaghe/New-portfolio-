export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <p>
          © 2026 Kamal Raghe. All rights
          reserved.
        </p>

        <div className="flex gap-6">
          <a
            style={{color:"blue"}}
            href="https://docs.google.com/document/d/14ueBEUc4GZz7rTcfOFElvfkuB9aJwVXcaNZhu79RPSM/edit?usp=drive_link"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            style={{color:"blue"}}
            href="https://github.com/KamalRaghe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            style={{color:"blue"}}
            href="https://www.linkedin.com/in/kamal-raghe-aa7a922b3"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}